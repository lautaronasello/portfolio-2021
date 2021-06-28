import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import firebase from 'firebase/app';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

var firebaseConfig = {
  apiKey: 'AIzaSyCQdhyDv7t3ih7_yUnN2trwM1DNRZfznfE',
  authDomain: 'lautaronasello-portfolio.firebaseapp.com',
  databaseURL: 'https://lautaronasello-portfolio-default-rtdb.firebaseio.com',
  projectId: 'lautaronasello-portfolio',
  storageBucket: 'lautaronasello-portfolio.appspot.com',
  messagingSenderId: '672315797814',
  appId: '1:672315797814:web:f797f1350a030ccf4b0397',
  measurementId: 'G-YCTWTYJNND',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ChakraProvider>
        <ColorModeScript initialColorMode='dark'></ColorModeScript>
        <App />
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
