import React, { useState } from 'react';
import { Menu, Image } from 'semantic-ui-react'
import Ojoamarillo from '../Graphics/Ojoamarillo.svg'
import Logosidpcmdb from '../Graphics/Logosidpcmdb.svg'
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    const [activeItem, setActiveItem] = useState('');
    return (
        <>
            <Menu secondary className='NavHeadermobil' fluid >
                <Menu.Item className='logosidpcmobil' position='left' >
                    <Image src={Logosidpcmdb} size='small' verticalAlign='middle' />
                </Menu.Item>
                <Menu.Item className='brandmobile' position='right'>
                    <Link to="/menu">
                        <Image src={Ojoamarillo} verticalAlign='middle' />
                    </Link>
                </Menu.Item>
            </Menu>
            <Menu secondary className='NavHeader' fluid >
                <Menu.Item className='brandnav'>
                    <Link to="/menu">
                        <Image src={Ojoamarillo} verticalAlign='middle' />
                    </Link>
                </Menu.Item>
                <Menu.Item className='brandnav'
                    active={activeItem === 'Introducción'}
                    onClick={() => setActiveItem('Introducción')}
                >
                    <NavLink to="/introducción">Introducción</NavLink>
                </Menu.Item>
                <Menu.Item className='brandnav'
                    active={activeItem === 'Instrucciones'}
                    onClick={() => setActiveItem('Instrucciones')}
                >
                    <NavLink to="/instrucciones">Instrucciones</NavLink>
                </Menu.Item>
                <Menu.Item className='brandnav'
                    active={activeItem === ''}
                    onClick={() => setActiveItem('')}
                >
                    <NavLink to="/">Tarot</NavLink>
                </Menu.Item>
                <Menu.Item className='brandnav'
                    active={activeItem === 'Causas'}
                    onClick={() => setActiveItem('Causas')}
                >
                    <NavLink to="/causasmenu">Causas</NavLink>
                </Menu.Item>
                <Menu.Item className='brandnav'
                    active={activeItem === 'Historias'}
                    onClick={() => setActiveItem('Historias')}
                >
                    <NavLink to="/historias">Historias</NavLink>
                </Menu.Item>
                <Menu.Item className='brandnav'
                    active={activeItem === 'Voces'}
                    onClick={() => setActiveItem('Voces')}
                >
                    <NavLink to="/voces">Voces</NavLink>
                </Menu.Item>
                <Menu.Item className='logosidpc' position='right' >
                    <Image src={Logosidpcmdb} size='small' verticalAlign='middle' />
                </Menu.Item>

            </Menu>
        </>
    );
}

