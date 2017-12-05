import React from 'react';

const AddForm = ({ title }) => (
  <div>
    <h2>{title}</h2>
    <form>
      <input type="text" value={''} />
      <input type="submit" value={'Add+ '} />
    </form>
  </div>
);

export default AddForm;
