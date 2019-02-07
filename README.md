# React Training

## Hi!
What will we go over today?

* What is React
* What is TypeScript
* React Basics
	* props
	* state
	* lifecycles
	* Simple and complex components
	

We will be doing all of this in the context of React Native, as we build a small app that allows us to search for art! We will use the Rijksmuseum API since it is free and extremely easy to use.

## What to install!
In order to do this crash course we will need a few things installed. 

1. Node and Yarn, which should be installed on your computers already.
2. `npm i -g expo-cli`
3. Expo Client mobile app.

## What is React?
React is a JavaScript library that allow us to build component based applications. We can take these components and compose are application in a nice reusable manner. This patter of building applications is becoming extremely popular. React using a subset of JavaScript called JSX that looks basically like HTML

```javascript
const App = () => {
	return (
		<div>
			<h1>Hi!!</h1>
		</div>	
	)
}
```

This would render a `div` and `h1` to the page, but in reality is doesn’t actually take that `div` and just put it on the page. We have to transpire the JSX to browser readable JavaScript. This simple component above, actually looks something like this.

```javascript
var App = function App() {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h1",
			null,
			"Hi!!"
		)
	);
};
```

All JSX elements are just JavaScript  functions that we compose together to make our views! In the browser they will build HTML, in the Native world, it will build the appropriate components.

## What is TypeScript?
TypeScript is a superset of JavaScript. It introduces a type system as well as other features not found in JavaScript currently.  At a basic level TypeScript allows you to write Typed JavaScript.

```typescript
const add = (a,b) => {
  return a + b;
};
```

This is valid TypeScript, notice how there is nothing different about it though? All JavaScript is valid TypeScript, the TypeScript compiler will infer the types for you.

#### Annotations

But we can also annotate our code to take full advantage of TypeScript.

```typescript
const add = (a: number, b: number) : number => {
  return a + b;
};
```

Now we can take full advantage of the TypeScript compiler here, say we try and pass a `number` and a `string`

```typescript
add(1,'5'); //Argument of type "5" is not assignable to parameter of type 'number'
```

We will get early hints in our editors about this. We can use the built in types to annotate our code.

```typescript
boolean
string
number
object
null
undefined
```

We can also also define these as arrays of types:

```typescript
boolean[]
string[]
number[]
object[]
null[]
undefined[]
Array<number>
```

There are also a few more types that we will not be getting into

```typescript
any  
never
enum
```

We can define our own interfaces to represent our data when a regular type doesn’t work.

```typescript
interface Teacher {
	name: string;
  courses: string[];
}
```

#### Generics, WE BOUGHT A ZOO!

TypeScript has Generics as well, say we are creating a program for the new zoo we just bought. We will need enclosures:

```typescript
class Enclosure<T> {
	animals = [];
	add = (animal: T) => this.animals.push(animal);
	remove = (): T => this.animals.shift();
}
```

Here we can create a generic enclosure for our zoo, and with it we can pass it any type:

```typescript
class Zebra {
	stripes: boolean;
	legs: number;
}
  
class Lion {
	roar: boolean;
	legs: number;
}
```

We can then create these new enclosures like this:

```typescript 
const zebraEnclosure = new Enclosure<Zebra>;
const lionEnclosure = new Enclosure<Lion>;
```


We will see generics pop up for us when we start working with React Components. Now that we have done a quick intro to React and TypeScript, let’s actually start writing some React.


## The app!
The app we will be building will have 2 views, one to search for art, and one to display the art. The goal is to show a bunch of the core React basics through this app.

### Getting started. 

First we need to clone our starter repo `github.com/rchristiani/rn-ts-boilerplate`

Then in that directory we will run `yarn` this will start installing all our dependencies from `npm`. Open the project up in your editor as well, we can go over the files!

### The files.

The folder structure has a bunch going on here, there are a couple important configuration files to look at. `tsconfig.json` and `tslint.json` are used define how TypeScript is used in our project, and what rules we want to follow or what rules to ignore.

The `package.json` file has all our dependencies in it, and when we add more we get them listed there.

