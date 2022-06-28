import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from "@apollo/client"
import { client } from "./libraries/apollo"
import { Router } from "./Router"

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}