import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

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
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

      	<SubMenu title={<span><Icon type="down" />Categoría</span>}>

          <SubMenu title="Especie">
            <Menu.Item key="especie:1">Perros</Menu.Item>
            <Menu.Item key="especie:2">Gatos</Menu.Item>
            <Menu.Item key="especie:3">Roedores</Menu.Item>
            <Menu.Item key="especie:4">Pájaros</Menu.Item>
            <Menu.Item key="especie:5">Todos</Menu.Item>
          </SubMenu>

          <SubMenu title="Tipo">
            <Menu.Item key="tipoPublicacion:6">Adopciones</Menu.Item>
            <Menu.Item key="tipoPublicacion:7">Perdidos</Menu.Item>
            <Menu.Item key="tipoPublicacion:8">Todos</Menu.Item>
          </SubMenu>

          <SubMenu title="Tamaño">
            <Menu.Item key="size:6">Pequeño</Menu.Item>
            <Menu.Item key="size:7">Mediano</Menu.Item>
            <Menu.Item key="size:8">Grande</Menu.Item>
            <Menu.Item key="size:8">Todos</Menu.Item>
          </SubMenu>

          <SubMenu title="Edad">
            <Menu.Item key="size:6">Hasta 6 meses</Menu.Item>
            <Menu.Item key="size:7">Hasta 1 año</Menu.Item>
            <Menu.Item key="size:8">Hasta 2 años</Menu.Item>
            <Menu.Item key="size:8">Mayor a 3 años</Menu.Item>
          </SubMenu>

          <SubMenu title="Características">
            <Menu.Item key="size:6">Esterilizado</Menu.Item>
            <Menu.Item key="size:7">Vacunado</Menu.Item>
            <Menu.Item key="size:8">Desparasitado</Menu.Item>
            <Menu.Item key="size:8">Todos</Menu.Item>
          </SubMenu>
        </SubMenu>

        <Menu.Item key="seBusca">
          <a href="https://www.rafaelrojascov.com" target="_blank" rel="noopener noreferrer">Se busca</a>
        </Menu.Item>

        <Menu.Item key="veterinarias">
          <a href="https://www.rafaelrojascov.com" target="_blank" rel="noopener noreferrer">Veterinarias</a>
        </Menu.Item>

        <Menu.Item key="tiendas">
          <a href="https://www.rafaelrojascov.com" target="_blank" rel="noopener noreferrer">Tiendas</a>
        </Menu.Item>

        <Menu.Item key="campañas">
          <a href="https://www.rafaelrojascov.com" target="_blank" rel="noopener noreferrer">Campañas</a>
        </Menu.Item>

      </Menu>
		);
	}


}