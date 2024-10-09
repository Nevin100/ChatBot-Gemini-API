import "./App.css";
import "./index.css";
import { IoCodeSlash } from "react-icons/io5";
import { SiChatbot } from "react-icons/si";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { BiPlanet } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 min-h-screen overflow-hidden w-full items-center px-5 py-12 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="container w-full min-h-screen overflow-x-hidden bg-transparent text-white mx-auto px-6 md:px-12">
          <div className="middle h-[70vh] rounded-lg bg-neutral-400/10 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold p-3 m-2 flex items-center">
              <i className="relative text-2xl md:text-3xl lg:text-4xl pl-2 mr-4 text-blue-500/80">
                <SiChatbot />
              </i>
              GEMINI-AI BOT
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl p-6 md:p-8 m-6 md:m-10 flex items-center">
              <i className="relative text-2xl md:text-3xl lg:text-4xl pl-2 mr-4 text-blue-500/80">
                <FaHandHoldingHeart />
              </i>
              AAPKA-BOT
            </h2>
            <div className="boxes flex flex-col sm:flex-row gap-4 items-center sm:justify-center px-4">
              <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 mr-0 sm:mr-4 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-blue-500/80 delay-450 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                <p>
                  What is Coding ?? How can we learn it??
                  <i className="absolute right-2 bottom-2 text-[18px]">
                    <IoCodeSlash />
                  </i>
                </p>
              </div>
              <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 mr-0 sm:mr-4 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-blue-500/80 delay-450 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                <p>
                  Which is the largest planet???
                  <i className="absolute right-2 bottom-2 text-[18px]">
                    <BiPlanet />
                  </i>
                </p>
              </div>
              <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 mr-0 sm:mr-4 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-blue-500/80 delay-450 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                <p>
                  What is Asynchronous Javascript???
                  <i className="absolute right-2 bottom-2 text-[18px]">
                    <IoLogoJavascript />
                  </i>
                </p>
              </div>
              <div className="card relative min-h-[20vh] text-base md:text-lg p-5 sm:p-6 rounded-lg cursor-pointer transition-all ease-in-out hover:bg-blue-500/80 delay-450 bg-neutral-400/15 w-full sm:w-auto sm:min-w-[250px]">
                <p>
                  What is MongoDB? What is NOSQL Database??
                  <i className="absolute right-2 bottom-2 text-[18px]">
                    <BiLogoMongodb />
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="Bott mt-5">
            <div className="input flex items-center text-white text-base md:text-xl bg-neutral-900/90 rounded-xl">
              <input
                type="text"
                className="p-4 md:p-5 bg-transparent flex-1 outline-none"
                placeholder="How can I help you??"
              />
            </div>
            <p className="text-xs md:text-sm text-white text-center p-2 mt-0.5">
              Aapka bot is developed by Nevin Bali, This bot uses Gemini-API to
              respond to queries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
