# username

[![NPM](https://nodei.co/npm/@valudio/username.png?mini=true)](https://nodei.co/npm/@valudio/username/)

> Get the username of the current user. This is a fork of `https://github.com/sindresorhus/username`. 
This forks exists due to the necessity of having ES5 code in the published package (because the Uglify plugin of Webpack was complaining about not understanding ES2015). By creating this Typescript version we also get the Typings for free.


## Install

```
$ npm install --save @valudio/username
```


## Usage

```ts
import { sync, async } from '@valudio/username';

async().then(username => {
	console.log(username);
	//=> 'valudio'
});

console.log(sync());
```


## API

First tries to get the username from the `SUDO_USER` `LOGNAME` `USER` `LNAME` `USERNAME` environment variables. Then falls back to `$ id -un` on macOS / Linux and `$ whoami` on Windows, in the rare case none of the environment variables are set. The result is cached.

### username()

Returns a promise for the username.

### username.sync()

Returns the username.


## Original code

Thanks to [sindresorhus](https://github.com/sindresorhus) for the original code.


## License

MIT © [Valudio](http://valudio.com)
