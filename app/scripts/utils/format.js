'use strict';
import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router';

export const nullValue = '--';

export const fullDate = function (datestring) {
  if (!datestring) { return nullValue; }
  return moment(datestring).format('MMM. Do, YYYY hh:mm:ss');
};

export const bigTally = function (numberString) {
  if ((!numberString && numberString !== 0) || numberString === nullValue || isNaN(numberString)) { return nullValue; }
  numberString = +numberString;
  if (numberString >= 1000) {
    return numeral(numberString / 1000).format('0,0') + 'K';
  } else {
    return numeral(numberString / 1000000).format('0,0') + 'M';
  }
};

export const tally = function (numberString) {
  if ((!numberString && numberString !== 0) || numberString === nullValue || isNaN(numberString)) { return nullValue; }
  numberString = +numberString;
  if (numberString < 1000) {
    return numberString;
  } else if (numberString < 100000) {
    return numeral(numberString).format('0,0');
  } else {
    return bigTally(numberString);
  }
};

export const seconds = function (numberString) {
  if (numberString === null || isNaN(numberString)) { return nullValue; }
  return +numberString.toFixed(2) + 's';
};

export const collectionSearchResult = function (collection) {
  const { collectionName } = collection;
  return (
    <li key={collectionName}>
      <Link to={`collections/collection/${collectionName}`}>{collectionName}</Link>
    </li>
  );
};

export const granuleSearchResult = function (granule) {
  const { granuleId } = granule;
  return (
    <li key={granuleId}>
      <Link to={`granules/granule/${granuleId}/overview`}>{granuleId}</Link>
    </li>
  );
};

export const pdrSearchResult = function (pdr) {
  const { pdrName } = pdr;
  return (
    <li key={pdrName}>
      <Link to={`pdrs/pdr/${pdrName}`}>{pdrName}</Link>
    </li>
  );
};
