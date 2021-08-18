import React from 'react'
import {ListItemContainer, RoundImage} from './styled'

export const ProfileListItem = () => { 
    return(
        <ListItemContainer>
            <RoundImage src={'https://i.picsum.photos/id/271/50/50.jpg?hmac=yFKu_VpSNwolkwvJoSNNCEVhwyYb9TYWh1oCyfo8eB0'} />
            <h2>Nome da pessoa</h2>
        </ListItemContainer>
    )
}
