import React from 'react';
import { SiGithub } from 'react-icons/si';
import ProjectCard from './project-card';
import SectionTitle from '../../../../components/section-title';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { projects } from '@/helpers/projects';

export default function Projects() {
  // Algunos proyectos de github
  // Los demas proyectos en nueva pagina
  return (
    <div className="flex flex-col container mx-auto mb-10">
      <SectionTitle description="Learn about some personal projects I have done">
        Projects
      </SectionTitle>
      <Carousel>
        <CarouselContent className='py-6'>
          {
            projects.map((project) => (
              <CarouselItem key={project.key} className='md:basis-1/2 lg:basis-1/3 flex justify-center'>
                <ProjectCard project={project}/>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='pt-6 w-full md:w-72 flex items-center justify-center mx-auto'>
        <Link
          href="https://github.com/FrankzAlarcon"
          target="_blank"
          type="button"
          className="flex gap-3 mx-auto p-2 shadow-md rounded-full  items-center border-2 border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-300"
          rel="noreferrer"
        >
          <p className=" font-bold pl-2">All Projects</p>
          {' '}
          <SiGithub className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
}
