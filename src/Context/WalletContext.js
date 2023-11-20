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

const injected = new InjectedConnector({ supportedChainIds: [369] });
const rpcUrl = getPulseNodeUrl();
const walletconnect = new WalletConnectConnector({
  rpc: { 369: rpcUrl },
  supportedChainIds: [369],
});

export const connectorsByName = {
  [ConnectorNames.MetaMask]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};

export { WalletContext, WalletContextProvider };
