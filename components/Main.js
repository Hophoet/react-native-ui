import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions, FlatList, TouchableOpacity} from 'react-native'
import{setStatusBarBackgroundColor} from 'expo-status-bar'
import {Ionicons} from '@expo/vector-icons'
import Item from './Item'
import {data} from '../data/data'

export default class Main extends React.Component{
  render(){
    //change the statusbar color
    // setStatusBarBackgroundColor('gray')
    return(
      <View style={styles.container}>
        <View style={styles.cartContainer}>
          <Ionicons name='md-cart' color='#000' size={30} />
        </View>
        <View style={styles.itemsContainer}>

          <View style={styles.line}/>
          <View style={styles.flatListContainer}>
            <View style={styles.flatList}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({index, item}) => <Item item={item}/>}
                keyExtractor={(item) => item.id }
              />
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.smText}>Order Symmary</Text>
              <View style={styles.totalContainer}>
                <Text style={styles.smText}>Total</Text>
                <Text style={styles.totalPrice}>$5900</Text>
              </View>
              <TouchableOpacity activeOpacity={.5} style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
//get Dimensions
const {width, height}  = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'gray'
  },
  cartContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },// OPTIMIZE:
  itemsContainer:{
    flex:5,
    backgroundColor:'white',
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
   
  },
  line:{
    alignSelf:'center',
    backgroundColor:'gray',
    width:width/10,
    height:3,
    marginVertical:15,
    borderRadius:20
  },
  flatListContainer:{
    alignItems:'center',
    flex:1
  },
  summaryContainer:{
    flex:1,
    width:width,
    padding:10
  },
  flatList:{
    flex:5,
  },
  smText:{
    fontWeight:'bold',
    alignSelf:'flex-start'
  },
  totalContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  totalPrice:{
    fontWeight:'bold',
    fontSize:20
  },
  checkoutButton:{
    backgroundColor:'red',
    alignSelf:'flex-start',
    padding:7,
    borderRadius:7
  },
  checkoutText:{
    color:'white',
  }
})
