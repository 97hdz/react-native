import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { fetchData } from '../services/API'
import axios, { AxiosResponse } from 'axios'

const DiscoverMovies = () => {
    const [movies, SetMovies] = useState<{}[]>();

    useEffect(() => {
        const getMovies = async () => {
            const response: AxiosResponse | undefined = await fetchData('discover/movie')
            console.log(response?.data.results)
        }
        getMovies()
    }, [])

    return (
        <View>
            <Text> Discover movies component </Text>
        </View>
    )
}

export default DiscoverMovies