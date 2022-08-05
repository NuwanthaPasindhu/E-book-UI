import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import variables from '../../variables/variables'

const ShortList = ({ item, onPress, activeSort }) => {

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: item.name == activeSort ? variables.COLORS.BLACK : variables.COLORS.WHITE }]}
            onPress={() => onPress(item.name)}
        >
            <Text style={{ color: item.name == activeSort ? variables.COLORS.WHITE : variables.COLORS.BLACK }}>
                {item.name}
            </Text>
        </TouchableOpacity>
    )
}

export default ShortList

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2,
    },

})