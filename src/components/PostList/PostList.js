import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Posts from '../Posts/Posts';

const Container = styled.div`
	padding: 8px 16px;
	min-height: 200px; 
`;

const StyledTitle = styled.h1`
	padding: 0.5em 0 0 0;
	color: gray;
	font-size: 1.5em;
`;


export default class PostList extends Component {
	render(){
		return(
			<Container>
				<Row type="flex" justify="start" align="middle">
					<StyledTitle>
						Recientes...
					</StyledTitle>
				</Row>
		    <Row type="flex" justify="center" align="middle" gutter={16}>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		      <Col xs={24} sm={8} md={6} lg={6} xl={4}>
						<Posts />
		      </Col>
		    </Row>
			</Container>
		);
	}
}