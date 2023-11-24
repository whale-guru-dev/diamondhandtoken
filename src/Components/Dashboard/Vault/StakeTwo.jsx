import React, { useState, useEffect, useContext, useRef } from 'react';
import './Vault.scss'
import useSuperToken from "../../../Hooks/useSuperToken";
import { FETCH_INTERVAL } from "../../../Const/super-token-consts";
import { networks } from '../../../Const/super-token-consts';
import { WalletContext } from '../../../Context/WalletContext';

const StakeTwo = ({chainId, account}) => {
    const handler = useRef(null);
    const { setShowWalletModal } = useContext(WalletContext);
    const [activeItem, setActiveItem] = useState('10%');
    const [balance, setBalance] = useState(0);

    const handleItemClick = (percentage) => {
        setActiveItem(percentage); 
    };

    const {
        userVestAmount,
        setUserVestAmount,
        onUserVest,
        onGetUserTokenBalance
    } = useSuperToken(chainId);

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
            <div className="h3">Stake</div>
            <p>This section allows you to re-stake any DT tokens you may have claimed or bought off the open market.</p>
            <div className="stake-form">
                <div className="stake-text">
                    <span>
                        <input type="number" placeholder='0.0' value={userVestAmount} onChange={(e) => setUserVestAmount(e.currentTarget.value)}/>
                        <strong>$0.00</strong>
                    </span>
                    <span>
                        <div className="h5">DH</div>
                    </span>
                </div>
                <div className="stake-available">
                    <p>DH Available:</p>
                    <p>{balance.toFixed(5)}</p>
                </div>
            </div>
            
            <div className="text-center">
                <button className="btn-lg" onClick={() => onUserVest()}>Stake</button>
            </div>
        </div>
    );
};

export default StakeTwo;
