"use client"

import SectionTitle from '@/components/section-title'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import LanguageMenu from './language-menu'
import { Mail } from 'lucide-react'

interface CompletePresentationProps {
  children: React.ReactNode
  asChild?: boolean
}
type Presentation = {
  [key: string]: {
    title: string
    content: string[]
    contactMe: string
  }
}

type PresentationItem = {
  title: string
  content: string[]
  contactMe: string
}

const presentation: Presentation = {
  es: {
    title: 'Sobre mí',
    content: [
      'Soy Ingeniero de Software graduado en la <strong>Escuela Politécnica Nacional</strong>, y me apasiona crear soluciones tecnológicas que impacten de manera positiva a las personas.',
      'He trabajado como desarrollador Backend en <strong>Zeyo Blockchain</strong>. Aquí he trabajado con tecnologías como Nodejs, Typescript, SQL, Docker, entre otras. Además, he apoyado en la adopción del cloud de AWS, específicamente en Lambdas, S3, API Gateways',
      'Personalmente, he usado Nextjs y Nestjs para mis proyectos personales. He utilizado los stacks <strong>MERN</strong>, <strong>PERN</strong>, y desarrollado APIs <strong>REST</strong> y <strong>GraphQL</strong>.',
      'Entre mis hobbies están ver fútbol, ir al gym, mejorar mis habilidades de desarrollo y, a veces, juego videojuegos 🎮'
    ],
    contactMe: 'Contáctame'
  },
  en: {
    title: 'About me',
    content: [
      'I am a Software Engineer graduated from the <strong>Escuela Politécnica Nacional</strong>, and I am passionate about creating technological solutions that positively impact people..',
      'I have worked as a Backend Developer at <strong>Zeyo Blockchain</strong>. There, I worked with technologies like Node.js, TypeScript, SQL, Docker, among others. Additionally, I supported the adoption of AWS cloud services, specifically Lambdas, S3, and API Gateways.',
      'Personally, I have used Next.js and Nest.js for my personal projects. I have worked with the <strong>MERN</strong> and <strong>PERN</strong> stacks, and developed <strong>REST</strong> and <strong>GraphQL</strong> APIs.',
      'My hobbies include watching soccer, going to the gym, improving my development skills, and occasionally playing video games 🎮'
    ],
    contactMe: 'Contact me'
  }
}

const CompletePresentation = ({
  children,
  asChild = false
}: CompletePresentationProps) => {
  const [language, setLanguage] = useState('en')
  const values = useMemo<PresentationItem>(() => presentation[language], [language])
  return (
    <Sheet>
      <SheetTrigger asChild={asChild}>
        {children}
      </SheetTrigger>
      <SheetContent className='text-sm'>
        <SheetHeader className='flex flex-row justify-between items-center'>
          <SheetTitle className='text-3xl font-bold py-4 text-blue-600'>{values.title}</SheetTitle>
          <LanguageMenu onClick={setLanguage} />
        </SheetHeader>
        <div className='space-y-4'>
          {
            values.content.map((content, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: content }} />
            ))
          }
        </div>
        <SectionTitle className='text-xl' withLines={false}>
          {values.contactMe}
        </SectionTitle>
        <div className='flex gap-2 justify-center items-center pb-4'>
          <Mail className='w-6 h-6 text-blue-600' />
          leninalarcon7@gmail.com
        </div>
        <div className='flex justify-center gap-4'>
          <Link href="https://www.linkedin.com/in/frankz-lenin-alarc%C3%B3n-cando-591724268/"
            target='_blank'
          >
            <FaLinkedin className='w-8 h-8 text-blue-600 hover:scale-110 transition-all duration-300' />
          </Link>
          <Link href="https://github.com/FrankzAlarcon"
            target='_blank'
          >
            <FaGithub className='w-8 h-8 hover:scale-110 transition-all duration-300' />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CompletePresentation