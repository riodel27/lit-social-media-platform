import React from 'react';
import { FireIcon } from '@heroicons/react/outline';
import { LockClosedIcon } from '@heroicons/react/solid';

export const SignIn: React.FC = () => {
   return (
      <>
         <div className="font-mono p-10">
            <div>
               <div className="flex justify-center">
                  <FireIcon className="h-20 w-20 text-yellow-500" />
               </div>

               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">Lit</h2>
            </div>

            <div className="mt-10 mb-10">
               <input
                  className="w-full pt-1 pb-1 pl-4 mt-5 mb-5 text-sm font-medium border border-gray-400 rounded-md bg-gray-50"
                  type="text"
                  placeholder="Username"
               />

               <input
                  className="w-full pt-1 pb-1 pl-4 mt-5 mb-5 text-sm font-medium border border-gray-400 rounded-md bg-gray-50"
                  type="password"
                  placeholder="Password"
               />
            </div>

            <div className="mt-8">
               <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                     <LockClosedIcon className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" />
                  </span>
                  Sign in
               </button>
            </div>

            <div className="text-sm mt-2">
               <a
                  href="http://www.w3.org"
                  className="font-medium text-gray-600 hover:text-gray-500">
                  Forgot your password?
               </a>
            </div>
         </div>
      </>
   );
};
