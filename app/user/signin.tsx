import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Toast, showToast } from "../../utils/toast";
import axios from "axios";
import FormData from "form-data";
import { storeData } from "../../utils/data-storage";
import { User, useAuth } from "../../context/AuthContext";
import { useHeader } from "../../context/HeaderContext";

export default function SignIn() {
  const [btnLoading, setBtnLoading] = useState(false);
  const { signIn } = useAuth();
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("SIGN IN");
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const signInHandler = async () => {
    setBtnLoading(true);
    var formdata = new FormData();
    formdata.append("email", form.email);
    formdata.append("password", form.password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://mobil.alacakaya.com/signin`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata,
    };

    const req = await axios.request(config);
    console.log(req.data);
    if (req.data.error) {
      showToast("error", req.data.error);
      setBtnLoading(false);
      return;
    }
    showToast("success", "Sign in successful!");
    await storeData("user", req.data);
    signIn(req.data as User);

    setTimeout(() => {
      router.push("/");
      setForm({ email: "", password: "" });
      setBtnLoading(false);
    }, 1000);
  };

  return (
    <>
      <Toast />

      <View style={styles.container}>
        <FontAwesome name="user" size={64} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setForm({ ...form, email: text })}
          value={form.email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setForm({ ...form, password: text })}
          value={form.password}
        />
        <TouchableOpacity onPress={signInHandler} style={styles.button}>
          {btnLoading ? (
            <ActivityIndicator color={"#000"} />
          ) : (
            <>
              <FontAwesome name="sign-in" size={24} color="black" />
              <Text style={{ fontSize: 16 }}>Sign In</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: "50%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff5",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff8",
    padding: 10,
    gap: 10,
    borderRadius: 10,
  },
});
