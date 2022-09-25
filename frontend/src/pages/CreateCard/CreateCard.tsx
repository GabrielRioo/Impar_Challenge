import './CreateCard.css'
import IconeCriar from '../../assets/images/icone_criar.svg';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { FormEvent, useEffect, useState } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { gql, useMutation } from '@apollo/client';

const CREATE_CAR = gql`
    mutation ($name: String!) {
        upsertCar(request: {
            name: $name,
            status: true,
        }) {
            payload {
                name
                status
            }
        }
    }
`

function CreateCard() {
    const [name, setName] = useState('');
    const [createCar, {data}] = useMutation(CREATE_CAR);

    function handleLandingPage() {
        return <LandingPage />
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!name) {
            return;
        }

        await createCar({
            variables: {
                name,
            }
        });

        console.log(data);
        
    }
    
    const handleUploadFile = () => {
        document.getElementById('file_input')?.click();
    }
    
    window.addEventListener('load', () => {
        handleUploadFile
    }) 
    
    return (
        <section id="create_card" onClick={handleLandingPage} >  
            <div id="create_card_content">
                <div id="create_card_header">
                    <img src={IconeCriar} alt="icone de perfil" />
                    <h1>Criar card</h1>
                </div>

                <form id="create_card_form" onSubmit={handleSubmit}>
                    <hr />

                    <label htmlFor="titulo">Digite um nome para o card</label>
                    <input type="text" placeholder='Digite o título' name='titulo' id='titulo' value={name} onChange={e => setName(e.target.value)}/>

                    <label>Inclua uma imagem para aparecer no card</label>
                    <input id="file_input" type="file" style={{ display: 'none' }} />
                    <div id="upload_file" onClick={handleUploadFile}>
                        <p>Nenhum arquivo selecionado</p>
                        <ButtonComponent size="medium_outset" text="Escolher Arquivo"/>
                    </div>

                    <hr />
                    <ButtonComponent size="medium" text="Criar card" />
                </form>
            </div>
        </section>
    )
}

export default CreateCard;