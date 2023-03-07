import React, { createContext, useReducer } from 'react';
import axios from 'axios';
export const DataContext = createContext();

const initialState = {
  data: [],
  filteredData: [],
  filter1: '',
  filter2: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_FILTERED_DATA':
      return { ...state, filteredData: action.payload };
    case 'SET_FILTER1':
      return { ...state, filter1: action.payload };
    case 'SET_FILTER2':
      return { ...state, filter2: action.payload };
    case 'GET_ITEM_BY_ID':
      return { ...state, selectedItem: state.data.find(item => item.id === action.payload) };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
      dispatch({ type: 'SET_DATA', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const filterByFilter1 = value => {
    dispatch({ type: 'SET_FILTER1', payload: value });
    dispatch({
      type: 'SET_FILTERED_DATA',
      payload: state.data.filter(item => item.filter1 === value)
    });
  };

  const filterByFilter2 = value => {
    dispatch({ type: 'SET_FILTER2', payload: value });
    dispatch({
      type: 'SET_FILTERED_DATA',
      payload: state.data.filter(item => item.filter2 === value)
    });
  };

  return (
    <DataContext.Provider
      value={{
        data: state.data,
        filteredData: state.filteredData,
        filter1: state.filter1,
        filter2: state.filter2,
        fetchData,
        filterByFilter1,
        filterByFilter2
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
