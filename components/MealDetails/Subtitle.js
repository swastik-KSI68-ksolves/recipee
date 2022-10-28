import { StyleSheet, Text, View } from "react-native"

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer: {
        margin: 6,
        padding: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
    },
})