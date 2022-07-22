import React, { useEffect, useState } from 'react'
import { Text, View, Image } from 'react-native'
import { fetchData } from '../services/API'
import { AxiosResponse } from 'axios'
import { IMG_URL } from '../config/config'
import { FlatList } from 'react-native-gesture-handler'
import { TabBarItem } from 'react-native-tab-view'

const DiscoverMovies = () => {
    const [movies, setMovies] = useState<[]>([]);
    const [images, setImages] = useState<[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const response: AxiosResponse | undefined = await fetchData('discover/movie')
            const results: [] = response?.data.results
            // console.log(results)
            setMovies(results)
            //getting all the path fot he images
            const img = response?.data.results.map((data: any, index: any) => `${IMG_URL}${data.backdrop_path}`)
            setImages(img)
        }
        getMovies()
    }, [])

    console.log(movies)
    // console.log(images)

    return (
        <View>
            <FlatList
                ListHeaderComponent={<Text></Text>}
                horizontal={true}
                data={movies}
                renderItem={({ item } : any ) => (
                    <Image
                        style={{ height: 250, width: 150 }}
                        source={{
                            uri: `${IMG_URL}${item?.backdrop_path}`,
                        }}
                    />
                )}
            />
            <Text></Text>
        </View>
    )
}

export default DiscoverMovies