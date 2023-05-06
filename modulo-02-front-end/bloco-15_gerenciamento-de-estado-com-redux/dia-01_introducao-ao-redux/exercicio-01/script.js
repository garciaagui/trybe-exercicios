// const Redux = require('redux');

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
const randomBtn = document.getElementById('random');
const currValue = document.getElementById('value');
const container = document.getElementById('container');

// Actions Types
const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  const { colors, index } = state;

  switch(action.type) {

    case NEXT_COLOR:
      return {
        ...state,
        index: index < (colors.length - 1) ? index + 1 : index
      }

    case PREVIOUS_COLOR:
      return {
        ...state,
        index: index > 0 ? index - 1 : index
      }

    case RANDOM_COLOR:
      return {
        colors: [...colors, criarCor()],
        index: (colors.length),
      }

    default:
      return state;

  }
}

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const state = store.getState()
  const { colors, index } = state;
  const style = container.style;

  console.log(state);

  currValue.innerHTML = colors[index];
  style.background = colors[index];
  style.background === 'black' ? style.color = 'white' : style.color = 'black';
});

const actionChangeNextColor = () => {
  return {
    type: NEXT_COLOR,
  }
}

const actionChangePrevColor = () => {
  return {
    type: PREVIOUS_COLOR,
  }
}

const actionChangeRandomColor = () => {
  return {
    type: RANDOM_COLOR,
  }
}

nextBtn.addEventListener('click', () => {
  store.dispatch(actionChangeNextColor());
});

prevBtn.addEventListener('click', () => {
  store.dispatch(actionChangePrevColor());
});

randomBtn.addEventListener('click', () => {
  store.dispatch(actionChangeRandomColor());
});
