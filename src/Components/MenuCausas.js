import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';

import { Grid, Image, Menu } from 'semantic-ui-react'
import OrnamentoID from '../Graphics/OrnamentoID.svg'
import OrnamentoII from '../Graphics/OrnamentoII.svg'
import OrnamentoSI from '../Graphics/OrnamentoSI.svg'
import Close from '../Graphics/Close.svg'
import Logosidpcmdb from '../Graphics/Logosidpcmdb.svg'

function MenuCausas() {
    const [activeItem, setActiveItem] = useState('Menu');
    const [BgColor, setBgColor] = useState('#FFFBEF');


    return (
        <Grid className={'menucausas'} stackable columns={2} >
            <Grid.Row columns={2} className={'eyetop'} >
                <Grid.Column>
                    <Image src={OrnamentoSI} size='tiny' className={'OrnamentoSI'} />
                </Grid.Column>
                <Grid.Column >
                    <Link to="/menu">
                        <Image src={Close} className={'close'} size={'mini'} floated='right' />
                    </Link>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} className='causaslink'>
                <Grid.Column textAlign='left'>
                    <Menu.Item 
                        active={activeItem === 'Causas'}
                        onClick={() => setActiveItem('Causas')}
                    >
                        <NavLink to="/causas">Causas</NavLink>
                    </Menu.Item>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column width={8} className={'MenuCausasLinks'} textAlign='left'>
                <Menu secondary fluid vertical>
                    <Menu.Item className='brand'
                        active={activeItem === 'Causas'}
                        onClick={() => setActiveItem('Causas')}
                    >
                        <NavLink to="/causas#biodiversidad" >Promover el derecho a la ciudad y proteger la biodiversidad</NavLink>
                    </Menu.Item>
                    <Menu.Item className='brand'
                        active={activeItem === 'Causas'}
                        onClick={() => setActiveItem('Causas')}
                    >
                        <NavLink to="/causas#simbiosis">Simbiosis entre lo urbano y lo rural</NavLink>
                    </Menu.Item>
                </Menu>
            </Grid.Column>
            <Grid.Column width={8} className={'MenuCausasLinks'} textAlign='left' >
                <Menu secondary fluid vertical>
                    <Menu.Item className='brand'
                        active={activeItem === 'Causas'}
                        onClick={() => setActiveItem('Causas')}
                    >
                        <NavLink to="/causas#solidaridad">Reconocer la solidaridad y cuestionar prejuicios y estigmas</NavLink>
                    </Menu.Item>

                    <Menu.Item className='brand'
                        active={activeItem === 'Causas'}
                        onClick={() => setActiveItem('Causas')}
                    >
                        <NavLink to="/causas#redes">Diversificar redes  de afecto y cuidado</NavLink>
                    </Menu.Item>
                </Menu>
            </Grid.Column>
            <Grid.Row className={'eyebottom'} columns={3} verticalAlign='middle'>
                <Grid.Column>
                    <Image src={OrnamentoII} size='tiny' className={'OrnamentoII'} />
                </Grid.Column>
                <Grid.Column floated>
                    <Image className={'logosMenu'} src={Logosidpcmdb} size='medium'  centered  />
                </Grid.Column>
                <Grid.Column floated='right'>
                    <Image src={OrnamentoID} size='tiny' className={'OrnamentoID'} floated='right' />
                </Grid.Column>
            </Grid.Row>
        </Grid >
    )
}

export default MenuCausas
