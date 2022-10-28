import { View, StyleSheet, Text } from "react-native"

const MealDetailsMaker = ({ duration, complexity, affordability, style }) => {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItems, style]}>{duration}</Text>
            <Text style={[styles.detailItems, style]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItems, style]}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetailsMaker
const styles = StyleSheet.create({
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