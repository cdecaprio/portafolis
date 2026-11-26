// ============================================================
// ✏️  EDITAR AQUÍ TODO EL CONTENIDO DEL PORTAFOLIO
//    No hace falta tocar ningún componente ni instalar nada.
// ============================================================

export const profile = {
  name: 'Carla',
  greeting: '¡Hola! Soy la Carla',
  role: 'Desarrolladora Web Full Stack',
  // Ruta de la foto dentro de /public. Sustituye /avatar.svg por tu imagen,
  // por ejemplo /images/carla.jpg, y coloca el archivo en public/images/.
  avatar: '/avatar.svg',
  about:
    'Desarrolladora Full-Stack con experiencia construyendo aplicaciones de extremo a extremo: del frontend al backend, del diseño a la base de datos. Actualmente aprendiendo Python y explorando sus posibilidades. Siempre aprendiendo algo nuevo.',
}

export const navLinks = [
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilitats' },
  { label: 'Proyectos', href: '#projectes' },
  { label: 'Contacto', href: '#contacte' },
]

export const skills = [
  {
    short: 'FE',
    title: 'Frontend',
    description: 'JavaScript, TypeScript, Next.js, Tailwind CSS',
  },
  {
    short: 'BE',
    title: 'Backend',
    description: 'Node.js, PHP, Laravel, Java',
  },
  {
    short: 'BD',
    title: 'Bases de datos',
    description: 'MySQL, PostgreSQL, MongoDB',
  },
  {
    short: 'OT',
    title: 'Herramientas',
    description: 'Git, Docker, Figma, Python',
  },
]

export const projects = [
  {
    id: 1,
    name: 'EDA · Análisis exploratorio',
    description:
      'Análisis exploratorio de datos de COVID en Estados Unidos: limpieza, enriquecimiento y visualización de más de 20.000 registros con Python y Jupyter.',
    tags: ['Python', 'Jupyter', 'Pandas'],
    image: '',
    link: 'https://github.com/IA-P1-BCN/EDA_Carla',
  },
  {
    id: 2,
    name: 'Kiniela Predictor',
    description:
      'Modelo de clasificación multiclase del resultado de partidos de la Premier League con XGBoost. Modeling Lead y app desplegada en Render.',
    tags: ['Python', 'XGBoost', 'Machine Learning'],
    image: '',
    link: 'https://github.com/IA-P1-BCN/kiniela-predictor-equipo2',
  },
  {
    id: 3,
    name: 'Taxímetro Digital',
    description:
      'Taxímetro por línea de comandos que calcula el importe de la carrera en tiempo real según el estado del vehículo: parado (0,02 €/s) o en movimiento (0,05 €/s). Permite encadenar varias carreras.',
    tags: ['Python', 'CLI'],
    image: '',
    link: 'https://github.com/IA-P1-BCN/p1-proyecto-taximetro-Carla',
  },
  {
    id: 4,
    name: 'APIResto · Frontend',
    description:
      'Web de gestión de restaurante con una vista por rol: sala, cocina, barra, administración y clientes. Carta, mesas, reservas, pedidos, facturas y estadísticas.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '',
    link: 'https://github.com/Resto-dev/frontend',
  },
  {
    id: 5,
    name: 'APIResto · Backend',
    description:
      'API REST del proyecto con FastAPI y PostgreSQL: autenticación por roles, pedidos en tiempo real, facturación y documentación Swagger.',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    image: '',
    link: 'https://github.com/Resto-dev/backend',
  },
  {
    id: 6,
    name: 'MindNotes',
    description:
      'Aplicación de notas para organizar ideas y apuntes de forma rápida y sencilla.',
    tags: ['Vue', 'JavaScript'],
    image: '',
    link: 'https://github.com/cdecaprio/MindNotes',
  },
]

export const contact = {
  email: 'carladecaprio22@gmail.com',
  linkedin: 'https://www.linkedin.com/in/carla-de-caprio-a9164526a/',
  github: 'https://github.com/cdecaprio',
  // Texto que aparece encima de las tarjetas de contacto.
  message: '¿Interesado en trabajar juntos? ¡Contáctame!',
}
