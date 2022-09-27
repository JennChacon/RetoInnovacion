import React, { Component } from 'react';
import AuthProvider from './auth/AuthProvider';
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {

    return (
      <div className='fuente'>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </div>
    )
  }
}

export default App;
