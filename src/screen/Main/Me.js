import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { StateGlobal } from '../../../App';

import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonProfile} from '../../../components/ButtonProfile';

 const Me = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  const {setcheck} = useContext(StateGlobal)

  return (
    <ScrollView style={{backgroundColor: '#F8F8F7', padding: 5}}>
      <View>
        <View style={{flexDirection: 'row-reverse'}}>
        <TouchableOpacity >
          <Icon
            name="person"
            color='#000'
            type="font-awesome"
            size={20}
            // containerStyle={styles.person}
            style={styles.person}
          />
        </TouchableOpacity>
        </View>
        <View style={styles.infor}>
          <Image
            style={styles.avata}
            source={{
              uri: 'https://play-lh.googleusercontent.com/fk1PBadTRlGq67UFQ_3Wx0GGgz929AUNpmyKa8vGaoT1UovXKssiPpurOMQo9bhc_Eo',
            }}></Image>
          <Text style={styles.name}>Nguyễn Hồng Ánh</Text>
          <TouchableOpacity>
            <Text style={styles.sync}>Sync Data</Text>
          </TouchableOpacity>
          <Text style={styles.lastSync}>Last Sync:Today 10:03 AM</Text>
          <TouchableOpacity>
            <Text style={styles.premium}>GO PREMIUM</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <ButtonProfile name="My Profile" />
          <ButtonProfile name="My Favorite" />
        </View>
        <View>
          <Text style={styles.titleType}>Settings</Text>
          <ButtonProfile name="Workout Settings" />
          <ButtonProfile name="General Setting" />
          <ButtonProfile name="Language Options" />
          <TouchableOpacity style={styles.appleHealth}>
            <Text >Apple Health</Text>
            <Switch
              style={styles.switch}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleType}>Support us</Text>
          <ButtonProfile name="More Apps" />
          <ButtonProfile name="Remove Ads" />
          <ButtonProfile name="Rate Us" />
          <ButtonProfile name="Feedback" />
        </View>
        <TouchableOpacity
          style={styles.logout}
          onPress={async () => {
            await AsyncStorage.setItem('log', JSON.stringify(false));
            setcheck(false)
          }}>
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.version}>Version 1.8.1</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  person: {
    marginRight: 10,
    borderRadius: 100,
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc',
  },
  name:{
    fontWeight: 'bold',
    marginTop: 10,
  },
  titleType: {
    fontWeight: 'bold',
    marginVertical: 16,
    marginLeft: 10,
  },
  infor: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleHealth:{
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  switch:{

  },
  sync: {
    backgroundColor: '#0053FF',
    borderRadius: 40,
    height: 44,
    width: 240,
    marginVertical: 12,
    paddingVertical: 12,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 20

  },
  lastSync:{
    color: '#C0C0C0',
    fontSize: 12,
  },
  premium: {
    backgroundColor: '#FC9909',
    borderRadius: 40,
    height: 44,
    width: 240,
    marginVertical: 12,
    paddingVertical: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  version:{
    textAlign: 'center',
    color: '#C0C0C0',
    fontSize: 12,
    marginVertical: 10,
  },
  logout: {
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textLogout: {
    color: 'red'
  }
});

export default Me;
