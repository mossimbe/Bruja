import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterSocial from './partials/FooterSocial';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between bg-color text-xxs invert-order-desktop">
            <div className="footer-copyright text-color-primary">Copyright © 2022 <a href="https://cruip.com" className='text-color-primary'>Bashna</a></div> 
          </div>
        </div>
      </div>
      <FloatingWhatsApp
        phoneNumber="+13056486102"
        accountName="Maestro"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar="2.png"
        statusMessage="Respondemos en 1 hora..."
        chatMessage="Hola, ¿en qué te puedo ayudar?"
        placeholder="Escribe un mensaje..."
      />
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;