import { useQuery } from 'react-query';

import MessageService from '_services/messages.service';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useMessageConversations(from: string) {
   return useQuery(
      `conversations-from-${from}`,
      async () => {
         const response = await MessageService.getMessageConversations({
            from: from
         });

         return response.data.conversation;
      },
      { refetchOnWindowFocus: false }
   );
}
