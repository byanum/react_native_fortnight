import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  secondContainer: {
    flexDirection: "row",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#42032C",
  },
  text: {
    fontSize: 15,
    color: "#42032C",
    marginTop: 10,
    marginBottom: 5,
  },
  btnAdd: {
    borderRadius: 10,
    borderColor: "#277BC0",
    borderWidth: 1,
    width: "25%",
    backgroundColor: "#277BC0",
    marginRight: 5,
  },
  btnSub: {
    borderRadius: 10,
    borderColor: "#277BC0",
    borderWidth: 1,
    width: "25%",
    backgroundColor: "#277BC0",
  },
  txtAdd: {
    alignSelf: "center",
    color: "white",
    fontWeight: "400",
    fontSize: "20",
  },
  txtSub: {
    alignSelf: "center",
    color: "white",
    fontWeight: "400",
    fontSize: "20",
  },
  thirdContainer: {
    flex: 1,
    margin: 5,
  },
  thirdBtns: {
    flexDirection: "row",
  },
  txtname: {
    fontSize: 15,
    color: "#42032C",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default styles;
