import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class SubMenuHelpAnimals extends Component {

	render(){
		return(
			<SubMenu {...this.props} title={<span><Icon type="notification" style={{ color: "red"}}/>S.O.S Mascotas</span>}>
        <Menu.Item key="sosAnimals:1">Pedir ayuda</Menu.Item>
        <Menu.Item key="sosAnimals:2">Entregar ayuda</Menu.Item>
      </SubMenu>
		);
	}
}
