import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Higgs } from './components/Theme';
import { ThemeProvider } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ThemeProvider theme={Higgs}><App /></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
