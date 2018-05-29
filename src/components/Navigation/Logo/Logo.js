import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLogo = styled.span`
	font-size: 1.5em;
	margin-right: 45px;
	margin-left: 15px;
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