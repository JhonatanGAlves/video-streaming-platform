import { useParams } from "react-router-dom"
import { Sidebar } from "../sidebar"
import { Video } from "../video"
import './styles.scss'

export const Main = () => {
  const { slug } = useParams<{ slug: string }>()

  return (
    <main>
      {slug
        ? <Video lessonSlug={slug} />
        : <div className="no-video" />
      }
      <Sidebar />
    </main>
  )
}