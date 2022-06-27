import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import { Footer } from '../footer'
import './styles.scss'

export const Video = () => {
  return (
    <section>
      <div className="video-bg">
        <video className="video"></video>
      </div>

      <div className="content-video">
        <div className="video-description-btn">
          <div className="video-description">
            <h1>Aula 01 - Abertura do Ignite Lab</h1>
            <p>
              Chegamos na metade do nosso evento, mas ainda tem mais pela frente…Na terceira aula vamos continuar nosso projeto, desenvolvendo o roteamento e player. Essa é mais uma etapa para sua especialização em React!
            </p>

            <div className="video-teacher-avatar">
              <img src="https://github.com/JhonatanGAlves.png" alt="Avatar professor" />

              <div className="teacher-name">
                <strong>Jhonatan Alves</strong>
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>
          <div className="video-btn">
            <a href="">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="video-materials">
          <a href="">
            <div className="material-icon">
              <FileArrowDown size={40} />
            </div>
            <div className="material-txt">
              <strong>Material complementar</strong>
              <p>Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="material-arrow-icon">
              <CaretRight size={24} />
            </div>
          </a>
          <a href="">
            <div className="material-icon">
              <Image size={40} />
            </div>
            <div className="material-txt">
              <strong>Wallpapers exclusivos</strong>
              <p>Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="material-arrow-icon">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </section>
  )
}