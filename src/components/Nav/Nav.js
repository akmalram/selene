import React, { Component } from 'react';
import { 
    Nav, 
    Logo, 
} from '../../styles/nav/NavStyles';

import {
    MenuBtn,
    MenuBtnLines
} from '../../styles/nav/MenuBtnStyles';

import {
    MenuList, 
    MenuItem, 
    MenuLink,
} from '../../styles/nav/MenuStyles';

import {
    SearchWrapperBtn,
    SearchInput,
    SearchSubmit,
} from '../../styles/nav/Search';

import './Nav.scss';
import logo from '../../imgs/header-logo.png';
import Lens from '../../imgs/icon_lens.png';

export default class Navigation extends Component {
    state = {
        links: [
            {linkValue: 'home', url: 'http://site.com/'},
            {linkValue: 'about us', url: 'http://site.com/'},
            {linkValue: 'projects', url: 'http://site.com/'},
            {linkValue: 'clients', url: 'http://site.com/'},
            {linkValue: 'contact', url: 'http://site.com/'},
            {linkValue: 'blog', url: 'http://site.com/'},
        ],
        isMenuActive: false,
    }

    addActiveClass = () => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        })
    }

    render() {
        const {links, isMenuActive} = this.state;

        const menuClass = `${isMenuActive ? 'active': ''}`;

        const linksList = links.map((one, i) => {
            return (
                <MenuItem key={i}>
                    <MenuLink href={one.url}>{one.linkValue}</MenuLink>
                </MenuItem>
            )
        });

        return (
            <Nav className="nav">
                <Logo className="nav__logo">
                    <img src={logo} alt="Page logo" />
                </Logo>
                <MenuBtn className={menuClass} onClick={this.addActiveClass}>
                    <MenuBtnLines data-count="1"></MenuBtnLines>
                    <MenuBtnLines data-count="2"></MenuBtnLines>
                    <MenuBtnLines data-count="3"></MenuBtnLines>
                </MenuBtn>
                <MenuList className={`nav__list ${menuClass}`}>
                    {linksList}
                </MenuList>
                <SearchWrapperBtn className="nav__search">
                    <form>
                        <SearchInput type="text" placeholder="Type anything..." />
                        <SearchSubmit type="submit">
                            <img src={Lens} alt="Search button Icon" />
                        </SearchSubmit>
                    </form>
                </SearchWrapperBtn>
            </Nav>
        )
    }
}
