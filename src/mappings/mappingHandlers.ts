import {SubstrateExtrinsic,SubstrateEvent,SubstrateBlock} from "@subql/types";
import {Account} from "../types";
import {Balance} from "@polkadot/types/interfaces";

export async function handleEvent(event: SubstrateEvent): Promise<void> {
    const {event: {data: [account, balance]}} = event;
    //Create a new Account entity with ID using block hash
	let record = new
    Account(event.extrinsic.block.block.header.hash.toString());
    //Assign the Polkadot address to the account field
    record.account = account.toString();
    //Assigh the balance to the balance field "type cast as Balance"
    record.balance = (balance as Balance).toBigInt();
    await record.save();
}