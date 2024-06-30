import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const dataKontak = [
  {
    id: 1,
    nama: 'AGES GELAR PANGESTU',
    email: 'agesgelar7@gmail.com',
    no_hp: '085724768850',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 2,
    nama: 'GIBRAN GENTA RABBANI',
    email: 'gibrangentarabbani@gmail.com',
    no_hp: '081382929054',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 3,
    nama: 'M FAREL ABDILLAH',
    email: 'farelabdillah2016@gmail.com',
    no_hp: '087701359915',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 4,
    nama: 'FAJAR BUDIMAN',
    email: 'fbudiman880@gmail.com',
    no_hp: '085758225942',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 5,
    nama: 'MOH ABDI HAFIDZ FADILAH',
    email: 'abdihafidz340@gmail.com',
    no_hp: '085732146196',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 6,
    nama: 'RIZKY MAULANA YUSUF',
    email: 'rizkymaulanayusuf1945@gmail.com',
    no_hp: '081388946480',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 7,
    nama: 'ERI ZULFAN DIWANI',
    email: 'eizul44@gmail.com',
    no_hp: '085795769727',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 8,
    nama: 'SILVY DENIA PUTRI',
    email: 'silvydenia402@gmail.com',
    no_hp: '085694956417	',
    ket: 'Kontak Baru',
    image: require('../assets/pr.jpg'),
  },
  {
    id: 9,
    nama: 'RAKA WAHYU SAGARA	',
    email: 'rakaws122@gmail.com',
    no_hp: '081219852211	',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 10,
    nama: 'NUR INSAN SUBEKTI',
    email: 'nurinsan2712@gmail.com',
    no_hp: '081316742795',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 11,
    nama: 'FAUZIA NURAFNI',
    email: 'fauzianurafni026@gmail.com',
    no_hp: '0895809245080',
    ket: 'Kontak Baru',
    image: require('../assets/pr.jpg'),
  },
  {
    id: 12,
    nama: 'HANIF IMAM MUNTAZHAR',
    email: 'hanifimam2001@gmail.com',
    no_hp: '083894443344',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 13,
    nama: 'ASRI NUR KHOLIDAH',
    email: 'asrinurkholidah@gmail.com',
    no_hp: '085721552296',
    ket: 'Kontak Baru',
    image: require('../assets/pr.jpg'),
  },
  {
    id: 14,
    nama: 'RESTU GEDE PURNAMA',
    email: 'restumelenoy83@gmail.com',
    no_hp: '081383372981',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 15,
    nama: 'MAULANA IFNU SYAFI',
    email: 'ifnusyafi@gmail.com',
    no_hp: '081563890525',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 16,
    nama: 'NADIA PUTRI RAHMAWATI',
    email: 'nadiaputrirahman@gmail.com',
    no_hp: '081281172165',
    ket: 'Kontak Baru',
    image: require('../assets/pr.jpg'),
  },
  {
    id: 17,
    nama: 'RAFDY FAUZAN ILHAM FIRDAUS',
    email: 'rafdyfauzan57@gmail.com',
    no_hp: '081296876396',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 18,
    nama: 'MUHAMMAD FADLAN SYUHADA',
    email: 'mfadlan703@gmail.com',
    no_hp: '083893026231',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 19,
    nama: 'ARIP',
    email: 'arifsuanto3@gmail.com',
    no_hp: '08980520407',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 20,
    nama: '	ARYA PANGESTU',
    email: 'aryap309@gmail.com',
    no_hp: '081317706229',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 21,
    nama: 'MOHAMMAD SAMANI KAMIL',
    email: 'samanikamil2@gmail.com',
    no_hp: '085794306200',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 22,
    nama: 'LUTHFI FAUZAN ACHMAD',
    no_hp: '085862354347',
    email: 'lfachmad28@gmail.com',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 23,
    nama: 'SYALWA FIDA WIFA',
    email: 'fidawifa@gmail.com',
    no_hp: '085524850478',
    ket: 'Kontak Baru',
    image: require('../assets/pr.jpg'),
  },
  {
    id: 24,
    nama: 'FERI IRAWAN',
    email: '	feri186irawan@gmail.com',
    no_hp: '085793902926',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 25,
    nama: '	M. ARIZKI',
    email: 'muhammadarizky8215@gmail.com',
    no_hp: '0895405944337',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 26,
    nama: 'MOH. RIZKI MAULANA',
    email: 'rizkim0716@gmail.com',
    no_hp: '081399921489',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 27,
    nama: 'M UTAMA LUHUR BUDHY',
    email: 'noobberkarya123@gmail.com',
    no_hp: '089630461568',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 28,
    nama: 'REIZA MAULIDIA SENJAYA',
    email: 'reizasenjaya5@gmail.com',
    no_hp: '081315171380',
    ket: 'Kontak Baru',
    image: require('../assets/pr.jpg'),
  },
  {
    id: 29,
    nama: 'FERRI EKALAYA',
    email: 'feriekalaya@gmail.com',
    no_hp: '081316617086',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 30,
    nama: 'PUTRI AULIA MAULIDA',
    email: '6	ptriauliamlda9@gmail.com',
    no_hp: '085216643396',
    ket: 'Kontak Baru',
    image: require('../assets/pr.jpg'),
  },
  {
    id: 31,
    nama: 'CAROL DWI PUTRA',
    email: 'caroldwyne@gmail.com',
    no_hp: '081310785303',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 32,
    nama: 'MUHAMAD FAKHRI KHAIRIL IMAM',
    email: 'muhammadfakhri.kh22@gmail.com',
    no_hp: '082258988952',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 33,
    nama: 'ALMA SAKHIRAGAMA KHAIRUNISA',
    email: 'almasakhiragamakhairunisa@gmail.com',
    no_hp: '082377599105',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 34,
    nama: 'NAZMI MAULANA FAUZAN',
    email: 'nazmimaulanaf27@gmail.com',
    no_hp: '085219871636',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 35,
    nama: 'MUHAMMAD GEORGE ELMAR',
    email: 'georgejos79z@gmail.com',
    no_hp: '0895360539307',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 36,
    nama: 'M SACHRAN ALMIQDAD FR	',
    email: 'sahranalmiqdad8@gmail.com',
    no_hp: '085721337825',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 37,
    nama: 'DHIYA JAUHAR AKMAL	',
    email: 'dhiyajauharakmal@gmail.com',
    no_hp: '087805761574',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 38,
    nama: 'MUHAMMAD FAISAL RAFLI	',
    email: 'faisalrafli52@gmail.com',
    no_hp: '087703647543',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
  {
    id: 39,
    nama: 'FINO FALENTINO',
    email: 'finofalentino114@gmail.com',
    no_hp: '085798806252',
    ket: 'Kontak Baru',
    image: require('../assets/lk.jpg'),
  },
];

const About = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('DetailKontak', { data: item })}>
      <Image source={item.image} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{item.nama}</Text>
        <Text style={styles.no_hp}>{item.no_hp}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dataKontak}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#fff',
  },
  itemContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: 'pink',
  },
  img: {
    margin: 20,
    width: 70,
    height: 70,
    borderRadius: 25,
  },
  teks: {
    flex: 1,
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  no_hp: {
    fontSize: 14,
    color: '#3498db',
  },
});
