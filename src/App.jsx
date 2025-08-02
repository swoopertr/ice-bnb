import { useState, createContext } from "react";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Home from "./components/Home/Home";

export const DataContext = createContext();

function App() {
  const [searchResult, setSearchResult] = useState({
            data: [],
            totalCount: 0,
            pageCount: 0
        });
  const [searchText, setSearchText] = useState("");
  const [currentPage , setCurrentPage]= useState(0);

  return (
    <>
      
      <DataContext value={searchResult}>
        <Header 
          searchFn={setSearchResult} 
          currentPage={currentPage} 
          setSearchText={setSearchText}
          setCurrentPage={setCurrentPage} />
        <h1>{currentPage}</h1>
        <Home 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          setSearchResult={setSearchResult} 
          searchText={searchText} 
          />
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

    </>
  );
}

export default App;
