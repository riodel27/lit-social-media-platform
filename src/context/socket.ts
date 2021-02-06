import React, { createContext, useContext } from 'react';

import { SocketService } from '_services/socket.service';

export const SocketContext: React.Context<SocketService> = createContext(new SocketService());

// functional component context hook
export const useChat = () => useContext(SocketContext);
