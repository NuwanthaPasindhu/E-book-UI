import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import variables from '../../variables/variables'

const Book = ({ url, name, onPress }) => {

    return (
        <TouchableOpacity style={styles.Card} onPress={() => onPress({ image: url, name: name })}>
            <Image style={styles.Image} source={{ uri: url }} />
            <Text style={styles.BookName}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Book

const styles = StyleSheet.create({

    Card: {
        width: '50%',
        marginVertical: 20,
        padding: 5,
        // backgroundColor: 'red'
    },
    Image: {
        width: '100%',
        aspectRatio: 1 / 2,
        borderRadius: 10,
    },
    BookName: {
        color: variables.COLORS.BLACK,
        fontWeight: '500',
        marginTop: 5,
        textAlign: 'center',

    },
})