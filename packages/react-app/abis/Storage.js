const abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "number",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "newNumber",
        type: "event",
    },
    {
        inputs: [],
        name: "retrieve",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "num",
                type: "uint256",
            },
        ],
        name: "store",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export default abi;
