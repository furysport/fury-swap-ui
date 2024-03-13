import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice } from "@cosmjs/stargate";

const rpc = 'rpc.furya.xyz'
const adminPrivateKey = '2992593f994ce4456254d8f3b9238282a9cc7056a27f08ffe597607a683b133a';
const pairContractAddress = 'furya1xqkp8x4gqwjnhemtemc5dqhwll6w6rrgpywvhka7sh8vz8swul9sy7c430';

const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    mnemonic, { 
        prefix: "furya" // neutron, or terra
    }); 
    
const firstAccount = await wallet.getAccounts();
const walletAddress = firstAccount[0].address

const signingClient = await SigningCosmWasmClient.connectWithSigner(
    rpc, 
    wallet, 
    { gasPrice: GasPrice.fromString("0.1ufury") }
)

const start = async () => {
    try {
    	const swapMsg = {
            contract: wasmSwapContractAddress,
            msg: {
                swap: {
                    input_token: inputToken,
                    input_amount: inputAmount,
                    min_output: minOutput,
                    expiration: expiration,
                }
            },
            sender: adminAddress,
            funds: [feeAmount],
        };
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

start();