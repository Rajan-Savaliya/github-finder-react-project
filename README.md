# Github Finder

> React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management and is part of the "Modern React Front To Back" Udemy course

## Usage

### `npm install`

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder.

## `netlify deploy`

> npm run build

> npm i -g netlify-cli

> netlify init

> netlify deploy --prod

#### `https://githubfinderrss.netlify.com`


## `github deploy`

> 1>
>git remote add origin `github-new-repo-link`


> 2>
`npm setting` :- package.json

## i}
  "private": true,
>   "homepage": "https://Rajanpatel123/github-finder-react-project",
this homepage add it -- 
private is include not need to add it

## ii}
   "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
>    "deploy": "gh-pages -d build"
  },
-- deploy: script add it


> 3>
> `npm i gh-pages`

> 4>
> `npm run deploy`

> 5>
> `git add -A`
> `git commit -m "bla bla bla"`

> `git push origin master`# github-finder-react-app-code


> statice site deploy in==>netlify//github//firebase anyplace at all.....
