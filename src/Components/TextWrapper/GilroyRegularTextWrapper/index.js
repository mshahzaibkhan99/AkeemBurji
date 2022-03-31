import React from 'react';
import styles from './styles';
import TextHOC from '../TextHOC';

const GilroyRegular = props => {
  return (
    <TextHOC {...props} style={[styles.font, props.style]}>
      {props.children}
    </TextHOC>
  );
};
export default GilroyRegular;
