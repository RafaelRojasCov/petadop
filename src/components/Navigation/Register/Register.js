import React, { Component } from 'react';
import styled from 'styled-components';

const StyledRegister = styled.span`
  margin-right: 10px;
  font-size: 1.2em;
  text-align: center;
  color: LightGrey;
  display: flex;
  align-items: center;
`;

export default class Register extends Component {

	render(){
		return(
			<StyledRegister>
				Register
			</StyledRegister>
		);
	}

}