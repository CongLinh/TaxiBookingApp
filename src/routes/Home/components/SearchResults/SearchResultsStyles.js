import { Dimensions } from "react-native";
var width = Dimensions.get("window").width; //full width
const styles = {
    searchResultsWrapper:{
        top:168,
        position:"absolute",
        width:width-30,
        height:300,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius: 20,
        borderColor: '#009300',
        borderWidth: 1
    },
    primaryText:{
        fontWeight: "bold",
        color:"#373737"
    },
    secondaryText:{
        fontStyle: "italic",
        color:"#7D7D7D",
    },
    leftContainer:{
        flexWrap: "wrap",
        alignItems: "flex-start",
        borderLeftColor:"#7D7D7D",
    },
    leftIcon:{
        fontSize:20,
        color:"#7D7D7D",
    },
    distance:{
        fontSize:12,
    }
};

export default styles;