import { Text, TextInput, View } from "react-native";

const ChatMessageTextInputView = () => {
    return <View style = {{padding:12, flexDirection:'row', alignItems:'center',}}>
        <View style ={{flex:1}}>
        <TextInput style= {{ borderWidth:1, borderColor:'gray',  borderRadius:12, height:48, padding:12}}  />
        </View>
        <View style = {{marginLeft:8, backgroundColor:'blue', padding:12, borderRadius:8, justifyContent:'center', alignItems:'center'}}>
            <Text style= {{color:'white'}}> Send</Text>
        </View>
        

    </View>
}

export default ChatMessageTextInputView;