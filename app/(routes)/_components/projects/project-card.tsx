"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Project } from '@/helpers/projects';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Banner from '@/components/banner';
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({
  project
}: ProjectCardProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          aria-label={`Open drawer for ${project.title}`}
          aria-controls={`card-${project.title}`}
          className={cn('hover:scale-[1.02] transition-all duration-500 block')}
        >
          <div className="shadow-md rounded-sm border border-gray-300 w-72 h-80">
            <div className="w-full border-blue-100 border-b-2">
              <Image src={`/images/${project.key}/${project.key}-1.png`} width={300} height={180} alt={`Project ${project.title}`}
                className='aspect-video'
              />
            </div>
            <div className="p-2">
              <p className="font-bold text-center text-lg">{project.title}</p>
              <p className="font-light text-sm line-clamp-3">
                {project.description.short}
              </p>
            </div>
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <Link
            href={project.url || '#'}
            target='_blank'
          >
            <DrawerTitle className='text-center text-xl md:text-3xl'>{project.title}</DrawerTitle>
          </Link>
        </DrawerHeader>
        <div className='grid grid-cols-1 md:grid-cols-2 py-6 pl-16 pr-16 gap-16'>
          <Carousel opts={{
            align: 'center',
            loop: true,
          }}
            plugins={[Autoplay({ delay: 2000 })]}
          >
            <CarouselContent>
              {
                project.imagesLength && Array.from({ length: project.imagesLength }, (_, i) => (
                  <CarouselItem key={i} className='flex items-center justify-center border-2 border-blue-100'>
                    <Image src={`/images/${project.key}/${project.key}-${i + 1}.png`}
                      width={500} height={260}
                      alt={`Project ${project.title}`}
                      className='aspect-video'
                    />
                  </CarouselItem>
                ))
              }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className='space-y-2'>
            {
              project.warning && (
                <Banner
                  label={project.warning}
                />
              )
            }
            <div className='flex flex-wrap'>
              {
                project.technologies.map((tech) => (
                  <Badge key={tech} className='m-1 bg-blue-600'>{tech}</Badge>
                ))
              }
            </div>
            <div>
              <p className='text-sm'>{project.description.long}</p>
            </div>
            <div>
              <p className='text-lg font-bold pb-2'>Visit the repositories:</p>
              <div className='flex gap-4'>
                {
                  project.repositories.map((repo) => (
                    <Link key={repo.label}
                      href={repo.url}
                      target='_blank'
                      rel='noreferrer'
                      className={buttonVariants({ variant: 'default' })}
                    >
                      <FaGithub className='w-8 h-8 hover:scale-110 transition-all duration-300' />
                      {repo.label}
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
    
  );
}
