// DOM Elements
const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');
const body = document.getElementsByTagName('body')[0];
const themeBtn = document.getElementById('toggle-theme');
const statusMsg = document.getElementById('status');
const statusBtn = document.getElementById('toggle-status');


// Actions Types
const CHANGE_THEME = 'CHANGE_THEME';
const CHANGE_STATUS = 'CHANGE_STATUS';


// Initials States
const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};


// Actions
const actionChangeTheme = () => {
  return {
    type: CHANGE_THEME,
  }
};

const actionChangeStatus = () => {
  return {
    type: CHANGE_STATUS,
  }
};


// Reducers
const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }

    default:
      return state;
  }
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {

    case CHANGE_STATUS:
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline'
      }

    default:
      return state;
  }
};

const combinedReducers = Redux.combineReducers({
  themeReducer,
  statusReducer,
});


// Store
const store = Redux.createStore(combinedReducers);

store.subscribe(() => {
  const state = store.getState();
  const { themeReducer:{ theme } , statusReducer:{ status } } = state;

  console.log(state);

  body.className = theme === 'dark' ? 'dark' : 'light';
  themeBtn.innerHTML = theme === 'dark' ? 'Light Mode' : 'Dark Mode';

  statusMsg.innerHTML = status === 'offline' ? 'Offline' : 'Online';
  statusMsg.className = status === 'offline' ? 'offline' : 'online';
  statusBtn.innerHTML = status === 'offline' ? 'Ficar Online' : 'Ficar Offline';
})


// Dispatches
themeButton.addEventListener('click', () => {
  store.dispatch(actionChangeTheme());
});

statusButton.addEventListener('click', () => {
  store.dispatch(actionChangeStatus());
});