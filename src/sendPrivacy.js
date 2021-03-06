
let transaction = require('../wanchain_web3/Transaction');
const web3Require = global.web3Require = require('../wanchain_web3/web3_ipc');
transaction.useWalletDb();
transaction.addCurAccount();
transaction.addToWAddress();
transaction.addToPrivacyAmount();
transaction.addFee();
transaction.addSend(function(result){
    transaction.sendToPrivacy(result);
});
transaction.run(function() {
    web3Require.initTransCollection();
});