import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Rayanne",
    "Rodrigo",
    "Diego",
    "João Biro",
    "Vinicius",
    "Ana",
    "Carol",
    "Felipe",
    "Bruna",
    "Larissa",
    "Yuri",
    "Miguel",
    "Fernanda",
    "Raíssa",
    "Deise",
    "Arthur",
    "Rafaela",
    "Sarah",
    "Amanda",
    "Milena",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert(
        "Participante existe",
        "Já esse um participante na lista com esse nome"
      );
    }
  }

  function handleParticipantRemove() {
    Alert.alert("Remover", "Deseja remover o participante?", [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        data={participants}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participants a sua lista de
            presença.
          </Text>
        )}
      />
    </View>
  );
}
