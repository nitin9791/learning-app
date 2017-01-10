import React from 'react';
import {Layout,fixedHeader,Header,Navigation,Drawer} from 'react-mdl';
import Content from './Content';
class MyNavigation extends React.Component {
	render(){
		return (
			 <div>
			    <Layout fixedHeader>
			        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
			        </Header>
			        <Drawer title="Title">
			            <Navigation>
			                <a href="">Link</a>
			                <a href="">Link</a>
			                <a href="">Link</a>
			                <a href="">Link</a>
			            </Navigation>
			        </Drawer>

			        <iframe width="560" height="315" src="https://www.youtube.com/embed/KzBa4ZKTVjE" frameborder="0" allowfullscreen></iframe>
			    </Layout>
			</div>
		);
	}
}

export default MyNavigation;