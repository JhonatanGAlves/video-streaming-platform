import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vfksih1hgt01uoe7gt6lvf/master',
  cache: new InMemoryCache()
})