The `app.json` file is used for the React Native configuration, allowing us to set stuff like the app icon and name.

The `App.tsx` is the entry point for our application, it basically just imports and exports our app. We will be working in the `src` folder for the majority of this workshop.

The `src/App.tsx` file is the start of our project.

```typescript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TypeScript</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

Run `yarn start` to start the app, we will then be able to run the iOS simulator or run it right on our device via the Expo mobile app.

In this file we have several things going on, first we `import React from ‘react’` this is pulling in React from the `node_modules` folder that was created when we ran `yarn` and hold all our dependencies.  We also pull in a few components from the `react-native` library. 

With a simulator running we can change code in the files, and it will update the app. 

In this file we see: 

```typescript
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TypeScript</Text>
      </View>
    );
  }
}
```

There is a LOT going on on that first line, but if remove the `export default` we have a class called `App` that extends the base `React.Component` class.  

React components come in a couple of flavours. Complex or Simple, sometimes referred to as Stateful or Dumb. The component above is would a complex component, meaning we can do a lot more inside of it. We will see both as the day goes on.

The `render` method is used to return our JSX, here we are returning two `react-native` components, the `View` and `Text` components.

One last things before we get into it. Styles in React Native are done not with CSS stylesheets but with the `Stylesheet`  class from React Native, the styles available are almost all the ones you would find in regular browser CSS.

```typescript
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
```

### Screen components.

For our app today we will have two screens, the `Home` and the `SearchRestults` screens. Let’s start with the `Home` component, first lets create a new folder called `screens` and a file called `Home.tsx` 

```typescript
import React from 'react';
import { View, Text } from 'react-native';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

export default Home;
```

Also do the same for the `SearchResults` component:

```typescript
import React from 'react';
import { View, Text } from 'react-native';

class SearchResults extends React.Component {
  render() {
    return (
      <View>
        <Text>SearchResults</Text>
      </View>
    )
  }
}

export default SearchResults;
```


Now that we have the two screens we need to set them up so we can transition between them. To do this we will use the `react-navigation` package. This hasn’t been added to our project yet so we need to run `yarn add react-navigation`. This will install it and add it to our `package.json` file. We will also need to install the ` “@types/react-navigation` package. `yarn add @types/react-navigation`, this package comes from DefinitelyTyped a great resource for library type definitions. 

We will change the `App.tsx` file to look like this now.

```typescript
import Home from './screens/Home';
import SearchResults from './screens/SearchResults';
import {createStackNavigator, createAppContainer} from 'react-navigation';


const AppNavigation = createStackNavigator({
  Home: {
    screen: Home
  },
  Search: {
    screen: SearchResults
  }
});

export default createAppContainer(AppNavigation)
```

The `react-navigation` package provides a bunch of things for us to use, in our case we use `createStackNavigator` and `createAppContainer` to allow for transitions between screens. 

## Fleshing out the home screen
For the Home screen we will need to have an area to type in our search. Let’s import the `TextInput` and `Button` component from `react-native` to act as our form elements.

```typescript
import {View, Text, TextInput, Button} from 'react-native';
```

In the `render` method we can now add these two elements.

```typescript
render() {
  return (
    <View>
      <Text>Art!!</Text>
      <TextInput />
      <Button />
    </View>
  )
}
```

It should now look something like this. We need to add some props to  these components to configure them they way we want. For the `Button` element we need to add a `title` prop to tell it what text to show in the 

```typescript
<Button 
	title="Search"
/>
```

### What are Props?
Props allow us to pass information to a component, if it is a component we are consuming, like `Button`, it lets us hook into actions like the `onPress` event, change the `title` or `color`. Components that we create can also receive props, this can be for data purposes or functionality. We will create our own component later that will accept props.

Let’s add the rest of the props we need for `TextInput` and `Button`.

```typescript
<TextInput 
  value={this.state.search}
  onChangeText={this.handleTextChange}
  onSubmitEditing={this.search}
/>
<Button 
  title="Search"
  onPress={this.search}
  color='white'
