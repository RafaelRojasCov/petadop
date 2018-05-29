import React, { Component } from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';

const SlidesContainer = styled.div`
  display: flex;
  height: 300px;
  overflow: hidden;
`;

const Slide = styled.div`
	display:flex;
	width: 100%;
	background-color: #354894;
	align-items: center;
	justify-content: center;
`;

const SlideTitle = styled.h1`
	color: LightGray;
`;

export default class Slideshow extends Component {

	render(){
		return(
			
				<Carousel autoplay>
					<div>
						<SlidesContainer>
							<Slide>
									<SlideTitle>1</SlideTitle>
							</Slide>
						</SlidesContainer>
					</div>

					<div>
						<SlidesContainer>
							<Slide>
									<SlideTitle>2</SlideTitle>
							</Slide>
						</SlidesContainer>
					</div>

					<div>
						<SlidesContainer>
							<Slide>
									<SlideTitle>3</SlideTitle>
							</Slide>
						</SlidesContainer>
					</div>

					<div>
						<SlidesContainer>
							<Slide>
									<SlideTitle>4</SlideTitle>
							</Slide>
						</SlidesContainer>
					</div>
			  </Carousel>
			
		);
	}
}
