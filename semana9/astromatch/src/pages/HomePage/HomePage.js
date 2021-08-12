import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HomeContainer } from './styled'
import { Profile, ProfileImage } from './styled'

export const HomePage = () => {
    const [profile, setProfile] = useState({})

    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maisa-faustino-lovelace/person'

    useEffect(() =>{
        getProfile()
    }, [])

    const getProfile = () => {
        axios.get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {

        })
    }
    const choosePerson = (choice) => {
        
        const body = {
            id: person.id ,
            choice: choice
        }
        const headers = {
            headers: {
                'Content-Type': 'application/json'
                
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/maisa-faustino-lovelace/choose-person', body, headers)
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })

    }

    return(
        <HomeContainer>
            <Profile>
                <ProfileImage src={profile.photo} />
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
                <div>
                    <button onClick={choosePerson}>❌</button>
                    <button onClick={choosePerson}>💗</button>
                </div>
            </Profile>
        </HomeContainer>
    )
}