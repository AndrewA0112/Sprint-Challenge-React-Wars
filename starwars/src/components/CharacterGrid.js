import React from 'react'

import CharacterCard from './CharacterCard';


const CharacterGrid = ({charactersList}) => {

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
        <div className='characterGrid'>
            {
                charactersList.map((character, i) =>
                    <CharacterCard
                        key = {i}
                        character = {character}
                    />
            )}
        </div>
    )
}

export default CharacterGrid;