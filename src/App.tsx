// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import { Messages } from 'screens/Messages';

// Create a client
const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <Router>
               <Switch>
                  <Route
                     exact
                     path="/"
                     component={() => (
                        <div>
                           <h1>Home</h1>
                           <RouterLink to="/messages">messages</RouterLink>
                        </div>
                     )}
                  />
                  <Route exact path="/sign-in" component={() => <div>SignIn</div>} is_private />
                  <Route exact path="/messages" component={Messages} />
               </Switch>
            </Router>
            <ReactQueryDevtools initialIsOpen={false} />
         </QueryClientProvider>
      </>
   );
}

export default App;
