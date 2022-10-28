import { Text, View, StyleSheet, FlatList, } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem"
import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

const MealsOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === categoryId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        })
    }, [categoryId, navigation])

    return <MealList
        items={displayedMeals}
    />
}

export default MealsOverviewScreen;

