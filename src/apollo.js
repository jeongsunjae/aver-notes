import {ApolloClient} from "apollo-client"
import {InMemoryCache} from "apollo-cache-inmemory"
import {withClientState} from "apollo-link-state"
import { ApolloLink } from "apollo-link"
import { resolvers,defaults, typeDefs } from "./clientState"



//Apollo 설정
const cache = new InMemoryCache();

const stateLink = new withClientState({
    cache,
    typeDefs,
    defaults,
    resolvers

});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([stateLink])
});

export default client;