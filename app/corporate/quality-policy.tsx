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
import BackgroundImage from "../../components/BackgroundImage";
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
          Ülkemizin yer altı kaynaklarını en uygun ve etkin şekilde
          kullanılarak, ülke ekonomisine katkıda bulunmak, ürünlerimizin uluslar
          arası pazarda en iyi şekilde tanıtmak.
        </Text>
        <Text style={styles.paragraph}>
          Pazar payı ve rekabet gücünü arttırmak, mermer sektöründe lider
          konumuna gelmek, kalite yönetim sistemi ve etkinliğinin sürekli
          iyileştirilmesi ile çalışanlarımızın memnuniyetini en üst seviyeye
          çıkartmak ve kaliteden ödün vermemek firmamızın ana politikasıdır.
        </Text>
        <Text style={styles.subtitle}>Kalite Yönetim Sistemimiz</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>ALACAKAYA MERMER A.Ş.</Text> vizyonu
          doğrultusunda, güncel ve gelişen teknolojileri kullanarak, tüketici
          beklentilerini karşılayan, Kalite Yönetim Sistemini uluslararası ISO
          9001 standardının gereklerini yerine getirecek şekilde
          belgelendirmiştirve sürekli iyileştirmektedir. Sürekli iyileştirme
          yaklaşımı doğrultusunda verilere dayalı çalışmayı esas alan
          <Text style={styles.bold}> ALACAKAYA MERMER A.Ş.</Text> tüm
          süreçlerindeki verimliliği uluslararası düzeyde rekabet edebilecek
          seviyeye yükselterek mükemmelliğe ulaşmak için hedeflerini
          belirlemiştir.
        </Text>
        <Text style={styles.paragraph}>
          Toplam Kalite yolculuğu, tüm sistemlerin verimliliğini artırmaktadır.
          Bunun sonucu olarak, müşterilerdaha kaliteli ürün ve hizmetlere, daha
          uygun koşullarda sahip olma olanağına kavuşmaktadır.
        </Text>
        <Text style={styles.paragraph}>
          Şirket içinde, kalite yolculuğunda atılan her adımda, birimler ve
          kişiler arasında dil birliği gelişmiş, takım ruhu ve iletişim sürekli
          olarak iyileşmiştir. Çalışanların şirket başarısına yaptıkları
          katkının bilinci içinde olmaları, şirket kültürünü daha da
          pekiştirmiştir.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>ALACAKAYA MERMER A.Ş.</Text>' de Toplam
          Kalite faaliyetleri, 2001li yılların başında Kalite Çemberleri
          uygulamaları ile başlamıştır. 11 Mart 2002 yılından itibaren Kalite
          Yönetim Sistemi Standardı 'na. NQA (National Quality Assurance
          Sertifika No:14422) tarafından verilen ISO 9001:2008 Kalite Yönetim
          Sistemi Belgesi ile geçilmiştir.
        </Text>
        <Image
          style={styles.inlineImage}
          source={require("../../assets/images/corporate/5.jpg")}
        />
        <Text style={styles.altParagraph}>
          Her yıl yapılan Yönetimin Gözden Geçirmesi Toplantıları ve Aylık
          Personel Eğitim Programları ile gelişmelerin sürekliliği sağlanmaya
          çalışılmıştır.
        </Text>

        <View style={styles.list}>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Değişen İç ve Dış Koşullar
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Uyum Sağlayıcı ve Önleyici Yaklaşımlar
          </Text>
          <Text style={styles.listItem}>
            <FontAwesome name="check" size={20} color="black" />
            Modern Teknolojilerin Kullanım Kolaylıkları
          </Text>
        </View>
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
