import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const AdditionalInformation = () => {
  return (
    <section>
      <h2><FontAwesomeIcon icon={faInfoCircle} /> Additional Information</h2>
      <p>Driver's License: Category B</p>
    </section>
  );
};

export default AdditionalInformation;
