import React from 'react'
import { ProfileListItem } from '../../components/ProfileListItem/profileListItem'
import { ListItemContainer } from '../../components/ProfileListItem/styled'
import { MatchContainer } from './styled'

export const MatchesPage = () => {
    return(
        <MatchContainer>
            <ProfileListItem></ProfileListItem>
        </MatchContainer>
    )
}