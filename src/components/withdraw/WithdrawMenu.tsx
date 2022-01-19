import { Box, Button, HStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const WithdrawMenu = () => {
  const [withdrawAmt, setWithdrawAmt] = useState(0);

  const onChangeWithdrawAmt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWithdrawAmt(parseFloat(event.target.value));
  };

  return (
    <Box display="flex" flexDir="column" shadow="md" borderWidth="1px" p={5}>
      <Box alignItems="stretch" display="flex" flexDir="row" paddingBottom={5}>
        <Box h="100%">
          <Input type="number" value={withdrawAmt} onChange={onChangeWithdrawAmt} />
        </Box>
        <Box display="flex" alignItems="center">
          <span>&rarr;</span>
        </Box>
        <Box h="100%">
          <Input type="number" value={withdrawAmt} onChange={onChangeWithdrawAmt} />
        </Box>
      </Box>
      <Button>Withdraw</Button>
    </Box>
  );
};

export default WithdrawMenu;
