import { Box, Center, Heading } from '@chakra-ui/react';
import Select from 'react-select';

import ETHLogo from '../../assets/logos/eth';
import DAILogo from '../../assets/logos/dai';
import USDTLogo from '../../assets/logos/usdt';
import USDCLogo from '../../assets/logos/usdc';

interface Props {
  value: string;
  label: string;
  icon: any;
}

const CurrencyOptions = [
  { value: 'ETH', label: 'ETH', icon: <ETHLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
  { value: 'USDC', label: 'USDC', icon: <USDCLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
  { value: 'USDT', label: 'USDT', icon: <USDTLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
  { value: 'DAI', label: 'DAI', icon: <DAILogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
];

const formatOptionLabel = ({ label, icon }: Props) => (
  <div style={{ display: 'flex' }}>
    <div style={{ marginTop: '6%' }}>{icon}</div>
    <div style={{ marginLeft: '10px', color: '#ccc' }}>{label}</div>
  </div>
);

const NetworksMenu = () => (
  <Box m={25}>
    <Center flexDir="row" width="100%">
      <Heading m={15}>Withdraw</Heading>
      <Select defaultValue={CurrencyOptions[0]} options={CurrencyOptions} formatOptionLabel={formatOptionLabel} />
    </Center>
  </Box>
);

export default NetworksMenu;
