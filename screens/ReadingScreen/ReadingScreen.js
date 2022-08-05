import { Image, View, TouchableOpacity, Text, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import variables from '../../variables/variables'
import styles from './styles';
const ReadingScreen = ({ route, navigation }) => {
    const { height } = useWindowDimensions();
    const { name, BookImage } = route.params;
    return (

        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.ImageContainer}>
                <Image style={[styles.BannerImage, { height: height * .6 }]} source={{ uri: BookImage }} />
                <TouchableOpacity style={styles.ArrowButton} onPress={() => navigation.navigate('catalog')}>
                    <Ionicons name="arrow-back-sharp" size={24} color={variables.COLORS.BROWN} />
                </TouchableOpacity>
            </View>
            <View style={styles.BookDetails}>
                <Text style={styles.BookHeading}>{name}</Text>
                <Text style={styles.BookAuthor}> {name} BY WILLIAM FAULKNER</Text>
            </View>

            <View style={styles.BookContentContainer}>
                <Text style={styles.BookContent}>

                    This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.

                    This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.

                    This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.

                    This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.

                    This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.

                    This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.

                    This quotation for Faulkner’s 1936 novel comes from the Books of Samuel – more specifically, 19:4 in 2 Samuel, which is in the Old Testament and relates some of the history of Israel. Absalom, the third son of David, rebelled against his father and was killed in battle. The full Biblical sentence is But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son! Faulkner was a big fan of borrowed titles: his 1939 If I Forget Thee, Jerusalem is also from the Bible, Psalms 137:5. The line in question is If I forget thee, Jerusalem, let my right hand forget its skill.
                </Text>
            </View>
        </ScrollView>

    )
}

export default ReadingScreen;
