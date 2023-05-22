import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    backend:{
      loadPath:"/assets/locales/{{lng}}/translation.json"
    },
    react:{useSuspense:false},
    detection:{
        order: ['cookie', 'htmlTag', 'querystring', 'localStorage', 'path', 'subdomain'],
        caches:['cookie'],
    }
  });

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  reportWebVitals();
