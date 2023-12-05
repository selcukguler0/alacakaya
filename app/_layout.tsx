import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import BackgroundImage from "../components/BackgroundImage";
import NetInfo from "@react-native-community/netinfo";
import { Text, View } from "react-native";

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
    <>
      <RootLayoutNav />
    </>
  );
}

function RootLayoutNav() {
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
      }}
      initialRouteName="/"
    >
      <Drawer.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          ...DrawerOptions("HOME"),
        }}
      />
      {screens.map((screen) => (
        <Drawer.Screen
          key={screen.title}
          name={screen.path}
          options={{
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
            ...DrawerOptions(screen.title),
          }}
        />
      ))}

      {/* hide */}
      {execuludedScreens.map((screen) => (
        <Drawer.Screen
          key={screen.path}
          name={screen.path}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
            ...DrawerOptions(screen.title),
          }}
        />
      ))}
    </Drawer>
  );
}

const DrawerOptions = (title: string) => {
  const options: Record<string, any> = {
    drawerLabel: title,
    title,
    drawerActiveBackgroundColor: Colors.primaryColor,
    drawerInactiveBackgroundColor: "#b8b4b4",
    drawerActiveTintColor: "white",
    drawerInactiveTintColor: "white",
    header: (props: DrawerHeaderProps) => <Header {...props} title={title} />,
  };

  return options;
};

const screens = [
  {
    title: "PRODUCTS",
    path: "products",
  },
  {
    title: "REFERENCES",
    path: "references/index",
  },
  {
    title: "CORPORATE",
    path: "corporate/index",
  },
];

const execuludedScreens = [
  {
    title: "ABOUT US",
    path: "corporate/about-us",
  },
  {
    title: "HISTORY",
    path: "corporate/history",
  },
  {
    title: "QUALITY POLICY",
    path: "corporate/quality-policy",
  },
  {
    title: "ENVIRONMENTAL POLICY",
    path: "corporate/environmental-policy",
  },
  {
    title: "DEALERS",
    path: "corporate/dealers",
  },
  {
    title: "REFERENCES - ABROAD",
    path: "references/abroad",
  },
  {
    title: "REFERENCES - DOMESTIC",
    path: "references/domestic",
  },
];
