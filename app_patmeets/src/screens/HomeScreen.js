import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          {/* Avatar e Nome do Usuário */}
          <View style={styles.userInfo}>
            <Image
              source={{ uri: "../../assets/images/avatar.png" }} 
              style={styles.avatar}
            />
            <Text style={styles.greeting}>Olá, usuário</Text>
          </View>
          {/* Ícones de Notificação e FAQ */}
          <View style={styles.icons}>
            <Icon name="notifications" size={30} color="#fff" style={styles.icon} />
            <Icon name="help-outline" size={30} color="#fff" style={styles.icon} />
          </View>
        </View>

        {/* Caixa de Inputs */}
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholder="R$ 0,00"
            placeholderTextColor="#fff"
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Outro valor"
            placeholderTextColor="#fff"
          />
        </View>
      </View>

      {/* Corpo */}
      <View style={styles.body}>
        <Text style={styles.bodyText}>Corpo da aplicação</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Fundo branco para o corpo
  },
  header: {
    height: 280, // Altura do cabeçalho
    backgroundColor: "#7CA8DB", // Azul
    paddingHorizontal: 20,
    padding: 50,
    justifyContent: "space-between",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  icons: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  inputsContainer: {
    flexDirection: 'row',  // Coloca os inputs lado a lado
    marginTop: 20,
    justifyContent: 'space-between',
  },
  input: {
    height: 50,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#fff",
    fontSize: 16,
  },
  body: {
    flex: 1,
    backgroundColor: "#fff", // Fundo branco para o corpo
    justifyContent: "center",
    alignItems: "center",
  },
  bodyText: {
    fontSize: 16,
    color: "#000",
  },
});
