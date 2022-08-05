import { StyleSheet, FlatList, View, useWindowDimensions } from 'react-native'
import SortButton from './SortButton'
import React, { useState } from 'react'
import data from '../../assets/data/ShortListData.json'
const ShortList = () => {
    const [activeSort, setActiveSort] = useState("ALL");
    const { height } = useWindowDimensions();
    const onPress = (name) => { setActiveSort(name) }

    return (
        <View style={[styles.sortList, { height: height * 0.05 }]}>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={({ item }) => <SortButton item={item} onPress={onPress} activeSort={activeSort} />
                }
                keyExtractor={item => item.id}
            />

        </View >
    )
}

export default ShortList

const styles = StyleSheet.create({
    sortList: {
        width: '95%',
        alignSelf: 'center',
        marginVertical: 5,
        // backgroundColor: 'red'
    }
})