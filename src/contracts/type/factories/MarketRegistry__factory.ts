/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MarketRegistry,
  MarketRegistryInterface,
} from "../MarketRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clearingHouse",
        type: "address",
      },
    ],
    name: "ClearingHouseChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "feeRatio",
        type: "uint24",
      },
    ],
    name: "FeeRatioChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint24",
        name: "feeRatio",
        type: "uint24",
      },
    ],
    name: "InsuranceFundFeeRatioChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "maxOrdersPerMarket",
        type: "uint8",
      },
    ],
    name: "MaxOrdersPerMarketChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint24",
        name: "feeRatio",
        type: "uint24",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "PoolAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "feeRatio",
        type: "uint24",
      },
    ],
    name: "addPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "candidate",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getClearingHouse",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getFeeRatio",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getInsuranceFundFeeRatio",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getMarketInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pool",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "exchangeFeeRatio",
            type: "uint24",
          },
          {
            internalType: "uint24",
            name: "uniswapFeeRatio",
            type: "uint24",
          },
          {
            internalType: "uint24",
            name: "insuranceFundFeeRatio",
            type: "uint24",
          },
        ],
        internalType: "struct IMarketRegistry.MarketInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMaxOrdersPerMarket",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getQuoteToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUniswapV3Factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "hasPool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "uniswapV3FactoryArg",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoteTokenArg",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "clearingHouseArg",
        type: "address",
      },
    ],
    name: "setClearingHouse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "feeRatio",
        type: "uint24",
      },
    ],
    name: "setFeeRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "insuranceFundFeeRatioArg",
        type: "uint24",
      },
    ],
    name: "setInsuranceFundFeeRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "maxOrdersPerMarketArg",
        type: "uint8",
      },
    ],
    name: "setMaxOrdersPerMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611c9d806100206000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063831f72b4116100ad578063bc5920ba11610071578063bc5920ba14610256578063c575ff791461025e578063c7bf443414610266578063ece090c414610279578063edd0b5cb1461028e5761012c565b8063831f72b41461020d5780638da5cb5b14610220578063b081983b14610228578063bb235d1114610230578063bbe4f6db146102435761012c565b8063449323d8116100f4578063449323d8146101c2578063485cc955146101d55780634a64d67d146101e85780636c8381f8146101fd578063715018a6146102055761012c565b806308ff49ad146101315780630cf85bcc1461015a5780631246dbf51461017a57806313af40351461019a5780633feb4212146101af575b600080fd5b61014461013f36600461179c565b6102a1565b6040516101519190611bd7565b60405180910390f35b61016d61016836600461179c565b610307565b6040516101519190611b96565b61018d61018836600461179c565b6103b1565b604051610151919061199d565b6101ad6101a836600461179c565b6103d4565b005b6101ad6101bd366004611813565b61052f565b6101ad6101d036600461179c565b610655565b6101ad6101e33660046117db565b6106fc565b6101f0610842565b6040516101519190611943565b6101f0610851565b6101ad610860565b6101ad61021b36600461190b565b610901565b6101f06109b1565b6101f06109c0565b6101ad61023e366004611813565b6109cf565b6101f061025136600461179c565b610ae9565b6101ad610b44565b6101f0610c30565b6101f0610274366004611813565b610c3f565b610281611259565b6040516101519190611be7565b61014461029c36600461179c565b611269565b6001600160a01b038082166000908152609c602052604081205490918391166102e55760405162461bcd60e51b81526004016102dc90611b35565b60405180910390fd5b50506001600160a01b03166000908152609d602052604090205462ffffff1690565b61030f611733565b6001600160a01b038083166000908152609c60205260409020548391166103485760405162461bcd60e51b81526004016102dc90611b35565b5050604080516080810182526001600160a01b039283166000818152609c6020908152848220549095168352818152609e85528381205462ffffff90811686850152828252609f865284822054811684860152918152609d909452919092205416606082015290565b6001600160a01b038181166000908152609c60205260409020541615155b919050565b6103dc6112c6565b6001600160a01b03166103ed6109b1565b6001600160a01b031614610431576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b6001600160a01b038116610475576040805162461bcd60e51b81526020600482015260066024820152650534f5f4e57360d41b604482015290519081900360640190fd5b6033546001600160a01b03828116911614156104c1576040805162461bcd60e51b8152602060048201526006602482015265534f5f53414f60d01b604482015290519081900360640190fd5b6034546001600160a01b038281169116141561050d576040805162461bcd60e51b8152602060048201526006602482015265534f5f53414360d01b604482015290519081900360640190fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b038083166000908152609c60205260409020548391166105685760405162461bcd60e51b81526004016102dc90611b35565b81620f42408162ffffff1611156105915760405162461bcd60e51b81526004016102dc90611a4e565b6105996112c6565b6001600160a01b03166105aa6109b1565b6001600160a01b0316146105ee576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b6001600160a01b0384166000908152609d602052604090819020805462ffffff191662ffffff8616179055517f0b4bf524b123dd9f9252f2f17e6f842313eb705045a2259faccd2530bae3ff5c90610647908590611bd7565b60405180910390a150505050565b61065d6112c6565b6001600160a01b031661066e6109b1565b6001600160a01b0316146106b2576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b606780546001600160a01b0319166001600160a01b0383169081179091556040517fd0654f5900f9e7e4e605a19334306e6a2786bbf960ac0484a4c12feb6428fe2f90600090a250565b600054610100900460ff168061071557506107156112ca565b80610723575060005460ff16155b61075e5760405162461bcd60e51b815260040180806020018281038252602e815260200180611c1a602e913960400191505060405180910390fd5b600054610100900460ff16158015610789576000805460ff1961ff0019909116610100171660011790555b6107916112db565b6107a3836001600160a01b0316611385565b6107bf5760405162461bcd60e51b81526004016102dc90611a2d565b6107d1826001600160a01b0316611385565b6107ed5760405162461bcd60e51b81526004016102dc90611a0c565b609a80546001600160a01b038086166001600160a01b031992831617909255609b805460ff60a01b199386169216919091179190911660ff60a01b179055801561083d576000805461ff00191690555b505050565b609b546001600160a01b031690565b6034546001600160a01b031690565b6108686112c6565b6001600160a01b03166108796109b1565b6001600160a01b0316146108bd576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b6033546040516000916001600160a01b031690600080516020611c48833981519152908390a3603380546001600160a01b0319908116909155603480549091169055565b6109096112c6565b6001600160a01b031661091a6109b1565b6001600160a01b03161461095e576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b609b805460ff60a01b1916600160a01b60ff8416021790556040517ff3d121ca0d4fa5acf57cf8a09acedf5326b6ca02f25764d2a05a4dba8e4a777e906109a6908390611be7565b60405180910390a150565b6033546001600160a01b031690565b609a546001600160a01b031690565b6001600160a01b038083166000908152609c6020526040902054839116610a085760405162461bcd60e51b81526004016102dc90611b35565b81620f42408162ffffff161115610a315760405162461bcd60e51b81526004016102dc90611a4e565b610a396112c6565b6001600160a01b0316610a4a6109b1565b6001600160a01b031614610a8e576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b6001600160a01b0384166000908152609e602052604090819020805462ffffff191662ffffff8616179055517f8129297a1a8d252870739804c1d9cdbc86121230ce172c23ec11a940ccab01ef90610647908690869061197f565b6001600160a01b038082166000908152609c60205260408120549091839116610b245760405162461bcd60e51b81526004016102dc90611b35565b50506001600160a01b039081166000908152609c60205260409020541690565b6034546001600160a01b0316610b89576040805162461bcd60e51b81526020600482015260056024820152640534f5f43360dc1b604482015290519081900360640190fd5b610b916112c6565b6034546001600160a01b03908116911614610bdc576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4360d01b604482015290519081900360640190fd5b6034546033546040516001600160a01b039283169290911690600080516020611c4883398151915290600090a360348054603380546001600160a01b03199081166001600160a01b03841617909155169055565b6067546001600160a01b031690565b6000610c496112c6565b6001600160a01b0316610c5a6109b1565b6001600160a01b031614610c9e576040805162461bcd60e51b8152602060048201526006602482015265534f5f434e4f60d01b604482015290519081900360640190fd5b6001600160a01b038381166000908152609c60205260409020541615610cd65760405162461bcd60e51b81526004016102dc90611a8d565b826001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610d0f57600080fd5b505afa158015610d23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d479190611927565b60ff16601214610d695760405162461bcd60e51b81526004016102dc90611b55565b6067546040516370a0823160e01b8152600019916001600160a01b03808716926370a0823192610d9d921690600401611943565b60206040518083038186803b158015610db557600080fd5b505afa158015610dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ded91906118f3565b14610e0a5760405162461bcd60e51b81526004016102dc906119ea565b609b54604080516318160ddd60e01b81529051600019926001600160a01b0316916318160ddd916004808301926020929190829003018186803b158015610e5057600080fd5b505afa158015610e64573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8891906118f3565b14610ea55760405162461bcd60e51b81526004016102dc90611af0565b609b546001600160a01b0390811690841610610ed35760405162461bcd60e51b81526004016102dc90611b77565b609a54609b54600091610ef4916001600160a01b039182169116868661138b565b90506001600160a01b038116610f1c5760405162461bcd60e51b81526004016102dc906119ca565b6000610f278261142b565b5050505050506001600160a01b031690508060001415610f595760405162461bcd60e51b81526004016102dc90611a6d565b6067546040516304fec10960e11b81526001600160a01b03878116926309fd821292610f8b9290911690600401611943565b60206040518083038186803b158015610fa357600080fd5b505afa158015610fb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdb9190611847565b610ff75760405162461bcd60e51b81526004016102dc90611ace565b6040516304fec10960e11b81526001600160a01b038616906309fd821290611023908590600401611943565b60206040518083038186803b15801561103b57600080fd5b505afa15801561104f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110739190611847565b61108f5760405162461bcd60e51b81526004016102dc90611aac565b609b546067546040516304fec10960e11b81526001600160a01b03928316926309fd8212926110c392911690600401611943565b60206040518083038186803b1580156110db57600080fd5b505afa1580156110ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111139190611847565b61112f5760405162461bcd60e51b81526004016102dc90611b12565b609b546040516304fec10960e11b81526001600160a01b03909116906309fd82129061115f908590600401611943565b60206040518083038186803b15801561117757600080fd5b505afa15801561118b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111af9190611847565b6111cb5760405162461bcd60e51b81526004016102dc906119a8565b6001600160a01b038086166000818152609c6020908152604080832080549588166001600160a01b031990961686179055609f8252808320805462ffffff8b1662ffffff199182168117909255609e90935281842080549093168117909255519092917f8b17db32f8ec22477a8f9475d5b92052ef2ce8c6c73ad79be1eb297a8fdd2ff191a4509392505050565b609b54600160a01b900460ff1690565b6001600160a01b038082166000908152609c602052604081205490918391166112a45760405162461bcd60e51b81526004016102dc90611b35565b50506001600160a01b03166000908152609e602052604090205462ffffff1690565b3390565b60006112d530611385565b15905090565b600054610100900460ff16806112f457506112f46112ca565b80611302575060005460ff16155b61133d5760405162461bcd60e51b815260040180806020018281038252602e815260200180611c1a602e913960400191505060405180910390fd5b600054610100900460ff16158015611368576000805460ff1961ff0019909116610100171660011790555b6113706114be565b8015611382576000805461ff00191690555b50565b3b151590565b6000806113998585856115ad565b80516020820151604051630b4c774160e11b81529293506001600160a01b03891692631698ee82926113d19290918890600401611957565b60206040518083038186803b1580156113e957600080fd5b505afa1580156113fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142191906117bf565b9695505050505050565b6000806000806000806000876001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561146f57600080fd5b505afa158015611483573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a79190611861565b959e949d50929b5090995097509550909350915050565b600054610100900460ff16806114d757506114d76112ca565b806114e5575060005460ff16155b6115205760405162461bcd60e51b815260040180806020018281038252602e815260200180611c1a602e913960400191505060405180910390fd5b600054610100900460ff1615801561154b576000805460ff1961ff0019909116610100171660011790555b611553611603565b600061155d6112c6565b603380546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020611c48833981519152908290a3508015611382576000805461ff001916905550565b6115b561175a565b826001600160a01b0316846001600160a01b031611156115d3579192915b50604080516060810182526001600160a01b03948516815292909316602083015262ffffff169181019190915290565b600054610100900460ff168061161c575061161c6112ca565b8061162a575060005460ff16155b6116655760405162461bcd60e51b815260040180806020018281038252602e815260200180611c1a602e913960400191505060405180910390fd5b600054610100900460ff16158015611690576000805460ff1961ff0019909116610100171660011790555b611370600054610100900460ff16806116ac57506116ac6112ca565b806116ba575060005460ff16155b6116f55760405162461bcd60e51b815260040180806020018281038252602e815260200180611c1a602e913960400191505060405180910390fd5b600054610100900460ff16158015611370576000805460ff1961ff0019909116610100171660011790558015611382576000805461ff001916905550565b60408051608081018252600080825260208201819052918101829052606081019190915290565b604080516060810182526000808252602082018190529181019190915290565b805180151581146103cf57600080fd5b805161ffff811681146103cf57600080fd5b6000602082840312156117ad578081fd5b81356117b881611bf5565b9392505050565b6000602082840312156117d0578081fd5b81516117b881611bf5565b600080604083850312156117ed578081fd5b82356117f881611bf5565b9150602083013561180881611bf5565b809150509250929050565b60008060408385031215611825578182fd5b823561183081611bf5565b9150602083013562ffffff81168114611808578182fd5b600060208284031215611858578081fd5b6117b88261177a565b600080600080600080600060e0888a03121561187b578283fd5b875161188681611bf5565b8097505060208801518060020b811461189d578384fd5b95506118ab6040890161178a565b94506118b96060890161178a565b93506118c76080890161178a565b925060a08801516118d781611c0a565b91506118e560c0890161177a565b905092959891949750929550565b600060208284031215611904578081fd5b5051919050565b60006020828403121561191c578081fd5b81356117b881611c0a565b600060208284031215611938578081fd5b81516117b881611c0a565b6001600160a01b0391909116815260200190565b6001600160a01b03938416815291909216602082015262ffffff909116604082015260600190565b6001600160a01b0392909216825262ffffff16602082015260400190565b901515815260200190565b602080825260089082015267135497d4139455d360c21b604082015260600190565b60208082526006908201526504d525f4e45560d41b604082015260600190565b6020808252600890820152674d525f4348424e4560c01b604082015260600190565b6020808252600790820152664d525f51544e4360c81b604082015260600190565b6020808252600790820152664d525f55464e4360c81b604082015260600190565b6020808252600590820152644d525f524f60d81b604082015260600190565b6020808252600690820152654d525f504e4960d01b604082015260600190565b60208082526005908201526404d525f45560dc1b604082015260600190565b602080825260089082015267135497d4139095d360c21b604082015260600190565b602080825260089082015267135497d0d39095d360c21b604082015260600190565b6020808252600890820152674d525f5154534e4560c01b604082015260600190565b602080825260099082015268135497d0d2139455d360ba1b604082015260600190565b6020808252600690820152654d525f504e4560d01b604082015260600190565b60208082526008908201526709aa4be84889c62760c31b604082015260600190565b60208082526005908201526426a92fa4a160d91b604082015260600190565b81516001600160a01b0316815260208083015162ffffff90811691830191909152604080840151821690830152606092830151169181019190915260800190565b62ffffff91909116815260200190565b60ff91909116815260200190565b6001600160a01b038116811461138257600080fd5b60ff8116811461138257600080fdfe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65648be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0a264697066735822122008da9e5fb530136c4f605bf1327fd94cd4183635e9fc837ac965266e3668907964736f6c63430007060033";

export class MarketRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarketRegistry> {
    return super.deploy(overrides || {}) as Promise<MarketRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MarketRegistry {
    return super.attach(address) as MarketRegistry;
  }
  connect(signer: Signer): MarketRegistry__factory {
    return super.connect(signer) as MarketRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketRegistryInterface {
    return new utils.Interface(_abi) as MarketRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketRegistry {
    return new Contract(address, _abi, signerOrProvider) as MarketRegistry;
  }
}
