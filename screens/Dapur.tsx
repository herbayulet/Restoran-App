import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import useDapur from '../utils/useDapur'
import Layout from '../components/Layout.tsx'
import useOrder from '../utils/useOrder'

const Dapur = () => {
  const {meja1, meja2, meja3} = useDapur() 
  return (
    <View className='bg-white h-full pt-3 space-y-3'>
      <View className='mx-3 bg-cyan-100/50 rounded-md p-2'>
        <Text className='text-xl font-bold'>Meja 1</Text>
        {meja1 && meja1.length > 0 && (
          meja1.map((data, key) => {
            return (
              <View className='space-y-3' key={data?.id}>
                <View className='flex-row gap-3 pt-1'>
                  <Text>{data?.kuantity}x</Text>
                  <Text>{data?.menu}</Text>
                </View>
              </View>
            )
          })
        )}
      </View>
      <View className='mx-3 bg-cyan-100/50 rounded-md p-2'>
        <Text className='text-xl font-bold'>Meja 2</Text>
        {meja2 && meja2.length > 0 && (
          meja2.map((data, key) => {
            return (
              <View className='space-y-3' key={data?.id} >
                <View className='flex-row gap-x-3'>
                  <Text>{data?.kuantity}x</Text>
                  <Text>{data?.menu}</Text>
                </View>
              </View>
            )
          })
        )}
      </View>
      <View className='mx-3 bg-cyan-100/50 rounded-md p-2'>
        <Text className='text-xl font-bold'>Meja 3</Text>
        {meja3 && meja3.length > 0 && (
          meja3.map((data, key) => {
            return (
              <View className='space-y-3' key={data?.id}>
                <View className='flex-row gap-x-3'>
                  <Text>{data?.kuantity}x</Text>
                  <Text>{data?.menu}</Text>
                </View>
              </View>
            )
          })
        )}
      </View>
    </View>
  )
}

export default Dapur