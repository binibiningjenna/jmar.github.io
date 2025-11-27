import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Social() {
  return (
    <>
      <div className="flex gap-4">
        <a href="https://github.com/binibiningjenna" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 text-gray-800" />
        </a>

        <a href="mailto:atienzajennamiles@gmail.com">
          <FaEnvelope className="w-8 h-8 text-gray-800" />
        </a>

        <a href="https://www.linkedin.com/in/binibiningjenna/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8 text-gray-800" />
        </a>

        <a href="https://www.facebook.com/jennamiles.reyes.1" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-8 h-8 text-gray-800" />
        </a>
      </div>
      <div className="text-sm text-gray-500 mt-3">Let’s explore how we can create meaningful solutions together.</div>
    </>
  );
}
