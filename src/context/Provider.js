import React, {useReducer} from 'react';
import initialAuthState from './initialStates.js/initialAuthState';
import authReducer from './reducers/authReducer';
export const JournalContext = React.createContext();

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  return (
    <JournalContext.Provider value={{authState, authDispatch}}>
      {children}
    </JournalContext.Provider>
  );
};

export default GlobalProvider;
