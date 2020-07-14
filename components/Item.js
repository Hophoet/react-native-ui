import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions, Modal, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import DetailModal from './DetailModal'

export default class Item extends React.Component{
  //STATE
  state ={
    modalActive:false,
    liked:false,
  }
  _toggleModal = () => {
    this.setState({modalActive:!this.state.modalActive})
  }

  //toggleLike method
  _toggleLike = () => {
    this.setState({liked:!this.state.liked})
  }

  render(){
    const item = this.props.item
    // console.log(this.state.liked)
    return(
      <View style={styles.container}>
        <Modal visible={this.state.modalActive}>
          <DetailModal item={item} liked={this.state.liked} toggleLike={this._toggleLike} toggleModal={this._toggleModal}/>
        </Modal>
        <View style={styles.firstRow}>
          <Image style={styles.image} source={item.image }/>
        </View>
        <View style={styles.secondRow}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
          <TouchableOpacity
            activeOpacity={.5}
            style={styles.button}
            onPress={this._toggleModal}
            >
            <Text style={styles.buttonText}>BUY</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
//get Dimensions
const {width, height}  = Dimensions.get('window')
//set styles
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    margin:10

  },
  firstRow:{
    justifyContent:'center',
    alignItems:'center',
  },
  secondRow:{
    marginVertical:30
  },
  image:{
    height:150,
    width: 150,
    resizeMode: 'contain',

    borderRadius:20,
    margin:5
  },
  title:{
    fontWeight:'bold',
    fontSize:15
  },
  price:{
    fontWeight:'bold',
    fontSize:20,
    alignSelf:'flex-end'
  },
  button:{
    padding:10,
    backgroundColor:"red",
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-start',
    borderRadius:10,

  },
  buttonText: {
    color:'white'
  }
})
