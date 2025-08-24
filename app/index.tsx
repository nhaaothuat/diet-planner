import { Button } from "@/components/shared/Button";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {

  const router=useRouter();
  return (
  <View className="flex-1 bg-white items-center justify-between p-6">
      
      <Image
        source={require("../assets/images/8252722_3864158.jpg")}
        className="w-full h-2/3 rounded-2xl"
        resizeMode="cover"
      />

     
      <Image
        source={require("../assets/images/logoipsum-394.png")}
        className="w-28 h-28 mt-6"
        resizeMode="contain"
      />

      
      <View className="items-center mt-4">
        <Text className="text-2xl font-bold text-gray-900">Welcome to MyApp</Text>
        <Text className="text-gray-600 mt-2 text-center px-6">
          Đây là app demo landing screen với React Native + NativeWind 🎉
        </Text>
      </View>

      
      <Button title="Get Started" onPress={()=>router.push("/auth/SignIn")}/>
    </View>
  );
}
