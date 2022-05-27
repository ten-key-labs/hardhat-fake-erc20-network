// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "../../../src/index";

const config: HardhatUserConfig = {
    solidity: "0.7.3",
    fakeERC20Network: {
        tokens: [
            {
                name: "Gold",
                symbol: "GLD",
                defaultMintAmount: "80000000000000000000",
                decimals: 2,
            },
            {
                name: "Silver",
                symbol: "SLV",
                defaultMintAmount: "600000000000000000000",
                decimals: 6,
            },
            {
                name: "Bronze",
                symbol: "BRZ",
                decimals: 18,
            },
        ],
        defaultMintAmount: "80000000000000000000",
    },
};

export default config;
