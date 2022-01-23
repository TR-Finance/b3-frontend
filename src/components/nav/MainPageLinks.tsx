import { Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const MainPageLinks = () => {
  const location = useLocation();

  return (
    <>
      <Link to="/withdraw">
        <Button
          colorScheme="red"
          variant={location.pathname === '/' || location.pathname === '/withdraw' ? 'solid' : 'ghost'}
        >
          Withdraw
        </Button>
      </Link>
      <Link to="/stake">
        <Button colorScheme="red" variant={location.pathname === '/stake' ? 'solid' : 'ghost'}>
          Stake
        </Button>
      </Link>
      <Link to="/about">
        <Button colorScheme="red" variant={location.pathname === '/about' ? 'solid' : 'ghost'}>
          About
        </Button>
      </Link>
    </>
  );
};

export default MainPageLinks;
