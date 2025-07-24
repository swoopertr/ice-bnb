import AccountMenu from "./AccountMenu";
import Logo from "./Logo";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

const headerStyle= { display: "flex",
    "justify-content": "space-evenly",
    "align-items": "center",
    padding: "20px"};

export default function Header() {
  return (
    <>
      <nav>
        <div className="header" style={headerStyle}>
            
            <Logo />
            <PrimarySearchAppBar />
            <AccountMenu />
        </div>

      </nav>
    </>
  );
}
