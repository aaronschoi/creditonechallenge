import { configureStore } from '@reduxjs/toolkit'
import { colorState } from './reducers/headerColor'

const store = configureStore({
  reducer: {
      headerColor: colorState
  },
});

export default store;