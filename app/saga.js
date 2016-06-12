import { put, take } from 'redux-saga/effects';

const fetchAppartment = () => {
  return fetch('http://localhost:5000/').then((response) => {
    return response.json().then((json) => {
      return json;
    })
  })
}

export function * loadAppartment() {
  const appartment = yield fetchAppartment();
  yield put({type: 'APPARTMENT_LOADED', appartment});
}

export function* watchForLoadAppartment() {
  for(;;) {
    yield take('LOAD_APPARTMENT');
    yield loadAppartment();
  }
}
