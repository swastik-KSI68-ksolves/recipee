import { Text, View, StyleSheet } from "react-native"

const List = ({ data, steps }) => {
    return data.map((item, index) => (
        <View key={index} style={styles.listItem}>
            {
                steps
                    ? <Text key={index} style={styles.itemText}>{index + 1} -   {item}</Text>
                    : <Text key={index} style={styles.itemText}>{item}</Text>
            }
        </View>
    ))
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        textAlign: 'auto',
        color: "#351401",
    },
})