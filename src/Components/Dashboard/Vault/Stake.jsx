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
            <div className="h3">Buy + Stake</div>
            <p>There is currently a 10% buy tax for the DT token on all DEXs. However, using this website allows you to buy the tokens without incurring any taxes, but the tokens will be immediately staked.</p>
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
            
            <div className="text-center">
                <button className="btn-lg" onClick={onBuyAndVest}>Buy And Stake</button>
            </div>
        </div>
    );
};

export default Stake;
