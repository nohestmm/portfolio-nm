import BannerMain from "../components/BannerMain";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <BannerMain />
            <Profile />
            <h2 className="text-[#181116] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Projects
            </h2>
            <Projects />
            <h2 className="text-[#181116] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Skills
            </h2>
            <Skills />
            <h2 className="text-[#181116] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
