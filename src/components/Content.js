import React from 'react';

class Content extends React.Component {
	render(){
		let list = ['nitin','sachin'].map(item => <div class="mdl-cell mdl-cell--12-col">{item}</div>);
		console.log(list);
		return (<div class="mdl-grid mdl-grid--no-spacing">{list}</div>);
	}
}

export default Content;