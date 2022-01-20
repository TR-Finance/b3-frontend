import { useQuery } from 'react-query';
import { getProvider } from '../connectors';

/**
 * Gets the amount of ether owned by the given address.
 */
export const useEtherBalance = (chainId: number, address: string) =>
  useQuery(getEtherBalanceQueryKey(chainId, address), () => getEtherBalance(chainId, address));
const getEtherBalanceQueryKey = (chainId: number, address: string) => ['getEtherBalance', chainId, address];
const getEtherBalance = async (chainId: number, address: string) => {
  const provider = getProvider(chainId);
  if (!address) throw new Error(`No address on chainId: ${chainId}`);
  const data = await provider.getBalance(address);
  return data;
};
export default useEtherBalance;

// export const getNumber = (num: number) =>
//   useMutation("someKey", () => getNum(num));
// const getNum = async (num: number) => {
//   return num + 1;
// };