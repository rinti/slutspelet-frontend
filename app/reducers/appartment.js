const defaultState = {
  appartment: undefined,
  score: 0
}

export default function appartment(state = defaultState, action) {
  switch(action.type) {
    case 'APPARTMENT_LOADED':
      return {score: state.score, appartment: action.appartment};
    case 'SET_SCORE':
      return {score: action.score, appartment: state.appartment};
    default:
      return state;
  }
}
