import Navbar from "@/components/navbar";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-r from-red-950 to-slate-900 text-white p-6 md:p-10">
        <div className="flex flex-col items-center gap-4 max-w-3xl">
          <h1 className="text-yellow-300 text-2xl md:text-3xl">About Me</h1>
          <p className="text-white text-sm md:text-base">
            I am a passionate web developer with a strong foundation in coding and a drive to create engaging and effective digital solutions. Currently, I’m pursuing a Bachelor’s degree in Cybersecurity, which deepens my understanding of secure coding practices and enhances my ability to develop robust, secure applications. Outside of my professional realm, I indulge in cooking, where I love experimenting with new recipes, and I enjoy reading fictional novels that transport me to imaginative worlds. I’m also an enthusiastic badminton player, finding joy and strategy in each match. Balancing my technical skills with these diverse hobbies keeps me motivated and creatively inspired in all aspects of my life.
          </p>
          <h2 className="text-yellow-300 text-xl md:text-2xl mt-6">Skills</h2>
          <div className="progress-bars flex flex-col items-center w-full px-4">
            {[
              { label: 'HTML', width: '93%', src: '/html.png' },
              { label: 'CSS', width: '75%', src: '/css.png' },
              { label: 'JavaScript', width: '62%', src: '/js.png' },
              { label: 'Next.js', width: '81%', src: '/next.png' }
            ].map((skill, index) => (
              <div key={index} className="flex items-center mb-4 w-full max-w-[800px]">
                <div className="flex-grow">
                  <div className="bg-gray-500 rounded-full h-2 w-full">
                    <div className="bg-green-600 rounded-full h-2" style={{ width: skill.width }}></div>
                  </div>
                </div>
                <Image
                  src={skill.src}
                  alt={skill.label}
                  width={40}
                  height={40}
                  className="mx-4"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default About;

