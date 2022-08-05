import { StyleSheet } from 'react-native'
import variables from '../../variables/variables'
export default StyleSheet.create({
    cover: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    MainHeading: {
        color: variables.COLORS.WHITE,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: 50,
    },
    SmallHeading: {
        color: variables.COLORS.WHITE,
        fontSize: 15,
    },

})
