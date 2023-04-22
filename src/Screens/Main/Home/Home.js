import React, {useEffect, useState} from 'react';
import {
  View,
  RefreshControl,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import FoodList from '../../../Components/FoodList';
import FoodList3 from '../../../Components/FoodList3';
import FoodList4 from '../../../Components/FoodList4';
import FoodList5 from '../../../Components/FoodList5';

import {TYPES} from '../../../redux/actions/Action';
import {TYPES as TYPESGETLIST} from '../../../redux/actions/ActionFetchList';
import {useDispatch, useSelector} from 'react-redux';
import Header from './Components/Header';
import HeaderAddPost from './Components/HeaderAddPost';
import ListPostHome from './Components/ListPostHome';
import RenderTag from './Components/RenderTag';
import ListUserSuggest from './Components/ListUserSuggest';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const newFood = useSelector(state => state.product.newFood);
  const [listFeatured, setListFeatured] = useState([]);
  const [tagId, setTagId] = useState(0);
  // const [newFood, setNewFood] = useState()
  const dispatch = useDispatch();
  const [isLoadMoreProcessing, setLoadMoreProcessing] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setStart(0);
      setRefreshing(false);
    });
  }, []);

  const fetchNewFoodList = async _start => {
    const params = {
      _start: _start ?? start,
      _limit: limit,
      _sort: 'id:DESC',
    };
    dispatch({
      type: TYPESGETLIST.FETCH_NEWFOODLIST_REQUEST,
      params: params,
    });
  };

  const fetchProductList = async () => {
    try {
      dispatch({
        type: TYPES.LOADING,
      });
      await fetchNewFoodList();
      setTimeout(() => {
        dispatch({
          type: TYPES.LOADED,
        });
      }, 500);
    } catch (error) {
      console.log('Failed to fetch listfood list: ', error);
    }
  };

  useEffect(() => {
    fetchProductList();
  }, [refreshing]);
  const handerLoadMore = async () => {
    if (isLoadMoreProcessing) {
      return;
    }
    setLoadMoreProcessing(true);
    setIsLoadMore(true);
    setStart(start + 10);
    await fetchNewFoodList(start + 10);
    setTimeout(() => {
      setLoadMoreProcessing(false);
      setIsLoadMore(false);
    }, 500);
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const onPressAddPost = () => {
    navigation.navigate('Add');
  };

  useEffect(() => {
    if (!listFeatured.length) {
      let listFeatureNew = [];
      newFood.map(item => {
        if (item.rate >= 4) {
          listFeatureNew.push(item);
        }
      });
      setListFeatured(listFeatureNew);
    }
  }, [newFood[0]?.rate]);

  return (
    <View style={styles.contrain}>
      <Header navigation={navigation} />
      <ScrollView
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            handerLoadMore();
          }
        }}
        scrollEventThrottle={400}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HeaderAddPost onPressAddPost={onPressAddPost} />
        <RenderTag tagId={tagId} setTagId={setTagId} />
        {tagId == 0 && <ListUserSuggest navigation={navigation} />}
        <ListPostHome
          data={tagId == 0 ? newFood : listFeatured}
          navigation={navigation}
        />
        {isLoadMoreProcessing && <ActivityIndicator size={'small'} />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contrain: {
    backgroundColor: '#ECECEC',
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  viewTitle: {
    borderBottomWidth: 2,
    marginHorizontal: 10,
    borderBottomColor: '#EC7E5D',
    flex: 0.06,
    justifyContent: 'center',
  },
});

export default Home;
