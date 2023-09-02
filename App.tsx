import { StatusBar } from "react-native";
import Home from "./src/screens/Home";
//import {COLOR_TOKEN,TYPOGRAPHY_TOKEN} from './src/styleguide/tokens';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
     
    </>
  );
}
