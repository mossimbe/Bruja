import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Testimonios',
    paragraph: 'Testimonios de viajeros espirituales satisfechos con su guia'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <Image
                  className="img-testimonial"
                  src={require('./../../assets/images/wppscreen.jpg')}
                  alt="Features split 03"
                  width={350}
                  height={300}
                   />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Steven li</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">testimonio</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <Image
                  className="img-testimonial"
                  src={require('./../../assets/images/wppscreen.jpg')}
                  alt="Features split 03"
                  width={350}
                  height={300}
                   />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Yeison Garzon</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Testimonio</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <Image
                  className="img-testimonial"
                  src={require('./../../assets/images/wppscreen.jpg')}
                  alt="Features split 03"
                  width={350}
                  height={300}
                   />
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Diego Garcia</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Testimonio</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;