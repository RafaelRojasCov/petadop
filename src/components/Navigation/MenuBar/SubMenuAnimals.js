import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

export default class SubMenuAnimals extends Component {

	render(){
		return(
			<SubMenu {...this.props} title={<span><Icon type="gitlab" />Categoría</span>}>
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

          <Menu.Item key="category:1">Todos los animales</Menu.Item>

        </SubMenu>



		);
	}
}

