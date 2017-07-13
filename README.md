# express-multi-package-demo

Sample project to illustrate an Express multi-package project.

## Running
```sh
cd express-multi-package-demo
npm install
./node_modules/.bin/lerna bootstrap
DEBUG=main-package:* ./packages/main-package/bin/www
```
