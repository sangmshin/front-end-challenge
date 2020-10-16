Hello, I want to share how this coding challenge from thinx.com was built. It was very exciting one week project by the way. Hopefully I land the role with thinx!

Here are some notable packages I used:
- Create-React-App: helps me get started with React
- classnames: tools for classnames
- debounce: better perform with window events
- node-sass: for styling with SASS
- idx: util function for traversing
- redux: state management tool (single source of truth!)
- react-slick & slick-carousel: provides Slider components

I didn't use any CSS library as the assignment requested. 
Since assets (images) were provided internally as well as text data, I did not have to fetch using redux-saga or redux-thunk. I thought of creating an endpoint to fetch json that contains all data but thought it would be a bit overkill. I tried my best to treat this app as if this is real-world project in terms of scalability and component re-usability. Almost all components were thoroughly tested using Enzyme and Jest. 

I tried my best to follow the visual from the two png files, but found a bit hard to display desktop view from 1024px to 1200px since there are not enough space to lay two elements on each side of a model. Instead, I had them both stacked in the left column and had the model shots on the left side. I thought it would create a nicer balance between empty space and elements.

Although none of the elements have link/url as requested, I wrapped them with a '<Link>' components whereever appropriate. (clickable and but no outgoing url).

Thank you for your time to read this and hope you like the site I built.
Please let me know your thought.










___________________________________________________________________________________________________
___________________________________________________________________________________________________
___________________________________________________________________________________________________


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
