export interface FakeERC20Network {
    tokens: Token[];
    defaultMintAmount: string;
}

export interface Token {
    name: string;
    symbol: string;
    decimals?: number;
    defaultMintAmount?: string;
}

export interface InitialUserData {
    userAddress: string;
    initialBalance: string;
}

export interface TaskResults {
    [k: string]: string;
}
