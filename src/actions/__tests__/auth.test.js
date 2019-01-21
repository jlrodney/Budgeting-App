import { login, logout } from '../auth';

describe('auth actions', () => {
  it('should generate login action object', () => {
    const uid = 'asdfs';
    const action = login(uid);
    expect(action).toEqual({
      type: 'LOGIN',
      uid
    });
  });

  it('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
      type: 'LOGOUT'
    });
  });
});
