import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { FaInstagram, FaLinkedinIn, FaGithub, FaDiscord, FaWhatsapp, FaTiktok} from 'react-icons/fa';

// Import Assets
import plnImg from './assets/PLN.png'; 
import profileImg from './assets/zaki.jpeg';
import motionVid from './assets/Logo_scsi.mp4'; 
import ae from './assets/after-effect.png';
import am from './assets/alight-motion.png';
import cc from './assets/capcut.png';
import css from './assets/css.png';
import html from './assets/html.png';
import js from './assets/javascript.png';
import laravel from './assets/laravel.png';
import sql from './assets/MySQL.png';
import php from './assets/php.png';
import pr from './assets/premiere-pro.png';
import react from './assets/react.png';
import tailwind from './assets/tailwindcss.png';
import vite from './assets/vite.png';
import portofolio from './assets/portofolio.png';
import himsi from './assets/Logo-himsi.mp4';
import pbak from './assets/Logo-PBAK.mp4';

const detailedSkills = {
  technical: [
    { name: 'HTML', level: 'Advance', logo: html },
    { name: 'CSS', level: 'Advance', logo: css },
    { name: 'Javascript', level: 'Intermediate', logo: js },
    { name: 'PHP', level: 'Intermediate', logo: php },
    { name: 'Laravel', level: 'Intermediate', logo: laravel },
    { name: 'React.js', level: 'Beginner', logo: react },
    { name: 'Tailwind', level: 'Beginner', logo: tailwind },
    { name: 'MySQL', level: 'Intermediate', logo: sql },
    { name: 'Vite', level: 'Beginner', logo: vite },
  ],
  creative: [
    { name: 'Premiere Pro', level: 'Intermediate', logo: pr },
    { name: 'After Effects', level: 'Intermediate', logo: ae },
    { name: 'Alight Motion', level: 'Advance', logo: am }, // Contoh link logo
    { name: 'Capcut', level: 'Advance', logo: cc }, // Contoh link logo
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showSkillModal, setShowSkillModal] = useState(false);

  // DATA PROYEK (Bisa lo tambah di sini, Jak)
  const projectsData = {
    web: [
      {
        id: 1,
        tag: "Web App",
        title: "Sistem Monitoring Pengadaan PLN",
        description: "Web App untuk memonitoring kinerja dan progress dari divisi pengadaan UPT PLN Keramasan.",
        fullDescription: "Sistem ini dirancang oleh tim yang beranggotakan 3 orang yang berfungsi untuk memantau alur pengadaan barang secara near real-time. Membantu sinkronisasi data antar vendor dan tim internal PLN khususnya divisi pengadaan secara efisien.",
        tech: ["PHP", "Javascript", "MySQL"],
        imageUrl: plnImg,
        demoUrl: "https://github.com/zaki-ramadhan" // Ganti link aslinya
      },
      {
        id: 2,
        tag: "Website",
        title: "Personal Portofolio",
        description: "Website portofolio menampilkan profil dan keahlian",
        fullDescription: "Website yang dirancang untuk showcase profil, pengalaman dan juga keahlian dengan UI yang simpel dan menarik.",
        tech: ["React", "Tailwind CSS", "Vite"],
        imageUrl: portofolio,
        demoUrl: "https://github.com/zaki-ramadhan" // Ganti link aslinya
      },
      // Tambah proyek web lain di sini
    ],
    creative: [
      {
        id: 101,
        tag: "Motion Graphic",
        title: "Logo SCSI",
        description: "Animasi logo dinamis menggunakan teknik motion graphics.",
        fullDescription: "Project branding untuk Komunitas SCSI yang menonjolkan sisi dinamis dan modern menggunakan Alight Motion.",
        tech: ["Alight Motion", "Premiere Pro", "After Effects"],
        videoUrl: motionVid,
        demoUrl: "https://instagram.com/zaki-ramadhan"
      },
      {
        id: 102,
        tag: "Motion Graphic",
        title: "Logo Himpunan Mahasiswa",
        description: "Animasi logo dinamis menggunakan teknik motion graphics.",
        fullDescription: "Project untuk branding Himpunan Mahasiswa yang menonjolkan sisi dinamis dan modern menggunakan Alight Motion.",
        tech: ["Alight Motion"],
        videoUrl: himsi,
        demoUrl: "https://instagram.com/zaki-ramadhan"
      },
      {
        id: 103,
        tag: "Motion Graphic",
        title: "Logo Event",
        description: "Animasi logo dinamis menggunakan teknik motion graphics.",
        fullDescription: "Project untuk event tahunan kampus yaitu PBAK fakultas saintek yang menonjolkan sisi dinamis dan modern menggunakan Alight Motion.",
        tech: ["Alight Motion"],
        videoUrl: pbak,
        demoUrl: "https://instagram.com/zaki-ramadhan"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-p3-blue-dark text-white overflow-x-hidden relative font-sans">
      <div className="fixed inset-0 bg-linear-to-br from-p3-blue-deep/30 to-transparent pointer-events-none" />
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="home" className="h-screen flex flex-col justify-center relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 w-full flex justify-center">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[75px] font-black italic uppercase tracking-tighter leading-[0.9]">
              Hi, I'm <br></br> 
              <span className="text-p3-blue-bright">Muhamad Zaki Ramadhan</span>
            </h1>
            <p className="text-lg md:text-2xl font-mono text-white tracking-[0.4em] uppercase mt-4">
              Fullstack Developer & Video Editor
            </p>
            <div className="h-1 w-full max-w bg-linear-to-r from-p3-blue-bright to-transparent mt-8 transform -skew-x-12" />
          </motion.div>
          </div>
          {/* TOMBOL INTERAKTIF (Biar Hero nggak sepi) */}
          <div className="flex justify-center flex-col sm:flex-row gap-4 mt-10">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* Tombol View Projects */}
                <button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-10 py-4 bg-p3-blue-bright text-white font-black italic uppercase tracking-widest transform -skew-x-12 hover:bg-white hover:text-black transition-all duration-300 shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,210,255,0.6)]"
                >
                  <span className="transform skew-x-12 block">View_Projects</span>
                </button>

                {/* Tombol Contact Me */}
                <button 
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-10 py-4 bg-transparent border-2 border-p3-blue-bright text-p3-blue-bright font-black italic uppercase tracking-widest transform -skew-x-12 hover:bg-p3-blue-bright/10 transition-all duration-300"
                >
                  <span className="transform skew-x-12 block">Contact_Me</span>
                  {/* Dekorasi Pojok Kecil */}
                  <div className="absolute top-0 right-0 w-2 h-2 bg-p3-blue-bright" />
                </button>
              </motion.div>
            </div>
        
      </section>      

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-24 relative z-10">
        <div className="max-w-400 mx-auto px-6 md:px-16 lg:px-24">
          {/* JUDUL DI ATAS TENGAH */}
          <div className="text-center mb-12 md:mb-24">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-p3-blue-bright  inline-block relative">
              ABOUT <span className="text-white">_ME</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/10 transform -skew-x-12" />
            </h2>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
            <div className="w-full max-w-70 sm:max-w-sm relative group">
              <div className=" absolute -inset-3 bg-p3-blue-bright/20 transform -skew-x-12 group-hover:bg-p3-blue-bright/40 transition-all" />
              <div className=" relative  bg-gray-900 aspect-4/5 overflow-hidden transform -skew-x-12 border-l-4 border-p3-blue-bright">
                <img src={profileImg} alt="Profile" className=" w-full h-full  object-cover transform skew-x-12 scale-130 transition-all duration-700" />
              </div>
            </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Hi, saya <span className="text-p3-blue-bright font-bold">Muhamad Zaki Ramadhan</span> seorang mahasiswa sistem informasi sejak tahun 2023 yang tertarik pada web development front-end maupun back-end. Saya berfokus dalam menciptakan sistem yang useable namun tidak melupakan penampilan yang menarik dan responsif.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Saya juga memiliki kemampuan dalam bidang editing khususnya video editing dan creative editing yang mengutamakan keunikan dan style dalam effect dan compositing.
              </p>
              {/* Section Skills di bawah paragraf About */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-8">
                
                {/* Kelompok Technical / Web */}
                <div className="space-y-4">
                  <h4 className="text-p3-blue-bright font-black italic text-sm uppercase tracking-[0.3em]">Technical_Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Laravel', 'MySQL', 'Javascript', 'Tailwind'].map((skill) => (
                      <span key={skill} className="bg-white/5 border-l-4 border-p3-blue-bright px-5 py-3 text-x font-bold uppercase italic transform -skew-x-12 hover:bg-p3-blue-bright hover:text-black transition-all">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Kelompok Creative / Editing */}
                <div className="space-y-4">
                  <h4 className="text-p3-blue-bright font-black italic text-sm uppercase tracking-[0.3em]">Creative_Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Alight Motion', 'Premiere Pro', 'After Effects'].map((tool) => (
                      <span key={tool} className="bg-white/10 border-l-4 border-white px-5 py-3 text-x font-bold uppercase italic transform -skew-x-12 hover:bg-white hover:text-black transition-all">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
               <div className="pt-8 flex justify-center">
                  <button 
                    onClick={() => setShowSkillModal(true)}
                    className="group flex items-center gap-3 text-p3-blue-bright font-black italic uppercase text-xs tracking-[0.3em] hover:text-white transition-all"
                  >
                    <span className="border-b border-p3-blue-bright group-hover:border-white">View_Full_Technology</span>
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity }}>{'>'}</motion.span>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT SECTION (WITH TABS) */}
      <section id="projects" className="py-32 relative z-10">
        <div className="max-w-400 mx-auto px-6 md:px-16 lg:px-24">
          {/* JUDUL SECTION BARU */}
          <div className="mb-16 relative">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-2"
            >
              <div className="w-12 h-0.5 bg-p3-blue-bright" />
              <span className="text-p3-blue-bright font-mono text-xs tracking-[0.5em] uppercase italic">
                Archive_v1.0
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              SELECTED <span className="text-p3-blue-bright">_PROJECT</span>
            </h2>
            
            {/* Dekorasi Garis Melintang */}
            <div className="absolute -bottom-4 left-0 w-full h-px bg-linear-to-r from-white/10 via-transparent to-transparent" />
          </div>
          <div className="flex justify-center md:justify-start gap-4 mb-20">
            {['web', 'creative'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-10 py-4 transform -skew-x-12 font-black italic uppercase transition-all duration-300 border-l-4 ${
                  activeTab === tab ? 'bg-p3-blue-bright text-white border-white' : 'bg-white/5 text-gray-500 border-transparent hover:bg-white/10'
                }`}
              >
                <span className="transform skew-x-12 block">{tab === 'web' ? 'Web Systems' : 'Creative Editing'}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectsData[activeTab].map((proj) => (
              <ProjectCard 
                key={proj.id} 
                {...proj} 
                onClick={() => setSelectedProject(proj)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODAL POPUP */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-black/35 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, x: 20 }} animate={{ scale: 1, opacity: 1, x: 0 }} exit={{ scale: 0.9, opacity: 0, x: -20 }} className="relative bg-p3-blue-dark border-l-12 border-p3-blue-bright max-w-5xl w-full overflow-hidden transform -skew-x-3">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 aspect-video bg-black">
                  {selectedProject.videoUrl ? (
                    <video src={selectedProject.videoUrl} autoPlay muted loop className="w-full h-full object-cover" />
                  ) : (
                    <img src={selectedProject.imageUrl} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-10 md:w-2/5 space-y-6 relative">
                  <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-6 text-p3-blue-bright font-black hover:text-white">[ CLOSE ]</button>
                  <h2 className="text-4xl font-black italic uppercase text-p3-blue-bright leading-none">{selectedProject.title}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.fullDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="bg-white/10 px-5 py-1 text-[14px] font-bold italic uppercase transform -skew-x-8 border-l-2 border-p3-blue-bright">{t}</span>
                    ))}
                  </div>
                  <div className="pt-6">
                    <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="inline-block bg-white text-black font-black italic px-8 py-3 transform -skew-x-12 hover:bg-p3-blue-bright hover:text-white transition-all">VIEW PROJECT_</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-40 relative z-10 overflow-hidden border-t border-white/5">
        <div className="max-w-400 mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* KIRI (Col 7): Judul & Status */}
            <div className="lg:col-span-7 space-y-12">
              <div className="relative">
                <h2 className="text-p3-blue-bright font-black italic text-5xl md:text-8xl lg:text-[120px] uppercase tracking-tighter leading-[0.85] mb-6">
                  ESTABLISH <br /> <span className="text-white">_</span>CONNECTION
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-p3-blue-bright animate-pulse shadow-[0_0_10px_#00D2FF]" />
                  <p className="text-p3-blue-bright/60 font-mono text-xs md:text-sm uppercase tracking-[0.5em]">
                    WAITING_FOR_CONNECTION...
                  </p>
                </div>
              </div>

              {/* Info Card - Dibuat Lebih Lebar & Rapi */}
              <div className="bg-white/5 border-l-8 border-p3-blue-bright p-10 transform -skew-x-6 max-w-3xl relative overflow-hidden group flex flex-col">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 transform skew-x-6">
                  <div>
                    <p className="text-[10px] font-mono text-p3-blue-bright/40 uppercase mb-2">CURRENT_LOCATION</p>
                    <p className="text-white font-black tracking-widest uppercase text-sm">PALEMBANG, INDONESIA</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-p3-blue-bright/40 uppercase mb-2">DIRECT_MAIL</p>
                    <p className="text-white font-black tracking-widest uppercase text-sm break-all">M.ZAKIRAMADHAN2005@GMAIL.COM</p>
                  </div>
                </div>
                {/* Dekorasi Background Card */}
                <div className="absolute top-0 right-0 w-32 h-full bg-p3-blue-bright/5 transform -skew-x-12 translate-x-10" />
              </div>
            </div>

            {/* KANAN (Col 5): Social Buttons */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 pt-4 lg:pt-10">
              {[
                { name: 'WHATSAPP', url: 'https://wa.me/6281288395256', color: 'hover:bg-[#25D366]', icon: <FaWhatsapp /> },
                { name: 'INSTAGRAM', url: 'https://www.instagram.com/zakiramadhan_17?igsh=Nmg4OGVqYTUxc3Nx', color: 'hover:bg-[#E1306C]', icon: <FaInstagram /> },
                { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/m-zaki-ramadhan-77547a343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: 'hover:bg-[#0077B5]', icon: <FaLinkedinIn /> },
                { name: 'GITHUB', url: 'https://github.com/The-ChoosenOne', color: 'hover:bg-[#333333]', icon: <FaGithub /> },
                { name: 'DISCORD', url: '#', color: 'hover:bg-[#5865F2]', icon: <FaDiscord /> },
                { name: 'TIKTOK', url: 'http://tiktok.com/@zakiramadhan_17', color: 'hover:bg-[#000000]', icon: <FaTiktok /> }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank" // Penting biar buka di tab baru
                  rel="noopener noreferrer"
                  className={`group relative bg-white text-black font-black italic px-8 py-5 flex items-center justify-between transform -skew-x-12 transition-all duration-300 shadow-[10px_10px_0px_rgba(0,210,255,0.1)] ${social.color} hover:text-white hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-4 transform skew-x-12">
                    <span className="text-xl">{social.icon}</span>
                    <span className="tracking-[0.2em] text-sm">{social.name}_</span>
                  </div>
                  <span className="text-xs transform skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    [ CONNECT ]
                  </span>
                </a>
              ))}
            </div>

          </div>

          {/* FOOTER - Dibuat Sejajar Rapih */}
          <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30">
            <p className="text-[10px] font-mono tracking-[0.5em] uppercase italic">
              © 2025 MUHAMAD ZAKI RAMADHAN //
            </p>
            <div className="flex gap-10 font-black italic text-[10px] tracking-widest">
              <span>V.1.0_PROTOTYPE</span>
              <span>UI_SYSTEM_P3R</span>
            </div>
          </div>
        </div>
      </section>


      <AnimatePresence>
      {showSkillModal && (
        <div className="fixed inset-0 z-110 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowSkillModal(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotateY: 20 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-p3-blue-dark border-r-8 border-p3-blue-bright p-6 md:p-16 max-w-7xl w-[95%] h-[90vh] md:h-auto md:max-h-[85vh] transform -skew-x-3 shadow-[20px_0_50px_rgba(0,210,255,0.2)] flex flex-col overflow-y-auto"
          >
            <button onClick={() => setShowSkillModal(false)} className="absolute top-4 right-6 text-p3-blue-bright font-black uppercase hover:text-white">[ BACK ]</button>
            
            
            <h2 className="text-5xl font-black italic uppercase text-white mb-10 tracking-tighter">
              FULL_<span className="text-p3-blue-bright">TECH</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Loop untuk Technical dan Creative Categories */}
              {['technical', 'creative'].map((cat) => (
                <div key={cat} className="space-y-6 ">
                  <h3 className="text-p3-blue-bright font-mono text-sm uppercase tracking-[0.5em] border-b border-p3-blue-bright/30 pb-2">{cat}_STACK</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {detailedSkills[cat].map((s) => (
                      <div key={s.name} className="bg-white/5 p-4 flex flex-col items-center justify-center gap-3 border border-white/10 hover:border-p3-blue-bright transition-all group overflow-hidden relative">
                        <img src={s.logo} alt={s.name} className="w-14 h-14 object-contain group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-bold text-center uppercase tracking-tighter">{s.name}</span>
                        {/* Level Badge miring kecil */}
                        <div className="absolute top-0 right-0 bg-black/90 border-b border-l border-p3-blue-bright px-2 py-0.2">
                          <span className="text-p3-blue-bright text-[8px] font-bold uppercase tracking-widest">
                            {s.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>


    </main>
  );
}

export default App;