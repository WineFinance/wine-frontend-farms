import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WINE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x975b0A200e212109A7cCFB1aa4A15BF314369036',
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'WINE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xe0f3CBB1107cEEb5F9EE87F51A432ea400122298',
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'WINE-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xE04Ca976dd208d9fD06a3D2fEa814C4958D8b72F',
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.WINE,
    quoteTokenAdresses: contracts.wine,
  },
   {
    pid: 3,
    risk: 5,
    lpSymbol: 'WINE-SUSHI LP',
    lpAddresses: {
      97: '',
      56: '0xc983Fda7169c7651159fbEe72B24564d4D82510E',
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.WINE,
    quoteTokenAdresses: contracts.wine,
  },
  {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WINE',
    lpAddresses: {
      97: '',
      56: '0x975b0A200e212109A7cCFB1aa4A15BF314369036', // WINE-BUSD LP
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'WINE-BTCB',
    lpAddresses: {
      97: '',
      56: '0x9D8f01F3eFEE538ad22107fC56575Caf4c28BBD2', // WINE-BTCB LP
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.WINE,
    quoteTokenAdresses: contracts.wine,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'WINE-USDT',
    lpAddresses: {
      97: '',
      56: '0x8B947135D333A0C4dAd3625Dc04d5B3e21687530', // WINE-USDT LP
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.WINE,
    quoteTokenAdresses: contracts.wine,
  },
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'WINE-USDC',
    lpAddresses: {
      97: '',
      56: '0xd012e29f1A933De9fa2914fFE44245EE950a85D3', // WINE-USDC LP
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.WINE,
    quoteTokenAdresses: contracts.wine,
  },
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'WINE-ETH',
    lpAddresses: {
      97: '',
      56: '0x522d3363Aef8FEc1CA4c242010e71a98AaEA7b03', // WINE-ETH LP
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.WINE,
    quoteTokenAdresses: contracts.wine,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // WINE-ETH LP
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 {
    pid: 10,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x975b0A200e212109A7cCFB1aa4A15BF314369036', // WINE-BUSD LP
    },
    tokenSymbol: 'WINE',
    tokenAddresses: {
      97: '',
      56: '0x09eb8438451c1C617b6051EED015db988af6Df2A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 15,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 5,
    lpSymbol: 'XVS-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x41182c32F854dd97bA0e0B1816022e0aCB2fc0bb',
    },
    tokenSymbol: 'XVS',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'REEF-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58B58cab6C5cF158f63A2390b817710826d116D0',
    },
    tokenSymbol: 'REEF',
    tokenAddresses: {
      97: '',
      56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 18,
    risk: 5,
    lpSymbol: 'HARD-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x9f40e8a2fcaa267a0c374b6c661e0b372264cc3d',
    },
    tokenSymbol: 'HARD',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19,
    risk: 5,
    lpSymbol: 'DODO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9e642d174b14faea31d842dc83037c42b53236e6',
    },
    tokenSymbol: 'DODO',
    tokenAddresses: {
      97: '',
      56: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 20,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
