import React from 'react';
import { Box, Center, Flex, Heading, Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { useEtherBalance } from '../../state/queries';
import StakeMenu from '../../components/stake/StakeMenu';
import {
  ADDRESS_ARBITRUM_ArbitrumWithdrawalV1,
  ADDRESS_ETHEREUM_BBBEthPoolV1,
  ADDRESS_ETHEREUM_BridgeBackBetterV1,
} from '../../constants/addresses';
import ETHPoolABI from '../../abis/BBBEthPoolV1.json';
import { BBBEthPoolV1 } from '../../abis/types';

const Stake = () => {
  const { chainId, account, active } = useWeb3React<Web3Provider>();
  const { data: etherBalance, isLoading: etherBalanceLoading } = useEtherBalance(chainId || 0, account || '');

  if (!active) {
    return <div>Please connect your wallet</div>;
  }

  const onClickStake = async (address: string, amount: number) => {
    if (chainId !== 1337 && chainId !== 4) {
      console.warn(
        "You're not running on Rinkeby or mainnet. Staking must send transactions to \
              either Ethereum Rinkeby or mainnet. Use the option '--network <rinkeby|mainnet>'",
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

    const ethWallet = await new ethers.Wallet(process.env.REACT_APP_RINKEBY_PRIVATE_KEY as string, ethProvider);

    const stakeContract = (await new ethers.Contract(
      ADDRESS_ETHEREUM_BBBEthPoolV1,
      ETHPoolABI,
      ethWallet,
    )) as BBBEthPoolV1;
    // TODO: Call provideLiq contract function
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" w="100%" h="100%">
      <Heading as="h1" textAlign="center" size="lg" letterSpacing="tighter">
        Stake
      </Heading>
      <br />
      <Center>
        <StakeMenu />
      </Center>
      <Flex justify="center">
        <Button m={35}>Approve</Button>
        <Button m={35} onClick={onClickStake}>
          Stake
        </Button>
      </Flex>
    </Box>
  );
};

export default Stake;
