// We load the plugin here.
import { HardhatUserConfig } from "hardhat/types";

import "../../../src/index";

const config: HardhatUserConfig = {
    solidity: "0.7.3",
    fakeERC20Network: {
        tokens: [
            {
                name: "Gold Token",
                symbol: "GOLD",
                decimals: 2,
            },
            {
                name: "Silver Token",
                symbol: "SILVER",
                decimals: 6,
            },
        ],
    },
};

export default config;
