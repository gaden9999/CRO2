import { Text, View, Image } from 'react-native'
import React from 'react'
import st from './style'

const index = (props) => {
    return (
        <View style={st.khung}>
            <Image style={st.anh} source={{ uri: props.url }}></Image>
            <Text style={st.tieuDe}>{props.title}</Text>

        </View>
    )
}
//cách sử dụng banner: <Banner title:"VD1" url="vvvvvvv"/>

export default index