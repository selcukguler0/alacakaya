import NumericInput from "react-native-numeric-input";
import { useIsFocused } from "@react-navigation/native";
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { BucketItem, Product } from "../../types/types";
import { Image } from "expo-image";
import { addItem, getItems, removeItem } from "../../utils/bucket-management";

export default function Bucket() {
  const isFocused = useIsFocused();

  const [bucket, setBucket] = useState<BucketItem[] | "loading">("loading");

  useEffect(() => {
    const updateBucket = async () => {
      setBucket("loading");
      const items = await getItems();
      setBucket(items);
    };

    updateBucket();

    return () => {
      setBucket("loading");
    };
  }, [isFocused]);

  const bucketHandler = (id: string, value: number) => {
    if (!bucket || bucket === "loading") {
      return;
    }
    setBucket("loading");
    const item = bucket.find((item) => item.id === id);
    if (item) {
      item.count = value;
    }
    addItem(id, value);
    setBucket([...bucket]);
  };
  const removeItemHandler = (id: string) => {
    if (!bucket || bucket === "loading") {
      return;
    }
    setBucket("loading");
    const item = bucket.find((item) => item.id === id);
    if (item) {
      bucket.splice(bucket.indexOf(item), 1);
    }
    removeItem(id);
    setBucket([...bucket]);
  };
  console.log("bucket", bucket);

  return (
    <>
      <Header title="BUCKET" />
      {typeof bucket === "string" && bucket === "loading" ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      ) : !bucket || !bucket.length ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="shopping-cart" size={54} color="black" />
          <Text style={{ fontSize: 23, fontWeight: "500" }}>
            Bucket is empty!
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          {bucket.map((product) => (
            <View key={product.id} style={styles.item}>
              <Image
                source={`http://mobil.alacakaya.com/mobil/images/products/${product.id}/${product.img}`}
                style={styles.image}
                contentFit="contain"
              />
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{product.name}</Text>
                <View style={styles.inputContainer}>
                  <NumericInput
                    minValue={1}
                    initValue={product.count}
                    value={product.count}
                    leftButtonBackgroundColor={"transparent"}
                    rightButtonBackgroundColor={"transparent"}
                    iconSize={10}
                    totalWidth={100}
                    containerStyle={{ borderWidth: 2, marginTop: 10 }}
                    onChange={(value) => bucketHandler(product.id, value)}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      removeItemHandler(product.id);
                    }}
                  >
                    <FontAwesome name="trash" size={24} color="#ad0303" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0006",
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 30,
    paddingVertical: 5,
    gap: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 17,
    color: "#000",
  },
});
