import "dotenv/config";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";

import {
    airdropIfRequired,
  } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`⚡️ Connected to devnet`);

const publicKey = new PublicKey("AS8ZJtcwix1nXwqRbw2oaZ6JxkgX7Tp3eqW6VjN3Yadx");

//FIrst

const airdrop1 =  await airdropIfRequired(
    connection,
    publicKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL
  );

console.log("Airdrop 1", airdrop1);


//Second 

await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL);
  

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `💰 The balance for the wallet at address ${publicKey} is: ${balanceInSOL}`
);
