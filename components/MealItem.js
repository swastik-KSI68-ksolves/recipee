import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native"

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
    return (
        <View style={styles.upperContainer}>
            <Pressable
                android_ripple={{ color: "#ccc" }}

            >
                <View>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItems}>{duration}</Text>
                    <Text style={styles.detailItems}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItems}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 18,
    },
    upperContainer: {
        margin: 15,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform === 'android' ? 'hidden' : 'visible'
    },
    details: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 8,
    },
    detailItems: {
        marginHorizontal: 4,
        fontSize: 12,
    }
})