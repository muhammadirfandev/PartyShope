import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagramSquare,faTiktok,faTwitter} from '@fortawesome/free-brands-svg-icons';



import styles from './styles.module.scss'

export const Socialicons = () => {
  return (
    <div className={styles.socialicons}>
      <FontAwesomeIcon icon={faFacebook}  size="xl" /> 
      <FontAwesomeIcon icon={faInstagramSquare} size="xl" />
      <FontAwesomeIcon icon={faTwitter} size="xl" />
      <FontAwesomeIcon  icon={faTiktok} size="xl"/>
    </div>
  );
};
