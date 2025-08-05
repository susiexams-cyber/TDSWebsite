import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaSearch, FaInstagram, FaCode } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaFacebookF className="w-12 h-12" />,
      title: 'Meta Ads (FB/Instagram)',
      description: 'Strategic social media advertising campaigns that drive engagement, leads, and sales through Facebook and Instagram platforms.',
      features: [
        'Custom audience targeting',
        'Ad creative optimization',
        'Performance tracking',
        'ROI monitoring'
      ]
    },
    {
      icon: <FaGoogle className="w-12 h-12" />,
      title: 'Google Ads',
      description: 'Results-driven PPC campaigns that connect your business with potential customers actively searching for your products or services.',
      features: [
        'Keyword research & optimization',
        'Ad copy creation',
        'Landing page optimization',
        'Conversion tracking'
      ]
    },
    {
      icon: <FaSearch className="w-12 h-12" />,
      title: 'SEO & Content Strategy',
      description: 'Comprehensive SEO services to improve your website's visibility in search results and drive organic traffic.',
      features: [
        'Technical SEO audit',
        'Content optimization',
        'Link building',
        'Local SEO'
      ]
    },
    {
      icon: <FaInstagram className="w-12 h-12" />,
      title: 'Social Media Management',
      description: 'Full-service social media management to build your brand presence and engage with your target audience.',
      features: [
        'Content calendar planning',
        'Regular posting',
        'Community engagement',
        'Performance analytics'
      ]
    },
    {
      icon: <FaCode className="w-12 h-12" />,
      title: 'Website Development',
      description: 'Custom website development solutions that combine attractive design with optimal functionality.',
      features: [
        'Responsive design',
        'SEO-friendly structure',
        'Performance optimization',
        'Regular maintenance'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thayagam Digital Solutions provides comprehensive digital marketing services to help your business grow online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="p-6">
                <div className="text-primary mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary text-white py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8">Get in touch with us to discuss how we can help achieve your digital marketing goals.</p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition duration-300 text-lg font-semibold"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;