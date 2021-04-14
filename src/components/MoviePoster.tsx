import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterfaces';

interface Props {
    movie   : Movie,
    height ?: number,
    width  ?: number
}

export const MoviePoster = ( { movie, height = 420, width = 300 } : Props ) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`;
    // console.log( uri )
    return (
        <View style={{
            width,
            height,
            marginHorizontal: 5
        }}>
            <View style={ styles.imageContainer }>
                <Image source={{ uri }} style={ styles.image }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        // backgroundColor: 'red'
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7.49,

        elevation: 10,
    },

    image: {
        flex: 1,
        borderRadius: 18
    }
});
