import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useOrder from '../utils/useOrder'

interface ButtonProps {
    children: React.ReactNode
    onPress?:any
    className?: string
}

const Button:React.FC<ButtonProps> = ({children, onPress, className}) => {
  return (
    <TouchableOpacity className='bg-slate-500 p-3 rounded-lg w-1/3 items-center' onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default Button