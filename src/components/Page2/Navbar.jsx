import ReactLogo from "../../assets/react.svg"
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={ReactLogo} alt="React Logo" width="40px" />
        <span>ReactFacts</span>
      </nav>
    </header>
  )
}

export default Navbar 