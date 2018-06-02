import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class SubMenuCampaigns extends Component {

	render(){
		return(
			<SubMenu {...this.props} title={<span><Icon type="heart-o" />Campañas</span>}>
        <Menu.Item key="campaign:1">Fundaciones</Menu.Item>
        <Menu.Item key="campaign:2">Hogares temporales</Menu.Item>
        <Menu.Item key="campaign:3">Todas las campañas</Menu.Item>
      </SubMenu>
		);
	}
}

