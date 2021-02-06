import { useQuery } from 'react-query';

import MessageService from '_services/messages.service';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useUserMessages() {
   return useQuery('user-messages', async () => {
      const response = await MessageService.getUserMessages();

      return response.data.messages;
   });
}
