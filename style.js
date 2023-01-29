import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 180,
    marginBottom: 10,
    justifyContent: "center",
  },
  viewStyle: {
    flex: 1,
    padding: 20,
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#F1F6F5",
  },
  inputStyle: {
    width: "100%",
    height: 48,
    borderRadius: 200,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
  },
  textInput: {
    height: 50,
    color: "black",
    fontSize: 20,
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 150,
    borderRadius: 10,
    backgroundColor: "black",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
  loginButtonSection: {
    width: "100%",
    marginTop: 30,
  },
  loginButton: {
    backgroundColor: "#e39919",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 150,
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: "#00337C",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 150,
    marginTop: 20,
  },
  mata: {
    paddingTop: 15,
    paddingRight: 20,
  },
  inputStyle2: {
    width: "100%",
    height: 48,
    borderRadius: 200,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 15,
    marginBottom: 15,
    paddingLeft: 30,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
    flexDirection: "row",
  },
});

export default styles;
