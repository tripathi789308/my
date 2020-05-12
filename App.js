import React, { Component } from 'react';
import * as math from 'mathjs';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      elements : '',
      result  : ''
    }
    this.handleclick=this.handleclick.bind(this);
    this.handleclear=this.handleclear.bind(this);
    this.handleCalc=this.handlecalc.bind(this);
    this.handleallclear=this.handleallclear.bind(this);
  }
  handleallclear(t){
    this.setState({
      elements:'',
      result:''
    })
  }
  handlecalc(t){
    data=this.state.elements;
    this.setState({
      result : eval(data)
    })
  }
  handleclick(t){
    this.setState({
       elements:this.state.elements+t
    })
  }
  handleclear(t){
    let exp=this.state.elements.split('')
    exp.pop()
    exp=exp.join('')
    this.setState({
      elements:exp,
      result:''
    })
  }
  
  render(){
    let rows=[];
    let nums=[[1,2,3],[4,5,6],[7,8,9]];
    for(let i=0;i<3;i++){
      let row=[];
      for(let j=0;j<3;j++){
        row.push(<TouchableOpacity style = {styles.eachnumber} onPress={()=>this.handleclick(nums[i][j])}>
          <Text style={styles.text}>{nums[i][j]}</Text>
          </TouchableOpacity>
          );
      }
      rows.push(<View style = {styles.eachrow}>{row}</View>);
    }
    return (
      <View style = {styles.container}>  
          <View style = {styles.calculation}>
              <Text style={styles.calculation_text}>{this.state.elements}</Text>
          </View>
          <View style = {styles.result}>
              <Text style = {styles.text_result}>{this.state.result}</Text>
          </View>
          <View style = {styles.buttons}>
            <View style = {styles.numbers}>
                {rows}
                <View style={styles.eachrow}>
                  <TouchableOpacity style={styles.eachnumber} onPress={()=>this.handleclick('.')}><Text style={styles.text}>.</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.eachnumber} onPress={()=>this.handleclick(0)}><Text style={styles.text}>0</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.eachnumber} onPress={()=>this.handleclear('')} onLongPress={()=>this.handleallclear('')}><Text style={styles.text}>Del</Text></TouchableOpacity>
                </View>
            </View>
            <View style = {styles.operators}>
              
                <TouchableOpacity  style={styles.operator} onPress={()=>this.handleclick('/')}>
                  <Text style={styles.text}>
                    /
                  </Text>
                </TouchableOpacity>
              
              <TouchableOpacity style={styles.operator} onPress={()=>this.handleclick('*')}>
                  <Text style={styles.text}>
                    *
                  </Text>
                </TouchableOpacity>
              <TouchableOpacity style={styles.operator} onPress={()=>this.handleclick('-')}>
                  <Text style={styles.text}>
                    -
                  </Text>
                </TouchableOpacity>
              <TouchableOpacity style={styles.operator} onPress={()=>this.handleclick('+')}>
                  <Text style={styles.text}>
                    +
                  </Text>
                </TouchableOpacity>
              <TouchableOpacity style={styles.operator} onPress={()=>this.handlecalc('')}>
                  <Text style={styles.text}>
                    =
                  </Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({ 
  container:{
    flex:1
  },
  calculation:{
    flex : 1.5,
    backgroundColor : '#A9A9A9',
    justifyContent:'flex-end'
  },
  calculation_text : {
    textAlign : 'right',
    paddingRight:10,
    fontSize:50,
    fontFamily:'monospace'
  },
  result:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'flex-end',
    paddingBottom : 10
  },
  text_result:{
    textAlign : 'right',
    paddingRight:10,
    fontSize:40,
    fontFamily:'monospace'
  },
  buttons:{
    flex:3,
    flexDirection:'row'
  },
  numbers:{
    flex:4
  },
  operators:{
    flex:1
  },
  operator:{
    flex:1,
    justifyContent:'center',
    alignSelf:"stretch"
  },
  eachrow:{
    flex:1,
    flexDirection:'row'
  },
  eachnumber:{
    flex:1,
    justifyContent:"center",
    alignSelf:"stretch",
    backgroundColor:"grey"
  },
  text:{
    textAlign:'center',
    fontFamily:'monospace',
    fontSize:20
  }
})
