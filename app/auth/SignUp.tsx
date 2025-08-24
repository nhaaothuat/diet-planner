import { Button } from '@/components/shared/Button'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

export default function SignUp () {


     const onSignIn=()=>{

     }

  return (
    <View className="flex-1 bg-white justify-center px-6">
      
      <View className="items-center mb-10">
        <Image
          source={require("../../assets/images/logoipsum-394.png")}
          className="w-24 h-24"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold mt-4">Welcome Back</Text>
      </View>


<TextInput
        placeholder="Name"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />
     
      <TextInput
        placeholder="Email"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

     
      <TextInput
        placeholder="Password"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        secureTextEntry
      />

      
      <Button title='Sign Up'onPress={()=>onSignIn()}/>

     
      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-600">Already have an account? </Text>
        <Link href="/auth/SignIn">
        
          <Text className="text-blue-600 font-semibold">Sign In</Text>
       
        </Link>
      </View>
    </View>
  )
}
