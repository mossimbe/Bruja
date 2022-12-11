import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import imgLogo from "../../../assets/images/crecimiento.png"

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
        <Link to="/">
          <Image
            src={imgLogo}
            alt="Open"
            width={52}
            height={52} />
        </Link>
    </div>
  );
}

export default Logo;