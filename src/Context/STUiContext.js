/* eslint-disable */
import { createContext } from 'react';

const STUiContext = createContext({
  lastUpdatedTime: Date.now(),
  setLastUpdatedTime: () => {},
});

export default STUiContext;
