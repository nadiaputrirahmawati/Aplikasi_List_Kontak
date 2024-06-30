import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailKontak = ({ route, navigation }) => {
  const { data } = route.params;

  const handleCall = () => {
    const phoneNumber = data.no_hp;

    const formattedPhoneNumber = `tel:${phoneNumber}`;
    Linking.openURL(formattedPhoneNumber);
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image source={data.image} style={styles.img} />
          <Text style={styles.title}>{data.nama}</Text>
        </View>

        <View style={styles.containerFluid}>
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Icon name="call" size={24} color="white" />
            </View>
            <Text style={styles.description}>{data.no_hp}</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Icon name="mail" size={24} color="white" />
            </View>
            <Text style={styles.description}>{data.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.iconContainer}>
              <Icon name="information-circle" size={24} color="white" />
            </View>
            <Text style={styles.description}>{data.ket}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Icon name="people" size={24} color="pink" style={styles.icon} />
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCall}>
          <Icon name="call" size={24} color="pink" style={styles.icon} />
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="chatbubbles" size={24} color="pink" style={styles.icon} />
          <Text style={styles.buttonText}>Messenger</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'gray',
    marginRight: 10,
  },
  containerFluid: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 8,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 60,
    width: '100%',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    flex: 1,
    fontSize: 18,
    textAlign: 'left',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E6E6E6',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  img: {
    marginTop: 80,
    height: 120,
    width: 120,
    borderRadius: 60,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 4,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 17,
    width: 100,
  },
  icon: {
    marginBottom: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    marginLeft: 2,
  },
});

export default DetailKontak;
