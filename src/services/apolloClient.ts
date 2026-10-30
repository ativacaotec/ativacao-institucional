import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cll2kvm390rtr01unfs4eb9rw/master",
    cache: new InMemoryCache()
})