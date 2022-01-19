import { Routes, Route } from 'react-router-dom';
import TopNav from '../components/nav/TopNav';
import { useEagerConnect, useInactiveListener } from '../hooks/connectorHooks';
import Withdraw from './Withdraw';
import Stake from './Stake';
import About from './About';

/**
 * TODO: Make components for a page that will:
 * 1. Connect wallet
 * 2. Read balance and facilitate sending a tx to withdraw eth from L2 to L1
 * 3. Facilitate the user sending a tx that redirects their withdraw to our contract address.
 *      See https://github.com/OffchainLabs/arbitrum/blob/afa60b9ab2f8645fb292251d74f2adb42ecde047/packages/arb-bridge-peripherals/contracts/tokenbridge/ethereum/gateway/L1ArbitrumExtendedGateway.sol#L59-L76
 * 4. Listen for that tx to be successful from the WithdrawRedirected event: https://github.com/OffchainLabs/arbitrum/blob/afa60b9ab2f8645fb292251d74f2adb42ecde047/packages/arb-bridge-peripherals/contracts/tokenbridge/ethereum/gateway/L1ArbitrumExtendedGateway.sol#L50-L57
 * 5. Let the user know it was successful
 */
const Dapp = () => {
  // Try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEagerConnect = useEagerConnect();

  // When there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEagerConnect);

  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Withdraw />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/stake" element={<Stake />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Dapp;
