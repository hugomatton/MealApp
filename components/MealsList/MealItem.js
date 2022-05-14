import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MealDetails from '../MealDetails'

function MealItem({id, title, imageUrl, duration, complexity, affordability}){

    const navigation = useNavigation()

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {
            mealId: id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed})=>
                        pressed ? styles.buttonPressed : null
                }
                onPress={selectMealItemHandler}
            >
                <View>
                    <View style={styles.innerContainer}>
                        <Image style={styles.image} source={{uri: imageUrl}}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails 
                        complexity={complexity} 
                        affordability={affordability} 
                        duration={duration}
                    />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 2 ,height: 0},
        shadowRadius: 8,
        overflow: Platform.os === 'android' ? 'hidden' : 'visible'

    },
    innerContainer:{
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5
    }
})