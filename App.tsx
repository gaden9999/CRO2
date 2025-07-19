


import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [dsDuLieu, setdsDuLieu] = useState(null)

  const getList = async () => {
    try {
      const res = await fetch('https://686f69f791e85fac42a0ef73.mockapi.io/users');
      const arr = await res.json();
      setdsDuLieu(arr);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  }

  useEffect(() => {
    getList();
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>
      {
        dsDuLieu ? (
          dsDuLieu.map((item) => (
            <View key={item.id} style={styles.item}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.info}>
                <Text style={styles.id}>ID: {item.id}</Text>
                <Text style={styles.name}>Tên: {item.name}</Text>
                <Text style={styles.date}>Ngày tạo: {new Date(item.createdAt).toLocaleDateString()}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text>Đang tải dữ liệu...</Text>
        )
      }
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    padding: 10,
    borderRadius: 10
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12
  },
  info: {
    flex: 1
  },
  id: {
    fontSize: 14,
    color: '#444'
  },
  name: {
    fontSize: 16,
    fontWeight: '600'
  },
  date: {
    fontSize: 13,
    color: '#777'
  }
})
