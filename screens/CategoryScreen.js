import { FlatList, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'

import {CATEGORIES} from '../data/dummy-data'

/**
 * Screen --> Affiche les categories de nouritures disponibles
 */
function CategoryScreen({navigation}){ //props navigation disponible uniquement dans les composents définit en tant que screen

    /**
     * Fonction qui renvoie un item Category
     */
    function RenderCategoryItem(itemData){
        /**
         * Fonction permettant de naviguer vers l'écran qui affiche la liste des recettes d'une catégorie
         */
        function pressHandler(){
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id //on place l'id en param pour pouvoir récupérer les infos sur la category et les afficher sur le prochain écran
            })
        }
        return(
            <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        )
    }

    return(
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item)=> item.id}
            renderItem={RenderCategoryItem}
            numColumns={2}
        />
    )
}

export default CategoryScreen