/>
```

You will notice a couple references to functions in here `this.search` and `this.handleTextChange` , let’s stub these out so our code runs again. 

```typescript
class Home extends React.Component {
	handleTextChange() {}
	search() {}
  render() {
    return (
		<View>
			<Text>Home</Text>
			<TextInput 
		  		value={this.state.search}
				onChangeText={this.handleTextChange}
				onSubmitEditing={this.search}
			/>
			<Button 
				title="Search"
				onPress={this.search}
				color='white'
			/>
      </View>
    )
  }
}
```

You will also notice `this.state.search`, now we need to talk about State!

### What is State!?

Props allow us pass information to a component for it to consume in some manner. State allows us to track information in our components. A common use for state would be something that changes over time due to an action in the component. Things like data coming from an API or form data is typically saved in state. 

The `TextInput` has a `value` prop with the value of `this.state.search` let’s create this empty state.

Since we are using TypeScript we need to define an `interface` that defines the shape of our state. Under out `import` statements at the top of the file lets add these two interfaces.

```typescript
interface State {
  search: string;
}

interface Props {}
```

Our `State` interface has one property `search` and the type of that property will be `string`. We also have an empty `Props` interface we will be using as well.

Let’s now change the definition of our component to include these interfaces.  And set some initial state, when working with state it is very important to set initial state since your state might be used to dictate your UI and if there is nothing there you will get errors.

```typescript
class Home extends React.Component<Props,State> {
  state = {
    search: ''
  }
	//...
}
```

We can use class props to add some `state` to our app, in this case an empty string! Try typing in that input now, WOW IT WORKS!…

It doesn’t work! We have created a controlled input now, and in order to update the value, we need to update the text as it changes. We already have the `onTextChanged` prop assigned to a `this.handleTextChange`  function. So we will use that to update the text. From looking at the React Native docs, I know that this callback function will get passed the text we want, so can change the `handleTextChange` to look like this.

```typescript
handleTextChange(search: string) {
	this.setState({search})
}
```

Our function accepts a parameter we will call `search`, it will be of type `string` and inside the body of the function we will set the state. The syntax here is `this.setState({search})` is the same as.

```typescript
this.setState({
	search: search
});
```

Thanks ES6! 

Great, now typing in there should work…there is one last thing we have to do. The hotly debated `this` keyword is not set to the value we want, because the handler function is being executed by the `onTextChanged` function and not the class, the execution context is not ideal for us! So we need to bind out function to the class.

Inside of our class we will create a constructor and bind it in there, there are many other ways to do this binding, I am just showing you this way right now.

```typescript
constructor(props: Props) {
	super(props);
	this.handleTextChange = this.handleTextChange.bind(this);
}
```


Constructors are called when a new instance of the class is created, and we can do work in here like binding our functions! Notice how we say that props in of type `Props` this is important so that the compiler knows what properties it has. 

NOW it will work! Let’s add some styles before we do the search. In the import statement for `react-native` add `StyleSheet` and at the bottom of our file add these styles:

```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 35,
    fontWeight:'bold',
    textTransform: 'uppercase',
    marginBottom: 25,
    color: 'white'
  },
  search: {
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    width: '80%',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 25,
    padding: 10
  }
});
```

We can then use these styles in our render, the render method should now look like this:

```diff
render() {
	return (
- 	<View>
+		<View style={styles.container}>
-			<Text>Art!!</Text>
+			<Text style={styles.appTitle}>Art!!</Text>
	    	<TextInput 
+		      style={styles.search}
		      value={this.state.search}
		      onChangeText={this.handleTextChange}
		      onSubmitEditing={this.search}
		    />
		    <Button 
		      title="Search"
		      onPress={this.search}
		      color='white'
		    />
	  </View>
	)
}
```

Now you are thinking to yourself, made the guy a designer! I know, I know, I did 4 years of illustration in college, and it shows!

Let’s get the search working, we want to be able to type into the form and then navigate to our second screen to search for that value. 

The `search` method will be pretty small, we will take the value of the `search` from state and pass it to our new screen via the `react-navigation` `navigate` function.

```typescript
search() {
	const {search} = this.state;
  this.props.navigation.navigate('Search',{search})
}
```

All of our screens get passed the `navigation` prop that provides all the functionality we need to move between screens. The `navigate` function is used to say what screen to go to, we can also pass it some parameters. In this case we pass it the search value. 

You will notice, if you have TypeScript set up properly, that your editor will not like `navigation`, if you use VSCode you can hover over the res line and see that it does not recognize the prop. We could expand our `Props` interface to include the `navigation` prop, but we don’t know what IT has on it. Thankfully the `react-navigation` package provides of with type definitions for these. 

Add the import statement to the top of the file.

```typescript
import {NavigationScreenProps} from 'react-navigation';
```

And under our `interface Props {}` add the following. 

```typescript
type ComposedProps = Props & NavigationScreenProps
```

We create a new type called `ComposedProps` that is an intersection of both `Props` and `NavigationScreenProps`.

We now need to change two things in our code.

```diff
- class Home extends React.Component<Props,State> {
+	class Home extends React.Component<ComposedProps,State> {

- constructor(props: Props)
+ constructor(props: ComposedProps)
```

Now everyone is happy! Typing into and submitting the `TextInput` should now transition from `Home` to `SearchResults`.

Here is the full `Home.tsx` file.

```typescript
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

interface State {
  search: string;
}

interface Props {}

type ComposedProps = Props & NavigationScreenProps;

class Home extends React.Component<ComposedProps,State> {
  state = {
    search: ''
  }
  constructor(props: ComposedProps) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.search = this.search.bind(this);
  }
  handleTextChange(search: string) {
    this.setState({search})
  }
  search() {
    const {search} = this.state;
    this.props.navigation.navigate('Search',{search})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Art!!</Text>
        <TextInput 
          style={styles.search}
          value={this.state.search}
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.search}
        />
        <Button 
          title="Search"
          onPress={this.search}
          color='white'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5252',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 35,
    fontWeight:'bold',
    textTransform: 'uppercase',
    marginBottom: 25,
    color: 'white'
  },
  search: {
    fontSize: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    width: '80%',
    textAlign: 'center',
    borderRadius: 10,
    marginBottom: 25,
    padding: 10
  }
});

