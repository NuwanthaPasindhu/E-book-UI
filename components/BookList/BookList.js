import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import Book from './Book'
import dataList from '../../assets/data/ImageList.json';

const BookList = ({ onPress }) => {
    return (
        <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            data={dataList}
            renderItem={({ item }) => <Book url={item.download_url} name={item.author} onPress={onPress} />}
            keyExtractor={item => item.id}
            numColumns={2}

        />



    )
}

export default BookList

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 10,
    }

})