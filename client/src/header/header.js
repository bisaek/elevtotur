import React, { Component } from 'react'
import Logo from './logo'
import Login from './login'

export default class Header extends Component {
	render() {
		return (
			<header className="bg-gray-900 h-14 sticky">
        <ul className="flex">
					<Logo></Logo>
					<Login></Login>
				</ul>
      </header>
		)
	}
}
