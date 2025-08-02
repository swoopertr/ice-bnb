import AccountMenu from "./AccountMenu";
import Logo from "./Logo";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

const headerStyle= { display: "flex",
    justifyContent : "space-evenly",
    alignItems: "center",
    padding: "20px"};

export default function Header({searchFn, currentPage, setSearchText, setCurrentPage}) {
  return (
    <>
      <nav>
        <div className="header" style={headerStyle}>
            
            <Logo />
            <PrimarySearchAppBar 
              searchFn={searchFn} 
              currentPage={currentPage} 
              setSearchText={setSearchText} 
              setCurrentPage={setCurrentPage}
              />
            <AccountMenu />
        </div>

      </nav>
    </>
  );
}
