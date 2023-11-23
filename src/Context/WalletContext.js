/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { getPulseNodeUrl } from './getPulseNodeUrl';

const WalletContext = React.createContext({
  showWalletModal: false,
  setShowWalletModal: () => null,
});

const WalletContextProvider = ({ children }) => {
  const [showWalletModal, setShowWalletModal] = useState(false);

  return (
    <WalletContext.Provider value={{ showWalletModal, setShowWalletModal }}>
      {children}
    </WalletContext.Provider>
  );
};

export const connectorLocalStorageKey = 'connectorIdForLastApe';
export const ConnectorNames = {
  MetaMask: 'MetaMask',
  WalletConnect: 'WalletConnect',
};

const injected = new InjectedConnector({ supportedChainIds: [1, 56, 137, 369] });
const walletconnect = new WalletConnectConnector({
  rpc: { 
    1 : 'https://mainnet.infura.io/v3/',
    56: 'https://bsc-dataseed3.ninicoin.io/',
    137: 'https://polygon-rpc.com',
    369: 'https://rpc.pulsechain.com'
   },
  supportedChainIds: [1, 56, 137, 369],
});

export const connectorsByName = {
  [ConnectorNames.MetaMask]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};

export { WalletContext, WalletContextProvider };
