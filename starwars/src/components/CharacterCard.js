import React from 'react'

import { Card} from 'semantic-ui-react'

const CharacterCard = ({character}) => {

    // const [planet, setPlanet] = useState('')

    // useEffect(() => {
    //     axios
    //         .get(`${character.planet}`)
    //         .then(response => {
    //             // setPlanet(response.data.results)
    //             console.log(response.name)
    //         })
    //         .catch(error => {
    //             console.log('Error connecting to API due to ', error)
    //         })
    // }, []);

    return(
        <div className='characterCards'>
            <Card
                className='characterCard'
                header={character.name}
                meta={`Gender: ${character.gender}`}
                description={`Weight: ${character.mass}`}
                // extra={extra}
            />
        </div>
    )
}

export default CharacterCard;