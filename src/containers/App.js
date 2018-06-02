import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import Slideshow from '../components/Slideshow/Slideshow';
import PinnedPosts from '../components/PinnedPosts/PinnedPosts';

const StyledApp = styled.div`
  background: #d7dae0;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
      	<Navigation />
      	<Slideshow />
        <PinnedPosts />
        <PinnedPosts />
        <PinnedPosts />
        <PinnedPosts />
      </StyledApp>
    );
  }
}
