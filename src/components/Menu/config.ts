import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://becoswap.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://becoswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://becoswap.com/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://becoswap.com/referrals',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: "Overview",
        href: 'https://becoswap.info',
      },
      {
        label: "Tokens",
        href: 'https://becoswap.info/tokens',
      },
      {
        label: "Pairs",
        href: 'https://becoswap.info/pairs',
      },
      {
        label: "Accounts",
        href: 'https://becoswap.info/accounts',
      },
    ],
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://becoswap.com/lottery',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: 'https://becoswap.com/launchpad',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://docs.becoswap.com/products/nft-marketplace',
  },

  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://docs.becoswap.com/products/cross-chain-bridge',
  },

  {
    label: 'Becochain',
    icon: 'ChainIcon',
    href: 'https://docs.becoswap.com/products/becochain',
  },

  {
    label: 'Stocks',
    icon: 'StockIcon',
    href: 'https://docs.becoswap.com/products/stocks',
  },

  {
    label: 'Supply Chain',
    icon: 'SupplyChainIcon',
    href: 'https://docs.becoswap.com/products/supplychain',
  },
  
  {
    label: 'Games',
    icon: 'NftIcon',
    href: 'https://docs.becoswap.com/products/games',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.becoswap.com/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://snapshot.org/#/becoswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/becoswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.becoswap.com',
      },
      {
        label: 'Blog',
        href: 'https://becoswap.medium.com',
      }
    ],
  },

]

export default config
