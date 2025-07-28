import AccountMenu from "./AccountMenu";
import Logo from "./Logo";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

const headerStyle= { display: "flex",
    justifyContent : "space-evenly",
    alignItems: "center",
    padding: "20px"};

export default function Header({searchFn}) {
  return (
    <>
      <nav>
        <div className="header" style={headerStyle}>
            
            <Logo />
            <PrimarySearchAppBar searchFn={searchFn} />
            <AccountMenu />
        </div>

      </nav>
    </>
  );
}
