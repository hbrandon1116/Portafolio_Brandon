import { Boxes, CalendarDays, Wallet } from 'lucide-react'

// Reemplaza `image` por la ruta de una captura real (ej. '/projects/inventario.png').
// Si lo dejas en null, la tarjeta muestra un placeholder azul con el ícono.
export const projects = [
  {
    id: 'inventario',
    title: 'Defini - Sistema de gestión de inventario',
    description:
      'Control de stock en tiempo real con alertas de reposición, historial de movimientos y reportes exportables.',
    image: null,
    icon: Boxes,
    tags: ['React', 'Django', 'PostgreSQL'],
    github: 'https://github.com/hbrandon1116/Defini',
    demo: null,
    status: 'En desarrollo',
  },
  {
    id: 'eventos',
    title: 'Plataforma de eventos',
    description:
      'Creación de eventos, registro de asistentes y check-in con código QR, con panel de métricas para organizadores.',
    image: null,
    icon: CalendarDays,
    tags: ['React', 'TypeScript', 'Supabase'],
    github: 'https://github.com/Grupo-9-PI',
    demo: 'https://frontend-eventos-pi-seven.vercel.app',
  },
  {
    id: 'finanzas',
    title: 'FinalFinancy - App de finanzas personales',
    description:
      'Registro de ingresos y gastos por categoría, presupuestos mensuales y gráficos para entender a dónde va tu dinero.',
    image: null,
    icon: Wallet,
    tags: ['React', 'Vite', 'Supabase'],
    github: 'https://github.com/hbrandon1116/FinalFinancy',
    demo: null,
    status: 'En desarrollo',
  },
]
