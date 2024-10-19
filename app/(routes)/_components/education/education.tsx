import { SiDiagramsdotnet, SiJavascript } from 'react-icons/si';
import { AiFillAndroid } from 'react-icons/ai';
import EducationCard from './education-card';
import SectionTitle from '@/components/section-title';

export default function Education() {
  return (
    <div className="flex flex-col p-2 container mx-auto">
      <SectionTitle
        description='My knowledge about software development'
      >Education</SectionTitle>
      <div className="grid grid-cols-1 my-2 md:grid-cols-2 lg:grid-cols-3">
        <EducationCard
          Icon={SiDiagramsdotnet}
          title="Software Design and Architecture"
          description="Design and architecture of software systems, with the best practices and patterns for the development of scalable and maintainable systems."
          classStyles="md:col-span-1"
        />
        <EducationCard
          Icon={AiFillAndroid}
          title="Mobile Development"
          description="Creation of multi-platform mobile applications with React Native. Improve your business and speed up processes."
          classStyles="md:col-span-1"
        />
        <EducationCard
          Icon={SiJavascript}
          title="Web Development"
          description="Development of landing pages and/or web applications for your business or entrepreneurship."
          classStyles="md:col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
}
