require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain clutch guess clog orange sign'; 
let testAccounts = [
"0xe20d8bb8ef20acb518888f3a85d139462e40e84bdac939d428f3ab555d7f9425",
"0x852ae98e7cede40fe95250360cc65bb8403898e92580256d09b44beff07c3eaa",
"0x8867ec188baeccb6187d563b0b5360f121decb000da85731c2c768120aab9b47",
"0x56339be0332d8d6984c37a476767842caf5b131a6b520a388be59b63c894a54c",
"0xc08a838149e837ad096102071c317b2e57090d193fe0fc97b9e848324baa00da",
"0xef584687fc6fc8bbe682778f068724dfc2d99d0cbf6a1b468b6d85cfc5606611",
"0xae4219af9d39cabd3fced236c14f59a0384bbb7c08d90c63570c85d975cedd96",
"0x232a496fcd5d513f82bee8d0f897378c817e0552d4854c80e5d613992d6ba24b",
"0xa5158d18db1b9c4a6d620f970b1d3dbfe08020f169fd50890e41127d87154927",
"0x0221d5ec3a3ac4a944a2fe1096c4b602c0cb2b1f7e9f3e3d82b4bdcd0ca1a708"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

