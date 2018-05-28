import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.span`
	font-size: 1.5em;
	margin-right: 15px;
	margin-left: 10px;
  display: flex;
  align-items: center;
  color: White;

  &:hover {
  	cursor:pointer;
  }
`;


export default class Logo extends Component {
	render(){
		return(
				<StyledLogo>
					Petadop
				</StyledLogo>
		);
	}
}