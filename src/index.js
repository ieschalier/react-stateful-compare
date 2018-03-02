import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from './store'

const Index = () => (
  <Provider>
    <App />
  </Provider>
)
console.log(Index)
ReactDOM.render(<Index />, document.getElementById('root'))
registerServiceWorker()
