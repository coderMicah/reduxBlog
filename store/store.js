import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../Features/posts/postsSlice'
import usersReducer from '../Features/users/usersSlice'

const store = configureStore({
    reducer:{
        posts:postsReducer,
        users:usersReducer
    }
})

export default store;