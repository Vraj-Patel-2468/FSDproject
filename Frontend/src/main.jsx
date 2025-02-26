import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { UserContextProvider } from './contexts/ThemeContext.jsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MantineProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </MantineProvider>
  </Provider>
)
