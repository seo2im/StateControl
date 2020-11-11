import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { ContextProvider } from './Context'
import Container from './Container'

function App () {
	return (
		<ContextProvider>
			<Container />
		</ContextProvider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));