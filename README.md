# React API Project

# Objective

- Create a single page (or more if you’d really like) react app that makes at least one API call

---

## Resources

Feel free to use whatever API you can find but if you’re stuck for ideas you can check this github page. 

Company API is strictly prohibited!  Try to find something you’re interested in, it makes the project a lot more fun. 😎

[https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

The official React docs are also a great resource (duh!) 

[Getting Started - React](https://reactjs.org/docs/getting-started.html)

You don’t need to make a beautiful website but if you’d like some inspiration I find Dribbble is a great place to start.  If honing your HTML/CSS skills is something you’d like to do one great way is copying a design you like. 

[Dribbble - Discover the World's Top Designers & Creative Professionals](https://dribbble.com/)

---

## Getting Started

I have a template project that you can use to get started or you can start from scratch.  If you are forking my project you’ll need to run `npm install` once you’ve opened up the project in VS Code.

### Setup

```jsx
npx create-react-app my-app-name
```

Then cd into your project folder

```jsx
cd my-app-name
```

If you have VS Code set up you should be able to type this into the terminal and it should open your project.  If not open up VS Code and find your new folder.

```jsx
code
```

The only package that you need to install is `axios` this is what we will use to make API calls. Otherwise it is up to you if you’d like to install any other libraries. 

[https://github.com/axios/axios](https://github.com/axios/axios)

Inside VS Code open up the terminal window with `cmd + j` and then run 

```jsx
npm install axios
```

Now if you go to `package.json` you should see that `axios` is part of your dependencies list. 

### Creating Your API File

You could set up all this code in your `App.js` file but to keep things tidy we’ll put all our api calls in their own file. 

In the `src` folder create a new file called `apis.js` 

In that file you’ll want a similar set up to something like this

```jsx
import axios from 'axios';
const url = 'https://your.fancyapi.com'

export const getDataFromAPI = async (query) => {
    const { data } = await axios.get(url)
  return data;
}
```

<aside>
💡 If you need to send back dynamic data you can use formatted strings like so

`https://your.fancyapi.com/${yourVariable}/restOfUrl`

The key is using back ticks ``

</aside>

You then want to import your API into your App.js file

```jsx
import logo from './logo.svg';
import './App.css';
import { getDataFromAPI } from "./api";
```

Your first challenge is to figure out how to hook up your API to some sort of functionality in your app 🤓  I’ve got an example in my demo and a good place to start looking into is `componentDidMount` if you are using a traditional React Class component or `React.useEffect` if you are using a React Hook 👀  You also may want to do something different if you don’t want to call the API when the page first loads! The template I created is a reactionary API call, these two methods will help you if you want something on the page when it renders for the first time. 

Now to start the project locally all you need to do is run 

```jsx
npm run start
```

---

## Go Wild 🌿

Be free and create whatever your heart desires! 

### Bonus points awarded to those who take on the challenge of Typescript! 🥇