require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");
const ethers = require("ethers");

require("dotenv").config();
const providerURL = process.env.MAINNET_PROVIDER_URL;
const projectSecret = process.env.projectSecret;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: "0.8.6",
	networks: {
		hardhat: {
			forking: {
				url: "providerURL",
			},
			gasPrice: 0,
		},
		localhost: {
			url: "http://localhost:8545",
		},
	},
};
