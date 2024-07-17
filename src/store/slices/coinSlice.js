import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 100000,
  maximum: 6500,
  able: 6500,
  oneTap: 10,
  multitapPrice: 1000,
  energyPrice: 2100,
  skin: './img/coin-btn.png',
  skinPrice: 1000000,
  isChanged: false,
  isBuy: false,
  currentActive: 'secondSkin',
  localId: 'secondSkin'
}

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    increment: (state) => {
        if (state.able > state.oneTap) {
            state.count += state.oneTap
        }
    },
    increase: (state) => {
        if (state.able > state.oneTap) {
            state.able -= state.oneTap
        }
    },
    nextTap: (state) => {
        if (state.count > state.multitapPrice) {
            state.count -= state.multitapPrice
            state.oneTap += 1
        }
    },
    upEnergy: (state) => {
        if (state.count > state.energyPrice) {
            state.count -= state.energyPrice
            state.maximum += 500
            state.able += 500
        }
    },
    raiseEnergy: (state) => {
        state.able += 10
    },
    editSkin: (state, action) => {
        state.skin = action.payload
    },
    buySkinSl: (state) => {
        state.isBuy = true
    },
    setMaximum: (state) => {
        state.able = state.maximum
    },
    editActive: (state, action) => {
        state.currentActive = action.payload
    },
    editLocal: (state, action) => {
        state.localId = action.payload
    }

  },
})

export const { increment, increase, nextTap, upEnergy, editSkin, buySkinSl, editActive, editLocal, raiseEnergy, setMaximum } = coinSlice.actions

export default coinSlice.reducer