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
        <a href='#'><li>Servicios</li></a>
        <a href='#'><li>Trabajos espirituales</li></a>
        <a href='#'><li>Testimonios</li></a>
      </ul>
    </nav>
  );
}

export default FooterNav;