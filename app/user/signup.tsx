import {
  View,
  StyleSheet,
  ImageSourcePropType,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Toast, showToast, toastConfig } from "../../utils/toast";
import { router } from "expo-router";
import { API_URL } from "../../constants/Enpoints";
import { ErrorToast } from "react-native-toast-message";
import axios from "axios";
import FormData from "form-data";

export default function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const signUpHandler = async () => {
    console.log(form);
    if (!form.email || !form.password || !form.passwordConfirm) {
      showToast("error", "Please fill in all fields!");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      showToast("error", "Please enter a valid email!");
      return;
    }

    const passwordRegex = /^.{8,}$/;
    if (!passwordRegex.test(form.password)) {
      showToast("error", "Password must contain at least 8 characters!");
      return;
    } else if (form.password != form.passwordConfirm) {
      showToast("error", "Passwords do not match!");
      return;
    }

    var formdata = new FormData();
    formdata.append("email", form.email);
    formdata.append("password", form.password);
    formdata.append("passwordConfirm", form.passwordConfirm);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `http://mobil.alacakaya.com/signup`,
      headers: { 
        'Content-Type': 'multipart/form-data'
      },
      data : formdata
    };

    const req = await axios.request(config);
    console.log("dataa", req.data);
    if (req.data.success) {
      showToast("success", "Sign up successful! Redirecting...");
      setForm({ email: "", password: "", passwordConfirm: "" });
      setTimeout(() => {
        router.push("/user/signin");
      }, 2000);
    } else {
      showToast("error", req.data.error);
    }
  };

  return (
    <>
      <Toast config={toastConfig} />

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
          placeholder="Password"
          onChangeText={(text) => setForm({ ...form, password: text })}
          value={form.password}
        />
        <TextInput
          style={styles.input}
          placeholder="Password Confirm"
          onChangeText={(text) => setForm({ ...form, passwordConfirm: text })}
          value={form.passwordConfirm}
        />
        <TouchableOpacity onPress={signUpHandler} style={styles.button}>
          <FontAwesome name="sign-in" size={24} color="black" />
          <Text style={{ fontSize: 16 }}>Sign Up</Text>
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
