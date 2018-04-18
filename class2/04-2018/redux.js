const Redux = (reducer) => {

  let state = {};
  class Store {
    constructor() {
      state = reducer(undefined, { type: 'INITIAL_STATE' });
      this.cb = () => {};
    }

    dispatch(action) {
      state = reducer(state, action);
      this.cb();
    }

    observe(cb = () => {}) {
      this.cb = cb;
    }

    getState() {
      return state;
    }
  }
  return new Store();
};

module.exports = Redux;
