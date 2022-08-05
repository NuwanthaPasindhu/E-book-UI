import { StyleSheet } from "react-native"
import variables from '../../variables/variables'
export default StyleSheet.create({
    container: {
        flex: 1
    },
    ImageContainer: {
        width: '100%',
    },
    BannerImage: {
        width: '100%',
    },
    ArrowButton: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: variables.COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 10,
        left: 10,
    },
    BookDetails: {
        height: 100,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    BookHeading: {
        color: variables.COLORS.BLACK,
        fontSize: 25,
        lineHeight: 30
    },
    BookAuthor: {
        color: variables.COLORS.BROWN,
        fontSize: 13,


    },
    BookContentContainer: {
        paddingHorizontal: 15,
    },
    BookContent: {
        textAlign: 'justify',
        lineHeight: 20,
    },
})