import React, { createContext, useState } from 'react'

const Context = createContext({})

function ContextProvider ({ children }) {
	const [ state, setState ] = useState(0);

	function modState (value) {
		setState(value);
	}

	return (
		<Context.Provider value={{
			state, modState
		}}>
			{children}
		</Context.Provider>
	)
}

export { Context, ContextProvider };