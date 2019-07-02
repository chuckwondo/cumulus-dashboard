'use strict';
import { set } from 'object-path';

import {
  ADD_INSTANCE_META
} from '../actions/types';

export const initialState = {};

export default function reducer (state = initialState, action) {
  state = { ...state };
  const { data } = action;
  switch (action.type) {
    case ADD_INSTANCE_META:
      if (data.cmr.environment) set(state, 'cmrEnvironment', data.cmr.environment);
      if (data.cmr.provider) set(state, 'cmrProvider', data.cmr.provider);
      break;
  }
  return state;
}
