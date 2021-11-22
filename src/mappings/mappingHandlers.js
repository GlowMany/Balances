"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEvent = void 0;
const types_1 = require("../types");
async function handleEvent(event) {
    // prettier-ignore
    const { event: { data: [account, balance] } } = event;
    //Retrieve the record by its ID
    const record = await types_1.Account.get(event.extrinsic.block.block.header.hash.toString());
    record.account = account.toString();
    //Big integer type Balance of a transfer event
    record.balance = balance.toBigInt();
    await record.save();
}
exports.handleEvent = handleEvent;
