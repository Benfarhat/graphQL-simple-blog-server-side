import UserMutation from './user'
import PostMutation from './post'

export default {
    ...UserMutation,
    ...PostMutation
}