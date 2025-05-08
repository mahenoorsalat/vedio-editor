export default function About() {
    return (
      <section id="about" className="py-20 bg-black relative">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 after:content-[''] after:block after:w-24 after:h-1 after:bg-purple-700 after:mx-auto after:mt-4">
            ABOUT ME
          </h2>
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray-300">
              Welcome To The Cinematic Realm Of Rakshit, Where Creativity Meets Technology To Craft Visually Stunning Narratives. With
              A Passion For Storytelling And A Keen Eye For Detail, I Embark On A Journey To Transform Ordinary Footage Into
              Extraordinary Visual Experiences.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center p-4">
              <div className="inline-block w-3 h-3 bg-purple-700 rounded-full mb-2"></div>
              <h3 className="text-xl font-semibold">Cash Cow Editing</h3>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-block w-3 h-3 bg-purple-700 rounded-full mb-2"></div>
              <h3 className="text-xl font-semibold">Reels Editing</h3>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-block w-3 h-3 bg-purple-700 rounded-full mb-2"></div>
              <h3 className="text-xl font-semibold">Logo Animation</h3>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-block w-3 h-3 bg-purple-700 rounded-full mb-2"></div>
              <h3 className="text-xl font-semibold">Podcast Edit</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }