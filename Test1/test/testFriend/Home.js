import React ,{useState} from 'react';
import{
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native'

const Home = (props) =>{
    const [nameFriend, setnameFriend] = useState('');
    const [list, setList] = useState([])
    console.log(`nameFriend`, list)
    const {navigation} = props
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Nhập tên bạn của bạn</Text>
                <TextInput 
                value = {nameFriend}
                placeholder="What's your friend?"
                onChangeText = {setnameFriend}
                style = {{
                    height: 50,
                    fontSize: 15,
                    margin: 20
                }}
                onSubmitEditing = {(temp) => (
                    temp = list, 
                    list.push(nameFriend), 
                    setList(temp)
                    )}
                >
                </TextInput>
                <TouchableOpacity onPress={() =>{
                    
                    navigation.navigate('List', {name: list})}}>
                    <Text>Xem danh sách bạn bè của bạn</Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1
    },
    text:{
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 50,
        fontSize: 20,
        color: '#f0ffff',
        backgroundColor: `#006400`,
        height: 50,
        width: 250
    }
})

export default Home;