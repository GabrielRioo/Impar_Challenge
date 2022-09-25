import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://localhost:54521/graphql',
    cache: new InMemoryCache(),
})