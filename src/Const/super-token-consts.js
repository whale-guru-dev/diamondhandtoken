export const FETCH_INTERVAL = 5000;
// Test Site Contract Address
// export const SuperToken_ADDRESS = '0x1f236dfe78a84806c66312dab58264f1cc5c4325'; // Test
// export const Manager_ADDRESS = '0xfde1e588ac4917a0cc2cfba9d26bc222223556fa';
// export const Wrapper_ADDRESS = '0x71f8eee41be07a590da12af22aff2517774c95da';
// export const Bridge_ADDRESS = '0xf5c33dc47da5fe46dfd236ba7ad4ea9e84e18eb5';
// Main Site Contract Address
export const SuperToken_ADDRESS = '0x972bf619295c83082d552be96a01e81e79d38d22'; // Main
export const Manager_ADDRESS = '0xfde1e588ac4917a0cc2cfba9d26bc222223556fa';
export const Wrapper_ADDRESS = '0x72f340803f5599bf59d1686f51d69ea40b246e7c';
export const Bridge_ADDRESS = '0xEE433977e9a9b58773aef06c1888c6C1191e02C7';

export const Wrapper_Arbi_ADDRESS = '0x10B8064C7b2002D2c7657771851fd585DfC0Fa8b';
export const Bridge_Arbi_fBSC = '0xdb8f16ba81deeff67fc63e2e6384f31b5a7910b8';
export const Bridge_Arbi_fETH = '0x2c3a913f7e1989f17693770965ebbfa8c34833d7';
export const Bridge_Arbi_fPOLY = '0x2527A3a4330d03A99fA3a4FC35Da293780fC8314';
export const Bridge_Arbi_fAVAX = '0x87296a86f60db97AEA41316A331ab64543cF316f';
export const Bridge_Arbi_fPLS = '0x7f00e7bc7762d3336d1fc169f63c99286f232a44';

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
    },
    {
        "id": 43114, 
        "name": "Avalanche C-Chain", 
        "symbol": "AVAX",
        "rpcUrl": "https://avalanche.drpc.org",
        "explorer": "https://snowtrace.io"
    },
    {
        "id": 42161, 
        "name": "Arbitrum One", 
        "symbol": "ETH",
        "rpcUrl": "https://rpc.arb1.arbitrum.gateway.fm",
        "explorer": "https://arbiscan.io"
    }
];
