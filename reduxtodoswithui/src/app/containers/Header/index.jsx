import React from 'react';
import FormAddNewEntity from '../../components/FormAddNewEntity/index.jsx';
import UserProfileIcon from '../../components/UserProfileIcon/index.jsx';

const Header = ({ dispatch }) => (
  <div className={'main-header'}>
    <h1>{'ToDos App V1.0'}</h1>
    <FormAddNewEntity dispatch={dispatch} listId={-1}  />
    <UserProfileIcon />
  </div>
);

export default Header;
