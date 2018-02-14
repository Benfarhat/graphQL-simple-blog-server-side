import {
    GraphQLObjectType,
    GraphQLSchema
}from 'graphql/type'

import mutations from './mutations'
import queries from './queries'

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})
