import React, { useContext } from 'react'

import { Context } from './Context'

function Container() {
	const {state, modState} = useContext(Context);

	return (
		<div>
			<p>{state}</p>
			<button onClick={() => modState(state + 1)}>Click</button>
		</div>
	)
}

export default Container;