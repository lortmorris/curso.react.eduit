import React from 'react';

const AddForm = ({ title }) => (
  <div className={'form-group'}>
    <form>
      <label htmlFor={'example-text-input'} className={'col-2 col-form-label'}>{title}</label>
        <div className={'col-10'}>
          <input className={'form-control'} type={'text'} value={''} id={'example-text-input'} />
        </div>
      <input type={'submit'} value={'Add+ '} className={'btn btn-primary'} />
    </form>
  </div>
);

export default AddForm;
