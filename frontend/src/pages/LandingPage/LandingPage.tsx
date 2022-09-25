import './LandingPage.css'
import CardComponent from '../../components/Card/CardComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';
import CreateCard from '../CreateCard/CreateCard';
import ModalComponent from '../../components/Modal/ModalComponent';
import IconeExcluir from '../../assets/images/Icon-trash.svg';
import { useEffect, useState } from 'react';
import {gql, useQuery} from "@apollo/client";

type Car = {
    payload: {
        name: string,
        status: string,
    }
}

const GET_CARS = gql`
    query {
        cars {
            payload {
                name
                status
            }
        }
    }
`;

function LandingPage() {
    const [newCard, setNewCard] = useState(false);
    const {data} = useQuery<{cars: Car[]}>(GET_CARS);

    console.log(data);

    const handleNewCard = () => {
        setNewCard(!newCard)
    }

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if(event.keyCode === 27) {
                setNewCard(false) 
            } 
        })
      }, []); 

    return (
        <main id="main_content">
            <div id='new_card_content'>
                <h1 className='title'>Resultado de busca</h1>
                <ButtonComponent text="Novo Card" size="medium" onClick={handleNewCard} />
            </div>
            
            <div className='cards_container'>
                {data?.cars.payload.map(car => <CardComponent Text={car.name}/>)}
            </div>

            {/* se clicar no botao novo card... */}
            {newCard && <CreateCard />}
            {/* <CreateCard /> */}
            {/* <ModalComponent 
                title='Excluir' 
                text='Certeza que deseja excluir?'
                image={IconeExcluir}
            /> */}
        </main>
    )
}

export default LandingPage;