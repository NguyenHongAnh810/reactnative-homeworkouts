import React from 'react';
import{
    Text,
    View,
    StyleSheet,
    FlatList,
    SafeAreaView,
    StatusBar
} from 'react-native'
  
const Item = ({ title }) => (
    <View style= {styles.item} >
    <Text style={styles.title}>{title}</Text>
    </View>
    );

const List = (props)=>{
    const lists = props.route?.params?.name|| []
    console.log(`lists`, lists)
    const listNew = lists.map((e,index)=>{
        return{
            id: index,
            title: e
        }
    })
   
    const renderItem = ({ item }) => (
        <Item title={item.title} />
        );
    return(
        <View>
            <Text style = {styles.text}>Danh sách bạn bè của bạn </Text>
            <SafeAreaView style = {styles.container}>
            <FlatList
                data={listNew}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            ></FlatList>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#cd5c5c',
        height: 50,
        width: 300,
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
        fontSize: 15,

    },
    container: {
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
        backgroundColor: 'pink',
        margin: 10,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    title: {
        fontSize: 12,
      },

})

export default List;