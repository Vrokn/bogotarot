import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import historias from '../Graphics/Historias.svg'
import historiasmobil from '../Graphics/Historiasmobil.svg'
import Ojoamarillo from '../Graphics/Ojoamarillo.svg'
import presentación from '../Graphics/Presentación.svg'

function Intro() {

    return (
        <Grid className={'intro'} stackable columns={2}>
            <Grid.Column>
                <Image className={'introtitle'} src={historias} fluid />
                <Image className={'introtitlemobile'} src={historiasmobil} fluid />
                <Image className={'Ojoamarillomobile'} src={Ojoamarillo} />
            </Grid.Column>
            <Grid.Column className={'introdescription'} textAlign='justified'>
                <p>
                    El presente de la ciudad está marcado profundamente por la experiencia de las cuarentenas,
                    la crisis ambiental, social y económica agudizada por la COVID-19, pero también está formado por la solidaridad,
                    los nuevos encuentros y las vidas salvadas. Eso que llamamos “normalidad” y que podríamos añorar es un escenario
                    insostenible para los seres humanos y el planeta.
                            <br></br><br></br>
                            Es el momento de preguntarnos qué queremos guardar de esta experiencia como aprendizaje colectivo.
                            ¿Qué narrativas sobre el presente son esenciales para los bogotanos del futuro?
                            <br></br><br></br>
                            En este proyecto, el Museo de Bogotá les invita a que contestemos colectivamente esta pregunta:
                            ¿Cuál es la mejor versión de Bogotá y qué necesitamos pensar, soñar y hacer para hacerla realidad?
                            </p>
            </Grid.Column>
        </Grid>
    )
}

export default Intro
