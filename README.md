# Blessed Buy

Blessed Buy is the place where everything is in stock! This application is an implementation of creating a full-stack eCommerce shopping cart. The UI utilizes React.js and is built to be mobile friendly. All styling is done from scratch using CSS. The backend API is set up using Express.js and MongoDB. The state is persisted by utilizing the local storage so if a user returns to the page their items will still be in their cart. Redux is used to centralize state. Actions are dispatched when a user adds or removes items from their cart, and when the client interacts with the server to get products or product information. More is to be completed as there is still the option of deploying live, create sign-up and sign-in functionality, and add checkout logic. The application was built with the MERN Stack. 🔥

[Visit site](https://dylvaz.github.io/blessed-buy)

Demo gif of UI:
![Blessed Buy UI](./frontend/src/assets/blessedBuyVid2.gif)

## Starting the Server

Navigate to the root of the project

Create a .env file that contains the following variables:

```
PORT=
MONGO_URI=
```

run\
`yarn install`\
`yarn server`

## Starting the Frontend

Navigate to into frontend

run\
`yarn install`

Naviagate back to the root of the project

In package.json add a proxy key with the value set to the url of your backend you set up earlier.

run\
`yarn client`

## Starting Both Server and Frontend Concurrently

Be sure to have ran `yarn install` in both the root and frontend directory.

run\
`yarn dev`

navigate to [localhost:3000](http://localhost:3000) to see the app!
