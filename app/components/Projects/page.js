const projects = [
  {
    title: "Viral Cash Cow Edit",
    url: "https://drive.google.com/file/d/13wNRv09xeHwWhCtjQILqE4rgzY88WIPz/preview"
  },
  {
    title: "Insta Reels Compilation",
    url: "https://drive.google.com/file/d/14-tEMtbeNFA3W0lvDAJXF01PqvJ_tET6/preview"
  },
  {
    title: "Cinematic Travel Vlog",
    url: "https://drive.google.com/file/d/1VJTUVET1INEOunO0Pyr0xMvvqcmgCY_B/preview"
  },
  {
    title: "Client Showcase Teaser",
    url: "https://drive.google.com/file/d/1Y4vn3V4k0lGlQ0UrFJMYlEnytTpJ6TpU/preview"
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 after:content-[''] after:block after:w-24 after:h-1 after:bg-purple-700 after:mt-4">
          TRENDING VIDEO EDITS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-96 object-cover"
                src={project.url}
                allow="autoplay"
                allowFullScreen
                title={project.title}
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <h3 className="text-lg font-semibold text-white text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
