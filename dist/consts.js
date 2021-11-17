"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTRACT_ADDRESS = exports.CONTRACT_ABI = void 0;
exports.CONTRACT_ABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "tokenAddress", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amountTokens", "type": "uint256" }], "name": "AdminTokenRecovery", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amountLP", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountOfferingToken", "type": "uint256" }], "name": "AdminWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "uint8", "name": "pid", "type": "uint8" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "offeringAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "excessAmount", "type": "uint256" }, { "indexed": true, "internalType": "uint8", "name": "pid", "type": "uint8" }], "name": "Harvest", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "startBlock", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "endBlock", "type": "uint256" }], "name": "NewStartAndEndBlocks", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "campaignId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "numberPoints", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "thresholdPoints", "type": "uint256" }], "name": "PointParametersSet", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "offeringAmountPool", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "raisingAmountPool", "type": "uint256" }, { "indexed": false, "internalType": "uint8", "name": "pid", "type": "uint8" }], "name": "PoolParametersSet", "type": "event" }, { "inputs": [], "name": "IFO_FACTORY", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_BUFFER_BLOCKS", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "NUMBER_POOLS", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "campaignId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint8", "name": "_pid", "type": "uint8" }], "name": "depositPool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "endBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_lpAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_offerAmount", "type": "uint256" }], "name": "finalWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_pid", "type": "uint8" }], "name": "harvestPool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_lpToken", "type": "address" }, { "internalType": "address", "name": "_offeringToken", "type": "address" }, { "internalType": "address", "name": "_pancakeProfileAddress", "type": "address" }, { "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_endBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_maxBufferBlocks", "type": "uint256" }, { "internalType": "address", "name": "_adminAddress", "type": "address" }], "name": "initialize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "isInitialized", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lpToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "numberPoints", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "offeringToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pancakeProfile", "outputs": [{ "internalType": "contract PancakeProfile", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "_tokenAmount", "type": "uint256" }], "name": "recoverWrongTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_offeringAmountPool", "type": "uint256" }, { "internalType": "uint256", "name": "_raisingAmountPool", "type": "uint256" }, { "internalType": "uint256", "name": "_limitPerUserInLP", "type": "uint256" }, { "internalType": "bool", "name": "_hasTax", "type": "bool" }, { "internalType": "uint8", "name": "_pid", "type": "uint8" }], "name": "setPool", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "thresholdPoints", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalTokensOffered", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_campaignId", "type": "uint256" }, { "internalType": "uint256", "name": "_numberPoints", "type": "uint256" }, { "internalType": "uint256", "name": "_thresholdPoints", "type": "uint256" }], "name": "updatePointParameters", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_startBlock", "type": "uint256" }, { "internalType": "uint256", "name": "_endBlock", "type": "uint256" }], "name": "updateStartAndEndBlocks", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "viewPoolInformation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_pid", "type": "uint256" }], "name": "viewPoolTaxRateOverflow", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }, { "internalType": "uint8[]", "name": "_pids", "type": "uint8[]" }], "name": "viewUserAllocationPools", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }, { "internalType": "uint8[]", "name": "_pids", "type": "uint8[]" }], "name": "viewUserInfo", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }, { "internalType": "bool[]", "name": "", "type": "bool[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_user", "type": "address" }, { "internalType": "uint8[]", "name": "_pids", "type": "uint8[]" }], "name": "viewUserOfferingAndRefundingAmountsForPools", "outputs": [{ "internalType": "uint256[3][]", "name": "", "type": "uint256[3][]" }], "stateMutability": "view", "type": "function" }];
exports.CONTRACT_ADDRESS = "0xb6ef1f36220397c434a6b15dc5ea616cffdf58ce";
