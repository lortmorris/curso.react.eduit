class Store {
    constructor(reducer) {
      this.reducer = reducer;
      this.state = this.reducer(undefined, { action: '@INIT' });
    }

    dispatch(action = {}) {
      this.state = this.reducer(this.state, action);
      if (this.cb) this.cb();
    }

    subscribe(cb = () => {}) {
      this.cb = cb;
    }

    getState() {
      return this.state;
    }
} // end class Store

const initialState = {
  friends: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends,
              {
                fname: action.fname
                , connected: action.connected
                , mayor: action.mayor
              }
              ]};
    break;

    default:
      return state;
  }
};

const store = new Store(reducer);
store.subscribe( ()=> {
  const friends = store.getState().friends;
  const friendlist = friends.map(f => `<li style="color: ${ f.connected ? 'green' : 'gray'}">${f.mayor ? '*' : ''} ${f.fname}</li>`);

  console.info('>>> ', friendlist);
});

const actionAddFriends = (connected = false, fname = '', mayor = 0) => ({
  type: 'ADD_FRIEND',
  connected,
  fname,
  mayor,
});

store.dispatch(actionAddFriends(false, 'carlos', 1));
store.dispatch(actionAddFriends(true, 'Tito', 0));
store.dispatch(actionAddFriends(false, 'Juan', 1));
