# State Control

> OBJECT

1. Knownledge what is **ContextAPI**
</br></br>

## What is ContextAPI

![contextAPI1]()

Assume control same state different branch component. It is implemented if root have state, and send it each branch for props. But brach is bigger, state more, it is harder and messy. **ContextAPI** is solution.

![contextAPI2]()

ContextAPI save global state and provide. It's one of Flux pattern. ref [this(facebook)](https://facebook.github.io/flux/docs/in-depth-overview/)</br></br>ContextAPI consist **Provider** & **Consumer**. Provider send state in parent components, consumer get state in child component. Consumer find Provider throgh going up to parent component.

```javascript
const { Provider, Consumer } = React.createContext('');

function Parent() {
	return (
		<div>
			<Provider value="value">
				<Child />
			</Provider>
		</div>
	);
}

function Child() {
	return (
		<Consumer>
			{value => <p>{value}</p>}
		</Consumer>
	);
}
```

`createContext()` work like `useState()`. Parameter is initial value, return `Provider` & `Consumer`. `Provider` have value attr, `Consumer` get it with function parameter.</br></br>React re-render everytime change `Provider`'s state. It make issue of performance, so use **React.memo()**. `React.memo()` make component re-rendering when it really need. Ref [this]().

```javascript
const Child = React.memo(() => {
	return (
		<Consumer>
			{value => <p>{value}</p>}
		</Consumer>
	);	
})
```

## Real Work ContextAPI

For controlling state in child component, set function is sent together. look below.

```javascript
const stateContext = React.createContext({});
const setStateContext = React.createContext(() => {});

function Parent() {
	const [ state, setState ] = useState({value : 0})
	return (
		<div>
			<setStateContext.Provider value={setState}>
				<stateContext.Provider vale={state}>
					<Child />
				</stateContext.Provider>
			</setStateContext.Provider>
		</div>
	)
}
```

if you use `setStateContext.Consumer`'s paramter function, state is changed, it apply Provider.

## Other Style ([#ContextAPIStyle2]())

ContextAPI can be used with `useContext`. `useContext` get value in provider. It's more intuitive, but have possiblity of unnecessary re-rendering.