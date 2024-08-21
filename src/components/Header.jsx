import logo from "../assets/investment-calculator.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing my money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
