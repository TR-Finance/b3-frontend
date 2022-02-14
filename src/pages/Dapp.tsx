import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import TopNav from '../components/nav/TopNav';
import { useEagerConnect, useInactiveListener } from '../hooks/connectorHooks';
import Withdraw from './Withdraw';
import Stake from './Stake';
import About from './About';
import BottomNav from '../components/nav/BottomNav';

const Dapp = () => {
  // Try to eagerly connect to an injected provider, if it exists and has granted access already
  const triedEagerConnect = useEagerConnect();

  // When there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
  useInactiveListener(!triedEagerConnect);

  return (
    <>
      <Box w="100%" h="8%" zIndex="99">
        <TopNav />
      </Box>
      <Box w="100%" h="92%">
        <Routes>
          <Route path="/" element={<Withdraw />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
      <Box position="fixed" z-index="99" bottom="25px" left="0" w="100%" h="8%">
        <BottomNav />
      </Box>
    </>
  );
};

export default Dapp;
