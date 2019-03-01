import React from 'react';
import Enzyme, {shallow} from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'; 
import {shallowToJson} from 'enzyme-to-json'; 

import asyncFetch from './async-fetch.js'; 
import App from '../src/components/App';
import Users from '../src/components/Users'; 
import User from '../src/components/User'; 

const fetchMock = require('fetch-mock'); 
Enzyme.configure({ adapter: new Adapter() })


//catch unhandled promise rejections
if (!process.env.LISTENING_TO_UNHANDLED_REJECTION) {
  process.on('unhandledRejection', reason => {
    throw reason
  })
  // Avoid memory leak by adding too many listeners
  process.env.LISTENING_TO_UNHANDLED_REJECTION = true
}


test('should render URL correctly', () => {
  const output = shallow(
    <App url="/"/> 
  );
  expect(shallowToJson(output)).toMatchSnapshot(); 
});


test('should render Users component', () => {
  const output = shallow(
    <Users url="/" />
  );
  expect(shallowToJson(output)).toMatchSnapshot(); 
});

test('should render User component', () => {
  const output = shallow(
    <User url="/users/:userId"/>
  );
  expect(shallowToJson(output)).toMatchSnapshot(); 
});


//Testing data source
test('can fetch user data', async () => {
  fetchMock.get('http://jsonplaceholder.typicode.com/users', {name: "Leanne Graham"});

  const response = await asyncFetch('http://jsonplaceholder.typicode.com/users');
  const result = await response.json();

  expect(result.name).toEqual("Leanne Graham");
});