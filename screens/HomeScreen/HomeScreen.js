import { ImageBackground, Text, } from 'react-native'
import React from 'react'
import variables from '../../variables/variables'
import CustomButton from '../../components/CustomButton'
import styles from './style'
const HomeScreen = ({ navigation }) => {

    const onPress = () => navigation.navigate('catalog')
    return (

        <ImageBackground
            style={styles.cover}
            source={variables.ImageBackground}
        >

            <Text style={styles.MainHeading}>GLOBAL DIGITAL LIBRARY</Text>
            <Text style={styles.SmallHeading}>Read books, enjoy life</Text>
            <CustomButton
                onPress={onPress}
                backgroundColor={variables.COLORS.BLACK}
                color={variables.COLORS.WHITE}
                text="EXPLORE THE LIBRARY"
            />

        </ImageBackground>
    )
}

export default HomeScreen
