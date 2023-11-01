import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Comment from './Comment';
import Post from '../Post/Post';

import { getComments, getPostById } from '../../JS/actions/actions';
const Comments = ({ match, history }) => {
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const post = useSelector((state) => state.userReducer.post);
  const comments = useSelector((state) => state.userReducer.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComments(match.params.id));
    dispatch(getPostById(match.params.id));
    return () => {};
  }, [dispatch, match]);

  const clickHandler = () => history.goBack();

  return (
    <div className='container '>
      <div className='row'>
        <img
          className='back-link'
          src={require('../../assets/img/back.png')}
          alt='arrow back'
          onClick={clickHandler}
        />
      </div>
      <div className='row'>
        <Post post={post} />
      </div>
      <div className='container post-container'>
        {isLoading ? (
          <div className='row justify-content-md-center'>
            <div className='spinner-border' role='status'>
              <span className='sr-only'>Loading...</span>
            </div>
          </div>
        ) : (
          comments.map((com, key) => <Comment comment={com} key={key} />)
        )}
      </div>
    </div>
  );
};

export default Comments;
