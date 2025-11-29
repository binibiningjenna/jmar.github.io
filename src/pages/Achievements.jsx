import Card from "../components/Card";
import { Award, FileSearchCorner, X, Mail } from "lucide-react";
import Social from "../components/Social";
import { useState } from "react";
import data from "../data/data.js";

export default function Achievements() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (img) => {
    setModalImage(img);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="flex-1 w-full p-4">
        <Card icon={Award} title="Achievements">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center pt-2">
            {/* Achievement Card */}
            {data.certificates.map((cert, index) => (
              <div key={index} className="relative border border-gray-400 hover:bg-gray-100 rounded-xl w-full sm:w-72 md:w-56 lg:w-72 p-6">
                <div className="text-gray-800 font-semibold text-md mb-2">{cert.title}</div>
                <div className="text-gray-500 text-sm mb-12">{cert.issuer}</div>
                <div className="absolute bottom-4 right-4">
                  <button onClick={() => openModal(cert.imageURL)} className="bg-gray-800 text-white text-xs px-3 py-1 rounded flex items-center gap-1 transition-colors duration-200">
                    <FileSearchCorner className="w-3 h-3" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-xs bg-black/40">
            <div className="relative bg-white rounded-xl shadow-xl max-w-3xl w-full p-6 md:p-8">
              {/* Close button */}
              <button onClick={closeModal} className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow hover:bg-gray-100 transition">
                <X className="w-6 h-6 text-gray-600" />
              </button>

              {/* Image */}
              <img src={modalImage} alt="Certificate" className="w-full h-auto rounded-lg object-contain" />
            </div>
          </div>
        )}
      </div>

      <div className="mb-4 px-4">
        <Card icon={Mail} title="Let's Connect!">
          <Social />
        </Card>
      </div>
    </>
  );
}
