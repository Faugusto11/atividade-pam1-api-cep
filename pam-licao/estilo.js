import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
    height: '100vh',
    overflow: 'scroll',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitulo:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  formContainer: {
    width: '60%',
    marginTop: 32,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'flex',
    gap: 16
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    borderRadius: 4,
    width: 200,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export {styles};