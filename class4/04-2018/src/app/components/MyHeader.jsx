import React from 'react';
import Title from './Title.jsx';
import AddNewList from './AddNewList.jsx';
const MyHeader = ({ dispatch }) => (
  <div>
    <Title title="TodosApp v1.0" color="#ff22aa" />
    <AddNewList dispatch={dispatch} />
  </div>
);

export default MyHeader;
