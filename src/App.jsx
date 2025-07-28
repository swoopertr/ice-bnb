import { useState, createContext } from "react";
import Button from "@mui/material/Button";
import RealismButton from "./components/Buttons/RealismButton";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./components/Home/Home";

export const DataContext = createContext();

function App() {
  const [searchResult, setSearchResult] = useState([]);


  return (
    <>
      <DataContext value={searchResult}>
        <Header searchFn={setSearchResult} />
        <Home />
        {/** make routes
         * //todo : content
         * -----------
         * url : /
         * user: anonim
         * component : home
         * -----------
         * url : /
         * user: logged in
         * component : home_logged_in
         * -----------
         *
         */}

        <Footer />
      </DataContext>

      {/* <div className="typography-h1 text-primary">Hello world</div>
      <Button variant="contained">Hello world</Button>
      <RealismButton/> */}
    </>
  );
}

export default App;
