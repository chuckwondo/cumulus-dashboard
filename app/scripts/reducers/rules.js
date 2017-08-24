'use strict';
import { set, del } from 'object-path';
import assignDate from './assign-date';
import {
  RULES,
  RULES_INFLIGHT,
  RULES_ERROR,

  RULE,
  RULE_INFLIGHT,
  RULE_ERROR,

  UPDATE_RULE,
  UPDATE_RULE_INFLIGHT,
  UPDATE_RULE_ERROR,
  UPDATE_RULE_CLEAR

} from '../actions';

export const initialState = {
  list: {
    data: [],
    meta: {},
    params: {},
    inflight: false,
    error: false
  },
  map: {},
  created: {},
  updated: {},
  deleted: {}
};

export default function reducer (state = initialState, action) {
  state = Object.assign({}, state);
  const { data, id } = action;
  switch (action.type) {
    case RULE:
      set(state, ['map', id, 'inflight'], false);
      set(state, ['map', id, 'data'], assignDate(data.results[0]));
      del(state, ['deleted', id]);
      break;
    case RULE_INFLIGHT:
      set(state, ['map', id, 'inflight'], true);
      break;
    case RULE_ERROR:
      set(state, ['map', id, 'inflight'], false);
      set(state, ['map', id, 'error'], action.error);
      break;

    case RULES:
      set(state, ['list', 'data'], data.results);
      set(state, ['list', 'meta'], assignDate(data.meta));
      set(state, ['list', 'inflight'], false);
      set(state, ['list', 'error'], false);
      break;
    case RULES_INFLIGHT:
      set(state, ['list', 'inflight'], true);
      break;
    case RULES_ERROR:
      set(state, ['list', 'inflight'], false);
      set(state, ['list', 'error'], action.error);
      break;

    case UPDATE_RULE:
      set(state, ['map', id, 'data'], data);
      set(state, ['updated', id, 'status'], 'success');
      break;
    case UPDATE_RULE_INFLIGHT:
      set(state, ['updated', id, 'status'], 'inflight');
      break;
    case UPDATE_RULE_ERROR:
      set(state, ['updated', id, 'status'], 'error');
      set(state, ['updated', id, 'error'], action.error);
      break;
    case UPDATE_RULE_CLEAR:
      del(state, ['updated', id]);
      break;
  }
  return state;
}
