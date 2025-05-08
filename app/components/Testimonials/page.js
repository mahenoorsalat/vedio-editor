export default function Testimonials() {
    return (
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 after:content-[''] after:block after:w-24 after:h-1 after:bg-purple-700 after:mx-auto after:mt-4">
            TESTIMONIALS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-purple-700 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-1">MARCUS</h3>
              <p className="text-sm text-purple-200 mb-4">Co-Founder</p>
              <p className="text-purple-100">
                Perfect Communication And Exceptional Skills. This Guy Is King!
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-purple-700 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-1">PETER</h3>
              <p className="text-sm text-purple-200 mb-4">Manager</p>
              <p className="text-purple-100">
                Did A Great Job. Understood All The Requirements.
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-purple-700 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-1">JANE</h3>
              <p className="text-sm text-purple-200 mb-4">CEO</p>
              <p className="text-purple-100">
                Jimmy Was Wonderful To Work With. Will Definitely Hire Him Again!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }