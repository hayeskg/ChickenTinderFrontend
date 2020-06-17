import React from 'react';
import { Link } from '@reach/router';
import { ReactComponent as Logo } from '../../styling/img/logo.svg';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <Logo width={'90%'} height={'90%'} alt={'Chicken Tinder Logo'} />
      </Link>
    </header>
  );
};

export default Header;