export default Home;
```


## Search Results!

Now that we are getting to the Search screen from the Home screen we need to take the `search` param and make a request to an API to get the data. We will make a simple REST GET request today to the Rijksmuseum API. 

First things first, how do we get the `search` param.  Let’s import the `NavigationScreenProps` and define our `Props` interface.


```typescript
import React from 'react';
import { View, Text } from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

interface Props {}

type ComposedProps = Props & NavigationScreenProps;

class SearchResults extends React.Component<ComposedProps> {
  render() {
		 const search = this.props.navigation.getParam('search');

    return (
      <View>
        <Text>SearchResults {search}</Text>
      </View>
    )
  }
}

export default SearchResults;
```

Notice the `{}` here, we haven’t talk about this yet, but this syntax allows us to flip into evaluating our JavaScript code, as opposed to JSX. When we type in the `TextInput` and go to the Search screen, we should now see the search value there. 

The general idea for this component is to take the `search` param and send a request to the API to get art based on that query. We will be creating a simple component to display our results as well. First thing we need to do is make the request to our API.

### Lifecycles

A key to understanding React is understanding the lifecycles a component goes through. Lifecycles are exposed to us by methods we can override and perform logic in. There are a lot of method available to us, then we will use is `componentDidMount` this is fired once our component is rendered. This method is the place were we can make async requests. There are also methods for things like `componentDidUnmount` or `shouldComponentUpdate`. 

Under our import statements we need to place some variables.


``` typescript
const API_URL = 'https://www.rijksmuseum.nl/api/en/collection';
const API_KEY = 'pUaGTYo5';
```

This is our key and base url for the API. Let’s create a `componentDidMount` in our component.

```typescript
componentDidMount() {
  const search = this.props.navigation.getParam('search');
  fetch(`${API_URL}?q=${search}&key=${API_KEY}&format=json`)
    .then(res => res.json())
}
```

Here we grab the param and make a `fetch` request…yeah they made that happen?!(mean girls?). And then we concat the URL together. Fetch returns a promise and from that we need to tell it we want the response to be json. Now that the data is coming in we need to set it state so we can render it. 

To start we will create a `State` interface and an `ArtObjects` interface. The `ArtObjects` interface will live in a new folder called `utilties` and we will call the file `types.ts`. I want to put it there because I know I will need it in another file later, so let’s make it accessible to more components. 

```typescript
export interface ArtObject {
  id: string;
  title: string;
  webImage: {
    url: string;
  };
  principalOrFirstMaker: string,
  hasImage: boolean;
}
```

This shape is defined from the API that we are using, and in this case it is just the data we want from the request.When we need to import that:

```typescript
import {ArtObject} from '../utilities/types';
```

And when we make our `State` interface we will use it in there.

```typescript
interface State {
	searchResults: ArtObject[];
}
```


Now inside our `componentDidMount` we can update the `fetch` request to set state.

```typescript
componentDidMount() {
  const search = this.props.navigation.getParam('search');
  fetch(`${API_URL}?q=${search}&key=${API_KEY}&format=json`)
    .then(res => res.json())
	  .then(({artObjects:searchResults}) => this.setState({searchResults}))
}
```

Something to note, is that anytime state is set in a React component the React engine will decide if it should update the view, so use using `this.setState` here and then using that state in our render will automatically re render the view!

We can use the state in our `render` method like this.

```typescript
render() {
  const search = this.props.navigation.getParam('search');
  const {searchResults} = this.state;
  return (
    <View>
      <Text>SearchResults {search}</Text>
      {searchResults.map((art) => {
        return <Text>{art.title}</Text>
      })}
    </View>
  )
}
```

When rendering an array of values we need to use a `map` or some method to return an array of the values we want, we can not use a `for` loop here.  We should now see a list of art titles on the page for our search. 

We could build our entire ui in this map, but we should create a component that we can use. Make one more files in the `components` folder called `SingleArt.tsx`. For simplicities sake here is the whole component. 

```typescript
import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import {ArtObject} from '../utilities/types';

