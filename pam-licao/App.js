import { Text, View, ScrollView, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './estilo';

export default function App() {
  // Informações de Endereço
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [uf, setUf] = useState('');

  const buscarCep = async () => {
    try {

      if(cep == ''){
        setLogradouro('');
        setBairro('');
        setLocalidade('');
        setUf('');
        return
      }

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setLocalidade(data.localidade);
      setUf(data.uf);
    } catch (error) {
      alert('CEP inválido');
      setLogradouro('');
      setBairro('');
      setLocalidade('');
      setUf('');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>Formulário de PAM</Text>

      <Text style={styles.subtitulo}>Informações de Endereço</Text>
      
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CEP:</Text>
          <TextInput style={styles.input} placeholder="Digite o CEP" onChangeText={setCep} value={cep} onBlur={buscarCep} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Logradouro:</Text>
          <TextInput style={styles.input} value={logradouro} editable={false} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bairro:</Text>
          <TextInput style={styles.input} value={bairro} editable={false} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Localidade:</Text>
          <TextInput style={styles.input} value={localidade} editable={false} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>UF:</Text>
          <TextInput style={styles.input} value={uf} editable={false} />
        </View>
      </View>
    </ScrollView>
  );
}