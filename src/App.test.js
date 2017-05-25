import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'fetch-mock';

let myMock;
let fetchMock;

beforeEach(function(){
    fetchMock = require('fetch-mock');
    myMock = fetchMock.sandbox().mock('http://fe-test.preventure.com/api/v1/gyms', 200);
});


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

