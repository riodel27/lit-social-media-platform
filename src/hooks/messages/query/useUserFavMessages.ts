import { useQuery } from 'react-query';

import MessageService from '_services/messages.service';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useUserFavMessages() {
   return useQuery('favorite-messages', async () => {
      const response = await MessageService.getUserFavoriteMessages();

      return response.data.messages;
   });
}
