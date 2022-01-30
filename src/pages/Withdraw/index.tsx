import React from 'react';
import { ethers, utils } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { Network, Web3Provider } from '@ethersproject/providers';

import { Box, Center, Heading, Text } from '@chakra-ui/react';

import { useEtherBalance } from '../../state/queries';
import ArbitrumABI from '../../abis/ArbitrumWithdrawalV1.json';
import { ArbitrumWithdrawalV1 } from '../../abis/types';
import {
  ADDRESS_ETHEREUM_BridgeBackBetterV1,
  ADDRESS_ETHEREUM_BBBEthPoolV1,
  ADDRESS_ARBITRUM_ArbitrumWithdrawalV1,
} from '../../constants/addresses';
import WithdrawMenu from '../../components/withdraw/WithdrawMenu';
import NetworksMenu from '../../components/withdraw/NetworksMenu';

const Withdraw = () => {
  const { chainId, account, active } = useWeb3React<Web3Provider>();

  const { data: etherBalance, isLoading: etherBalanceLoading } = useEtherBalance(chainId || 0, account || '');

  if (!active) {
    return <div>Please connect your wallet</div>;
  }

  const Withdrawal = async (address: string, amount: number) => {
    if (chainId !== 1337 && chainId !== 421611) {
      console.warn(
        "You're not running on Arbitrum One (mainnet) or Arbitrum Rinkeby (testnet). Fast withdrawals must " +
          "send transactions to the protocol's contract on either Arbitrum-Rinkeby or Arbitrum-mainnet. " +
          "Use the option '--network <arbitrumTestnet|arbitrumOne>'",
      );
      return;
    }

    // Make sure the contracts are deployed (the deploy step saves the ABI and address to a file)

    if (!window.ethereum) {
      return;
    }

    const ethProvider = new ethers.providers.AlchemyProvider(
      'rinkeby',
      process.env.REACT_APP_ETHEREUM_RINKEBY_PROVIDER_URL,
    );

    if ((await ethProvider.getCode(ADDRESS_ETHEREUM_BBBEthPoolV1)) === '0x') {
      console.error('You need to deploy the BBBEthPoolV1 contract first');
      return;
    }
    if ((await ethProvider.getCode(ADDRESS_ETHEREUM_BridgeBackBetterV1)) === '0x') {
      console.error('You need to deploy the BridgeBackBetterV1 contract first');
      return;
    }

    console.log(`Connecting wallet to provider on ${chainId}...`);
    const arbProvider = new ethers.providers.AlchemyProvider(
      'arbitrum-rinkeby',
      process.env.REACT_APP_ARBITRUM_RINKEBY_PROVIDER_URL,
    );

    const arbWallet = await new ethers.Wallet(process.env.REACT_APP_RINKEBY_PRIVATE_KEY as string, arbProvider);

    const withdrawalContract = (await new ethers.Contract(
      ADDRESS_ARBITRUM_ArbitrumWithdrawalV1,
      ArbitrumABI,
      arbWallet,
    )) as ArbitrumWithdrawalV1;

    await withdrawalContract.withdraw(address, { value: BigInt('1000000000000000000') * BigInt(amount) });
  };

  // TODO: Use drop-down menu on mobile. See: https://chakra-ui.com/docs/features/responsive-styles
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" w="100%" h="100%">
      <Center flexDir="column">
        <Heading fontSize="xl">B^3 Fast Withdrawal</Heading>
        <Text mt={4}>Withdraw your ETH from Arbitrum without waiting 7 days</Text>
        <Text mt={4}>Total Liquidity (max amount you can withdraw): 0 ETH</Text>
        <Text mt={4}>Wallet balance: {parseFloat(utils.formatEther(etherBalance || 0)).toFixed(4)} ETH</Text>

        <NetworksMenu />
        <WithdrawMenu callWithdrawal={Withdrawal} />
      </Center>
    </Box>
  );
};

export default Withdraw;
