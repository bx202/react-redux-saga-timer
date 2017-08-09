import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { timerController } from '../Actions/timerActions';
import axios from 'axios';

//our worker saga - going to do all the work of calling the api and the asyncrhonous stuff
export function * logTimeAsync(action){	
	try{
		if(!action.payload.timer){
			//try to call our api
			console.log('Attempting to log time via the api');
			const response = yield call(axios.post, 
			'https://jsonplaceholder.typicode.com/posts',
			{time_logged: action.payload});
			console.log(response);
			yield put({type: 'TIME WAS LOGGED', response: response.data});
		}
			
	}catch(e){
		//act on the error
		console.log('Request failed');
	}
}

// our watcher saga - listening for the actions to be dispatched or hears about actions that are occuring, it will call the worker to work
export function * watchTimer(){
	yield takeEvery(timerController, logTimeAsync);
}

//The root saga is a single entry point to start all the root sagas at once 
export default function * rootSaga(){
	yield[
		watchTimer(),
	]
}


