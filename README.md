# Simple Form - frontend api validation

[Create React App](https://create-react-app.dev/) starter - in Typecript using Yarn for dependencies

[Formik](https://formik.org/) for form control and validation control

### How to run

#### Pre-requisites

- [yarn](https://yarnpkg.com/getting-started) is installed
- local environment is fully configured (TODO: this right here)

### Install dependencies and start in development mode

```
yarn install
yarn start
```

### Create a production optimized build

```
yarn build
```

### validation (current state)

- email is fully validated for format
- only account usernames that will pass validation are `twitter` and `twitch` respectively
- uppon submit - data is logged to the browser console ONLY
- submit page not complete

## TODOs

- use frontend library to make form presentable - blueprintjs maybe
- add backend calls with ajax
- mobile scalability
- center the cute chinchilla

### wishlist todos

- configure secrets & build pipeline
- dockerfile/nginx configs for deployment
- observability & alerting
