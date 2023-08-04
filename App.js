import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  EvilIcons,
  AntDesign,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome 
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import Logout from "./screens/Logout";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Addbet from "./screens/Addbet";
import History from "./screens/History";
import Reports from "./screens/Reports";
import Result from "./screens/Result";
import Hits from "./screens/Hits";







const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View
                  style={{
                    height: 200,
                    width: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1
                  }}
                >
                  <Image
                    source={require('./assets/iconusers.jpg')}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      marginVertical: 6,
                      fontWeight: "bold",
                      color: "#111"
                    }}
                  >Dan Baloyo</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#111"
                    }}
                  >Agent</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250
          },
          headerStyle: {
            backgroundColor: "#BF1212",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            )
          }}
          component={Home}
          />
          <Drawer.Screen
          name="Addbet"
          options={{
            drawerLabel: "Addbet",
            title: "Addbet",
            drawerIcon: () => (
            <SimpleLineIcons name="plus" size={24} color="black" />            )
          }}
          component={Addbet}
          />
          <Drawer.Screen
          name="History"
          options={{
            drawerLabel: "History",
            title: "History",
            drawerIcon: () => (
<           EvilIcons name="clock" size={24} color="black" />            )
          }}
          component={History}
  
        />

          <Drawer.Screen
          name="Reports"
          options={{
            drawerLabel: "Reports",
            title: "Reports",
            drawerIcon: () => (
            <EvilIcons name="chart" size={24} color="black" />            )
          }}
          component={Reports}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
            drawerIcon: () => (
              <SimpleLineIcons name="settings" size={20} color="#808080" />
            )
          }}
          component={Settings}
        />
          <Drawer.Screen
          name="Result"
          options={{
            drawerLabel: "Result",
            title: "Result",
            drawerIcon: () => (
            <EvilIcons name="trophy" size={24} color="black" />            )
          }}
          component={Result}
          
          />
          <Drawer.Screen
          name="Hits"
          options={{
            drawerLabel: "Hits",
            title: "Hits",
            drawerIcon: () => (
              <EvilIcons name="star" size={24} color="black" />            )
          }}
          component={Hits}
        />

        <Drawer.Screen
          name="Logout"
          options={{
            drawerLabel: "Logout",
            title: "Logout",
            drawerIcon: () => (
<             AntDesign name="logout" size={24} color="black" />            )
          }}
          component={Logout}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

