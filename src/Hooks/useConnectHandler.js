import { useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import useNotification from './useNotification';
import { WalletContext } from '../Context/WalletContext';

export default function useConnectHandler() {
  const { chainId } = useWeb3React();
  const { addNotification } = useNotification();
  const { setShowWalletModal } = useContext(WalletContext);

  //toggles the wallet modal
  const onConnect = () => {
    setShowWalletModal(true);
  };


  const chainSupported = (chainId === 369);

  const onConnectClick = () => {
    if (chainId && !chainSupported) {
      addNotification({
        title: 'Chain Error',
        message: `Please check if PulseChain network is chosen.`,
        type: 'danger',
      });
    }

    onConnect();
  };

  return { onConnectClick };
}
