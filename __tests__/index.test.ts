import { async, sync } from '../index';

describe('main tests', () => {

  it('username()', () => {
    process.env.LOGNAME = 'unicorn';
    const u = async();
    return u.then(s => {
      expect(s).toBe('unicorn');
    });
  });

  it('username()', () => {
    process.env.LOGNAME = 'unicorn2';
    const u = sync();
    expect(u).toBe('unicorn2');
  });

});

describe('fallback', () => {

  beforeEach(() => {
    process.env.LOGNAME = '';
    process.env.USER = '';
    process.env.LNAME = '';
    process.env.USERNAME = '';
  });

  it('async', () => {
    const u = async();
    return u.then(s => {
      expect(s.length).toBeGreaterThan(1);
    });
  });

  it('sync', () => {
    const u = sync();
    expect(u.length).toBeGreaterThan(1);
  });

});
