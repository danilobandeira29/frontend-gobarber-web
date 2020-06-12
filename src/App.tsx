import React from 'react';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import ToastsContainer from './components/ToastsContainer';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastsContainer />

    <GlobalStyle />
  </>
);

export default App;
