import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import Slideshow from '../components/Slideshow/Slideshow';
import PinnedPosts from '../components/PinnedPosts/PinnedPosts';
import PostList from '../components/PostList/PostList';

const StyledApp = styled.div`
  background: #ebebeb;
`;

export default class App extends Component {
  render() {
    return (
      <StyledApp>
      	<Navigation />
      	<Slideshow />
        <PinnedPosts />
        <PostList />
      </StyledApp>
    );
  }
}
