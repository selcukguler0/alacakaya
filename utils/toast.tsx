import Toast, { ErrorToast } from "react-native-toast-message";

export const showToast = (
  type: "success" | "error" | "info",
  text: string,
  visibilityTime = 5000
) => {
  Toast.show({
    type: type,
    text1: text,
    visibilityTime: visibilityTime,
  });
};

const toastConfig = {
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={3}
    />
  ),
};

export { Toast, toastConfig };
