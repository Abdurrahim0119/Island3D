import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='relative max-container bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] overflow-hidden py-20 px-6'>
      <div className='absolute inset-0 pointer-events-none -z-10'>
        <svg
          className='absolute top-0 left-0 w-[600px] opacity-20'
          viewBox='0 0 500 500'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='250' cy='250' r='250' fill='#60a5fa' />
        </svg>

        <svg
          className='absolute bottom-0 right-0 w-[400px] opacity-10'
          viewBox='0 0 500 500'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='250' cy='250' r='250' fill='#a78bfa' />
        </svg>
      </div>

      {/* Heading */}
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      {/* Description */}
      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've started working on several projects as part of my learning journey. These projects represent my growth and dedication to becoming a skilled programmer. Many of them are open for feedback and collaboration — feel free to check out the code and share your ideas. Your support and contributions mean a lot!
      </p>

      {/* Project List */}
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      {/* Call to Action */}
      <CTA />
    </section>
  );
};

export default Projects;
