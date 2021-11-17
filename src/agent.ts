import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  createTransactionEvent,
  getJsonRpcUrl

} from 'forta-agent'
import Web3 from 'web3';
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS

} from "./consts"
import iTxInput from './iTXInput';

const abiDecoder = require('abi-decoder');
abiDecoder.addABI(CONTRACT_ABI)
const web3 = new Web3(getJsonRpcUrl())
const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
  if (txEvent.transaction.to === CONTRACT_ADDRESS || txEvent.transaction.from === CONTRACT_ADDRESS){
    const decodedSig:iTxInput = abiDecoder.decodeMethod(txEvent.transaction.data);
      findings.push(
        Finding.fromObject({
          name: "ContractTransactionDetected",
          description: `Detected transaction for contract ${CONTRACT_ADDRESS}`,
          alertId: "FORTA-170",
          severity: FindingSeverity.Info,
          type: FindingType.Info,
          metadata:{
            data: JSON.stringify(decodedSig)
          }
  
        })
       )

    
  }    
    

  return findings;
}

export default {
  handleTransaction
}