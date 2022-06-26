import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ApolloProvider } from '@apollo/client'
import { client } from './libraries/apollo'
import './styles/global.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
