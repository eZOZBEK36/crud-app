import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom'
import { store } from './store/index'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={ store }>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
