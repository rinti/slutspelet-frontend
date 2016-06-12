const defaultState = {
  appartment: undefined
}

export default function appartment(state = defaultState, action) {
  switch(action.type) {
    case 'APPARTMENT_LOADED':
      return {appartment: action.appartment};
    default:
      return state;
  }
}
