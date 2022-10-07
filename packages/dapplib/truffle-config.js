require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space stomach razor noise horse gesture merry fog gather'; 
let testAccounts = [
"0x4645d86927ef261baab79d0987715fd0d0ac59865eb43b5c539ea0eacbe150cb",
"0xd9f77f71aca6c094c7cfdd98fd0d7f5eb468d93611b592145c925a19f7ca9c67",
"0x4161c9b59a82087592c56aecd62135a634b00dda3b699aab13422e735a6f8680",
"0x06ebfd5a104b97018ed323f9de3fa233fdd64b803fe2f4a2c238ad47ec5d2861",
"0x520b9a1a5fc0d9758ff4b322fdc376d4e3f461d84992d36dcfbeb2245b05b152",
"0xc092439b3e45663f8b30bc152129b51d99f1a548eb038fc9a7556e4519c43da5",
"0xcef8c4cc69223dd0d04001c01e9dc0a122d0220a5ec35abbf23048bb9a2c7a6e",
"0x7778a0af0350036772e2f8d3632ee566134259be04c714854b4666c06b9d2057",
"0x8abea6a9547cc004758ad0ef1e2963471c561768d4c7456f368a0c8395ac6445",
"0xd82c94107c6ed475c9c82ad5fa24d7862f479b1014b7e32785a07d8ef51830fa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


