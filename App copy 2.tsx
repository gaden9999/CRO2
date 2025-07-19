import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [SanpPham, setSanPham] = useState({ title: 'sản phẩm ', soluong: 22 })
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>


      <Text style={{fontSize:20,fontWeight:'bold'}}>app</Text>
      <Text>tên sản phẩm :{SanpPham.title}</Text>
      <Text>số lượng :{SanpPham.soluong}</Text>
      <Button title='thêm số lương' onPress={() => {
        let obj = { title: SanpPham.title, soluong: SanpPham.soluong +2}
        // obj.soluong += 1
        setSanPham(obj)
      }} />

    </View>
  )
}

export default App

const styles = StyleSheet.create({})
