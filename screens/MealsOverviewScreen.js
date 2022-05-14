import { useLayoutEffect } from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native'
import MealItem from '../components/MealsList/MealItem'
import MealsList from '../components/MealsList/MealsList'


import {MEALS, CATEGORIES} from '../data/dummy-data'

function MealsOverviewScreen({route, navigation}){ //pour recupérer les parametre que l'on passe à la vue en navigant

    //L'id de la categorie sur laquelle on a cliqué
    const catId = route.params.categoryId //on a placé l'id de la category en param quand on a utilisé navigation

    /**
     * Permet de gérer ce que l'on affiche dans le header au moment du chargement
     */
    useLayoutEffect(()=>{
        //Le nom de la category sur laquelle on a cliqué
        const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title
        navigation.setOptions({
            title: categoryTitle
        })
    },[catId, navigation])

    
    //Les meals que l'on souhaite afficher
    const displayedMeals = MEALS.filter((mealItem)=>{ //filter (true si on garde item false sinon)
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

   return(
       <MealsList items={displayedMeals}/>
   )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
})
