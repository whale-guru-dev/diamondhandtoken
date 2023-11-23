export const FETCH_INTERVAL = 5000;
export const SuperToken_ADDRESS = '0x1f236dfe78a84806c66312dab58264f1cc5c4325'; // Test
export const Manager_ADDRESS = '0xfde1e588ac4917a0cc2cfba9d26bc222223556fa';
export const Wrapper_ADDRESS = '0x71f8EeE41BE07a590da12Af22afF2517774c95DA';
export const networks = [
    {
        "id": 1, 
        "name": "Ethereum", 
        "symbol": "ETH", 
        "rpcUrl": "https://mainnet.infura.io/v3/",
        "explorer": "https://etherscan.io"
    },
    {
        "id": 56, 
        "name": "Binance Smart Chain", 
        "symbol": "BNB", 
        "rpcUrl": "https://bsc-dataseed3.ninicoin.io/",
        "explorer": "https://bscscan.com"
    },
    {
        "id": 137, 
        "name": "Polygon",
        "symbol": "MATIC", 
        "rpcUrl": "https://polygon-rpc.com",
        "explorer": "https://polygonscan.com"
    },
    {
        "id": 369, 
        "name": "PulseChain", 
        "symbol": "PLS",
        "rpcUrl": "https://rpc.pulsechain.com",
        "explorer": "https://scan.pulsechain.com"
    }
];
