import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { LanguageProvider } from './contexts/LanguageContext.tsx'
import { HashRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import  createUploadLink from "apollo-upload-client/createUploadLink.mjs";



const httpLink = createUploadLink({
  uri: `${import.meta.env.VITE_API_URL}/graphql`,
});



const authLink = setContext((_, { headers }) => {
  const cookie = document.cookie.split(';').find((cookie) => cookie.startsWith('Authorization'));
  const token = cookie?.split('=')[1];
  return {
      headers: {
          ...headers,
          authorization: token ? `${token}` : '',
      },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  
      <HashRouter>
        <NextUIProvider>
              <ApolloProvider client={client}>
                <App />
              </ApolloProvider>
        </NextUIProvider>
      </HashRouter>
 ,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
