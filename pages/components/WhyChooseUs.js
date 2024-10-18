// components/FuturistsAcademy.jsx

const WhyChooseUs = () => {
    return (
        <div className="w-full px-4 py-10 bg-white">
          <h2 className="text-3xl font-bold text-center mb-[100px]">
            Why Choose Learn with Experience
          </h2>
          
          {/* Grid layout that adapts to screen size */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Left 3 items */}
            <div className="space-y-8">
              {/* Interactive LMS */}
              <div className="flex items-center text-center">
                <img
                  src="/path-to-your-icon1.png" // Replace with actual path
                  alt="Interactive LMS"
                  className="w-16 h-16 mb-4"
                />
                <div>

                <h3 className="text-xl font-semibold">Interactive LMS</h3>
                <p>Offering unparalleled dynamic and engaging platform</p>
                </div>
              </div>
    
              {/* One on One Interaction */}
              <div className="flex items-center text-center">

                <img
                  src="/path-to-your-icon2.png" // Replace with actual path
                  alt="One on One Interaction"
                  className="w-16 h-16 mb-4"
                  />
                  <div>
                <h3 className="text-xl font-semibold">One on One Interaction</h3>
                <p>Ensuring personalized attention and care.</p>
                  </div>
              </div>
    
              {/* Experienced Trainers */}
              <div className="flex  items-center text-center">
                <img
                  src="/path-to-your-icon3.png" // Replace with actual path
                  alt="Experienced Trainers"
                  className="w-16 h-16 mb-4"
                />
                <div>

                <h3 className="text-xl font-semibold">Experienced Trainers</h3>
                <p>Bringing years of expertise to guide you toward success.</p>
                </div>
              </div>
            </div>
    
            {/* Middle column (spans 3 rows on larger screens) */}
            <div className="row-span-1 md:row-span-3 flex justify-center  items-center">
              <img
                src="/path-to-your-middle-image.png" // Replace with the path to your middle image
                alt="Center Image"
                className="w-full m-auto h-auto max-w-md" // Adjust as per image size
              />
            </div>
    
            {/* Right 3 items */}
            <div className="space-y-8">
              {/* Hands on Experience */}
              <div className="flex  items-center text-center">
                <img
                  src="/path-to-your-icon4.png" // Replace with actual path
                  alt="Hands on Experience"
                  className="w-16 h-16 mb-4"
                />
                <div>

                <h3 className="text-xl font-semibold">Hands on Experience</h3>
                <p>Practical learning to help you excel in real life scenarios</p>
              </div>
                </div>
    
              {/* 24/7 Access and Support */}
              <div className="flex  items-center text-center">
                <img
                  src="/path-to-your-icon5.png" // Replace with actual path
                  alt="24/7 Access and Support"
                  className="w-16 h-16 mb-4"
                />
                <div>

                <h3 className="text-xl font-semibold">24/7 Access and Support</h3>
                <p>Ensuring assistance whenever you need it</p>
                </div>
              </div>
    
              {/* 100% Job Assistance */}
              <div className="flex  items-center text-center">
                <img
                  src="/path-to-your-icon6.png" // Replace with actual path
                  alt="100% Job Assistance"
                  className="w-16 h-16 mb-4"
                />
                <div>

                <h3 className="text-xl font-semibold">100% Job Assistance</h3>
                <p>Commitment to your success beyond just training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
  export default WhyChooseUs;
  