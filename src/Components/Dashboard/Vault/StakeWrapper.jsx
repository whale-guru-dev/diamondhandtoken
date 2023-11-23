import React, { useContext, useEffect, useRef, useState } from 'react';
import './Vault.scss'
import useSuperToken from '../../../Hooks/useSuperToken';
import { WalletContext } from '../../../Context/WalletContext';
import { FETCH_INTERVAL } from "../../../Const/super-token-consts";

const StakeWrapper = ({chainId, account}) => {
    const handler = useRef(null);
    const { setShowWalletModal } = useContext(WalletContext);
    const [activeItem, setActiveItem] = useState('10%');
    const [balance, setBalance] = useState(0);

    const handleItemClick = (percentage) => {
        setActiveItem(percentage); 
    };

    const {
        depositAmount,
        setDepositAmount,
        onGetUserTokenBalance,
        onWrapping,
        onUnWrapping,
    } = useSuperToken(1);

    useEffect(() => {
		if(!account || !chainId) {
			setShowWalletModal(true);
		}
        async function getBalance() {
            const promises = [];
            if (account && chainId) {
                promises.push(
                    onGetUserTokenBalance()
                );
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
    }, [account]);

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
                <li className={activeItem === '10%' ? 'active' : ''} onClick={() => handleItemClick('10%')}>10%</li>
                <li className={activeItem === '25%' ? 'active' : ''} onClick={() => handleItemClick('25%')}>25%</li>
                <li className={activeItem === '50%' ? 'active' : ''} onClick={() => handleItemClick('50%')}>50%</li>
                <li className={activeItem === '75%' ? 'active' : ''} onClick={() => handleItemClick('75%')}>75%</li>
                <li className={activeItem === 'Max' ? 'active' : ''} onClick={() => handleItemClick('Max')}>Max</li>
            </ul>
            <div className="text-center stake-btn">
                <button className="btn-lg" onClick={() => onWrapping()}>Wrap Token</button>
                <button className="btn-lg" onClick={() => onUnWrapping()}>Unwrap Token</button>
            </div> 
        </div>
    );
};

export default StakeWrapper;
