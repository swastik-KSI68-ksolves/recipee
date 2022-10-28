import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { }
});

const FavouritesContextProvider = ({ children }) => {

    const [favouriteMealIds, setfavouriteMealIds] = useState([]);

    const addFavourite = (id) => {
        setfavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    const removeFavourite = (id) => {
        setfavouriteMealIds((currentFavIds) =>
            currentFavIds.filter((mealId) => mealId !== id)
        );
    }

    const values = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    };

    return <FavouritesContext.Provider value={values}>
        {children}
    </FavouritesContext.Provider>
}


export default FavouritesContextProvider;