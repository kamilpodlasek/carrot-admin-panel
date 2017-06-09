# Carrot Admin Panel
### Test task for SkyGate

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Used technologies:

- **React**

- **IndexedDB** via **Dexie.js** (instead of LocalStorage, because IndexedDB works with larger amounts of data and has got asynchronous API)

- **Redux** with **redux-thunk**

- **styled-components**

- **Bootstrap**

- **Jest** with **Enzyme**

- **Node.js**

- and few smaller libraries


Project consists of one main container connected to Redux, and three components resposible for showing profile creation form, table of profiles and single profile row.
Components use styled-components to ensure clean project structure.
Store, actions and reducers are stored in appropriate folders, same as utility functions, tests, node server and stylesheet (which is kept very simple in order to prevent global namespace pollution).

## Installation

Assuming you have got node.js and create-react-app installed globally, all you need to do to setup this project is:

`git clone git@github.com:kamilpodlasek/carrot-admin-panel.git`  
`cd carrot-admin-panel`  
`npm install`
or
`yarn install`  

To launch the development server:  
`npm start`
or
`yarn start`  

To build project:  
`npm run build`
or
`yarn build`  

To run tests:  
`npm test`
or
`yarn test`  

I suggest using Yarn instead of npm ([sitepoint.com/yarn-vs-npm](https://www.sitepoint.com/yarn-vs-npm/)).  

After successful build, `node server` starts Node.js server at port 9000. Application will be available at [localhost:9000](http://localhost:9000).  

## Tests

For 20000 profiles with carrots amount varying between 0 and 10000 sorting with counting sort takes ~20ms. Sorting time is outputted to the console on every sort.  
Rendering such amount of table rows unfortunately takes much more time.  
For testing purposes, you can generate profiles by uncommenting line 33 in `containers/App.js`.  
Function `generateProfiles` takes two optional arguments - profiles amount and a maximum carrots amount (there will be at least one profile with 0 value, and one with the maximum value).  
The default parameters are 20000 profiles and the maximum of 10000 carrots.
