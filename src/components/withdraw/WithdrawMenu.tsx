import { Box, Button, HStack, Input } from '@chakra-ui/react';
import React, {Dispatch, SetStateAction, useState} from 'react';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
  setWithdrawAmt: Dispatcher<number>;
  setWithdrawAddy: Dispatcher<string>;
  setIsReady: Dispatcher<boolean>;
}

const WithdrawMenu = ({setWithdrawAmt, setWithdrawAddy,setIsReady}:Props) => {
const [withdrawAmount, setWithdrawAmount] = useState(0);
const [withdrawAddress, setWithdrawAddress] = useState('');

const onChangeWithdrawAmt = (event: React.ChangeEvent<HTMLInputElement>) => {
  setWithdrawAmount(parseFloat(event.target.value));
  setWithdrawAddress('SOME ADDRESS HERE')
};

  const onButtonClick = () => {
    if(withdrawAmount === undefined) {
      console.warn("You must enter a value that you wish to withdraw");
      return;
    }
    if(withdrawAddress === undefined) {
      console.warn("You must enter an address to which you wish to withdraw");
      return;
    }
    setWithdrawAmt(withdrawAmount);
    setWithdrawAddy(withdrawAddress);
    setIsReady(true);
  }

  return (
    <Box display="flex" flexDir="column" shadow="md" borderWidth="1px" p={5}>
      <Box alignItems="stretch" display="flex" flexDir="row" paddingBottom={5}>
        <Box h="100%">
          <Input type="number" value={withdrawAmount} onChange={onChangeWithdrawAmt} />
        </Box>
        <Box display="flex" alignItems="center">
          <span>&rarr;</span>
        </Box>
        <Box h="100%">
          <Input type="number" value={withdrawAmount} />
        </Box>
      </Box>
      <Button onClick={onButtonClick}>Withdraw</Button>
    </Box>
  );
};

export default WithdrawMenu;
