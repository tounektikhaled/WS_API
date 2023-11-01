import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Profile.css';
import Post from '../Post/Post';
import { getUserById, getPosts } from '../../JS/actions/actions';
import { Link } from 'react-router-dom';
const Profile = ({ match }) => {
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const user = useSelector((state) => state.userReducer.user);
  const posts = useSelector((state) => state.userReducer.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(match.params.id));
    dispatch(getPosts(match.params.id));
    return () => {};
  }, [dispatch, match]);
  const { name, email, phone } = user;
  return (
    <div className='container-fluid'>
      <div className='row header'>
        <div className='col-md-3 my-auto'>
          <Link to='/'>
            <img src={require('../../assets/img/back.png')} alt='arrow back' />
          </Link>
        </div>
      </div>
      <div className='row '>
        <div className='col-md-4 offset-md-4 row-img-profile  '>
          <img
            src={require('../../assets/img/img-user.png')}
            alt='user '
            className='img-profile'
          />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4 offset-md-4 '>
          <h3 className='name-label'>{name}</h3>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4 offset-md-4 name-label'>
          <h3 className='email-label'>{email}</h3>
        </div>
      </div>
      <div className='row my-3'>
        <div className='col-md-4 offset-md-4 name-label'>
          <span className='adress-label'>{phone}</span>
        </div>
      </div>
      <div className='row post-container justify-content-around'>
        {isLoading ? (
          // <div className='row justify-content-center'>
          <div className='spinner-border' role='status'>
            <span className='sr-only'>Loading...</span>
            {/* </div> */}
          </div>
        ) : (
          posts.map((post, key) => <Post post={post} key={key} />)
        )}
      </div>
    </div>
  );
};

export default Profile;
