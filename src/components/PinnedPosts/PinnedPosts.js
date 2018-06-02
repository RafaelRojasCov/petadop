import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Posts from './Posts';

const Container = styled.div`
	margin: 15px 8px;
	min-height: 200px; 
`;

const ColBox = styled.div`
  background: #00A0E9;
  padding: 5px 0;
  margin: 5px 0;
`;

const StyledTitle = styled.h1`
	padding: 0.5em 1em;
	color: gray;
	font-size: 1.5em;
`;



export default class PinnedPosts extends Component {

	render(){
		return(
			<Container>
				<Row type="flex" justify="start" align="middle">
					<StyledTitle>
						Destacados...
					</StyledTitle>
				</Row>
		    <Row type="flex" justify="center" align="middle" gutter={16}>
		      <Col xs={20} sm={10} md={10} lg={5} xl={5}>
						<Posts />
		      </Col>
		      <Col xs={20} sm={10} md={10} lg={5} xl={5}>
						<Posts />
		      </Col>
		      <Col xs={20} sm={10} md={10} lg={5} xl={5}>
						<Posts />
		      </Col>
		      <Col xs={20} sm={10} md={10} lg={5} xl={5}>
						<Posts />
		      </Col>
		    </Row>
			</Container>
		);
	}
}