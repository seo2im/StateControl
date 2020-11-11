import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const stateContext = React.createContext({value : 0});
const setStateContext = React.createContext(() => {});

function Parent() {
	const [ state, setState ] = useState({value : 0});

	return (
		<div>
			<setStateContext.Provider value={setState}>
				<stateContext.Provider value={state}>
					<Gate />
				</stateContext.Provider>
			</setStateContext.Provider>
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
		<setStateContext.Consumer>
			{setState => (
				<stateContext.Consumer>
					{({value}) => (
						<div>
							<p>{value}</p>
							<button onClick={() => setState({value : value + 1})}>Click</button>
						</div>
					)}
				</stateContext.Consumer>
			)}
		</setStateContext.Consumer>
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