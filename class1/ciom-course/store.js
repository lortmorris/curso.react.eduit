function Store(reducer) {
  let state = undefined;
  let cb = () => {};
  let localReducer = reducer;
  return new class {

    dispatch(action = {}){
      state = localReducer(state, action);
      cb();
    }

    getState(){
      return state;
    }

    subscribe(callback){
      cb = callback;
    }
  }
}

module.exports = Store;
