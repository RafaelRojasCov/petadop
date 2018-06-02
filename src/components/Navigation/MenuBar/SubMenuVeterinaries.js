import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class SubMenuVeterinaries extends Component {

	render(){
		return(
			<SubMenu {...this.props} title={<span><Icon type="medicine-box" />Veterinarias</span>}>
        <Menu.Item key="stores:1">Santiago</Menu.Item>
        <Menu.Item key="stores:2">Valparaíso</Menu.Item>
        <Menu.Item key="stores:3">Todas las veterinarias</Menu.Item>
      </SubMenu>
		);
	}
}