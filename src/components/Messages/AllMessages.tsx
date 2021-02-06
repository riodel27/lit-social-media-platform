import React, { useState, useEffect, useContext } from 'react';
import { List, Avatar } from 'antd';
import _ from 'lodash';

import useUserMessages from 'hooks/messages/query/useUserMessages';
import DefaultAvatar from 'assets/images/generic-user-avatar.png';
import { SocketContext } from 'context/socket';

const { REACT_APP_API_DEFAULT_USER } = process.env;

const AllMessages: React.FC = () => {
   //Queries
   const { data: remoteMessages } = useUserMessages();
   const [messages, setMessages] = useState([]);
   const socket = useContext(SocketContext);

   useEffect(() => {
      setMessages(remoteMessages);

      socket.init();
      socket.connect(REACT_APP_API_DEFAULT_USER!);

      const observable = socket.onMessage();

      observable.subscribe((newMessage: any) => {
         const currentMessages = messages || remoteMessages;

         if (currentMessages && currentMessages.length) {
            const merged = _.merge(
               _.keyBy(JSON.parse(JSON.stringify(currentMessages)), '_id'),
               _.keyBy([newMessage], '_id')
            );

            const values = _.values(merged);

            const latestValues: any = values.sort(
               (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );

            setMessages(latestValues);
         }
      });

      return () => socket.disconnect();
   }, [remoteMessages]);

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
