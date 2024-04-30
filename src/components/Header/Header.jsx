import NavBar from "../NavBar/Navbar"
import ToggleTheme from "../ToggleTheme/ToggleTheme"

const Header = ({ user }) => {
  console.log(user)
  return (
    <div className="p-5 mb-4 w-full bg-brand-200 dark:bg-dark-200 flex justify-between items-center">
      <span className="text-gray-100">Olá, { user || "Visitante" }</span>
      <h1 className="text-gray-100 text-2xl sm:text-4xl hover:scale-110">Bem vindo ao CineApp!</h1>
      <NavBar/>
      <ToggleTheme />
    </div>
  )
}

export default Header