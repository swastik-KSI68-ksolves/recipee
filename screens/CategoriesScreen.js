import { FlatList, SafeAreaView } from "react-native"

import { CATEGORIES } from "../data/dummy-data"
import CategoriesGridTile from "../components/CategoriesGridTile"

const CategoriesScreen = ({ navigation }) => {

    const renderCategoryItem = (itemData) => {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            })
        }

        return <CategoriesGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    }

    return <SafeAreaView style={{ padding: 20 }}>
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns="2"
        />
    </SafeAreaView>
}

export default CategoriesScreen; 