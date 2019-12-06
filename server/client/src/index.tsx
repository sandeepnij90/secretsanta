import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Reducer } from 'store/Reducer'
import reduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


let store = createStore(Reducer, composeWithDevTools(applyMiddleware(reduxThunk)))

render(<Provider store={store}><App/></Provider>, document.getElementById('root'))