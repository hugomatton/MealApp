import {Text, View, StyleSheet} from 'react-native'
import { useContext } from 'react'

import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext } from '../store/context/favorites-context'
import {MEALS} from '../data/dummy-data'

function FavoritesScreen(){

    const favoriteMealsIds = useContext(FavoritesContext).ids

    favoriteMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id))

    return (
        favoriteMeals.length === 0 ? 
        <View style={styles.root}>
            <Text style={styles.text}>You don't have any favorite meal</Text>
        </View>
        :
        <MealsList items={favoriteMeals}/>
    )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        alignItems: 'center',
        color: 'white',
        fontSize: 15
    }
})