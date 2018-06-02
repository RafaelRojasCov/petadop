import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 15px 0;
	padding: 10px 5px;
	min-height: 250px;
	min-width: 180px;
	border: 1px gray solid;
	border-radius: 0.5em;
`;

export default class Posts extends Component {

	render(){
		return(
			<Container>
			Card
			</Container>
		);
	}
}