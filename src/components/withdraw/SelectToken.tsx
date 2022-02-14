import Select, { ActionMeta, SingleValue } from 'react-select';

import { Option, formatOptionLabel, selectTheme } from '../select';
import ETHLogo from '../../assets/logos/eth';
import DAILogo from '../../assets/logos/dai';
import USDTLogo from '../../assets/logos/usdt';
import USDCLogo from '../../assets/logos/usdc';

const currencyOptions: readonly Option[] = [
  { value: 'ETH', label: 'ETH', icon: <ETHLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
  { value: 'USDC', label: 'USDC', icon: <USDCLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
  { value: 'USDT', label: 'USDT', icon: <USDTLogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
  { value: 'DAI', label: 'DAI', icon: <DAILogo style={{ maxWidth: '15px', maxHeight: '15px' }} /> },
];

interface Props {
  onChangeToken: (newValue: SingleValue<Option>, actionMeta: ActionMeta<Option>) => void;
}
const SelectToken = ({ onChangeToken }: Props) => (
  <Select
    theme={selectTheme}
    defaultValue={currencyOptions[0]}
    options={currencyOptions}
    formatOptionLabel={formatOptionLabel}
    onChange={onChangeToken}
  />
);

export default SelectToken;
