import React, { Component } from 'react';
import SearchBox from './SearchBox/SearchBox';
import Logo from './Logo/Logo';
import Menubar from './Menu/Menu'; //cambiar nombre de carpeta y archivo
import Register from './Register/Register';
import Login from './Login/Login';
import styled from 'styled-components';

const LeftMenu = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const RightMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-grow: 1;
`;

const TopRow = styled.div`
	display: flex;
`;

const BottomRow = styled.div`

`;

const NavigationBar = styled.div`
	height: 100px;
`;



export default class Navigation extends Component {
	render(){
		return (

			// Barra de navegacion
			<NavigationBar>

				{/* Fila superior del menu */}
				<TopRow>

					{/* Parte izquierda del menu */}
					<LeftMenu>
							<Logo />
							<SearchBox />
					</LeftMenu>

					{/* Parte derecha del menu */}
					<RightMenu>
							<Register />
							<Login />
					</RightMenu>

				</TopRow>

				{/* Fila inferior del menu */}
				<BottomRow>
					<Menubar />
				</BottomRow>

			</NavigationBar>
		);
	}
}