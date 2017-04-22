import React, { PropTypes } from 'react';


const Title = ({value}) =>(
  <h1>{value}</h1>
);

Title.propTypes = {
  value: PropTypes.string.isRequired,
}
export default Title;
