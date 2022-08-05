import { StyleSheet } from "react-native";
import variables from '../../variables/variables';
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    Top: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },
    HeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ImageBanner: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    BannerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: variables.COLORS.WHITE,
    },
}) 
