export interface Project {
  warning?: string;
  title: string;
  key: string;
  url?: string;
  imagesLength: number;
  description: {
    short: string;
    long: string;
  };
  technologies: string[];
  repositories: {
    label: string;
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    warning: 'The project is currently not deployed, but you can access to the code',
    title: 'Courses Platform',
    key: 'courses',
    imagesLength: 3,
    description: {
      short: 'A fullstack web application to manage courses, upload chapter videos and watching for students.',
      long: 'A fullstack web application to manage courses, upload chapter videos and watching for students. The application has a responsive design and is built with Nextjs with App Router, Clerk Authentication, Shadcnui, Tailwindcss, Stripe for payments, PrismaORM, Uploadthing for upload and processing, and server Actions.' +
      'Here the students can watch the videos, mark as completed, and the teachers can manage the courses, chapters, and students. The application has a payment system using Stripe.'
    },
    technologies: ['Reactjs', 'Nextjs', 'Typescript', 'Shadcnui', 'Tailwindcss', 'Clerk', 'Stripe', 'PrismaORM', 'Uploadthing'],
    repositories: [
      {
        label: 'Fullstack App',
        url: 'https://github.com/FrankzAlarcon/courses-platform'
      }
    ]
  },
  {
    warning: 'The project is deployed in a free tier, so the database is not working currently 🥲. But you can access to the code',
    title: 'Job board for "Facultad de Ingeniería en Sistemas"  at the "Escuela Politénica Nacional"',
    key: 'tesis',
    url: 'https://app-tesis-frontend.vercel.app/login',
    imagesLength: 4,
    description: {
      short: 'A fullstack web application to manage the job board for students. Students, teachers, and companies can manage their profiles and post job offers.',
      long: 'A fullstack web applicationion to manage the job board for students. Students, teachers, and companies can manage their profiles and post job offers.' +
      'It was built in frontend using Nextjs with App Router, Typescript, NextAuth for authentication, Shadcnui for the UI and Nextjs Server Actions' +
      'In the backend, it was built using Nestjs, Typescript, PrismaORM, Postgresql, AWS S3. It backend also allow PDF creation using Pdfmake.'
    },
    technologies: ['Reactjs', 'Nextjs', 'Typescript', 'Shadcnui', 'Nestjs', 'NextAuth', 'AWS', 'Postgresql'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/FrankzAlarcon/app-tesis-frontend'
      },
      {
        label: 'Backend',
        url: 'https://github.com/FrankzAlarcon/app-tesis-backend'
      }
    ]
  },
  {
    warning: 'The project is deployed in a free tier, so the database is not working currently 🥲. But you can access to the code',
    title: 'Lunnaris',
    key: 'lunnaris',
    imagesLength: 1,
    url: 'https://lunnaris-v2-frontend.vercel.app/',
    description: {
      short: 'A fullstack web application for basics "streaming videos".',
      long: 'A fullstack web application for basics "streaming videos". The application has a responsive design and is built with Nextjs, Shadcnui, Tailwindcss and use AWS (S3 and Cloudfront). ' +
      'This application was thought to have microservices (but does not integrated with an API Gateway), I was in charge of the frontend and the files-microservice to upload videos, images. ' + 
      'The backend was build using Nodejs, Express MongoDB and AWS sdk to upload the files to S3.' 
    },
    technologies: ['Reactjs', 'Nextjs', 'Typescript', 'Shadcnui', 'Tailwindcss', 'AWS', 'Nodejs', 'Express', 'MongoDB'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/FrankzAlarcon/lunnaris-v2-frontend'
      },
      {
        label: 'Backend - Files microservice',
        url: 'https://github.com/FrankzAlarcon/lunnaris-files'
      }
    ]
  },
  {
    title: 'Barbershop',
    key: 'barbershop',
    imagesLength: 2,
    url: 'https://barbery-shop.netlify.app/index.html',
    description: {
      short: 'A web application for barbershops, where customers can make appointments and barbers can manage their schedules.',
      long: 'A web application for barbershops, where customers can make appointments and barbers can manage their schedules. The application has a responsive design and is built with Vanilla HTML, CSS, Javascript using Vitejs.' +
      ' Also, it uses Firebase Firestore to store the data and Firebase Authentication to manage the users. However an GraphQL API was created to manage the data and the authentication.'
    },
    technologies: ['HTML', 'CSS', 'Javascript', 'Vitejs', 'Firebase', 'GraphQL', 'Postgresql', 'Nodejs', 'Express'],
    repositories: [
      {
        label: 'Frontend',
        url: "https://github.com/FrankzAlarcon/proyecto-apps-web"
      },
      {
        label: 'Backend with GraphQL',
        url: 'https://github.com/FrankzAlarcon/proyecto-apps-web-backend'
      }
    ]
  },
  {
    title: '"El Telégrafo" Clone',
    key: 'telegrafo',
    imagesLength: 2,
    url: 'https://el-telegrafo-accesible.vercel.app/',
    description: {
      short: 'A clone of the "El Telégrafo" newspaper website.',
      long: 'A clone of the "El Telégrafo" newspaper website. The application has a responsive design and is built with Nextjs, Tailwindcss and uses Contentful as a CMS. All the info is fetched from Contentful using the Contentful API.'
    },
    technologies: ['Reactjs', 'Nextjs', 'Typescript', 'Tailwindcss', 'Contentful'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/FrankzAlarcon/el-telegrafo-accesible'
      }
    ]
  },
  {
    title: 'Catwiki',
    key: 'catwiki',
    imagesLength: 3,
    url: 'https://cat-wiki-sooty.vercel.app/',
    description: {
      short: 'A web application to search information about cat breeds.',
      long: 'A web application to search information about cat breeds. The application has a responsive design and is built with Nextjs. It uses the TheCatAPI to get the information about the cat breeds.'
    },
    technologies: ['Reactjs', 'Nextjs', 'Typescript', 'TheCatAPI'],
    repositories: [
      {
        label: 'Frontend',
        url: 'https://github.com/FrankzAlarcon/cat-wiki'
      }
    ]
  }
]