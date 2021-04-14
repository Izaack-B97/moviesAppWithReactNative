import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Button, ActivityIndicator, useWindowDimensions, FlatList, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
    
    const { peliculasEnCine, isLoading } = useMovies()
    // const navigation = useNavigation();
    const { top } = useSafeAreaInsets();

    // if ( !isLoading ) {
    //     console.log( peliculasEnCine[0] )
    // }

    const { width } = useWindowDimensions();

    return (
        <View style={{ marginTop: top + 20 }}>
            {
                isLoading
                    ? <ActivityIndicator color="blue" size={100}/>
                    : (
                        <>
                            <ScrollView>
                                <View style={{ height: 440 }}>
                                    <Carousel 
                                        data={ peliculasEnCine }
                                        renderItem={ ( { item }: any ) => <MoviePoster movie={ item }/> }
                                        sliderWidth={ width }
                                        itemWidth={ 300 }
                                    />
                                </View>
                                <View style={{ /* backgroundColor: 'red' ,*/ height: 250, width }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
                                    <FlatList  
                                        data={ peliculasEnCine }
                                        renderItem={ ( { item }: any ) => <MoviePoster movie={ item } height={ 150 } width={ 100 }/> }
                                        keyExtractor={ ( item : any ) => item.id.toString()}
                                        horizontal={ true }
                                        showsHorizontalScrollIndicator={ false }
                                        style={{
                                            marginTop: 10
                                        }}
                                    />
                                </View>
                                <View style={{ /* backgroundColor: 'red' ,*/ height: 260, width }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
                                    <FlatList  
                                        data={ peliculasEnCine }
                                        renderItem={ ( { item }: any ) => <MoviePoster movie={ item } height={ 150 } width={ 100 }/> }
                                        keyExtractor={ ( item : any ) => item.id.toString()}
                                        horizontal={ true }
                                        showsHorizontalScrollIndicator={ false }
                                        style={{
                                            marginTop: 10
                                        }}
                                    />
                                </View>
                            </ScrollView>
                        </>
                    )
            }
        </View>
    )
}
