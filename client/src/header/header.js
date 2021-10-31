import React, { Component } from 'react'
import Logo from './logo'

export default class Header extends Component {
	render() {
		return (
			<header className="bg-gray-900 h-14">
        <ul className="flex">
					<Logo></Logo>
				</ul>
      </header>
		)
	}
}
