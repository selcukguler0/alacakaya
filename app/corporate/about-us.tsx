import {
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import iconSet from "@expo/vector-icons/build/FontAwesome5";

const paragraph = [
  `1984 yılında fabrika işletmeciliğine başlayan Alacakaya Mermer sürekli yenileyerek günümüzde çağın tüm gereksinmelerini karşılayacak teknik ekip ve donanıma sahip bir tesise kavuşmuştur.`,
  `Elazığ Vişne (Rosso Levanto) ile yakalanan başarıdan sonra Botticino Royal başta olmak üzere tüm taşların dünyada markalaşması konusunda önemli adımlar atılmıştır. Yıllık 970.000 metrekare olan fabrika üretiminin % 75’i dış pazarda, % 25’lik bölümü ise iç pazarda değerlendirilmektedir.`,
  `Alacakaya Mermer A.Ş. ihracatının büyük kısmını Uzak doğu ve orta doğu başta olmak üzere; Asya, Avrupa, Güney Amerika, Kuzey Amerika, Afrika, Avustralya kıtalarınada yapmaktadır.`,
  `Alacakaya Mermer A.Ş. standart ölçülerde üretim yapmanın yanı sıra müşteri talepleri doğrultusunda proje bazlı özel üretim yapabilmektedir.`,
  `Ayrıca eskitme, fırçalama ve çekiçleme, asitle çökertme, deri yüzey, yakma gibi özel yöntemler uygulanarak mermere daha da fazla değer kazandırılmaktadır.`,
  `Alacakaya Mermer A.Ş. mermerin milyonlarca yıllık serüvenine duyduğumuz hayranlıkla, estetik ve değer kazandıran uygulamalar sahip olduğumuz kaynakları dünyaya tanıtmanın haklı gururunu yaşamaktadır.. Aynı ruhla daha uzun yıllar sektöre hizmet verme isteği ve inancındayız.`,
];

const data = [
  {
    title: "100,000",
    subtitle: "Cubic Production",
    icon: "cube",
  },
  {
    title: "75",
    subtitle: "Export to the Country",
    icon: "globe",
  },
  {
    title: "500",
    subtitle: "Employee",
    icon: "users",
  },
  {
    title: "75",
    subtitle: "Customer Satisfaction",
    icon: "thumbs-up",
  },
];

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
          Alacakaya Mermer, 5 Ocağı ve 500 çalışanıyla müşterilerine üstün
          teknoloji, yüksek hassasiyet ve marka kalitesi ile hizmet vermektedir.
        </Text>
        {paragraph.map((p, i) => (
          <Text key={i} style={styles.paragraph}>
            {p}
          </Text>
        ))}

        <Image
          style={styles.inlineImage}
          source={require("../../assets/images/corporate/2.jpg")}
        />

        <Text style={styles.altParagraph}>
          Alacakaya Mermer A.Ş. mermerin milyonlarca yıllık serüvenine
          duyduğumuz hayranlıkla, estetik ve değer kazandıran uygulamalar sahip
          olduğumuz kaynakları dünyaya tanıtmanın haklı gururunu yaşamaktadır..
          Aynı ruhla daha uzun yıllar sektöre hizmet verme isteği ve
          inancındayız.
        </Text>

        <View style={styles.list}>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Yeniliklere Açık ve Paylaşımcı Yönetim Anlayışı
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Koşulsuz Müşteri Memnuniyeti
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Son Teknolojiye Sahip Makina Parkları
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          nestedScrollEnabled
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              <FontAwesome
                name={item.icon as typeof iconSet}
                size={24}
                color="black"
              />
            </View>
          )}
          style={{ width: "100%" }}
          keyExtractor={(item) => item.title}
        />
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
