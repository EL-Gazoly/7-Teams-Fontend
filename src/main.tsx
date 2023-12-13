import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {NextUIProvider} from '@nextui-org/react'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { LanguageProvider } from './contexts/LanguageContext.tsx'
import { HashRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/',
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
          <LanguageProvider>
            <AuthProvider>
              <ApolloProvider client={client}>
                <App />
              </ApolloProvider>
            </AuthProvider>
          </LanguageProvider>
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
