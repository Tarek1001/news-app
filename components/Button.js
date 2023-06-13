import React,{useEffect,useState} from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const Button = ({ text, onPress, bordered, size, textColor, setTimer}) => {
    const [disabled, setDisabled] = useState(true);
    const [btnColor, setBtnColor] = useState('#808080');
    if (setTimer === true){
      useEffect(() => {
        const timer = setTimeout(() => {
          setDisabled(false);
          setBtnColor('#2196f3');
        }, 2000);
        return () => clearTimeout(timer);
      }, []);}
      else {
        useEffect(() => {
        setDisabled(false);
        setBtnColor('#2196f3');
        },[])
      }
    const large = width / 1.5
    const small = width / 2
    const btnBorderRadius = bordered ? 30 : 5
    const btnSize  = size === 'large' ? large : small
    const btnTextColor = textColor
    const containerCommonStyle = {
        backgroundColor: btnColor,
        paddingVertical: 8,
        width: btnSize,
        borderRadius: btnBorderRadius
      }
    const textCommonStyle = {
        color: btnTextColor,
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',  
      }
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} disabled={disabled}>
      <View style={containerCommonStyle}>
        <Text  style={textCommonStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}
export default Button




