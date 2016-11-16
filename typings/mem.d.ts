declare module 'mem' {

  type F = <T>(arg:T) => T;

  const mem: F;
  export = mem;
}
