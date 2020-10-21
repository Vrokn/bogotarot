import React, { useState } from 'react';
import { Grid, Button, Image, Modal } from 'semantic-ui-react'
import instrucciones from '../Graphics/Instrucciones.svg'
import instruccionesMobile from '../Graphics/Instruccionesmobile.svg'
import Ojoamarillo from '../Graphics/Ojoamarillo.svg'
import cartasHorizontalAzul from '../Graphics/cartasHorizontalAzul.gif'
import cartasVerticalAzul from '../Graphics/cartasVerticalAzul.gif'

function Instructions() {
  const [activeItem, setActiveItem] = useState('A');

  return (
    <Grid className={'intro'} stackable columns={2}>
      <Grid.Column>
        <Image className={'instrutitle'} src={instrucciones} size={'big'}fluid  centered/>
        <Image className={'instrutitlemobile'} src={instruccionesMobile} fluid />
        <Image className={'Ojoamarillomobile'} src={Ojoamarillo} />

      </Grid.Column>
      <Grid.Column className={'instrucdescription'} >
        <p>
          Ingrese a la sección del Tarot y seleccione las tres cartas que prefiera haciendo click o tap sobre ellas. Estas cartas visualizan el presente y lo llevan a su destino.
        </p>
        <Image className={'cartasHorizontalAzul'} src={cartasHorizontalAzul} />
        <Image className={'cartasVerticalAzul'} src={cartasVerticalAzul} />
     {/*    <div className={'botonesabc'} >
          <Button className={'instrubutton'} content='A' circular size='huge'
            active={activeItem === 'A'}
            onClick={() => setActiveItem('A')} />
          <Button className={'instrubutton'} content='B' circular size='huge'
            active={activeItem === 'B'}
            onClick={() => setActiveItem('B')} />
          <Button className={'instrubutton'} content='C' circular size='huge'
            active={activeItem === 'C'}
            onClick={() => setActiveItem('C')} />
        </div> */}
      </Grid.Column>
    </Grid>
  )
}

export default Instructions
