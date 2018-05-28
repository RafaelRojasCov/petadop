import React, { Component } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Search = Input.Search;

const SearchInput = styled.div`
	display: flex;
	align-items: center;
	flex-grow: 1;
`;

export default class SearchBox extends Component {
	render(){
		return(
			<SearchInput>
				<Search
							placeholder="Buscar..."
							size="default"
							onSearch={value => console.log(value)}
				/>
			</SearchInput>
		);
	}
}