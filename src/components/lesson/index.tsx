import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import './styles.scss'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export const Lesson = ({ title, slug, availableAt, type }: LessonProps) => {
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  return (
    <a href='#'>
      <span className="lesson-data">{availableDateFormatted}</span>

      <div className="lesson-card">
        <header className="container-lesson-card">
          {isLessonAvailable ? (
            <span className="lesson-card-available">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="lesson-card-inaccessible">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong>{title}</strong>
      </div>
    </a>
  )
}