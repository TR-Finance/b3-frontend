import React, {ReactComponentElement} from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import Select, {components} from 'react-select';
import ETHLogo from '../../assets/logos/ethereum';
import ARBLogo from '../../assets/logos/arb';

interface Props {
     value: string,
     label: string,
     icon: any
}

  const options = [
    { value: "ETH", label: "ETH", icon: <ETHLogo style={{maxWidth: '15px', maxHeight: '15px'}}/> },
    { value: "ARB", label: "ARB1", icon: <ARBLogo style={{maxWidth: '15px', maxHeight: '15px'}}/>},
  ];

  const formatOptionLabel = ({ label, icon }: Props) => (
  <div style={{ display: "flex" }}>
    <div>{icon}</div>
    <div style={{ marginLeft: "10px", color: "#ccc" }}>
      {label}
    </div>
  </div>
);

const NetworksMenu = () => {

  return (
    <Box m={25}>
      <Center flexDir="row" width={650} >
          <Select
            defaultValue={options[0]}
            options={options}
            formatOptionLabel={formatOptionLabel}
            defaultMenuIsOpen
            menuPlacement="auto"
          />
          <Heading m={15}>on</Heading>
          <Select />
      </Center>
    </Box>
  );
};

export default NetworksMenu;