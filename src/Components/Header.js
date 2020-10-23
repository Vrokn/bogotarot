import React, { useState } from 'react';
import { Menu, Image } from 'semantic-ui-react'
import Ojoamarillo from '../Graphics/Ojoamarillo.svg'
import Logosidpcmdb from '../Graphics/Logosidpcmdb.svg'
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
    const [activeItem, setActiveItem] = useState('Tarot');
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
                <Menu.Item className='brand'>
                    <Link to="/menu">
                        <Image src={Ojoamarillo} verticalAlign='middle' />
                    </Link>
                </Menu.Item>
                <Menu.Item className='brand'
                    active={activeItem === 'Introducción'}
                    onClick={() => setActiveItem('Introducción')}
                >
                    <NavLink to="/introducción">Introducción</NavLink>
                </Menu.Item>
                <Menu.Item className='brand'
                    active={activeItem === 'Instrucciones'}
                    onClick={() => setActiveItem('Instrucciones')}
                >
                    <NavLink to="/instrucciones">Instrucciones</NavLink>
                </Menu.Item>
                <Menu.Item className='brand'
                    active={activeItem === 'Tarot'}
                    onClick={() => setActiveItem('Tarot')}
                >
                    <NavLink to="tarot">Tarot</NavLink>
                </Menu.Item>
                <Menu.Item className='brand'
                    active={activeItem === 'Causas'}
                    onClick={() => setActiveItem('Causas')}
                >
                    <NavLink to="/causas">Causas</NavLink>
                </Menu.Item>
                <Menu.Item className='brand'
                    active={activeItem === 'Archivo'}
                    onClick={() => setActiveItem('Archivo')}
                    disabled
                >
                    <NavLink to="/archivo">Archivo</NavLink>
                </Menu.Item>
                <Menu.Item className='logosidpc' position='right' >
                    <Image src={Logosidpcmdb} size='small' verticalAlign='middle' />
                </Menu.Item>

            </Menu>
        </>
    );
}

