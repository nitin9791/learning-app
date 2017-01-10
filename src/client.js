import React from 'react';
import ReactDom from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import store from './store';
import MyAPP from './components/MyAPP';
import { Provider } from 'react-redux';
import './styles/main.scss';


const app = document.getElementById('app');

ReactDom.render(<Provider store={store}>
	<MyAPP/>
	</Provider>,app);