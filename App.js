import React, {Component} from 'react';
import {AppRegistry, Text, TextInput, View} from 'react-native';
 
export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '',anzahl:''};
  }
  handleChange(textvalue) {
    this.setState({text:   textvalue});
    var arr_text = textvalue.split(' ');
    this.setState({anzahl: arr_text.length});
    
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40, backgroundColor: 'azure', fontSize: 20}}
          placeholder="Type here to translate!"
          onChangeText={text =>{ this.handleChange(text)}}
        />
        <Text>
        ich schreibe geradedas:  {this.state.text}
        {"\n"}
        so viel Wörter habe ich geschrieben {this.state.anzahl}
        </Text>
      </View>
    );
  }
}
