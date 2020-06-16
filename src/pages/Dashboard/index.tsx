import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();

    history.push('/');
  }, [history, signOut]);
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut} type="button">
        Logout
      </button>
    </>
  );
};

export default Dashboard;
