import { motion } from 'framer-motion';

const ProjectCard = ({ title, tag, description, imageUrl, videoUrl, onClick }) => {
  return (
    <motion.div 
    onClick={onClick} // Menerima fungsi klik dari App.jsx
      whileHover={{ scale: 1.02, x: 10 }}
      className="relative group cursor-pointer w-full"
      
    >
      <div className="absolute -inset-1 bg-p3-blue-bright opacity-10 group-hover:opacity-40 blur transition duration-500 transform -skew-x-12"></div>
      
      <div className="relative bg-black/60 border-l-8 border-p3-blue-bright p-0 overflow-hidden transform -skew-x-12 backdrop-blur-sm">
        <div className="flex flex-col">
          
          {/* Sisi Media (Gambar/Video) */}
          <div className="w-full aspect-video overflow-hidden bg-gray-900 relative">
            {videoUrl ? (
              <video 
                src={videoUrl} 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            )}
            {/* Overlay Biru khas P3 */}
            <div className="absolute inset-0 bg-p3-blue-deep/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Sisi Konten Teks */}
          <div className="p-5 transform skew-x-12">
            <span className="text-p3-blue-bright font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                {tag}
            </span>
            <h3 className="text-white font-black italic text-xl uppercase mt-1 leading-none">
                {title}
            </h3>
            <p className="text-gray-400 text-x mt-3 line-clamp-2">
                {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;