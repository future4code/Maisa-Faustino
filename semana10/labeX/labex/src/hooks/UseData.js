import React, { useCallback, useState } from 'react'
import axios from 'axios'

const UseData = () => {
    const [data, setData] = useState(null)
    const request = useCallback(async (url, body, headers, method) => {
        let response
        if (method.toUpperCase() === 'GET'){
            try{
                response = await axios.get(url, headers)
            } finally{
                setData(response)
                return response
            }
        }

        if (method.toUpperCase() === 'POST'){
            try{
                response = await axios.post(url, body, headers)
            } finally{
                setData(response)
                return response
            }
        }

        if (method.toUpperCase() === 'DELETE'){
            try{
                response = await axios.delete(url, headers)
            } finally{
                setData(response)
                return response
            }
        }

        if (method.toUpperCase() === 'PUT'){
            try{
                response = await axios.put(url, headers)
            } finally{
                setData(response)
                return response
            }
        }
    
    })
    return {data, request}
}

export default UseData
