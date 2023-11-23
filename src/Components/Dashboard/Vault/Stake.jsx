import React, { useState, useEffect, useContext, useRef } from 'react';
import './Vault.scss'
import useSuperToken from "../../../Hooks/useSuperToken";
import { FETCH_INTERVAL } from "../../../Const/super-token-consts";
import { networks } from '../../../Const/super-token-consts';
import { WalletContext } from '../../../Context/WalletContext';

const Stake = ({chainId, account}) => {
    const handler = useRef(null);
    const { setShowWalletModal } = useContext(WalletContext);
    const [activeItem, setActiveItem] = useState('10%');
    const [balance, setBalance] = useState(0);

    const handleItemClick = (percentage) => {
        setActiveItem(percentage); 
    };

    const network = networks.find((each) => each.id === chainId);

    const {
        buyAndVestAmount,
        setBuyAndBestAmount,
        onBuyAndVest,
        onGetUserBalance
    } = useSuperToken(chainId);

    useEffect(() => {
		if(!account || !chainId) {
			setShowWalletModal(true);
		}
        async function getBalance() {
            const promises = [];
            if (account && chainId) {
                promises.push(
                    onGetUserBalance()
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
            <p>A minimum of 1 DH required to buy & Stake</p>
            <div className="stake-form">
                <div className="stake-text">
                    <span>
                        <input type="number" placeholder='0.0' value={buyAndVestAmount} onChange={(e) => setBuyAndBestAmount(e.currentTarget.value)}/>
                        <strong>$0.00</strong>
                    </span>
                    <span>
                        <div className="h5">{network && network.symbol}</div>
                    </span>
                </div>
                <div className="stake-available">
                    <p>{network && network.symbol} Available:</p>
                    <p>{balance.toFixed(6)}</p>
                </div>
            </div>
            <ul className="purest">
                <li className={activeItem === '10%' ? 'active' : ''} onClick={() => handleItemClick('10%')}>10%</li>
                <li className={activeItem === '25%' ? 'active' : ''} onClick={() => handleItemClick('25%')}>25%</li>
                <li className={activeItem === '50%' ? 'active' : ''} onClick={() => handleItemClick('50%')}>50%</li>
                <li className={activeItem === '75%' ? 'active' : ''} onClick={() => handleItemClick('75%')}>75%</li>
                <li className={activeItem === 'Max' ? 'active' : ''} onClick={() => handleItemClick('Max')}>Max</li>
            </ul>
            <div className="text-center">
                <button className="btn-lg" onClick={onBuyAndVest}>Buy And Vest</button>
            </div>
            <p>A <span className='deposits-purest'>{activeItem}</span> tax is charged on buys </p>
        </div>
    );
};

export default Stake;
