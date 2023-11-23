import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { connectorLocalStorageKey, ConnectorNames, WalletContext } from '../../Context/WalletContext';
import METAMASK_ICON_URL from '../../Assets/img/metamask.png';
import WALLETCONNECT_ICON_URL from '../../Assets/img/walletConnectIcon.svg';
import styled from 'styled-components';
import useAuth from '../../Hooks/useAuth';
import useNotification from '../../Hooks/useNotification';
import { networks } from '../../Const/super-token-consts';

const SUPPORTED_WALLETS = [
  {
    label: 'MetaMask',
    icon: METAMASK_ICON_URL,
    connectorId: ConnectorNames.MetaMask,
    injected: true,
  },
  {
    label: 'WalletConnect',
    icon: WALLETCONNECT_ICON_URL,
    connectorId: ConnectorNames.WalletConnect,
    injected: false,
  },
];

const WalletCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  background-color: rgb(106 89 57);
  border: 1px solid #101535;

  &:hover {
    cursor: pointer;
    border: 1px solid white;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

const AccountActions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;

  a {
    color: #685738;
  }
`;

const AccountInfoCard = styled.div`
  color: #f2c77b;
`;

const CopyWrapper = styled.span`
  cursor: pointer;
`;

const ProviderOptions = () => {
  const { login } = useAuth();
  const { setShowWalletModal } = useContext(WalletContext);

  const wallets = SUPPORTED_WALLETS.filter((option) => {
    if (option.injected) {
      return window.ethereum ? true : false;
    }

    return true;
  });

  return (
    <div>
      {wallets.map(({ label, icon, connectorId }) => {
        return (
          <WalletCard
            key={label}
            onClick={() => {
              login(connectorId);
              window.localStorage.setItem(connectorLocalStorageKey, connectorId);
              setShowWalletModal(false);
            }}
          >
            {label}
            <img src={icon} alt="option" />
          </WalletCard>
        );
      })}
    </div>
  );
};

const AccountInformation = () => {
  const { account, chainId } = useWeb3React();
  const { addNotification } = useNotification();
  const { logout } = useAuth();
  const { setShowWalletModal } = useContext(WalletContext);
  const network = networks.find(each => each.id === chainId);

  return (
    <AccountInfoCard>
      {account}
      <AccountActions>
        <CopyToClipboard
          text={account}
          onCopy={() => {
            addNotification({
              title: '',
              message: 'Copied address to clipboard!',
              type: 'success',
            });
          }}
        >
          <CopyWrapper>
            <i className="fa fa-clipboard" style={{ marginRight: 8 }} />
            Copy Address
          </CopyWrapper>
        </CopyToClipboard>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={`${network.explorer}/address/${account}`}
        >
          <i className="fa fa-external-link" style={{ marginLeft: 24, marginRight: 8 }} />
          View on Block Explorer
        </a>
      </AccountActions>
      <div>
        <Button
          variant="outline-success"
          type="button"
          style={{
            margin: "24px auto 0",
            color: "#464652",
            borderColor: "#464652",
            width: "100px",
            height: "30px",
          }}
          onClick={() => {
            logout();
            window.localStorage.removeItem(connectorLocalStorageKey);
            setShowWalletModal(false);
          }}
        >
          Logout
        </Button>
      </div>
    </AccountInfoCard>
  );
};

export default function WalletModal() {
  const { showWalletModal, setShowWalletModal } = useContext(WalletContext);
  const { account } = useWeb3React();

  return (
    <Modal
      show={showWalletModal}
      onHide={() => setShowWalletModal(false)}
      backdrop="static"
      keyboard={false}
      className="info-modal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{account ? 'Your wallet' : 'Connect to a wallet'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!account && <ProviderOptions />}
        {account && <AccountInformation />}
      </Modal.Body>
    </Modal>
  );
}
