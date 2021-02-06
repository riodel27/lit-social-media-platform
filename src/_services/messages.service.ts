import { axiosInstance } from './base';

const { REACT_APP_API_DEFAULT_USER, REACT_APP_API_DEFAULT_TOKEN } = process.env;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getUserMessages = () => {
   const headers = {
      Authorization: `Bearer ${REACT_APP_API_DEFAULT_TOKEN}`
   };

   return axiosInstance.get(`/v1/users/${REACT_APP_API_DEFAULT_USER}/messages`, { headers });
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getUserFavoriteMessages = () => {
   const headers = {
      Authorization: `Bearer ${REACT_APP_API_DEFAULT_TOKEN}`
   };

   return axiosInstance.get(`/v1/users/${REACT_APP_API_DEFAULT_USER}/messages/favorites`, {
      headers
   });
};

export default { getUserMessages, getUserFavoriteMessages };
