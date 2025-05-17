import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container bg-gradient-to-b from-blue-100 via-white to-cyan-100 rounded-lg p-10 shadow-md'>
      <h1 className='head-text text-center text-4xl font-bold text-slate-800'>
        Hello, I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 drop-shadow'>
          Abdurrahim
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-600 text-center max-w-2xl mx-auto'>
        <p>
          Information Systems student based in Jakarta, currently studying at Bina Sarana Informatika. Passionate about learning to become a programmer through hands-on practice and real-world projects.
        </p>
      </div>

      {/* Skills */}
      <div className='py-16 flex flex-col items-center'>
        <h3 className='subhead-text text-2xl font-semibold text-slate-800'>My Skills</h3>

        <div className='mt-10 flex flex-wrap justify-center gap-8'>
          {skills.map((skill) => (
            <div
              className='w-24 h-24 bg-white rounded-xl shadow-lg flex flex-col items-center justify-center transform hover:scale-105 transition duration-300 ease-in-out'
              key={skill.name}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-2/3 h-2/3 object-contain'
              />
              <p className='text-xs mt-2 text-center text-slate-600'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experiences */}
      <div className='py-16'>
        <h3 className='subhead-text text-2xl font-semibold text-slate-800'>Learning Journey</h3>
        <p className='mt-5 text-slate-600 text-center'>
          I’ve been diving into the world of tech by learning through real projects, self-study, and collaboration with peers. Every step helps me grow my skills and get closer to becoming a professional developer. Here’s the journey so far:
        </p>

        <div className='mt-12'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name + index}
                date={experience.date}
                iconStyle={{ background: experience.iconBg, color: "#fff" }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  background: "#f0f9ff",
                  color: "#1e293b",
                  borderTop: `4px solid ${experience.iconBg}`,
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div>
                  <h3 className='text-lg font-semibold'>{experience.title}</h3>
                  <p className='text-sm text-slate-500'>{experience.company_name}</p>
                </div>

                <ul className='mt-4 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, i) => (
                    <li
                      key={`experience-point-${i}`}
                      className='text-sm text-slate-600'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-300 my-12' />

      <CTA />
    </section>
  );
};

export default About;
