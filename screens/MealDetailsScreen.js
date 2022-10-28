import { useContext, useLayoutEffect } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import IconButton from '../components/IconButton';
import List from '../components/MealDetails/List';
import Subtitle from '../components/MealDetails/Subtitle';
import MealDetailsMaker from '../components/MealDetailsMaker';
import { MEALS } from '../data/dummy-data';
import { FavouritesContext } from "../store/context/favourites-context"

const MealDetailsScreen = ({ route, navigation }) => {

    const favouriteMealsCtx = useContext(FavouritesContext);

    const mealId = route.params.mealId;
    const selectMeal = MEALS.find(
        (meal) => meal.id === mealId
    );

    const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

    const changeFavouriteStatusHandler = () => {
        if (mealIsFavourite) {
            favouriteMealsCtx.removeFavourite(mealId);
        }
        else {
            favouriteMealsCtx.addFavourite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavourite ? 'star' : 'star-outline'}
                    color={"white"}
                    size={24}
                    onPress={changeFavouriteStatusHandler} />
            }
        })
    }, [navigation, changeFavouriteStatusHandler])

    return (
        <View style={styles.upperContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectMeal.imageUrl }} />
            <Text style={styles.title}>{selectMeal.title}</Text>
            <MealDetailsMaker

                complexity={selectMeal.complexity}
                affordability={selectMeal.affordability}
                duration={selectMeal.duration}
                style={{ color: "white" }}
            />
            <ScrollView style={{ flex: 1 }}
            >
                <View style={{ alignItems: 'center', }}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectMeal.ingredients} />
                        <Subtitle>Steps</Subtitle>
                        <List data={selectMeal.steps} steps={true} />
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default MealDetailsScreen;
const styles = StyleSheet.create({
    upperContainer: {
        flex: 1,
        padding: 15,
        color: "white",
    },
    title: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 23,
        margin: 8,
        color: "white"
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'contain'
    },
    listContainer: {
        maxWidth: "90%"
    },
})