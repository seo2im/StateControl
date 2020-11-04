# State Control

> OBJECT

1. Knownledge what is **ContextAPI**
2. Knownledge what is **redux**
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