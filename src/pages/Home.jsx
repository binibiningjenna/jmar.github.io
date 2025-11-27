import Card from "../components/Card.jsx";
import StatCard from "../components/StatCard.jsx";
import FeaturedCard from "../components/FeaturedCard.jsx";
import Social from "../components/Social.jsx";
import data from "../data/data.js";
import { ChartSpline, FolderCode, FileBadge, CodeXml, Lightbulb, Mail, CheckLine } from "lucide-react";
export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 p-4 w-full">
        <div className="flex-1">
          <div className="w-full bg-white rounded-lg lg:mx-0">
            <div className="w-full h-64 object-cover mb-4"></div>
          </div>

          <Card icon={ChartSpline} title="Analytics">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <StatCard icon={FolderCode} title="Projects" value="30" />
              <StatCard icon={FileBadge} title="Certificates" value="15" />
              <StatCard icon={CodeXml} title="Technologies" value="8" />
              <StatCard icon={Lightbulb} title="Skills" value="8" />
            </div>
          </Card>

          <div className="mt-4">
            <Card icon={CheckLine} title="Recommendations">
              {data.recommendations.map((recommendation, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded mb-4">
                  <div className="text-sm text-gray-800 mb-2">{recommendation.quote}</div>
                  <p className="font-semibold text-sm">{recommendation.name}</p>
                  <p className="text-xs text-gray-500">
                    {recommendation.position}, {recommendation.company}
                  </p>
                </div>
              ))}
            </Card>
          </div>
        </div>

        <div className="flex-1 lg:max-w-md">
          <Card icon={FolderCode} title="Featured Projects">
            <div className="pt-1">
              <FeaturedCard
                title="Portfolio"
                description="Portfolio is my personal project, a digital showcase of my skills, projects, and achievements. I built it to highlight my work in a professional and interactive way, featuring sections for my projects, experiences, and contact information."
                link="https://example.com/project-link"
              />
              <FeaturedCard
                title="PesoBuddy"
                description="PesoBuddy is a personal finance management app designed to help users take control of their money effortlessly. With PesoBuddy, users can track their income, expenses, and savings in one intuitive platform."
                link="https://example.com/project-link"
              />
              <FeaturedCard
                title="StudentTrack"
                description="StudenTrack is a student grade and RFID-based attendance tracking system built with HTML, CSS, JavaScript, Bootstrap and localStorage. Easily log attendance, manage subjects, and monitor academic progress."
                link="https://example.com/project-link"
              />
              <FeaturedCard
                title="Flixly"
                description="Flixly is a movie and TV show discovery web app powered by the TMDb API. Browse trending movies, explore TV series, view detailed information, and watch trailers — all in one place."
                link="https://example.com/project-link"
              />
              <FeaturedCard 
                title="GymBoost" 
                description="GymBoost is a smart gym management system enhanced with RFID technology to streamline member check-ins and attendance tracking." 
                link="https://example.com/project-link" />
            </div>
          </Card>

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
