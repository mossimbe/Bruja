import React from 'react';
import classNames from 'classnames';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
      <a href="url"><li>Guias</li></a>
      <a href="url"><li>Trabajos Espirituales</li></a>
      <a href="url"><li>Testimonios</li></a>
      </ul>
    </nav>
  );
}

export default FooterNav;
