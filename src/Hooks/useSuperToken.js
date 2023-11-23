import {
    useState,
    useMemo,
    useContext
} from 'react';
import {
    useWeb3React
} from '@web3-react/core';

import {
    SUPERTOKENABI,
    WRAPPERABI
} from '../data-access';
import {
    getWeb3,
    BNtoNumber,
    numberToBN
} from '../util';

import useNotification from './useNotification';
import STUiContext from '../Context/STUiContext';
import {
    SuperToken_ADDRESS,
    Wrapper_ADDRESS
} from '../Const/super-token-consts';
import { networks } from '../Const/super-token-consts';

export default function useSuperToken(network) {
    const {
        addNotification
    } = useNotification();
    const {
        setLastUpdatedTime
    } = useContext(STUiContext);

    const [buyAndVestAmount, setBuyAndBestAmount] = useState('');
    const [userVestAmount, setUserVestAmount] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState('');

    const {
        account,
        library,
        chainId
    } = useWeb3React();
    const address = account;
    const web3 = getWeb3(library);

    const stContractInstance = useMemo(
        () => new web3.eth.Contract(SUPERTOKENABI, SuperToken_ADDRESS),
        [web3]
    );

    const wrapperContractInstance  = useMemo(
        () => {
            if(chainId === 1) 
                return new web3.eth.Contract(WRAPPERABI, Wrapper_ADDRESS);
            else return null;
        },
        [web3, chainId]
    );

    const switchNetwork = async () => {
        const dNetwork = networks.find((each) => each.id == network);
        if (window.ethereum.networkVersion != network) {
            addNotification({
                title: 'Wrong network',
                message: `Please switch your network to ${dNetwork.name}.`,
                type: 'danger',
            });

            try {
                await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: web3.utils.toHex(network) }]
                });
            } catch (err) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainName: dNetwork.name,
                            chainId: web3.utils.toHex(network),
                            nativeCurrency: { name: dNetwork.symbol, decimals: 18, symbol: dNetwork.symbol },
                            rpcUrls: [dNetwork.rpcUrl]
                        }
                    ]
                });
                }
            }
        } else {
            return ;
        }
    }

    const getGasPrice = async () => {
        const gasPrice = await web3.eth.getGasPrice();
        return web3.utils.toHex(gasPrice)
    }

    const isConnected = () => {
        if(!address) {
            addNotification({
                title: 'Not Connected',
                message: 'Please connect your wallet to blockchain network.',
                type: 'danger',
            });
            return false;
        }

        return true;
    }

    const isChainValid = () => {
        const bNetwork = networks.find((each) => each.id === network);
        if (chainId !== bNetwork.id) {
            addNotification({
                title: 'Chain Error',
                message: `Please check if ${bNetwork.name} network is chosen.`,
                type: 'danger',
            });
            return false;
        }
        return true;
    };

    const onGetUserBalance = async () => {
        const balance = await web3.eth.getBalance(address);
        return Number(BNtoNumber(balance.toString(), 18));
    }

    const onGetUserTokenBalance = async () => {
        const balance = await stContractInstance.methods.balanceOf(account).call();
        return Number(BNtoNumber(balance.toString(), 18));
    }

    const onBuyAndVest = async () => {
        let buyAndVestAmountNumber = Number(buyAndVestAmount);
        if (buyAndVestAmountNumber <= 0 || !isConnected() || !isChainValid()) {
            return;
        }

        try {
            buyAndVestAmountNumber = numberToBN(buyAndVestAmountNumber, 18); 
            if(network === 56) {
                const gasPrice = await getGasPrice();
                await stContractInstance.methods.buyAndVest().send({
                        from: address,
                        value: buyAndVestAmountNumber,
                        gasPrice
                });
            } else {
                await stContractInstance.methods.buyAndVest().send({
                    from: address,
                    value: buyAndVestAmountNumber,
                });
            }
            
            
            addNotification({
                title: 'Success',
                message: `You have successfully Bought and Vested`,
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
                    message: 'Buy And Vest Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onUserVest = async () => {
        let userVestAmountNumber = Number(userVestAmount);
        if (userVestAmountNumber <= 0 || !isConnected() || !isChainValid()) {
            return;
        }

        try {
            userVestAmountNumber = numberToBN(userVestAmountNumber, 18);

            const allowance = await stContractInstance.methods.allowance(address, SuperToken_ADDRESS).call();



            if(allowance > userVestAmountNumber) {
                await stContractInstance.methods.userVest(userVestAmountNumber).send({
                    from: address,
                });
                addNotification({
                    title: 'Success',
                    message: `You have successfully Vested ${userVestAmount} Token`,
                    type: 'success',
                });
            } else {
                await stContractInstance.methods.approve(SuperToken_ADDRESS, userVestAmountNumber).send({
                    from: address,
                });

                addNotification({
                    title: 'Success',
                    message: `You have successfully Approved ${userVestAmount} Token`,
                    type: 'success',
                });

                await stContractInstance.methods.userVest(userVestAmountNumber).send({
                    from: address,
                });

                addNotification({
                    title: 'Success',
                    message: `You have successfully Vested ${userVestAmount} Token`,
                    type: 'success',
                });
            }
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
                    message: 'Vest Failed. Please check if you have enough balance.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onGetVestInfo = async () => {
        try {
            const vestIndex = await stContractInstance.methods.vestID(account).call(); 
            const promises = [];
            const rewardPromises = [];
            for(let i = 0; i < vestIndex * 1; i++) {
                promises.push(stContractInstance.methods.vests(account, i).call());
                rewardPromises.push(stContractInstance.methods.calcClaim(account, i).call());
            }
            let vestData = await Promise.all(promises);
            const rewardData = await Promise.all(rewardPromises);
            vestData = vestData.map(
                (each, ind) => {
                    return {
                        amount: Number(BNtoNumber(each.amount.toString(), 18)),
                        claimed: Number(BNtoNumber(each.claimed.toString(), 18)),
                        reward : Number(BNtoNumber(rewardData[ind].toString(), 18)),
                        day: new Date(each.vestTime * 1000).toDateString()
                    }
                }
            );
            return vestData;
        } catch(err) {
            return [];
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    const onClaim = async (vestIndex) => {
        try {
            if (!isConnected() || !isChainValid()) {
                return;
            }
            await stContractInstance.methods.claimRewards(vestIndex).send({
                from: address,
            });
            addNotification({
                title: 'Success',
                message: `You have successfully Claimed for your Stake #${vestIndex + 1}`,
                type: 'success',
            });
        } catch(err) {
            if(err.code && err.code === 4001) {
                addNotification({
                    title: 'Failed!',
                    message: 'You denied transaction signature',
                    type: 'danger',
                });
            } else {
                addNotification({
                    title: 'Failed!',
                    message: 'Claim Failed.',
                    type: 'danger',
                });
            }
        } finally {
            setLastUpdatedTime(Date.now());
        }
    }

    // const onWrapping = async () => {
    //     let depositAmountNumber = Number(depositAmount);
    //     if (depositAmountNumber <= 0 || !isConnected() || !isChainValid()) {
    //         return;
    //     }

    //     try {
    //         depositAmountNumber = numberToBN(depositAmountNumber, 18);

    //         const allowance = wrapperContractInstance.methods.allowance(address, Wrapper_ADDRESS).call();

    //         if(allowance > depositAmountNumber) {
    //             await wrapperContractInstance.methods.deposit(depositAmountNumber).send({
    //                 from: address,
    //             });
    //             addNotification({
    //                 title: 'Success',
    //                 message: `You have successfully Vested ${userVestAmount} Token`,
    //                 type: 'success',
    //             });
    //         } else {
    //             await stContractInstance.methods.approve(SuperToken_ADDRESS, userVestAmountNumber).send({
    //                 from: address,
    //             });

    //             addNotification({
    //                 title: 'Success',
    //                 message: `You have successfully Approved ${userVestAmount} Token`,
    //                 type: 'success',
    //             });

    //             await stContractInstance.methods.userVest(userVestAmountNumber).send({
    //                 from: address,
    //             });

    //             addNotification({
    //                 title: 'Success',
    //                 message: `You have successfully Vested ${userVestAmount} Token`,
    //                 type: 'success',
    //             });
    //         }
    //     } catch (err) {
    //         console.log(err)
    //         if(err.code && err.code === 4001) {
    //             addNotification({
    //                 title: 'Failed!',
    //                 message: 'You denied transaction signature',
    //                 type: 'danger',
    //             });
    //         } else {
    //             addNotification({
    //                 title: 'Failed!',
    //                 message: 'Vest Failed. Please check if you have enough balance.',
    //                 type: 'danger',
    //             });
    //         }
    //     } finally {
    //         setLastUpdatedTime(Date.now());
    //     }
    // }

    // const onGetSparkPrice = async () => {
    //     try {
    //         const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=sparkswap&vs_currencies=usd');
    //         const data = await response.json();
    //         return data.sparkswap.usd;
    //     } catch (err) {
    //         console.log(err.message);
    //         return 0;
    //     }
    // }

    // const onGetPlsPrice = async () => {
    //     try {
    //         const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=pulsechain&vs_currencies=usd');
    //         const data = await response.json();
    //         return data.pulsechain.usd;
    //     } catch (err) {
    //         console.log(err.message);
    //         return 0;
    //     }
    // }
    

    return {
        buyAndVestAmount,
        setBuyAndBestAmount,
        userVestAmount,
        setUserVestAmount,
        onGetUserBalance,
        onGetUserTokenBalance,
        onBuyAndVest,
        onUserVest,
        onGetVestInfo,
        onClaim,
        switchNetwork
        // onGetSparkPrice,
        // onGetPlsPrice
    };
}