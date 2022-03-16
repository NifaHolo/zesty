
import React, {Component} from "react";
import { SafeAreaView, StyleSheet,TextInput,TouchableOpacity, View, ScrollView, Text, Image } from "react-native";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = { valueArray: [],post: {}} // définis les constructeurs
  }

  addMore = () => { // fonction addMore 
    fetch('https://coffee.alexflipnote.dev/random.json')  //lien avec l'api
    .then((response)=>{return response.json()})           //transforme l'api en json
    .then((result)=>{this.setState({post: result});       //donne la valeur de résult(le lien) à post(qui est un constructeur)
    let newlyAddedValue = { image: this.state.post.file, index: this.state.textValue}; //définis les variables index et images et donne ces valeurs à newlyAddedValue
    this.setState({ valueArray: [...this.state.valueArray, newlyAddedValue]})})       //donne la valeur à value array de lui meme et de newlyAddedValue
     
    
  }

  render() {
    let newArray = this.state.valueArray.slice(0).reverse().map((item,key) => { //crée la liste de ValueArray et affiche par l'inverse avec "slice(0).reverse()"
      return (
         <View key={key}> 
          {/* crée une view en fonction du numéro de la liste ValueArray  */}
          <Text>{item.index} </Text>  
          {/* affiche le texte tapé  */}
          <Image style={styles.logo} source={{uri : item.image}}/>
          {/* affiche une image aléatoire */}
          <Text> {"\n"} </Text> 
          {/* saut de ligne (pour la mise en forme)  */}
        </View>
      );  
    });

    return (
      <SafeAreaView>    
        <TextInput style={styles.input} onChangeText={(textValue) => this.setState({textValue})} placeholder="Quoi de neuf ?"/>
        {/* récupère les value de la zone de texte et l'envoie à index */}
        <TouchableOpacity style={styles.button} onPress={this.addMore}>
        {/* crée un boutton modifiable qui appel la fonction addMore */}
        <Text style={styles.textbutton} >Publier</Text>
         {/* met le texte sur le boutton */}
        </TouchableOpacity>
        <Text> {"\n"} </Text>
        {/* saut de ligne (pour la mise en forme)  */}
        <ScrollView>
          {/* permet de scroller  */}
          <View style={styles.added}>
            {
              newArray  //ajoute newArray  (appel la liste et son code) 
            }                 
          </View>
        </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
  },

  button: {
    backgroundColor: "gold",
    width: 100,
    padding: 10,
    marginTop: 100,
    marginLeft: 255,
    alignItems: "center",
    borderRadius: 10,
    position: "absolute",
    marginbottom:500,
  },

  textbutton: {
    color: "white",
    fontSize: 15,
    fontWeight:"bold",
  },

  added: {
    flex:1,
    paddingbottom:100,
    margintop: 100,
    marginBottom: 200,
    marginLeft:40,
  },

  logo:{
    width: 310,
    height: 200, 
  }
});
export default App;