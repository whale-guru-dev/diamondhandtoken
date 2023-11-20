import {
    useState,
    useMemo,
    useContext
} from 'react';
import {
    useWeb3React
} from '@web3-react/core';

import {
    SuperTokenAbi
} from '../data-access';
import {
    getWeb3,
    BNtoNumber,
    numberToBN
} from '../util';

import useNotification from './useNotification';
import VCUiContext from '../contexts/LASUiContext';
import {
    SuperToken_ADDRESS
} from '../Const/super-token-consts';


export default function useLASJackpot() {
    const {
        addNotification
    } = useNotification();
    const {
        setLastUpdatedTime
    } = useContext(VCUiContext);

    const [buyTicketAmount, setBuyTicketAmount] = useState('');
    const [sellTicketAmount, setSellTicketAmount] = useState('');

    const {
        account,
        library,
        chainId
    } = useWeb3React();
    const address = account;
    const web3 = getWeb3(library);

    const jpContractInstance = useMemo(
        () => new web3.eth.Contract(JACKPOTTICKETABI_New, JackPotTicket_New),
        [web3]
    );

    const cakeContractInstance  = useMemo(
        () => new web3.eth.Contract(CAKEABI, CAKE_ADDRESS),
        [web3]
    );

    const multibuybackContractInstance  = useMemo(
        () => new web3.eth.Contract(MULTIBUYBACKABI, MultiBuyback_ADDRESS),
        [web3]
    );

    const isConnected = () => {
        if(!address) {
            addNotification({
                title: 'Not Connected',
                message: 'Please connect your wallet to PulseChain network.',
                type: 'danger',
            });
            return false;
        }

        return true;
    }

    const isChainValid = () => {
        if (chainId !== 369) {
            addNotification({
                title: 'Chain Error',
                message: 'Please check if PulseChain network is chosen.',
                type: 'danger',
            });
            return false;
        }
        return true;
    };

    const onGetUserBalance = async () => {
        const balance = await web3.eth.getBalance(address);
        return Number(BNtoNumber(balance.toString(), 18));;
    }

    const onBuyTicket = async () => {
        let buyTicketAmountNumber = Number(buyTicketAmount);
        if (buyTicketAmountNumber <= 0 || !isConnected() || !isChainValid()) {
            return;
        }

        try {
            buyTicketAmountNumber = numberToBN(buyTicketAmountNumber, 18);
            await jpContractInstance.methods.buy('0x0000000000000000000000000000000000000000').send({
                    from: address,
                    value: buyTicketAmountNumber
            });
            
            let tokenReceive = await jpContractInstance.methods.calculateTokensReceived(buyTicketAmountNumber).call();
            
            addNotification({
                title: 'Success',
                message: `You have successfully bought ${Number(BNtoNumber(tokenReceive.toString(), 18))} Token`,
                type: 'success',
            });
        } catch (err) {
            console.log(err)
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'Buy Token Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onSellTicket = async () => {
        let sellTicketAmountNumber = Number(sellTicketAmount);
        if (sellTicketAmountNumber <= 0 || !isConnected() || !isChainValid()) {
            return;
        }

        try {
            sellTicketAmountNumber = numberToBN(sellTicketAmountNumber, 18);
            await jpContractInstance.methods.sell(sellTicketAmountNumber).send({
                from: address,
            });
            addNotification({
                title: 'Success',
                message: `You have successfully sold ${sellTicketAmount} Token`,
                type: 'success',
            });
        } catch (err) {
            console.log(err)
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'Buy Ticket Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onGetTicketsOwned = async () => {
        try {
            const ticketOwned = await jpContractInstance.methods.balanceOf(address).call();
            return Number(BNtoNumber(ticketOwned.toString(), 18));
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }
    
    const onGetTimeLeft = async () => {
        try {
            const timeLeft = await jpContractInstance.methods.timerUpdate().call();
            return timeLeft; 
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onLastFiveBuyerList = async () => {
        try {
            const promises = [];
            for(let i = 0; i < 8; i++) {
                promises.push(jpContractInstance.methods.last8buyers(i).call())
            }
            const list = await Promise.all(promises);
            return list;
        } catch (err) {
            console.log(err)
            return [];
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onCalcDividends = async () => {
        try {
            const dividend = await jpContractInstance.methods.dividendsOf(address).call();
            return Number(BNtoNumber(dividend.toString(), 18));
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }
    
    const onGetBuyPrice = async () => {
        try {
            const buyPrice = await jpContractInstance.methods.buyPrice().call();
            return Number(BNtoNumber(buyPrice.toString(), 18));
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onGetSellPrice = async () => {
        try {
            const sellPrice = await jpContractInstance.methods.sellPrice().call();
            return Number(BNtoNumber(sellPrice.toString(), 18));
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onGetRoundCount = async () => {
        try {
            const roundCount = await jpContractInstance.methods.getCurrentRound().call();
            return roundCount;
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onGetMiListAmount = async () => {
        try {
            const minListAmount = await jpContractInstance.methods.minListAmount().call();
            return Number(BNtoNumber(minListAmount.toString(), 18));
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }


    const onWithdraw = async () => {
        if (!isConnected() || !isChainValid()) {
            return;
        }

        try {
            await jpContractInstance.methods.withdraw().send({
                from: address,
            });
            addNotification({
                title: 'Success',
                message: `You have successfully withdrawn`,
                type: 'success',
            });
        } catch (err) {
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'Withdraw Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    };

    const onExit = async () => {
        if (!isConnected() || !isChainValid()) {
            return;
        }

        try {
            await jpContractInstance.methods.exit().send({
                from: address,
            });
            addNotification({
                title: 'Success',
                message: `You have successfully exit`,
                type: 'success',
            });
        } catch (err) {
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'Exit Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    };


    const onReinvest = async () => {
        if (!isConnected() || !isChainValid()) {
            return;
        }

        try {
            await jpContractInstance.methods.reinvest().send({
                from: address,
            });
            addNotification({
                title: 'Success',
                message: `You have successfully compounded`,
                type: 'success',
            });
        } catch (err) {
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'Claim Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    };

    const onJackPotTrigger = async () => {
        if (!isConnected() || !isChainValid()) {
            return;
        }

        try {
            await jpContractInstance.methods.jackpotTrigger().send({
                from: address,
            });
            addNotification({
                title: 'Success',
                message: `You have successfully triggered`,
                type: 'success',
            });
        } catch (err) {
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'Trigger Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    };

    const onGetCakeOwned = async () => {
        try {
            const cakeOwned = await cakeContractInstance.methods.balanceOf(JackPotTicket_ADDRESS).call();
            return Number(BNtoNumber(cakeOwned.toString(), 18));
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    };

    const onDirectBuyBack = async () => {
        if (!isConnected() || !isChainValid()) {
            return;
        }

        try {
            await multibuybackContractInstance.methods.directBuyBack().send({
                from: address,
            });
            addNotification({
                title: 'Success',
                message: `You have successfully directly buyback`,
                type: 'success',
            });
        } catch (err) {
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'BuyBack Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    };

    const onGetSparkPrice = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=sparkswap&vs_currencies=usd');
            const data = await response.json();
            return data.sparkswap.usd;
        } catch (err) {
            console.log(err.message);
            return 0;
        }
    }

    const onGetPlsPrice = async () => {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=pulsechain&vs_currencies=usd');
            const data = await response.json();
            return data.pulsechain.usd;
        } catch (err) {
            console.log(err.message);
            return 0;
        }
    }
    

    const onGetCollectedBNB = async () => {
        try {
            const bnbCollected = await web3.eth.getBalance(MultiBuyback_ADDRESS);
            return Number(BNtoNumber(bnbCollected.toString(), 18));
        } catch (err) {
            console.log(err)
            return 0;
        } finally {
            setLastUpdatedTime(Date.now());
        }
    };

    return {
        buyTicketAmount,
        setBuyTicketAmount,
        sellTicketAmount,
        setSellTicketAmount,
        onGetUserBalance,
        onBuyTicket,
        onSellTicket,
        onGetTicketsOwned,
        onLastFiveBuyerList,
        onCalcDividends,
        onGetBuyPrice,
        onGetSellPrice,
        onGetRoundCount,
        onWithdraw,
        onReinvest,
        onExit,
        onGetTimeLeft,
        onGetCakeOwned,
        onGetMiListAmount,
        onJackPotTrigger,
        onDirectBuyBack,
        onGetCollectedBNB,
        onGetSparkPrice,
        onGetPlsPrice
    };
}