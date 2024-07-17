import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
        id: 1,
        name: 'Фармер',
        img: './img/task1.png',
        price: '1 000'
    },
    {
        id: 2,
        name: 'Фармер',
        img: './img/task2.png',
        price: '1 000'
    },
    {
        id: 3,
        name: 'Фармер',
        img: './img/task3.png',
        price: '1 000'
    },
    {
        id: 4,
        name: 'Фармер',
        img: './img/task4.png',
        price: '1 000'
    }
  ]
}

export const coinSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
  },
})

export const {  } = coinSlice.actions

export default coinSlice.reducer