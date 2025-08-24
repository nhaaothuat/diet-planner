import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

export const Button = ({title,onPress}:ButtonProps) => {
     return (
          <TouchableOpacity onPress={onPress} className="bg-blue-500 px-8 py-4 rounded-2xl items-center w-full mt-8">
               <Text className="text-white text-lg font-semibold">{title}</Text>
          </TouchableOpacity>
     )
}
