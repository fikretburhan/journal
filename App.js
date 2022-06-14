/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import strings from './src/utils/strings';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

const App = () => {
  React.useEffect(() => {
    strings.setLanguage('tr');
  }, []);
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
