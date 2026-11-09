import { motion, MotionConfig } from 'framer-motion'
import {
  ArrowDown,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Layers,
} from 'lucide-react'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

/* -------------------------------------------------------------------------- */
/*  Configuración personal: edita estos datos                                 */
/* -------------------------------------------------------------------------- */
const profile = {
  name: 'Brandon Hinga',
  role: 'Desarrollador de Software',
  tagline:
    'Construyo aplicaciones web rápidas, mantenibles y pensadas para resolver problemas reales.',
  email: 'tu@correo.com',
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://www.linkedin.com/in/tu-usuario',
}

const stack = [
  {
    group: 'Frontend',
    icon: Layers,
    items: [
      { name: 'React', note: 'Interfaces y componentes' },
      { name: 'Vite', note: 'Build y desarrollo ágil' },
      { name: 'TypeScript', note: 'Código tipado y seguro' },
    ],
  },
  {
    group: 'Backend',
    icon: Server,
    items: [
      { name: 'Python', note: 'Lógica y automatización' },
      { name: 'Django', note: 'APIs y paneles de gestión' },
    ],
  },
  {
    group: 'Datos',
    icon: Database,
    items: [
      { name: 'Supabase', note: 'Auth y backend como servicio' },
      { name: 'PostgreSQL', note: 'Modelado y consultas' },
    ],
  },
]

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#stack', label: 'Stack' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

/* -------------------------------------------------------------------------- */
/*  Piezas reutilizables                                                      */
/* -------------------------------------------------------------------------- */
function Button({ href, variant = 'primary', children, ...props }) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-base font-medium transition'
  const variants = {
    primary:
      'bg-accent-electric text-white hover:bg-accent-sky hover:shadow-glow active:bg-accent-sapphire',
    secondary:
      'border border-white/15 text-zinc-200 hover:border-accent-cyan/60 hover:text-accent-cyan',
  }
  return (
    <a href={href} className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </a>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 max-w-2xl space-y-3">
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-zinc-400">{subtitle}</p>}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Secciones                                                                 */
/* -------------------------------------------------------------------------- */
function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="#inicio" className="font-semibold tracking-tight text-white">
          {profile.name}
          <span className="text-accent-electric">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-4 py-2 text-sm text-zinc-400 transition hover:text-accent-sky"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="inline-flex min-h-10 items-center rounded-lg border border-accent-electric/40 px-4 text-sm font-medium text-accent-sky transition hover:bg-accent-electric/10"
        >
          Contáctame
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* Fondo: cuadrícula + resplandores azules */}
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-electric/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[55%] h-[260px] w-[260px] rounded-full bg-accent-cyan/10 blur-[110px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-electric/30 bg-accent-electric/10 px-4 py-1.5 text-sm text-accent-sky"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          Disponible para nuevos proyectos
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {profile.name}
          <span className="mt-2 block bg-blue-gradient bg-clip-text text-transparent">
            {profile.role}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href="#proyectos">
            Ver proyectos
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#contacto" variant="secondary">
            Contactar
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-16 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading title="Sobre mí" />
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Soy desarrollador de software con una mentalidad orientada a resultados y a la mejora continua. Mi formación me ha enseñado el valor del esfuerzo constante, la responsabilidad frente a los retos complejos y la importancia de la ejecución precisa. Disfruto diseñando y construyendo aplicaciones web completas (desde interfaces interactivas hasta arquitecturas backend sólidas) y colaborando en equipos donde el liderazgo y la sincronización son clave. Mi objetivo en cada proyecto es claro: superar los límites técnicos, dominar nuevas tecnologías y entregar plataformas eficientes que resuelvan problemas reales de manera óptima.
          </p>
          <ul className="grid gap-3 pt-2 sm:grid-cols-3">
            {['Enfoque en resultados', 'Responsabilidad', 'Mejora continua'].map(
              (value) => (
                <li
                  key={value}
                  className="rounded-lg border border-white/10 bg-ink-800 px-4 py-3 text-center text-sm font-medium text-zinc-200"
                >
                  {value}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-16 border-y border-white/5 bg-ink-900 px-6 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Stack tecnológico"
          subtitle="Las herramientas con las que construyo de punta a punta."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {stack.map(({ group, icon: Icon, items }) => (
            <div
              key={group}
              className="rounded-2xl border border-white/10 bg-ink-800 p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-electric/10 text-accent-sky">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-white">{group}</h3>
              </div>
              <ul className="space-y-2">
                {items.map(({ name, note }) => (
                  <motion.li
                    key={name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-accent-electric/30 hover:bg-accent-electric/5"
                  >
                    <span className="font-medium text-zinc-100 group-hover:text-accent-sky">
                      {name}
                    </span>
                    <span className="text-xs text-zinc-500">{note}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-16 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Proyectos"
          subtitle="Una selección de lo que he construido, con código y demo disponibles."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    {
      label: 'Correo',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: 'GitHub',
      value: 'Ver repositorios',
      href: profile.github,
      icon: Github,
    },
    {
      label: 'LinkedIn',
      value: 'Ver perfil profesional',
      href: profile.linkedin,
      icon: Linkedin,
    },
  ]

  return (
    <section
      id="contacto"
      className="relative scroll-mt-16 overflow-hidden border-t border-white/5 bg-ink-900 px-6 py-28"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-64 w-[640px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent-electric/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
          Cuéntame qué necesitas y te respondo en menos de 48 horas.
        </p>

        <div className="mt-8 flex justify-center">
          <Button href={`mailto:${profile.email}`}>
            <Mail className="h-5 w-5" aria-hidden="true" />
            Escribirme un correo
          </Button>
        </div>

        <ul className="mt-14 grid gap-4 text-left sm:grid-cols-3">
          {links.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <motion.a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex min-h-20 items-center gap-4 rounded-xl border border-white/10 bg-ink-800 p-4 transition-colors hover:border-accent-cyan/50 hover:shadow-glow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-electric/10 text-accent-sky transition-colors group-hover:bg-accent-electric group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-medium text-white">{label}</span>
                  <span className="block truncate text-sm text-zinc-500">
                    {value}
                  </span>
                </span>
              </motion.a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-zinc-600">
      © {new Date().getFullYear()} {profile.name}. Hecho con React, Vite y
      Tailwind CSS.
    </footer>
  )
}

/* -------------------------------------------------------------------------- */
/*  App                                                                       */
/* -------------------------------------------------------------------------- */
export default function App() {
  return (
    // reducedMotion="user": respeta la preferencia del sistema de reducir animaciones
    <MotionConfig reducedMotion="user">
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-electric focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
