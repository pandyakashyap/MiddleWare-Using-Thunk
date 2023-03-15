import './App.css';
import React from "react";
import {useSelector , useDispatch} from "react-redux";
import {fetchpost} from './redux/action'


function App() {

  const {posts , loading} = useSelector((state) => ({...state.data}));
  const dispatch = useDispatch();

  return (
    <div>
            <h1>Middle-Ware Demo</h1>
            <button onClick={ () => dispatch(fetchpost())}>Fetch Post</button>

            {!loading ?(
              posts.map((post) => <h3 key={post.id}>{post.body}</h3>)
            ) : (
                <h2>Loading.....</h2>
            )}
    </div>
  )
}

export default App;
