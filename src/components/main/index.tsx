import { Sidebar } from "../sidebar"
import { Video } from "../video"
import './styles.scss'

export const Main = () => {
  return (
    <main>
      <Video />
      <Sidebar />
    </main>
  )
}