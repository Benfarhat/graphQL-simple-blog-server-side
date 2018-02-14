import {
    GraphQLID,
    GraphQLNonNull
} from 'graphql/type'
import { userType } from './../../types/user'
import UserModel from './../../../models/user'

export default {
    type: userType,
    args: {
        id: {
            name: 'ID',
            description: 'ID de l\'user',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params){
        return UserModel.findById(params.id).exec();
    }
}