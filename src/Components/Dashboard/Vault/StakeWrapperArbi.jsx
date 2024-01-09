import React, { useContext, useEffect, useRef, useState } from 'react';
import './Vault.scss'
import useSuperToken from '../../../Hooks/useSuperToken';
import { WalletContext } from '../../../Context/WalletContext';
import { FETCH_INTERVAL } from "../../../Const/super-token-consts";

const StakeWrapperArbi = ({chainId, account}) => {
    const handler = useRef(null);
    const { setShowWalletModal } = useContext(WalletContext);
    const [balance, setBalance] = useState(0);

    const handleItemClick = (network) => {
        setWrapTokenNetwork(network);
    };

    const {
        depositAmount,
        setDepositAmount,
        wrapTokenNetwork,
        setWrapTokenNetwork,
        onGetUserTokenBalance,
        onArbiWrapping,
        onArbiUnWrapping,
        onGetUserArbiBridgeTokenBalance
    } = useSuperToken(42161);

    useEffect(() => {
		if(!account || !chainId) {
			setShowWalletModal(true);
		}
        async function getBalance() {
            const promises = [];
            if (account && chainId) {
                if(!wrapTokenNetwork)
                    promises.push(
                        onGetUserTokenBalance()
                    );
                else if(wrapTokenNetwork) {
                    promises.push(
                        onGetUserArbiBridgeTokenBalance()
                    );
                }
            } else {
                promises.push(0)
            }

            const [balance] = await Promise.all(promises);
            setBalance(balance);
            
            return true;
        }

        handler.current = setInterval(() => {
            getBalance();
        }, FETCH_INTERVAL);

        return () => {
            if (handler.current) {
                clearInterval(handler.current);
            }
        };
    }, [account, wrapTokenNetwork]);

    return (
        <div className="stake-content">
            <div className="h3">wrap/unwrap tokens</div> 
            <div className="stake-form">
                <div className="stake-text">
                    <span>
                        <input type="number" placeholder='0.0' value={depositAmount} onChange={(e) => setDepositAmount(e.currentTarget.value)}/>
                        <strong>$0.00</strong>
                    </span>
                    <span>
                        <div className="h5">DT</div>
                    </span>
                </div>
                <div className="stake-available">
                    <p>Token Balance:</p>
                    <p>{balance.toFixed(5)}</p>
                </div>
            </div>
            <ul className="purest">
                <li className={wrapTokenNetwork === 'bsc' ? 'active' : ''} onClick={() => handleItemClick('bsc')}>BSC</li>
                <li className={wrapTokenNetwork === 'eth' ? 'active' : ''} onClick={() => handleItemClick('eth')}>ETH</li>
                <li className={wrapTokenNetwork === 'poly' ? 'active' : ''} onClick={() => handleItemClick('poly')}>POLY</li>
                <li className={wrapTokenNetwork === 'avax' ? 'active' : ''} onClick={() => handleItemClick('avax')}>AVAX</li>
                <li className={wrapTokenNetwork === 'pls' ? 'active' : ''} onClick={() => handleItemClick('pls')}>PLS</li>
            </ul>
            <div className="text-center stake-btn">
                <button className="btn-lg" onClick={() => onArbiWrapping()}>Wrap Token</button>
                <button className="btn-lg" onClick={() => onArbiUnWrapping()}>Unwrap Token</button>
            </div> 
        </div>
    );
};

export default StakeWrapperArbi;
