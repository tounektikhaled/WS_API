import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import User from '../User/User';

import { getUsers } from '../../JS/actions/actions';
const Users = () => {
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const users = useSelector((state) => state.userReducer.userList);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetchData=()=>)
  //   return fetchData);
  // }, []);
  useEffect(() => {
    dispatch(getUsers());
    return () => {};
  }, [dispatch]);

  return isLoading ? (
    <div className='row justify-content-md-center'>
      <div className='spinner-border' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  ) : (
    <div className='row'>
      {users.map((user, key) => (
        <User user={user} key={key} />
      ))}
    </div>
  );
};

export default Users;
