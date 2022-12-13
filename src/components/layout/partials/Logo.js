import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import imgLogo from "../../../assets/images/3.png"

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',"footer-nav",
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
        <Link to="/">
          <Image
            className="logo-primary"
            src={imgLogo}
            alt="Open"
            width={139}
            height={52} />
        </Link>
        <div {...props} className={classes}>
        </div>
    </div>
  );
}

export default Logo;