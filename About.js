import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const features = [
    'Result-Oriented Campaigns',
    '1-on-1 Expert Support',
    'Transparent Reporting',
    '10+ Years of Industry Insight'
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">About Thyagam Digital Solutions</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              Founded by Susindran P and co-founded by Renuka Susindran, we're a performance-driven digital agency helping businesses grow with ROI-focused marketing.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-accent text-xl" />
                <h3 className="text-lg font-semibold">{feature}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4">
                {/* Add image here when available */}
              </div>
              <h3 className="text-xl font-bold mb-2">Susindran P</h3>
              <p className="text-gray-600">Founder</p>
              <p className="mt-4 text-gray-600">
                Digital marketing expert with a passion for driving business growth through innovative strategies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4">
                {/* Add image here when available */}
              </div>
              <h3 className="text-xl font-bold mb-2">Renuka Susindran</h3>
              <p className="text-gray-600">Co-Founder</p>
              <p className="mt-4 text-gray-600">
                Strategic planner focused on delivering exceptional client results and business development.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To empower businesses with data-driven digital marketing solutions that deliver measurable results and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;