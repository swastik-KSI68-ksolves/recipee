import { Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"


const IconButton = ({ icon, onPress, color, size }) => {
    return (
        <Pressable
            style={({ pressed }) => pressed && styles.prssed}
            onPress={onPress}
        >
            <Ionicons
                name={icon}
                size={size}
                color={color}
            />
        </Pressable>
    )
}

export default IconButton
const styles = StyleSheet.create({
    prssed: {
        opacity: 0.5,
    }
})