# Redux VS react-stateful

## Redux app size

Redux adds `5.63 kB` (+15,3%) to a simple counter project

```bash
yarn run v1.3.2
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  42.35 KB (+5.63 KB)  build/static/js/main.ad5f7ac6.js
  299 B                build/static/css/main.c17080f1.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr

✨  Done in 10.66s.
```

## react-stateful app size

react-stateful adds `1.11 kB` (+3%) to a simple counter project

```bash
yarn run v1.3.2
$ react-scripts build
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  37.83 KB (+1.11 KB)  build/static/js/main.a5e64ef1.js
  299 B                build/static/css/main.c17080f1.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr

✨  Done in 9.43s.

```


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
