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
import BackgroundImage from "../../components/BackgroundImage";
import { FontAwesome } from "@expo/vector-icons";
import { primaryColor } from "../../constants/Colors";
import iconSet from "@expo/vector-icons/build/FontAwesome5";

const paragraph = [
  `Uygarlığın beşiği olarak kabul edilen Anadolu’nun, Doğal Taş Sektöründeki güçlü markalarından biri olan Alacakaya Mermer A.Ş. sektöründe yarım yüzyıla yakın bir deneyime sahiptir.`,
  `1967 yılında, sonradan Rosso Levanto olarak adlandırılan mermerin keşfi ile sektöre adım atmıştır. 1984 yılında Kemal Arslan ve Cemil Yaşlı önderliğinde kurulan şirket yeniliklere açık ve paylaşımcı yönetim anlayışı, günden güne geliştirilen kaliteli üretim mantığı ve koşulsuz müşteri memnuniyetini temel ilkeleri olarak benimsemiştir.`,
  `Alacakaya Mermer A.Ş., Elazığ Organize Sanayi Bölgesi’nde 8.000 m2’si kapalı olmak üzere toplam 17.000 m2 alana yayılan fabrikasında en son teknolojiye sahip makina parkıyla üretimine devam etmektedir.`,
  `Yıllık ortalama 100.000 metreküp blok kapasitesi ile 500 civarında personeliyle bölge için önemli bir istihdam sağlayıcısı konumdadır.`,
  `Elazığ, Malatya, Ağrı, Adana, Karaman, Adıyaman ve Diyarbakır’da bulunan çeşitli ocaklarından elde ettiği taşları kendi tesislerinde işleyen Alacakaya Mermer A.Ş., bu mermerlerin dünyanın çeşitli bölgelerindeki projelerde kullanılmasını sağlamış, dünya’da Türk Mermer çeşitlerinin markalaşmasına önemli katkıları olmuştur. Tüm Dünya’da büyük rağbet gören Rosso Levanto’nun (Elazığ Vişne) ana üreticisi durumundadır.`,
  `Alacakaya Mermer A.Ş. ocaklarındaki güçlü makina parkı, fabrikasındaki maksimum üretim kapasitesi ve devamlılık arz eden ürünleriyle Türk Doğal taş sektörünün önemli temsilcilerindendir. Servis ve kaliteden ödün vermeden onlarca ülkeye ihracat yapan Alacakaya Mermer A.Ş. aynı kararlılık ve azimle çalışmalarına devam edecektir.`,
  `Faaliyetlerinde; personeline ve yan sanayisine dürüst davranmak işçiler ve iş ilişkilerinde paylaşımcı olmak şirket içi uygulamalarda alt kadroları destekleyip yüreklendirerek yaratıcılığı teşvik etmek prensibini taşımaktadır. Müşteri ilişkilerinde ise çıkar gözetmeden kesintisiz bir servis anlayışla müşterilerin istek ve gereksinmelerini karşılamak temel hizmet anlayışı durumundadır.`,
  `Alacakaya Mermer A.Ş. yıllardan beri daha mükemmele ulaşmak için başlangıçtaki istek ve heyecanını koruyarak yolunda ilerlemektedir. Alacakaya Mermer A.Ş. sektörün gelişmesi ve ilerlemesi için üzerine düşen sorumluluğun farkında, daima ileriye ve mükemmele ulaşma azmindedir.`
];

export default function History() {
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
        {paragraph.map((p, i) => (
          <Text key={i} style={styles.paragraph}>
            {p}
          </Text>
        ))}
      </View>

      <BackgroundImage />
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
  backBtn: {
    backgroundColor: "#0005",
    padding: 10,
  },
});
