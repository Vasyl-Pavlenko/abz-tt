import { Header, Main } from './components';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />

      <ToastContainer theme="dark" autoClose={4000} />
    </ThemeProvider>
  );
};
