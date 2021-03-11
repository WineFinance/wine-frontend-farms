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
]

export default farms
