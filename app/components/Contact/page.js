"use client"

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}
    return (
      <section id="contact" className="py-20 bg-black relative">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            I AM READY TO CONSULT YOU
          </h2>
          
          <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>
    <label className="block text-sm font-medium mb-2">Full Name</label>
    <input
      name="name"
      type="text"
      placeholder="Your full name"
      required
      className="w-full p-3 bg-gray-900 border border-gray-800 rounded text-white"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-2">Email</label>
    <input
      name="email"
      type="email"
      placeholder="you@example.com"
      required
      className="w-full p-3 bg-gray-900 border border-gray-800 rounded text-white"
    />
  </div>

  <div className="md:col-span-2">
  <label className="block text-sm font-medium mb-2">Phone</label>
  <input
    name="phone"
    type="tel"
    placeholder="Your phone number"
    className="w-full p-3 bg-gray-900 border border-gray-800 rounded text-white"
  />
</div>

  <div className="md:col-span-2">
    <label className="block text-sm font-medium mb-2">Message</label>
    <textarea
      name="message"
      rows="5"
      placeholder="What do you want to discuss?"
      required
      className="w-full p-3 bg-gray-900 border border-gray-800 rounded text-white"
    ></textarea>
  </div>

  <div className="md:col-span-2 flex justify-end">
    <button type="submit" className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-8 rounded">
      SEND
    </button>
  </div>
</form>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center">
                <div className="mr-4 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+91 8510805174</span>
              </div>
              
            
              
              <div className="flex items-center">
                <div className="mr-4 text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>rksttfu@gmail.com                 </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="fixed bottom-4 right-4 bg-purple-700 p-2 rounded-full shadow-lg cursor-pointer">
          <a href="#" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
        </div>
      </section>
    );
  }