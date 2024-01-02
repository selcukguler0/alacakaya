import 'expo-dev-client';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import Colors from "../constants/Colors";
import BackgroundImage from "../components/BackgroundImage";
import NetInfo from "@react-native-community/netinfo";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AuthProvider, useAuth } from "../context/AuthContext";
import Screens from "../constants/Screens";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "/",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // TwemojiMozilla: require('../assets/fonts/TwemojiMozilla.woff2'),
    ...FontAwesome.font,
  });
  const [isConnected, setIsConnected] = useState(false);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  //check network connection
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Is connected?", state.isConnected);

      setIsConnected(state.isConnected as boolean);
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);

  if (!loaded) {
    return null;
  }

  if (!isConnected) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="wifi" size={100} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
          }}
        >
          No Internet Connection
        </Text>
        <BackgroundImage />
      </View>
    );
  }

  return (
    <AuthProvider>
      <RootLayoutNav />
      <BackgroundImage />
    </AuthProvider>
  );
}

function RootLayoutNav() {
  const { user, signOut } = useAuth();
  return (
    <Drawer
      screenOptions={{
        drawerType: "slide",
        drawerItemStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
        drawerActiveBackgroundColor: Colors.darkPrimaryColor,
        sceneContainerStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
      }}
      initialRouteName="/"
      drawerContent={(props) => {
        return (
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.wrapper}>
              {Screens.map(
                (screen) =>
                  screen.show && (
                    <TouchableOpacity
                      key={screen.title}
                      onPress={() => props.navigation.navigate(screen.path)}
                      style={styles.item}
                    >
                      <FontAwesome
                        name={screen.icon as any}
                        size={20}
                        color="white"
                      />
                      <Text style={styles.itemText}>{screen.title}</Text>
                    </TouchableOpacity>
                  )
              )}
              {user ? (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 50,
                    alignItems: "center",
                  }}
                >
                  <FontAwesome name="user" size={30} color="black" />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "500",
                      color: "#000",
                      marginVertical: 5,
                    }}
                  >
                    {user.email}
                  </Text>
                  <TouchableOpacity onPress={signOut} style={styles.item}>
                    <FontAwesome name="sign-out" size={20} color="white" />
                    <Text style={styles.itemText}>Sign Out</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.userContainer}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("user/signin")}
                    style={styles.userWrapper}
                  >
                    <FontAwesome name="user" size={30} color="white" />
                    <Text style={styles.itemText}>Sign In</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("user/signup")}
                    style={styles.userWrapper}
                  >
                    <FontAwesome name="sign-in" size={30} color="white" />
                    <Text style={styles.itemText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              )}
            </ScrollView>
          </SafeAreaView>
        );
      }}
    ></Drawer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  wrapper: {
    marginVertical: 40,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 30,
    elevation: 4,
    // padding: 5,
    backgroundColor: Colors.primaryColor,
  },
  itemText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 50,
    gap: 20,
  },
  userWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
  },
});
