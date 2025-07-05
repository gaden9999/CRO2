import { Alert, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native'
import React ,{useState}from 'react'
import Banner from './Component/Banner'
import DemoTextInput from './Component/DemoTextInput'
import CustomHeader from './Component/CustomHeader'
import DemoSection from './Component/DemoSection'

const App = () => {
  const [hoTen, sethoTen] = useState('')
 const [email, setEmail] = useState('')


  const bamNutBack = () => {
    console.log('Bạn đã bấm nút Back');
  }

  return (
    
    <ScrollView>
      

      <CustomHeader title="Tiêu đề màn hình" onBackPress={bamNutBack} />
      <CustomHeader title="Tiêu đề màn hình" onBackPress={bamNutBack} />

      <View style={{ backgroundColor: 'yellow', flex: 1 }}>
        <Text style={{ fontSize: 30 }}>Xin chào</Text>

        <Banner
          title="Okok"
          url="https://letsenhance.io/blog/content/images/2023/02/Image_Prompt_Guide_cover_1.png" />
        <Banner
          title="Không ok"
          url="https://tse1.mm.bing.net/th/id/OIP.OFMlQdJWRGUjT2PNEWN00AHaEK?pid=Api&P=0&h=180"
        />

        <TouchableOpacity style={{
          backgroundColor: '#007bff',
          borderRadius: 8,
          padding: 15,
          alignItems: 'center',
          marginTop: 10,
          width: '50%',
          alignSelf: 'center'
        }}>
          <Text>Đăng Nhập</Text>
        </TouchableOpacity>

        <DemoSection title="Danh sách sản phẩm"
         style={{backgroundColor: 'yellow', margin:20}} >
         <Text>Sản phẩm 1</Text>
         <Text>Sản phẩm 1</Text>
         <TextInput placeholder='Nhập văn bản.....' />
     </DemoSection>
     <DemoSection title="Địa chỉ nhận hàng"
         style={{backgroundColor:'cyan', margin:20}}>
         <Text>Địa chỉ số 1</Text>
         <Text>Địa chỉ số 1</Text>
         <Text>Địa chỉ số 1</Text>
     </DemoSection>

  <Text>Nội dung nhập: Họ tên = {hoTen}, email = {email} </Text>


     <DemoTextInput onChangeText={sethoTen} placeholder="Nhập vào họ tên"
                   label ="Họ và tên"/>
    
     <DemoTextInput onChangeText={setEmail} placeholder="Nhập vào Email"
                   label ="Email"/>



      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})