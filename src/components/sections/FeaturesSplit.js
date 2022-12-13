import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Magia Blanca',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                Comunicaciones espirituales
                  </div>
                <h3 className="mt-0 mb-12 text-color-default">
                Comunicacion con seres queridos muertos
                  </h3>
                <p className="m-0">
                Te ayudamos a comunicarte con tus seres queridos que ya no están muchas veces las personas que se van quedan con muchas cosas pendientes para decirnos Y eso hace que ellos no tengan paz y tranquilidad en el más allá ayudamos que por medio de esta consulta puedas aclarar tus dudas y esa persona descanse Cómo se lo merece en la eternidad
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/espiritu.png')}
                  alt="Features split 01"
                  width={488}
                  height={376} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Salud
                  </div>
                <h3 className="mt-0 mb-12 text-color-default">
                  Mejorar tu salud
                  </h3>
                <p className="m-0">
                Hay enfermedades impuestas o  postizas que  realizan las personas inescrupulosas por hacernos daños que no tienen cura personas que intentan que estemos mal de salud y estemos mal  en todos los ámbitos, nosotros te ayudamos a descubrir quién te hizo el mal a bloquearlo y mejorar tu vida</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/corazonyisus.png')}
                  alt="Features split 02"
                  width={488}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Trabajos de amor
                  </div>
                <h3 className="mt-0 mb-12 text-color-default">
                  Chamuel Arcángel del amor
                  </h3>
                <p className="m-0">
                Los amarres de amor que realizamos con Chamuel no afecta a su pareja ,Chamuel es el  Arcángel del amor, el ayuda a renovar tu relacion, el deseo perdido, el amor consumido y protege tu relacion de todos los daños de personas que quieran arruinar tu relacion.</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/Chamuel.png')}
                  alt="Features split 03"
                  width={400}
                  height={350}
                   />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Limpiezas espirituales
                  </div>
                <h3 className="mt-0 mb-12 text-color-default">
                  Limpieza espiritual
                  </h3>
                <p className="m-0">
                La limpias angelicales que realizamos te ayudan a desbloquearte en la salud el dinero y el amor ayudando así ah que tu vida mejore notablemente</p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  style={{ width: '400px', height: '550px' }}
                  src={require('./../../assets/images/mercurio-hermes.gif')}
                  alt="Features split 03" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;