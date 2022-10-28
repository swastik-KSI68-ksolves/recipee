import { useContext } from "react";
import { Text, View, StyleSheet } from "react-native"
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";

const Favourites = () => {
    const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id));

    if (favouriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You don't have any favourite meal yet.</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <MealList
                items={favouriteMeals}
            />
        </View>
    )
}

export default Favourites;

const styles = StyleSheet.create({
    container: {
        padding: 26,
        flex:1
    },
    text: {
        color: "#000",
        textAlign: "center",
        fontSize: 25,
        backgroundColor: '#e2b497',
        padding: 10
    }
});