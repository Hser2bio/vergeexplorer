require('dotenv').config();
const Rpc = require('../utils/rpc');

const rpcInit = async () => {
    try {
        const rpc = new Rpc(`http://${process.env.RPC_USER}:${process.env.RPC_PASS}@${process.env.RPC_HOST}:${process.env.RPC_PORT}`);

        await rpc.init();
        console.log('RPC initialized');

        return rpc;
    } catch (error) {
        throw error.message;
    }
};

module.exports = rpcInit;