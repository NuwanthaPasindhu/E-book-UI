import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import variables from '../variables/variables'
const CustomButton = ({ onPress, backgroundColor, color, text }) => {
    return (
        <TouchableOpacity style={[styles.Button, { backgroundColor: backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.ButtonText, { color: color }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    Button: {
        position: 'absolute',
        bottom: 50,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 15,
    },
    ButtonText: {
        fontSize: 20,
    },
})