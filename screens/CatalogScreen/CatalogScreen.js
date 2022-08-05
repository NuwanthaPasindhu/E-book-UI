import { Text, View, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import variables from '../../variables/variables';
import styles from './styles';
import ShortList from '../../components/SortList/SortList';
import BookList from '../../components/BookList/BookList';
const CatalogScreen = ({ navigation }) => {
    const onPress = ({ image, name }) => {
        navigation.navigate('reading', {
            BookImage: image,
            name: name
        })
    }
    const { height } = useWindowDimensions();
    return (
        <View style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.Top}>
                <Text style={styles.HeaderText}>Catalog</Text>
                <TouchableOpacity >
                    <FontAwesome name="search" size={20} color={variables.COLORS.BROWN} />

                </TouchableOpacity>
            </View>
            <ShortList />
            <BookList onPress={onPress} />

        </View>
    )
}

export default CatalogScreen
