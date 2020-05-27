import React, {useEffect} from 'react';
import { fetchData } from './actions/actionCreators';
import { connect } from 'react-redux';
import Post from './components/Post';
import './App.css';

const App = ({dispatch, posts}) => {
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App">
      <ul>
        {posts.map(post => 
          <Post
            key={post.id}
            post={post}
          />
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  posts: state.posts.posts
})

export default connect(mapStateToProps)(App);
