import { ShieldCheck, User, BookOpen, Mail, BriefcaseBusiness, Settings, SquareMousePointer } from "lucide-react";
import profile from "../img/profile.jpg";
import pup from "../img/pup_logo.jpg";
import Card from "../components/Card";
import Social from "../components/Social";
import Accordion from "../components/Accordion";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 p-4 w-full">
        <div className="flex-1">
          <div className="w-full rounded-xl lg:hidden mb-4">
            <div className="relative h-auto rounded-2xl border bg-white border-gray-200">
              <div className="relative h-48 rounded-t-2xl overflow-hidden">
                <img src="https://placehold.co/1200x400/27272A/FFFFFF?text=Coding+Setup+Background" alt="Cover Photo" className="w-full h-full object-cover" />
              </div>

              <div className="p-6 pt-0 flex flex-col sm:flex-row items-start">
                <div className="relative -mt-16 sm:-mt-10 mr-4 mb-4 sm:mb-0 flex-shrink-0">
                  <img src={profile} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-gray-300" />
                </div>

                <div className="flex-1 mt-2 sm:mt-0 pt-0 sm:pt-4">
                  <div className="flex flex-row items-center gap-2">
                    <h1 className="text-xl font-bold">Jenna Miles Reyes</h1>
                    <span className="inline-flex items-center">
                      <ShieldCheck className="w-5 h-5" />
                    </span>
                  </div>
                  <p className="text-sm text-gray-800">Front-End Developer</p>
                </div>
              </div>
            </div>
          </div>

          <Card icon={User} title="About">
            <div className="text-sm text-gray-800 mb-4 text-justify">
              I’m Jenna Miles Reyes, a 4th-year BS Information Technology student at the Polytechnic University of the Philippines – Sto. Tomas Campus. Throughout my academic journey, I’ve grown into someone who values clarity, consistency, and thoughtful problem-solving.
            </div>
            <div className="text-sm text-gray-800 mb-4 text-justify">
              I’m driven by a mindset of continuous improvement — whether I’m leading a team, organizing tasks, or working independently, I make it a point to stay organized, communicate effectively, and deliver with intention. My background in both creative and technical environments has strengthened my adaptability and attention to detail, helping me approach challenges with patience and practical solutions.
            </div>
            <div className="text-sm text-gray-800 text-justify">
              As I enter the field professionally, I am committed to bringing reliability, initiative, and collaboration to every project, providing practical solutions that enhance team performance and deliver meaningful results.
            </div>
          </Card>

          <div className="flex-1 mt-4">
            <Card icon={BookOpen} title="Education">
              <div className="flex flex-row gap-3">
                <img src={pup} alt="PUP Logo " className="w-10 h-10 rounded-full object-cover mt-1 filter grayscale" />
                <div>
                  <div className="font-bold text-sm lg:text-base">Polytechnic University of the Philippines - Sto. Tomas Branch</div>
                  <div className="text-sm text-gray-500">Bachelor of Science in Information Technology</div>
                  <div className="text-sm text-gray-400">2022 - 2026</div>
                  <div className="text-sm text-gray-800 pt-4">Relevant coursework in Web Development, Database Management, Systems Analysis, Data Structures and Algorithms, and Project Management</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex-1 mt-4">
            <Card icon={SquareMousePointer} title="Specializations">
              <div className="flex flex-col space-y-2">
                <Accordion label="Web Development">
                  I build interactive and responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. I specialize in React and Tailwind to create clean, dynamic, and user-friendly web experiences. I also have basic experience with backend
                  integration to connect front-end interfaces with databases and APIs.
                </Accordion>
                <Accordion label="Project Management">
                  I organize, plan, and manage projects efficiently, regardless of the type. With strong organizational and time management skills, I ensure tasks are completed on time, workflows are smooth, and goals are achieved successfully.
                </Accordion>
                <Accordion label="Graphic Design">
                  I create visually appealing designs for various purposes — from posters and publications to social media graphics and promotional materials. I focus on versatile, eye-catching layouts that communicate effectively and maintain a
                  consistent style.
                </Accordion>
                <Accordion label="UI/UX Design">
                  I craft intuitive and user-centered interfaces. I focus on user experience by designing clear navigation, engaging interactions, and functional layouts while ensuring accessibility and responsiveness.
                </Accordion>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex-1 lg:max-w-lg">
          <Card icon={BriefcaseBusiness} title="Experience">
            <Timeline position="Freelance Graphic Designer" company="Self-employed" year="2022 - Present" />
            <Timeline position="Media and Documentation Assistant Head" company="PUPSTB Computer Society" year="Aug 2024 - Aug 2025" />
            <Timeline position="Graphic Design Lead" company="PUPSTB Google Developer Student Club" year="Aug 2023 - Aug 2024" />
          </Card>
          <div className="my-4">
            <Card icon={Settings} title="Skills">
              <Skills title="Web Development" items={["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind", "PHP"]} />
              <Skills title="Design" items={["Canva", "Figma"]} />
              <Skills title="Database" items={["SQL", "phpMyAdmin"]} />
              <Skills title="Developer Tools" items={["Git", "Github", "VS Code", "Discord", "Teams", "Postman"]} />
            </Card>
          </div>
          <div className="my-4">
            <Card icon={Mail} title="Let's Connect!">
              <Social />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
