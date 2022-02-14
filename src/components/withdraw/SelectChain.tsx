import Select, { ActionMeta, SingleValue } from 'react-select';

import { Option, formatOptionLabel, selectTheme } from '../select';
import ETHLogo from '../../assets/logos/eth';
import ARBLogo from '../../assets/logos/arb';

export const chainOptions: readonly Option[] = [
  { value: 'Ethereum', label: 'Ethereum (mainnet)', icon: <ETHLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
  { value: 'Arbitrum', label: 'Arbitrum', icon: <ARBLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
];

interface Props {
  defaultSelectedChain: Option;
  onChangeChain: (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => void;
}

const SelectChain = ({ defaultSelectedChain, onChangeChain }: Props) => (
  <Select
    theme={selectTheme}
    defaultValue={defaultSelectedChain}
    options={chainOptions}
    formatOptionLabel={formatOptionLabel}
    onChange={onChangeChain}
  />
);

export default SelectChain;
