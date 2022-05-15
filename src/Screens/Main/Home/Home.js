import React, {useEffect, useState} from 'react';
import {View, RefreshControl, ScrollView, StyleSheet} from 'react-native';
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

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({navigation}) => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);
  const newFood = useSelector(state => state.product.newFood);
  console.log(newFood);
  const setFood = useSelector(state => state.product.setFood);
  const specialFood = useSelector(state => state.product.specialFood);
  const topFood = useSelector(state => state.product.topFood);
  const dispatch = useDispatch();
  const [isLoadMoreProcessing, setLoadMoreProcessing] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setStart(0);
      setRefreshing(false)});
  }, []);

  const fetchNewFoodList = async () => {
    const params = {
      _start: start,
      _limit: limit,
      _sort: 'id:DESC',
    };
    dispatch({
      type: TYPESGETLIST.FETCH_NEWFOODLIST_REQUEST,
      params: params,
    });
  };

  const fetchSetFoodList = async () => {
    const params = {
      name_contains: 'salat'
    };
    dispatch({
      type: TYPESGETLIST.FETCH_SETFOODLIST_REQUEST,
      params: params,
    });
  };

  const fetchSpecialFoodList = async () => {
    const params = null;
    dispatch({
      type: TYPESGETLIST.FETCH_SPECIALFOODLIST_REQUEST,
      params: params,
    });
  };

  const fetchTopFoodList = async () => {
    const params = null;
    dispatch({
      type: TYPESGETLIST.FETCH_TOPFOODLIST_REQUEST,
      params: params,
    });
  };

  useEffect(() => {
    const fetchProductList = async () => {
      const params = null;
      try {
        dispatch({
          type: TYPES.LOADING,
        });
        await fetchNewFoodList();
        // await fetchSetFoodList();
        // await fetchSpecialFoodList();
        // await fetchTopFoodList();
        setTimeout(() => {
          dispatch({
            type: TYPES.LOADED,
          });
        }, 1000);
      } catch (error) {
        console.log('Failed to fetch listfood list: ', error);
      }
    };
    fetchProductList();
  }, [refreshing]);
  const handerLoadMore = async () => {
    if (isLoadMoreProcessing) {
      return;
    }
    setLoadMoreProcessing(true);
    setIsLoadMore(true);
    console.log(`loadmore1`);
    setStart(start + 10);
    await fetchNewFoodList();
    console.log('loadmore2');
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
  return (
    <View style={styles.contrain}>
      <Header/>
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
        }
        >
        {/* <FoodList
          title="Trổ tài với các món đặc sắc"
          data={specialFood}
          navigation={navigation}
        />
        <FoodList3
          title="Khám phá xem thứ gì đang trong mùa nhé!"
          data={setFood}
          navigation={navigation}
        />
        <FoodList5
          title="Chúc mừng top các món ăn"
          data={topFood}
          navigation={navigation}
        />
        <FoodList4
          title="Món mới nhất"
          data={newFood}
          navigation={navigation}
          handerLoadMore={handerLoadMore}
          isLoadingMore={isLoadMore}
        /> */}
        <HeaderAddPost/>
        <RenderTag/>
        <ListPostHome data={newFood}/>
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
