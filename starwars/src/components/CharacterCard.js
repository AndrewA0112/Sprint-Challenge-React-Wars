import React, {useState, useEffect} from 'react'

import { Card, Header, Image, Modal } from 'semantic-ui-react'

import axios from 'axios'

const CharacterCard = ({character}) => {

    const [planet, setPlanet] = useState('')

    useEffect(() => {
        axios
            .get(`${character.homeworld}`)
            .then(response => {
                setPlanet(response.data.name)
            })
            .catch(error => {
                console.log('Error connecting to API due to ', error)
            })
    }, []);

    return(
        <div className='characterCards'>
            {/* <Card 
                className='characterCard' 
                header={character.name} 
                meta={`Gender: ${character.gender}`} 
                description={`Weight: ${character.mass}`}> */}
                    <Modal trigger={<Card 
                        className='characterCard' 
                        header={character.name} 
                        meta={`Gender: ${character.gender}`} 
                        description={`Weight: ${character.mass}`} 
                    />}>
                        <Modal.Header>{character.name}</Modal.Header>
                        <Modal.Content>
                        <Modal.Description>
                            <Header>More Info</Header>
                            <p>{`Home World: ${planet}`}</p>
                            <p>{`Birth Year: ${character.birth_year}`}</p>
                        </Modal.Description>
                        </Modal.Content>
                    </Modal>
        </div>
    )
}

export default CharacterCard;