import { Header } from "../components/header"
import { Main } from "../components/main"
import './styles.scss'

export const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <Main />
    </div>
  )
}