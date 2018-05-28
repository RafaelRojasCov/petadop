import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLogin = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
  text-align: center;
  color: White;
  display: flex;
  align-items: center;
  
  &:hover {
  	cursor:pointer;
  }
`;

export default class Login extends Component {

	render(){
		return(
			<StyledLogin>
				Login
			</StyledLogin>
		);
	}

}