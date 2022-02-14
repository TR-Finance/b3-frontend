import React, { useState } from 'react';
import { Badge, Box, Button, Input, Tag, toast, useToast } from '@chakra-ui/react';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ActionMeta, SingleValue } from 'react-select';
import { useEtherBalance } from '../../state/queries';
import SelectToken from './SelectToken';
import SelectChain, { chainOptions } from './SelectChain';
import { Option } from '../select';

interface Props {
  callWithdrawal: (address: string, amount: number) => void;
}

const WithdrawMenu = ({ callWithdrawal }: Props) => {
  const { chainId, account } = useWeb3React<Web3Provider>();

  const { data: etherBalance, isLoading: etherBalanceLoading } = useEtherBalance(chainId || 0, account || '');

  // Form data
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [withdrawToken, setWithdrawToken] = useState('ETH');
  const [fromChain, setFromChain] = useState('Arbitrum');
  const [toChain, setToChain] = useState('Ethereum');

  const showWarningToast = useToast({
    duration: 2000,
    status: 'warning',
    variant: 'subtle',
  });

  const onChangeWithdrawAmt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawAmount(parseFloat(event.target.value));
  };

  const onChangeWithdrawToken = (newValue: SingleValue<Option>, _: ActionMeta<Option>) => {
    setWithdrawToken(newValue?.value || '');
  };

  const onChangeFromChain = (newValue: SingleValue<Option>, _: ActionMeta<Option>) => {
    setFromChain(newValue?.value || '');
  };

  const onChangeToChain = (newValue: SingleValue<Option>, _: ActionMeta<Option>) => {
    setToChain(newValue?.value || '');
  };

  const onClickWithdraw = () => {
    if (!withdrawAmount) {
      showWarningToast({ title: 'You must enter a value that you wish to withdraw.' });
      return;
    }

    if (!account) {
      showWarningToast({ title: 'Unable to find your wallet address.' });
      return;
    }

    if (withdrawToken !== 'ETH') {
      showWarningToast({ title: 'Only ETH is available to withdraw at this time.' });
      return;
    }

    if (fromChain !== 'Arbitrum' || toChain !== 'Ethereum') {
      showWarningToast({ title: 'Only Arbitrum to Ethereum is currently supported (change From and/or To).' });
      return;
    }

    callWithdrawal(account, withdrawAmount);
  };

  return (
    <Box display="flex" flexDir="column" shadow="dark-lg" borderWidth="1px" p={5}>
      <Box alignItems="stretch" display="flex" flexDir="row" paddingBottom={5}>
        <Box h="100%" minWidth="75px" alignSelf="center">
          Withdraw
        </Box>
        <Box h="100%">
          <Input type="number" value={withdrawAmount} onChange={onChangeWithdrawAmt} />
        </Box>
        <SelectToken onChangeToken={onChangeWithdrawToken} />
      </Box>
      <Box alignItems="stretch" display="flex" flexDir="row" paddingBottom={5}>
        <Box h="100%" minWidth="75px" alignSelf="center">
          From
        </Box>
        <Box h="100%" w="100%">
          <SelectChain defaultSelectedChain={chainOptions[1]} onChangeChain={onChangeFromChain} />
        </Box>
      </Box>
      <Box alignItems="stretch" display="flex" flexDir="row" paddingBottom={5}>
        <Box h="100%" minWidth="75px" alignSelf="center">
          To
        </Box>
        <Box h="100%" w="100%">
          <SelectChain defaultSelectedChain={chainOptions[0]} onChangeChain={onChangeToChain} />
        </Box>
      </Box>
      <Button onClick={onClickWithdraw}>Withdraw</Button>
    </Box>
  );
};

export default WithdrawMenu;
