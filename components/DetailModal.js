import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions, Modal, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export default class DetailModal extends React.Component{

  render(){
    const item = this.props.item
    //get apropriate like icon
    let likeIconName = (this.props.liked)?'ios-heart':'ios-heart-empty'

    return(
      <View style={styles.container}>
        <View style={styles.navContainer}>
          <TouchableOpacity activeOpacity={.5} onPress={this.props.toggleModal}>
            <Ionicons name='ios-arrow-back' size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButonContainer}>
            <Ionicons name='ios-cart' color='white' size={30}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.likeButtonContainer}
          onPress={this.props.toggleLike}
          >
          <Ionicons  name={likeIconName} size={30}/>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={item.image}/>
        </View>
        <View style={styles.itemInfos}>
          <Text style={styles.itemTitle}>{item.title }</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
    )
  }
}
//get Dimensions
const {width, height}  = Dimensions.get('window')
//set styles
const styles = StyleSheet.create({
  navContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:10,
    marginHorizontal:20,

  },
  likeButtonContainer:{
    alignSelf:'flex-end',
    marginVertical:10,
    marginHorizontal:30
  },
  cartButonContainer:{
    backgroundColor:'red',
    borderRadius:6,
    padding:10
  },
  imageContainer:{
      justifyContent:'space-between',
      alignItems:'center',

  }
  ,
  image:{
    resizeMode: 'contain',
    width:width/1.5,
    height:width/1.5
  },
  itemInfos:{
    justifyContent:'center',
    alignItems:'center'
  },
  itemTitle:{
    fontSize:15,
  },
  itemPrice:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  }
})
