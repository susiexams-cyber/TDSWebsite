import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaSearch, FaInstagram } from 'react-icons/fa';

const Home = () => {
  const services = [
    { icon: <FaFacebookF className="w-8 h-8" />, title: 'Meta Ads', description: 'Strategic Facebook & Instagram advertising for maximum ROI' },
    { icon: <FaGoogle className="w-8 h-8" />, title: 'Google Ads', description: 'Targeted PPC campaigns that drive quality traffic' },
    { icon: <FaSearch className="w-8 h-8" />, title: 'SEO', description: 'Organic search optimization for sustainable growth' },
    { icon: <FaInstagram className="w-8 h-8" />, title: 'Social Media', description: 'Engaging social presence that builds brand loyalty' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Grow Brands with Smart Marketing
            </h1>
            <p className="text-xl mb-8">
              Chennai-based agency helping brands grow through Meta Ads, SEO & digital strategy.
            </p>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                "The team at Thyagam Digital helped us achieve a 3x return on our ad spend through targeted Meta campaigns."
              </p>
              <p className="font-bold">- Local Restaurant Owner</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                "Our organic traffic increased by 150% within 6 months of implementing their SEO strategy."
              </p>
              <p className="font-bold">- E-commerce Business</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                "Professional team that delivers results. Our social media engagement has never been better."
              </p>
              <p className="font-bold">- Fashion Boutique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Grow Your Business?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="tel:+919962273401"
              className="flex items-center text-xl hover:text-accent transition duration-300"
            >
              📞 +91 99622 73401
            </a>
            <a
              href="mailto:Thayagamdigi@gmail.com"
              className="flex items-center text-xl hover:text-accent transition duration-300"
            >
              📧 Thayagamdigi@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;