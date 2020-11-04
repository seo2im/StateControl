import React from 'react'
import ReactDOM from 'react-dom'

const { Provider, Consumer } = React.createContext('');

function Parent() {
	return (
		<div>
			<Provider value="value">
				<Gate />
			</Provider>
		</div>
	);
}

const Gate = React.memo(() => {
	return (
		<Child />
	);
});

function Child() {
	return (
		<Consumer>
			{value => <p>{value}</p>}
		</Consumer>
	);
}

function App () {
	return (
		<div>
			<Parent />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));