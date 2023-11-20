import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App";
import { Web3ReactProvider } from '@web3-react/core';
import { WalletContextProvider } from './Context/WalletContext';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';

const getLibrary = (provider) => {
	return provider;
};

ReactDOM.render(
  <React.StrictMode>
    <ReactNotifications />
    <Web3ReactProvider getLibrary={getLibrary}>
			<WalletContextProvider>
				<App />
			</WalletContextProvider>
		</Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
 