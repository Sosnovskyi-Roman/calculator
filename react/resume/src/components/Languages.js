import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const Languages = () => {
  return (
    <section>
      <h2><FontAwesomeIcon icon={faLanguage} /> Languages</h2>
      <ul>
        <li>English: B2 (Upper-Intermediate)</li>
        <li>Polish: C1 (Advanced)</li>
        <li>Ukrainian: Native</li>
      </ul>
    </section>
  );
};

export default Languages;
