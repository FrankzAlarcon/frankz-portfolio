import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

interface EducationCardProps {
  Icon: IconType;
  title: string;
  description: string;
  classStyles?: string;
}

export default function EducationCard({
  Icon, description, title, classStyles,
}: EducationCardProps) {
  return (
    <div className={cn('flex flex-col items-center p-2 my-2', classStyles)}>
      <div className="bg-blue-800 rounded-md w-14 h-14 grid place-content-center">
        <Icon className="text-3xl text-white" />
      </div>
      <div className='space-y-2'>
        <p className="text-gray-800 text-center font-bold text-lg pt-2">{title}</p>
        <p className="text-center font-light">
          {description}
        </p>
      </div>
    </div>
  );
}
