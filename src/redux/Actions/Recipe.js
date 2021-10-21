export const TYPES = {
  ADD_CONTENT_REQUEST: 'ADD_CONTENT_REQUEST',
  ADD_CONTENT_SUCCESS: 'ADD_CONTENT_SUCCESS',
};

export const ACTIONS = {
  addContentRequest: (params) => ({
    type: TYPES.ADD_CONTENT_REQUEST,
    payload: params,
  }),
};
