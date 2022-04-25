/**
    Tests to check if the dislikes screen gets rendered properly. 
*/

import {act, create} from "react-test-renderer";
import MyDislikes from "../components/profile/my-dislikes";
import {HashRouter} from "react-router-dom";
import * as React from 'react';

const TUITS_MOCK = [
  {_id:101, tuit:"Hello World!", postedBy : {userName:"Tejas", password:"ts123", email: "tejas@gmail.com"},stats:{replies:0,retuits:0,likes:0,dislikes:0}, youtube:'', image:''},
  {_id:102, tuit:"Spring is here!", postedBy : {userName:"Mike", password:"mike123", email: "mike@gmail.com"},stats:{replies:0,retuits:0,likes:0,dislikes:0}, youtube:'', image:''},
   {_id:103, tuit:"I am excited for Summer", postedBy : {userName:"Sam", password:"sam123", email: "sam@gmail.com"},stats:{replies:0,retuits:0,likes:0,dislikes:0},youtube:'', image:''}
  ]

test('test to check whether dislikes screen is rendered properly with tuits', () => {

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    useStateSpy.mockImplementation((TUITS_MOCK) => [TUITS_MOCK, setState]);

    let tuits
    act(() => {
        tuits = create(
            <HashRouter>
                <MyDislikes/>
            </HashRouter>
        )
    })
    const root = tuits.root;
    const tuitItems = root.findAllByProps({className: 'pe-2'})
    expect(tuitItems.length).toBe(TUIT_MOCKS.length)
