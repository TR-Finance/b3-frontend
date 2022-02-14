import { Button } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const MainPageLinks = () => {
  const location = useLocation();

  return (
    <>
      <Link to="/withdraw">
        <Button
          colorScheme="orange"
          variant={location.pathname === '/' || location.pathname === '/withdraw' ? 'outline' : 'ghost'}
        >
          Withdraw
        </Button>
      </Link>
      <Link to="/stake">
        <Button colorScheme="orange" variant={location.pathname === '/stake' ? 'outline' : 'ghost'}>
          Stake
        </Button>
      </Link>
      <Link to="/about">
        <Button colorScheme="orange" variant={location.pathname === '/about' ? 'outline' : 'ghost'}>
          About
        </Button>
      </Link>
    </>
  );
};

export default MainPageLinks;
