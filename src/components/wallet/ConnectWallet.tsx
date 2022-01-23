import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import { Box, Button, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { MdOutlineCheckCircle } from 'react-icons/md';

import { injectedConnector } from '../../connectors';

const ConnectWallet = () => {
  const { chainId, account, activate, active, error } = useWeb3React<Web3Provider>();

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
          <Tag size="md" key="connected network" variant="subtle" colorScheme="cyan" borderRadius="full">
            {chainIdToNetwork()}
          </Tag>
          <Tag size="md" key="connected wallet" variant="subtle" colorScheme="cyan" borderRadius="full">
            <TagLeftIcon boxSize="15px" as={MdOutlineCheckCircle} color="green" />
            <TagLabel>
              {account?.substring(0, 6)}...{account?.substring(account.length - 4, account.length)}
            </TagLabel>
          </Tag>
        </>
      )}
      {!active && error && error instanceof UnsupportedChainIdError && <>Unsupported Network</>}
      {!active && !(error && error instanceof UnsupportedChainIdError) && (
        <Button colorScheme="blue" onClick={onClick}>
          Connect Metmask
        </Button>
      )}
    </Box>
  );
};

export default ConnectWallet;
