import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native'

import Input from '../../../components/Input'
import Link from '../../../components/Link'
import Node from '../../../components/Node'

const Register =  (props) => {
    const {navigation} = props
    return(
     <ImageBackground
        source={require('./../../inmage/hinhnen4.jpg')}
        resizeMode="cover"
        style={styles.image}>
    <ScrollView>
    <View style = {styles.contrain}>
        <Text style = {styles.title} >Hello,</Text>
        <Text style = {styles.minititle}>Register first</Text>
        <Input title = 'Username' range = {8} placeholder = "Enter your email"/>
        <Input title = 'Password' pass = {true} range = {4} placeholder = "Enter your password"/>
        <Input title = 'Confirm Password' pass = {true} range = {4} placeholder = "Confirm your password"/>
        <Node nameNode = 'Register'/>
        <View style = {{
            marginVertical: 'auto',
            flex : 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 20,
        }}>
            <View style = {styles.hr}></View>
            <Text style = {{
                textAlign: 'center',
                color: 'white'
            }}>OR</Text>
            <View style = {styles.hr}></View>
        </View>
        <Link cmp= "Register" image={require('./../../inmage/GoogleLogo.png')} name="Google"/>
        <Link cmp= "Register" image={require('./../../inmage/logoFB1.png')} name="Facebook"/>
        <View style = {styles.change}>
            <Text style = {styles.text}>Already have acount?</Text>
            <TouchableOpacity style = {styles.button} onPress = {() => {navigation.navigate('Login')}}>
            <Text style = {styles.textButton}>Login here</Text>
        </TouchableOpacity>
        </View>
        
    </View>
    </ScrollView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    contrain: {
        flex:1,
        backgroundColor: 'rgba(154, 229, 237, 0)',
        paddingHorizontal: 40,
    },
    title: {
        paddingTop: 20,
        fontSize: 40,
        color: '#f8f8ff',
        fontFamily: '',
        fontWeight: 'bold'
    },
    change: {
        marginTop: 30,
        color: '#f8f8ff'
    },
    textButton: {
        fontWeight: "bold",
        alignSelf: 'center',
        color: '#f8f8ff'

    },
    text:{
        alignSelf: 'center',
        color: '#f8f8ff'
    },
    button:{
        alignSelf: 'center',
        color: '#f8f8ff'
    },
    minititle: {
        marginLeft: 20,
        color: '#f8f8ff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        // justifyContent: "center"
      },
    hr: {
        height: 2,
        backgroundColor: '#fff',
        flexGrow: 1,
        maxWidth: '40%'
    }


})

export default Register