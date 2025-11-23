import Card from "../components/Card.jsx";
import StatCard from "../components/StatCard.jsx";
import { ChartSpline, FolderCode, FileBadge, CodeXml, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="py-4">
        <div className="w-full max-w-3xl bg-white rounded-xl lg:mx-8">
          <div className="w-full h-64 object-cover"></div>
        </div>
        <Card icon={ChartSpline} title="Analytics">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            <StatCard icon={FolderCode} title="Projects" value="30" />
            <StatCard icon={FileBadge} title="Certificates" value="15" />
            <StatCard icon={CodeXml} title="Technologies" value="8" />
            <StatCard icon={Lightbulb} title="Skills" value="8" />
          </div>
        </Card>
      </div>
    </>
  );
}
