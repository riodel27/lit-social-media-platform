import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { List } from 'antd';

import useMessageConversations from 'hooks/messages/query/useMessageConversations';
import { SocketContext } from 'context/socket';

const { REACT_APP_API_DEFAULT_USER } = process.env;

export const Chat: React.FC = () => {
   const location: any = useLocation();

   const recipient = location.state?.recipient;

   //TODO: populate from and to users from the API
   //TODO: return latest first and then reverse the first 10 for display
   const { data } = useMessageConversations(recipient._id);
   const [conversations, setConversations] = useState([]);
   const socket = useContext(SocketContext);

   useEffect(() => {
      if (data && data.length) setConversations(data.reverse());

      return () => setConversations([]);
   }, [data]);

   useEffect(() => {
      socket.init();
      socket.connect(REACT_APP_API_DEFAULT_USER!);

      const observable = socket.onMessage();

      observable.subscribe((newMessage: any) => {
         if (conversations && conversations.length) {
            const newConversations: any = [...conversations, newMessage];

            setConversations(newConversations);
         }
      });

      return () => {
         socket.disconnect();
      };
   }, [conversations]);

   // TODO: socket emit send message

   return (
      <>
         <h1>Chat with: {recipient.name} </h1>
         <List
            itemLayout="horizontal"
            dataSource={conversations}
            renderItem={(conversation: any) => (
               <List.Item>
                  <List.Item.Meta
                     title={
                        <a href="https://ant.design">
                           {/* {conversation.from instanceof String
                              ? conversation.from === REACT_APP_API_DEFAULT_USER
                                 ? conversation.to
                                 : conversation.to instanceof String
                                 ? conversation.to
                                 : conversation.to.name
                              : conversation.from._id === REACT_APP_API_DEFAULT_USER
                              ? conversation.from
                              : conversation.from.name} */}
                           User Name
                        </a>
                     }
                     description={`Content: ${conversation.content}`}
                  />
               </List.Item>
            )}
         />
      </>
   );
};
