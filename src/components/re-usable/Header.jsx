
import React from 'react';
import { Link } from '@reach/router';
import { ReactComponent as Logo } from '../../styling/assets/logo.svg';


const Header = () => {
  return (

    <header>
      <Link to="/">
        <Logo width={'60%'} height={'60%'} alt={'Chicken Tinder Logo'} />
      </Link>
        <Link to="/user-profile">
        <button>Profile</button>
      </Link>
    </header>

  );
};

export default Header;
