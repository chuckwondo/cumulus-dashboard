import React from 'react';
import PropTypes from 'prop-types';
import { collectionNameVersion } from '../../utils/format';

const BatchDeleteCompleteContent = ({
  results,
  error
}) => {
  return (
    <>
      {(results && results.length > 0) &&
        <>
          <p>Successfully deleted these collections:</p>
          <ul>
            {results.map((result, index) => {
              const {name, version} = collectionNameVersion(result);
              return <li key={index}>{name} / {version}</li>;
            })}
          </ul>
        </>
      }
      {error && <span className='error'>{error}</span>}
    </>
  );
};

BatchDeleteCompleteContent.propTypes = {
  results: PropTypes.array,
  error: PropTypes.string
};

export default BatchDeleteCompleteContent;
