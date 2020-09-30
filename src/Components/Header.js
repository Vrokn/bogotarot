import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Menu, Image } from 'semantic-ui-react'
import Logo from './Logo'
import Ojoamarillo from '../Graphics/Ojoamarillo.svg'
import Logosidpcmdb from '../Graphics/Logosidpcmdb.svg'



export default function Header() {
    const [activeItem, setActiveItem] = useState('Tarot');

    return (
        <Menu secondary stackable className='NavHeader' color='#15263D' >
            <Menu.Item className='brand' >
                <Image href='\' src={Ojoamarillo} size='tiny' verticalAlign='middle' />
            </Menu.Item>
            <Menu.Item
                name='Introducción'
                active={activeItem === 'Introducción'}
                onClick={() => setActiveItem('Introducción')}
            />
            <Menu.Item
                name='Instrucciones'
                active={activeItem === 'Instrucciones'}
                onClick={() => setActiveItem('Instrucciones')}
            />
            <Menu.Item
                name='Tarot'
                active={activeItem === 'Tarot'}
                onClick={() => setActiveItem('Tarot')}
            />
            <Menu.Item
                name='Causas'
                active={activeItem === 'Causas'}
                onClick={() => setActiveItem('Causas')}
            />
            <Menu.Item
                name='Archivo'
                active={activeItem === 'Archivo'}
                onClick={() => setActiveItem('Archivo')}
            />
            <Menu.Item className='logosidpc' position='right' >
                <Image href='\' src={Logosidpcmdb} size='small' verticalAlign='middle' />
            </Menu.Item>
        </Menu>
    );
}

ReactDOM.render(<Logo />, document.getElementById('root'))
