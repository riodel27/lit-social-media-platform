import React from 'react';
import { List, Avatar } from 'antd';

import useUserFavMessages from 'hooks/messages/query/useUserFavMessages';
import DefaultAvatar from 'assets/images/generic-user-avatar.png';

const { REACT_APP_API_DEFAULT_USER } = process.env;

const AllMessages: React.FC = () => {
   //Queries
   const { data: messages } = useUserFavMessages();

   return (
      <>
         <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(message: any) => (
               <List.Item>
                  <List.Item.Meta
                     avatar={
                        <Avatar
                           src={
                              message.from._id === REACT_APP_API_DEFAULT_USER
                                 ? message.to.image
                                    ? message.to.image.url
                                    : DefaultAvatar
                                 : message.from.image
                                 ? message.from.image.url
                                 : DefaultAvatar
                           }
                        />
                     }
                     title={
                        <a href="https://ant.design">
                           {message.from._id === REACT_APP_API_DEFAULT_USER
                              ? message.to.name
                              : message.from.name}
                        </a>
                     }
                     description={`${
                        message.from._id === REACT_APP_API_DEFAULT_USER
                           ? 'You'
                           : message.from.username
                     }: ${message.content}`}
                  />
               </List.Item>
            )}
         />
         ,
      </>
   );
};

export default AllMessages;
