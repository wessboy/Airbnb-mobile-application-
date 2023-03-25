import { StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
 image:{
  width:'100%',
  height:500,
  resizeMode:'cover',
  justifyContent:'center',
 },
 title:{
    fontSize:80,
    fontWeight:'bold',
    color:'white',
    width:'70%',
    marginLeft:25
 },
 button:{
  backgroundColor:'#fff',
  width:200,
  height:40,
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center',
  marginLeft:25,
  marginTop:25
 },
 buttonText:{
  fontSize:16,
  fontWeight:'bold',
  color:'#000'
 },
  searchButton:{
  backgroundColor:'#fff',
  width:Dimensions.get('screen').width - 20,
  height:60,
  borderRadius:30,
  marginHorizontal:10,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  position:'absolute',
  top:20,
  zIndex:100
 },
 searchButtonText:{
  fontSize:16,
  fontWeight:'bold',
  color:'#000'
 }
})

export default styles