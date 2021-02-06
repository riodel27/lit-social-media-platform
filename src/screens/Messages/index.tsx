import React from 'react';
import { Tabs } from 'antd';
import { Link as RouterLink } from 'react-router-dom';

import AllMessages from 'components/Messages/AllMessages';
import FavMessages from 'components/Messages/FavMesseges';

const { TabPane } = Tabs;

export const Messages: React.FC = () => {
   function callback(key: string) {
      console.log(key);
   }

   return (
      <>
         <h1>Messages</h1>
         <RouterLink to="/">home</RouterLink>
         <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="All Messages" key="1">
               <AllMessages />
            </TabPane>
            <TabPane tab="Fav messages" key="2">
               <FavMessages />
            </TabPane>
         </Tabs>
      </>
   );
};
