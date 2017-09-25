function Store(reducer){
  let state = undefined;
  let localCB = ()=>{};
  return new class {
    constructor(){
      state = this.dispatch({});
    }
    dispatch(action){
      state = reducer(state, action);
      localCB();
    }
    observe(cb){
      localCB = cb;
    }
    getState(){
      return state;
    }
  }
}

module.exports = Store;
