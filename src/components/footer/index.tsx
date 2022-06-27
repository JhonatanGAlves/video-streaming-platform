import { Rocket } from 'phosphor-react'
import './styles.scss'

export const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear()

  return (
    <footer>
      <div className="content-logo-copy">
        <div className="footer-logo">
          <Rocket size={30} />
          <span>jgalves</span>
        </div>
        <small>&copy;{CURRENT_YEAR} JGAlves - Todos os direitos reservados</small>
      </div>
      <p>Política de privacidade</p>
    </footer>
  )
}