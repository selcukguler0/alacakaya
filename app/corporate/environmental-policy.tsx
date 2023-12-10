import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function AboutUs() {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/corporate/")}
        style={styles.backBtn}
      >
        <Text style={{ fontSize: 20, marginRight: 10, color: "#fff" }}>
          {"<- Corporate"}
        </Text>
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <Text style={styles.subtitle}>
          Alacakaya Mermer ve Maden A.Ş., kurulduğu günden itibaren çevreye
          duyarlı bir şekilde, çevre ile barışık çalışmayı ilke edinmiştir.
        </Text>
        <Text style={styles.paragraph}>
          Doğa bilincinin getirdiği hareketle, kendi bünyesinde bulunan çevre
          mühendisleri ile birlikte çevre danışmalık hizmetleri almaktadır.
        </Text>
        <Text style={styles.paragraph}>
          Bu danışmanlık hizmeti altında, çevresel ve çevre ile ilgili
          çalışmalar izlenmekte, raporlanmakta ve rapor kayıtları düzenli olarak
          arşivlenmektedir. Bununla birlikte, belli bir program çerçevesinde
          koordineli olarak “Çevre ve Şehircilik İl Müdürlükleri” ile
          çalışılmaktadır.
        </Text>
        <Text style={styles.paragraph}>
          Yapılan tüm bu çalışmalara bağlı olarak çevresel etki düzenlemeleri
          sistemli olarak raporlanmakta ve bunun sonucunda da alınması gereken
          önlemler mevzuat çerçevesinde yerine getirilmektedir. Çevre ile
          barışık ve uyumlu bir çalışma düzeni için yılda en az iki defa tüm
          çalışmalar rapor edilerek gerekli önlemlerin alınması hassasiyetle
          sağlanmaktadır.
        </Text>
        <Text style={styles.paragraph}>
          Alacakaya Mermer A.Ş., çevreye duyarlı ve sorumlu madencilik bilinci
          ile hareket ederek üretim yapmaya devam etmektedir. Türkiye'nin önde
          gelen mermer üreticilerinden biri olarak yeşil doğa ilkesine bağlı
          halde çalışmalarını sürdürmektedir.
        </Text>

        <Image
          style={styles.inlineImage}
          source={require("../../assets/images/corporate/7.jpg")}
        />
        <Text style={styles.altParagraph}>
          Alacakaya Mermer A.Ş. doğayı koruyan çevre yönetimi konusunda bilinçli
          ve çevreye en az etki edilmesini sağlayan faaliyetleri ile Avrupa
          Birliği ilkelerini gerçekleştirip ve bu ilkeler dahilinde çevreye
          duyarlı olmayı hedeflemektedir.
        </Text>
        <Text style={styles.altParagraph}>Çalışmalarını yürütürken;</Text>

        <View style={styles.list}>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Çevreye duyarlı ve saygılı olmayı,
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Çevre yönetim sistemi ve etkilerini geliştirmeyi,
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Çalışanların çevre yönetim konusunda bilinçli çalışmasını ve duyarlı
            davranmasını,
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Madencilik faaliyetleri sırası ve sonrasında en az çevreye etki
            edilmesini sağlanmasını,
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Avrupa Birliği ilkelerine göre çevreye duyarlı olmayı, ilke edinerek
            faaliyetlerini yürütmektedir.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: "justify",
  },
  bold: {
    fontWeight: "600",
  },
  altParagraph: {
    fontSize: 16,
    textAlign: "justify",
    marginTop: 30,
  },
  list: {
    marginLeft: 5,
  },
  listItem: {
    // marginLeft: 10,
    fontSize: 16,
    marginTop: 10,
  },
  inlineImage: {
    width: "100%",
    height: 200,
    marginTop: 30,
  },
  backBtn: {
    backgroundColor: "#0005",
    padding: 10,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: "#0005",
    borderWidth: 3,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
});
