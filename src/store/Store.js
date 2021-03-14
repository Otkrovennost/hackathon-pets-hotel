import React from "react";
import globalHook from "use-global-hook";

import {dataPets, dataSiters} from '../data'

let initialState = {
  Pets: {
    list: dataPets
  },
  Sitters: {
    list: dataSiters
  }
};

export const cleanupPersistedStore = () => {
  localStorage.removeItem('pets_store')
}

const actions = Object.keys(initialState).reduce((acc, key)=>{
    acc['update'+key] = (store, data) => {
        if (!data)
          throw new Error('Setting store section to falsy value');
        if (data._cleanup) {
          console.log('CLEANUP?', data)
          store.setState({[key]: {...initialState[key]}}, ()=>{
            cleanupPersistedStore()
          });
          return;
        }
        store.setState({[key]: {...store.state[key], ...data}}, ()=>{
          localStorage.setItem('pets_store', JSON.stringify(store))
        });
    }

    acc['get' + key] = (store, data) => {
      const dataFromLocal = JSON.parse(localStorage.getItem('pets_store'));
      if(dataFromLocal) {
        store.setState({...dataFromLocal.state})
      }
    }
    return acc
}, {});

const useGlobal = globalHook(React, initialState, actions);
const useGlobalState = () => {
    let [state, actions] = useGlobal()
    return { ...state, ...actions };
}

export default useGlobalState;
