import authReducer from '../auth';

describe('authReducer', () => {
  it('should set uid for login', () => {
    const action = {
      type: 'LOGIN',
      uid: '12321jlsdafj'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid)
  })

  it('should clear uid for login', () => {
    const action = {
      type: 'LOGOUT'
    };
    const state = authReducer({uid:'asdf'}, action);
    expect(state).toEqual({});
  })
})
