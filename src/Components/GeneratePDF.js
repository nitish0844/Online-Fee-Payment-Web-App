import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

import Logo from "./logo.png";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    // justifyContent: "center",
    alignItems: "center",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function GeneratePDF({ paymentData, amount }) {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image style={{ width: 200, height: 200 }} source={Logo} />
            <Text>MAM engineering College</Text>
            <Text>Fees successfully paid</Text>
            <Text>Amount : {sessionStorage.getItem("amount")}</Text>
            <Text>
              Transaction Id : {sessionStorage.getItem("transactionId")}
            </Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default GeneratePDF;
