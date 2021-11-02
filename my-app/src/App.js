import logo from "./monkey.png";
import "./App.css";
import ReactPlayer from "react-player";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar color="dark" dark expand="md" light>
            <NavbarBrand href="/">Learn By Song</NavbarBrand>
            <NavbarToggler
              className="me-2"
              onClick={function noRefCheck() {}}
            />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Songs
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Song 1</DropdownItem>
                    <DropdownItem>Song 2</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn Mandarin from the lyrics of popular songs at karaoke.</p>
        <div>
          <ReactPlayer url="https://www.youtube.com/watch?v=IFTZtuXKzFs" />
        </div>
      </header>
    </div>
  );
}

export default App;
