import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

// Variantes: el padre controla la entrada (visible) y el hover;
// los hijos con la misma etiqueta reaccionan automáticamente.
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
  hover: { y: -6, transition: { duration: 0.25, ease: 'easeOut' } },
}

const imageVariants = {
  visible: { scale: 1 },
  hover: { scale: 1.06, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ProjectCard({ project, index = 0 }) {
  const { title, description, image, icon: Icon, tags, github, demo, status } = project

  // Posición del cursor para el efecto "spotlight" y el borde luminoso
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.14), transparent 70%)`
  const borderGlow = useMotionTemplate`radial-gradient(260px circle at ${mouseX}px ${mouseY}px, rgba(34,211,238,0.7), rgba(59,130,246,0.35) 45%, transparent 75%)`

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-60px' }}
      onMouseMove={handleMouseMove}
      className="group relative flex h-full rounded-2xl bg-white/10 p-px"
    >
      {/* Borde luminoso que sigue al cursor (visible solo en hover) */}
      <motion.div
        aria-hidden="true"
        style={{ background: borderGlow }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex w-full flex-col overflow-hidden rounded-[15px] bg-ink-800 transition-shadow duration-300 group-hover:shadow-glow">
        {/* Resplandor interior que sigue al cursor */}
        <motion.div
          aria-hidden="true"
          style={{ background: spotlight }}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Imagen / placeholder */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-ink-900">
          {image ? (
            <motion.img
              variants={imageVariants}
              src={image}
              alt={`Captura de ${title}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <motion.div
              variants={imageVariants}
              className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(ellipse_at_80%_90%,rgba(34,211,238,0.22),transparent_55%)]"
              role="img"
              aria-label={`Vista previa de ${title}`}
            >
              {Icon && (
                <Icon
                  className="h-14 w-14 text-accent-sky/80"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              )}
            </motion.div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-800 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative z-20 flex flex-1 flex-col gap-4 p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {title}
              </h3>
              {status && (
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                  {status}
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              {description}
            </p>
          </div>

          {/* Pills de tecnologías */}
          <ul className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-accent-electric/30 bg-accent-electric/10 px-3 py-1 text-xs font-medium text-accent-sky"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Acciones: objetivos táctiles de 44px+ (Ley de Fitts) */}
          <div className="mt-auto flex gap-3 pt-2">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-accent-electric px-4 text-sm font-medium text-white transition hover:bg-accent-sky hover:shadow-glow-sm active:bg-accent-sapphire"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Ver demo
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 text-sm font-medium text-zinc-200 transition hover:border-accent-cyan/60 hover:text-accent-cyan"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Código
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
