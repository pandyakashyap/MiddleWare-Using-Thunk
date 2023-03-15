import * as types from './actionType';
import axios from 'axios';

const fetchpoststart = () => ({
    type : types.Fetch_Post_Start,
})

const fetchpostsuccess = (posts) => ({
    type :types.Fetch_Post_Success,
    payload:posts,

})

const fetchpostfail = (error) => ({
    type: types.Fetch_Post_Fail,
    payload:error,
})


export function fetchpost()
{
    return function(dispatch)
    {
        dispatch(fetchpoststart());
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            const posts = response.data;
            dispatch(fetchpostsuccess(posts));
        })

        .catch((error) => {
            dispatch(fetchpostfail(error.message));
        })
    }
}