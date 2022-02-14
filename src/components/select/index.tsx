import { Box } from '@chakra-ui/react';
import { Theme, ThemeConfig } from 'react-select';

interface Option {
  readonly value: string;
  readonly label: string;
  readonly isDisabled?: boolean;
  readonly icon: JSX.Element;
}

export const selectTheme: ThemeConfig = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#B2D4FF',
  },
});

export const formatOptionLabel = ({ label, icon }: Option) => (
  <Box display="flex" flexDir="row" w="100%" h="100%">
    <Box alignSelf="center" paddingRight="5px">
      {icon}
    </Box>
    <Box color="black">{label}</Box>
  </Box>
);

export type { Option };
