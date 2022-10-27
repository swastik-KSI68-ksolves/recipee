import { Pressable, Text, View, StyleSheet, Platform } from "react-native"

const CategoriesGridTile = ({ title, color, onPress }) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable style={styles.button}
                android_ripple={{ color: "#ccc" }}
                onPress={onPress}

            >
                <View style={styles.innerContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
    },
})