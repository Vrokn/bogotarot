import React from 'react'
import { Card, Grid, Image } from 'semantic-ui-react'
import OrnamentoSI from '../Graphics/OrnamentoSI.svg'
import OrnamentoSD from '../Graphics/OrnamentoSD.svg'
import OrnamentoII from '../Graphics/OrnamentoII.svg'
import OrnamentoID from '../Graphics/OrnamentoID.svg'
import Ojodescription from '../Graphics/Ojodescription.svg'

import Causa1 from './Causa1'


const Causas = () => (

    <div className={'causascards'}  >

        <div className={'causacard'} id='biodiversidad'>{/*  Causa 1 */}
            <div className='cardtitle'>
                <div className='cardtitlecontainer' >
                    <Image src={OrnamentoSI} size='tiny' className={'OrnamentoSI'} />
                    <div className={'causatitle'}>
                        <h1 >Promover el derecho a la ciudad y proteger la biodiversidad.</h1>
                        <button className='suscribebtn'>Suscribirse</button>
                        <Causa1 />
                    </div>
                    <div className={'videocausa'}>
                        video
                    </div>
                </div>
            </div>
            <div className='carddescription'>
                <div className='carddescriptioncontainer' >
                    <div className='carddescriptiontop'>
                        <Image src={OrnamentoSI} size='tiny' floated='left' />
                        <Image src={OrnamentoSD} size='tiny' floated='right' />
                    </div>
                    <div className={'causadescription'}>
                        <Image src={Ojodescription} className={'ojodescription'} centered />
                        <h1 >Descripción de la causa</h1>
                        <p>Bogotá y su entorno son territorios ricos y diversos, tanto en poblaciones humanas como de otras especies. Esta biodiversidad es un gran banco de herramientas frente a la incertidumbre que ha provocado la pandemia de COVID-19, sobre nuestro trabajo, estudio, contacto con familia y amigos, y con la naturaleza.
                        La diversidad también se expresa en el derecho a la ciudad que permite que todos los que viven en ella puedan usufructuar de manera equitativa el espacio colectivo y allí realizarse, a pesar de la incertidumbre.
                        </p>
                    </div>
                    <div className='carddescriptionbottom'>
                        <Image src={OrnamentoII} size='tiny' floated='left' />
                        <Image src={OrnamentoID} size='tiny' floated='right' />
                    </div>
                </div>
            </div>
            <div className='cardactivities'>

            </div>
            <div className='cardothers'>

            </div>
        </div>

    </div>

)

export default Causas