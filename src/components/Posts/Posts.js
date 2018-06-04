import React, { Component } from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import tachyons from 'tachyons';

const PostImage = styled.img`
	width: 150px;
	height: 150px;
	padding: 0.25em;
`;

const PostTitle = styled.h1`
	color: #0080f0;
	font-size: 1.2em;
	margin-bottom: 0px;
`;

const PostBoxDescription = styled.div`
	width: 100%;
	min-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const PostTags = styled.span`
	color: #999999;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const PostContainer = styled.div`
  display: flex;
	margin: 10px auto;
	padding: 5px 5px;
	min-height: 250px;
	max-width: 200px;
	border-radius: 0.5em;
	background-color: white;
	justify-content: center;
	flex-wrap: wrap;
	box-shadow: 0px 1px 1px 0px rgba(221,221,221,1);
`;

export default class Posts extends Component {

	render(){
		return(
			<PostContainer className="grow">
				<PostTitle>Bobby</PostTitle>
				<PostImage src={`https://robohash.org/10?size=150x150`} alt=""/>
				<PostBoxDescription>
					<PostTags>
						<Tag>Joven</Tag>
						<Tag>Macho</Tag>
						<Tag>Mediano</Tag>
						<Tag>Beagle Mix</Tag>
						<Tag color="#87d068">Adopción</Tag>
					</PostTags>
				</PostBoxDescription>
			</PostContainer>
		);
	}
}