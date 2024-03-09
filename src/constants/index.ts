export enum Network {
  DEVNET = 'sui:devnet',
  TESTNET = 'sui:testnet',
  MAINNET = 'sui:mainnet',
}

export const ZERO_ADDRESS =
  '0x0000000000000000000000000000000000000000000000000000000000000000';

export const OBJECT_RECORD = {
  [Network.DEVNET]: {
    IPX_PACKAGE_ID:
      '0x7526f2ab7890276a8bdf4c3167683e2df079781fc3c3a6e1e0bdb95722014954',
    IPX_STORAGE:
      '0xa12806b9e0e9084e9fff6f91801a5d8fdc89429430eea5b144e5cc17cc460f77',
    MONEY_MARKET_PACKAGE_ID:
      '0x17e7b5737632e118793ac9a1bb9e889cd29e5002ff7b746c536c43cb31154f9a',
    MONEY_MARKET_STORAGE:
      '0xa70b1489df815f80ba9374ac8e2c5b82a1d5f1c359f67b81c0badf58c109c225',
    MONEY_MARKET_INTEREST_RATE_STORAGE:
      '0x9ae03e799747edbbdc271e6f63a4c747ab693e69626e9c9d71b338aa07abc715',
    ORACLE_PACKAGE_ID:
      '0xbd5fc6e8494555f8f01e8b75e920532b560b7a71eabd439aa2d0dbeae7b81653',
    ORACLE_STORAGE:
      '0x6e69cd7dd8b19a999dc614a011cf5faac66941527b8bec131ac0175fa67240dc',
    SUID_PACKAGE:
      '0x02871464ed71b80969b32f2b23c981b085866485ba5368c0f59588fcc0dbce47',
    SUID_STORAGE:
      '0x60d44e96cc24ccf72b782af4f8e5f8f43cf00803df2daadf3203270da1140bf3',
    SUID_METADATA:
      '0x6dc8ef21627f1858a264f7efe443a5776a1ee67ada33a3b0916a6653921cab2b',
    SUI_METADATA:
      '0x587c29de216efd4219573e08a1f6964d4fa7cb714518c2c8a0f29abfa264327d',
    ETH_METADATA:
      '0x816b700d97dd1cab1f0c13c1f6ac9cbc67065fcbc30f02f0b424f4d0a14d9b95',
  },
  [Network.TESTNET]: {
    IPX_PACKAGE_ID:
    '0x57e5622e674c7fd98303516920ac4250a0667e486e3617f71c8b448f1b032aed',
    IPX_STORAGE:
    '0x4aebcc39ce03cab35c2ef3635aa68d99320f69febe0596e7d61695313f2190d6',
    MONEY_MARKET_PACKAGE_ID:
      '0x17e7b5737632e118793ac9a1bb9e889cd29e5002ff7b746c536c43cb31154f9a',
    MONEY_MARKET_STORAGE:
      '0xa70b1489df815f80ba9374ac8e2c5b82a1d5f1c359f67b81c0badf58c109c225',
    MONEY_MARKET_INTEREST_RATE_STORAGE:
      '0x9ae03e799747edbbdc271e6f63a4c747ab693e69626e9c9d71b338aa07abc715',
    ORACLE_PACKAGE_ID:
      '0xbd5fc6e8494555f8f01e8b75e920532b560b7a71eabd439aa2d0dbeae7b81653',
    ORACLE_STORAGE:
      '0x6e69cd7dd8b19a999dc614a011cf5faac66941527b8bec131ac0175fa67240dc',
    SUID_PACKAGE:
      '0x02871464ed71b80969b32f2b23c981b085866485ba5368c0f59588fcc0dbce47',
    SUID_STORAGE:
      '0x60d44e96cc24ccf72b782af4f8e5f8f43cf00803df2daadf3203270da1140bf3',
    SUID_METADATA:
      '0x6dc8ef21627f1858a264f7efe443a5776a1ee67ada33a3b0916a6653921cab2b',
    SUI_METADATA:
      '0x587c29de216efd4219573e08a1f6964d4fa7cb714518c2c8a0f29abfa264327d',
    ETH_METADATA:
      '0x816b700d97dd1cab1f0c13c1f6ac9cbc67065fcbc30f02f0b424f4d0a14d9b95',
  },
  [Network.MAINNET]: {
    IPX_PACKAGE_ID:
      '0x49d87b9af35c4fef28def2cd65884aa9c49bb4eedbcee647f4dafb5c8f36ba57',
    IPX_STORAGE:
      '0xd3c1e174400409c2613559f0309d82fb2a97a1bbc77d6ea39aa1e11f4f6d67d1',
    MONEY_MARKET_PACKAGE_ID:
      '0x17e7b5737632e118793ac9a1bb9e889cd29e5002ff7b746c536c43cb31154f9a',
    MONEY_MARKET_STORAGE:
      '0xa70b1489df815f80ba9374ac8e2c5b82a1d5f1c359f67b81c0badf58c109c225',
    MONEY_MARKET_INTEREST_RATE_STORAGE:
      '0x9ae03e799747edbbdc271e6f63a4c747ab693e69626e9c9d71b338aa07abc715',
    ORACLE_PACKAGE_ID:
      '0xbd5fc6e8494555f8f01e8b75e920532b560b7a71eabd439aa2d0dbeae7b81653',
    ORACLE_STORAGE:
      '0x6e69cd7dd8b19a999dc614a011cf5faac66941527b8bec131ac0175fa67240dc',
    SUID_PACKAGE:
      '0x02871464ed71b80969b32f2b23c981b085866485ba5368c0f59588fcc0dbce47',
    SUID_STORAGE:
      '0x60d44e96cc24ccf72b782af4f8e5f8f43cf00803df2daadf3203270da1140bf3',
    SUID_METADATA:
      '0x6dc8ef21627f1858a264f7efe443a5776a1ee67ada33a3b0916a6653921cab2b',
    SUI_METADATA:
      '0x587c29de216efd4219573e08a1f6964d4fa7cb714518c2c8a0f29abfa264327d',
    ETH_METADATA:
      '0x816b700d97dd1cab1f0c13c1f6ac9cbc67065fcbc30f02f0b424f4d0a14d9b95',
  },
};