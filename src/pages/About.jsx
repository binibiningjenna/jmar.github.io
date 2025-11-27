import { ShieldCheck, User, BookOpen, Mail, BriefcaseBusiness, Settings, SquareMousePointer } from "lucide-react";
import profile from "../img/profile.jpg";
import pup from "../img/pup_logo.jpg";
import Card from "../components/Card";
import Social from "../components/Social";
import Accordion from "../components/Accordion";

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
                  <p className="text-sm text-gray-500">Front-End Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <Card icon={User} title="About">
              <div className="text-sm text-gray-500 mb-4 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab illo omnis provident excepturi at perferendis expedita quasi, quisquam adipisci! Odio aliquam earum dicta reprehenderit architecto itaque ipsa cum voluptate! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dicta quam placeat velit perferendis ab eius deserunt numquam est neque maiores, itaque asperiores exercitationem nulla doloribus, obcaecati fugiat molestias? Nihil, labore!
              </div>
              <div className="text-sm text-gray-500 mb-4 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab illo omnis provident excepturi at perferendis expedita quasi, quisquam adipisci! Odio aliquam earum dicta reprehenderit architecto itaque ipsa cum voluptate! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quibusdam ea, ut expedita laboriosam dolores tempora atque consectetur iste eos. Asperiores laboriosam temporibus eos blanditiis molestias voluptatum nemo omnis, ducimus perspiciatis.
              </div>
              <div className="text-sm text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab illo omnis provident excepturi at perferendis expedita quasi, quisquam adipisci! Odio aliquam earum dicta reprehenderit architecto itaque ipsa cum voluptate! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Numquam dolorem quidem eligendi cupiditate. Obcaecati pariatur magnam magni esse nesciunt beatae rem voluptatem nihil. Quidem est unde asperiores, dolorem ab itaque.
              </div>
            </Card>
          </div>

          <div className="flex-1 mt-4">
            <Card icon={BookOpen} title="Education">
              <div className="flex flex-row gap-3">
                <img src={pup} alt="PUP Logo " className="w-10 h-10 rounded-full object-cover mt-1" />
                <div>
                  <div className="font-bold text-sm lg:text-base">Polytechnic University of the Philippines - Sto. Tomas Branch</div>
                  <div className="text-sm text-gray-500">Bachelor of Science in Information Technology</div>
                  <div className="text-sm text-gray-500">2022 - 2026</div>
                  <div className="text-sm text-gray-500 pt-4">Relevant coursework in Web Development, Database Management, Systems Analysis, Data Structures and Algorithms, and Project Management</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex-1 mt-4">
            <Card icon={SquareMousePointer} title="Specializations">
              <div className="flex flex-col space-y-2">
                <Accordion label="Front-End Development">I build interactive and responsive web interfaces using HTML, CSS, JavaScript and Bootstrap. I specialize in React and Tailwind to create clean, dynamic, and user-friendly web experiences.</Accordion>
                <Accordion label="Project Management">I organize, plan, and manage projects efficiently, regardless of the type. With strong organizational and time management skills, I ensure tasks are completed on time, workflows are smooth, and goals are achieved successfully.</Accordion>
                <Accordion label="Graphic Design">I create visually appealing designs for various purposes — from posters and publications to social media graphics and promotional materials. I focus on versatile, eye-catching layouts that communicate effectively and maintain a consistent style.</Accordion>
                <Accordion label="UI/UX Design">I craft intuitive and user-centered interfaces. I focus on user experience by designing clear navigation, engaging interactions, and functional layouts while ensuring accessibility and responsiveness.</Accordion>
              </div>
            </Card>
          </div>
        </div>

        <div className="flex-1 lg:max-w-md">
          <Card icon={BriefcaseBusiness} title="Experience"></Card>
          <div className="my-4">
            <Card icon={Settings} title="Skills"></Card>
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