const SingleArt = (props: ArtObject) => {
  const {title, webImage: {url},principalOrFirstMaker} = props;
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: url}}
        style={{
          height:150,
          width:150,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{principalOrFirstMaker}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 5
  },
  textContainer: {
    marginLeft: 15,
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    flexShrink: 1,
    marginBottom: 10
  }
})

export default SingleArt;
```

There is one thing I could like to point out about this component though. This is what we would called a functional, simple, or dumb component. It does not store and state, it just consumes props. Because of this we can just go ahead and use a function that returns some JSX, that function is passed some props. The shape of those props will be our `ArtObject`.  



The final code:

```typescript
import React from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {ArtObject} from '../utilities/types';
import SingleArt from '../components/SingleArt';

interface Props {}

type ComposedProps = Props & NavigationScreenProps

interface State {
  searchResults: ArtObject[]
}

const API_URL = 'https://www.rijksmuseum.nl/api/en/collection';
const API_KEY = 'pUaGTYo5';

class Search extends React.Component<ComposedProps,State> {
  state = {
    searchResults: []
  }
  componentDidMount() {
    const search = this.props.navigation.getParam('search');
    fetch(`${API_URL}?q=${search}&key=${API_KEY}&format=json`)
      .then(res => res.json())
      .then(({artObjects:searchResults}) => this.setState({searchResults}));
  }
  render() {
    const search = this.props.navigation.getParam('search');
    const {searchResults} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.searchTitle}>Search Results for: {search}</Text>
        <ScrollView>
          {searchResults
            .filter((art: ArtObject) => art.hasImage)
            .map((art: ArtObject) => <SingleArt key={art.id} {...art}/>)}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8A80',
    flex: 1
  },
  searchTitle: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default Search;
```












