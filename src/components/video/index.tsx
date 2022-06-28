import { DefaultUi, Player, Youtube } from '@vime/react'
import { gql, useQuery } from '@apollo/client'
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react'
import { Footer } from '../footer'
import './styles.scss'
import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }  
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string
    videoId: string
    description: string
    teacher: {
      bio: string
      avatarURL: string
      name: string
    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export const Video = ({ lessonSlug }: VideoProps) => {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    }
  })

  if (!data) {
    return (
      <section>
        <p>Carregando...</p>
      </section>
    )
  }

  return (
    <section>
      <div className="video-bg">
        <div className="video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="content-video">
        <div className="video-description-btn">
          <div className="video-description">
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>
            <div className="video-teacher-avatar">
              <img src={data.lesson.teacher.avatarURL} alt="Avatar professor" />

              <div className="teacher-name">
                <strong>{data.lesson.teacher.name}</strong>
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