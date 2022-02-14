import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { Box, Button, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { MdOutlineCheckCircle } from 'react-icons/md';
import { utils } from 'ethers';

import { injectedConnector } from '../../connectors';
import { useEtherBalance } from '../../state/queries';

const ConnectWallet = () => {
  const { chainId, account, activate, active, error } = useWeb3React<Web3Provider>();

  const { data: etherBalance, isLoading: etherBalanceLoading } = useEtherBalance(chainId || 0, account || '');

  const onClick = () => {
    activate(injectedConnector);
  };

  const chainIdToNetwork = () => {
    if (error && error instanceof UnsupportedChainIdError) return 'Unsupported Network';

    switch (chainId) {
      case 1:
        return 'Ethereum';
      case 31337:
        return 'Hardhat (dev)';
      case 4:
        return 'Rinkeby';
      case 1337:
        return 'Localhost (dev)';
      case 421611:
        return 'Arbitrum Rinkeby';
      default:
        return 'Unsupported Network';
    }
  };

  return (
    <Box w="100%" p={1} display="flex" justifyContent="flex-end">
      {active && (
        <>
          <Tag size="md" key="connected network" variant="subtle" colorScheme="cyan" borderRadius="full" mr={1}>
            {chainIdToNetwork()}
          </Tag>
          <Tag size="md" key="wallet balance" variant="subtle" colorScheme="cyan" borderRadius="full">
            {parseFloat(utils.formatEther(etherBalance || 0)).toFixed(4)} ETH
            <Tag size="md" key="connected wallet" variant="subtle" colorScheme="blue" borderRadius="full">
              <TagLeftIcon boxSize="15px" as={MdOutlineCheckCircle} color="green" />
              <TagLabel>
                {account?.substring(0, 6)}...{account?.substring(account.length - 4, account.length)}
              </TagLabel>
            </Tag>
          </Tag>
        </>
      )}
      {!active && error && error instanceof UnsupportedChainIdError && <>Unsupported Network</>}
      {!active && !(error && error instanceof UnsupportedChainIdError) && (
        <Button colorScheme="orange" onClick={onClick}>
          Connect Metamask
        </Button>
      )}
    </Box>
  );
};

export default ConnectWallet;
