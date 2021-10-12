import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacityBase, TouchableOpacity} from 'react-native'
import FoodList from '../../../Components/FoodList'

export const Data = [
    {
        idFood: 1,
        idUser: 1,
        name: 'Chè Khoai Dẻo',
        ingredients: ['đường', 'bột mì'],
        repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
        image: require('../../../assets/image/backgroundLaunch.jpg'),
        reaction: {
            heart: {
                num: 2,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            haha:{
                num: 3,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            sad:{
                num: 5,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
        }
    },
    {
        idFood: 1,
        idUser: 1,
        name: 'Chè Khoai Dẻo',
        ingredients: ['đường', 'bột mì'],
        repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
        image: require('../../../assets/image/backgroundLaunch.jpg'),
        reaction: {
            heart: {
                num: 2,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            haha:{
                num: 3,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            sad:{
                num: 5,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
        }
    },{
        idFood: 1,
        idUser: 1,
        name: 'Chè Khoai Dẻo',
        ingredients: ['đường', 'bột mì'],
        repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
        image: require('../../../assets/image/backgroundLaunch.jpg'),
        reaction: {
            heart: {
                num: 2,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            haha:{
                num: 3,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            sad:{
                num: 5,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
        }
    },{
        idFood: 1,
        idUser: 1,
        name: 'Chè Khoai Dẻo',
        ingredients: ['đường', 'bột mì'],
        repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
        image: require('../../../assets/image/backgroundLaunch.jpg'),
        reaction: {
            heart: {
                num: 2,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            haha:{
                num: 3,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            sad:{
                num: 5,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
        }
    },{
        idFood: 1,
        idUser: 1,
        name: 'Chè Khoai Dẻo',
        ingredients: ['đường', 'bột mì'],
        repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
        image: require('../../../assets/image/backgroundLaunch.jpg'),
        reaction: {
            heart: {
                num: 2,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            haha:{
                num: 3,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            sad:{
                num: 5,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
        }
    },{
        idFood: 1,
        idUser: 1,
        name: 'Chè Khoai Dẻo',
        ingredients: ['đường', 'bột mì'],
        repice: ['nặn đường và bột mì rồi đun lên', 'Đun sôi thì vớt ra ăn'],
        image: require('../../../assets/image/backgroundLaunch.jpg'),
        reaction: {
            heart: {
                num: 2,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            haha:{
                num: 3,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
            sad:{
                num: 5,
                user: ['Khoa Phạm', 'Hồng Ánh']
            },
        }
    },
]


const Home = ({navigation}) => {

    return (
        <View>
            <ScrollView> 
            <Text style = {styles.title}>Kho cảm hứng</Text>
            <FoodList title="Món mới nhất" data = {Data} navigation = {navigation}/>
            <FoodList title="Trổ tài với các món đặc sắc" data = {Data} navigation = {navigation}/>
            <FoodList title="Khám phá xem thứ gì đang trong mùa nhé!" data = {Data} navigation = {navigation}/>
            <FoodList title="Chúc mừng top 3 món ăn" data = {Data} navigation = {navigation}/>
            </ScrollView> 
        </View>
    )
}

const styles = StyleSheet.create({
    contrain: {

    },
    title: {
        fontSize: 24,
        margin: 20,
        fontWeight: 'bold'
    }
})

export default Home;

