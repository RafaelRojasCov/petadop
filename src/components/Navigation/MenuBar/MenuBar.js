import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import SubMenuAnimals from './SubMenuAnimals';
import SubMenuCampaigns from './SubMenuCampaigns';
import SubMenuStores from './SubMenuStores';
import SubMenuVeterinaries from './SubMenuVeterinaries';
import SubMenuHelpAnimals from './SubMenuHelpAnimals';

const SubMenu = Menu.SubMenu;

export default class MenuBar extends Component {
	state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

	render(){
		return(
			<Menu
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

      	{/*aqui va el elemento animals */}

        <SubMenuAnimals />

        <SubMenuCampaigns />

        <SubMenuStores />

        <SubMenuVeterinaries />

        <SubMenuHelpAnimals />

      </Menu>
		);
	}


}