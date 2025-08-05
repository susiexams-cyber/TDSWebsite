import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(null);

  const caseStudies = [
    {
      title: 'Salon Lead Gen – 5X ROAS',
      industry: 'Beauty & Wellness',
      problem: 'Local salon struggling to attract new clients and maintain consistent bookings.',
      solution: 'Implemented targeted Meta Ads campaign with custom audience segmentation and promotional offers.',
      results: [
        '5X Return on Ad Spend',
        '300% increase in monthly bookings',
        '45% reduction in cost per lead',
        'Expanded customer base by 200%'
      ]
    },
    {
      title: 'E-commerce Revenue Growth',
      industry: 'Fashion Retail',
      problem: 'Online fashion store seeking to improve sales and reduce cart abandonment.',
      solution: 'Developed comprehensive digital strategy combining Google Ads, SEO, and social media marketing.',
      results: [
        '150% increase in online sales',
        '40% reduction in cart abandonment',
        '200% increase in organic traffic',
        '3.5X improvement in conversion rate'
      ]
    },
    {
      title: 'B2B Lead Generation Success',
      industry: 'Professional Services',
      problem: 'IT consulting firm struggling to generate quality B2B leads.',
      solution: 'Created targeted LinkedIn advertising campaign with content marketing strategy.',
      results: [
        '400% increase in qualified leads',
        '60% reduction in cost per acquisition',
        '250% increase in consultation bookings',
        'ROI of 300% within 6 months'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Thayagam Digital Solutions has helped businesses achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        {/* Case Studies Accordion */}
        <div className="space-y-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition duration-300"
                onClick={() => setActiveCase(activeCase === index ? null : index)}
              >
                <div>
                  <h3 className="text-xl font-bold text-primary text-left">{study.title}</h3>
                  <p className="text-gray-600 mt-1">{study.industry}</p>
                </div>
                {activeCase === index ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </button>

              {activeCase === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-lg mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Results</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="mb-1">{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-primary text-white py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Need Similar Results?</h2>
          <p className="text-lg mb-8">Let's discuss how we can help your business achieve exceptional growth.</p>
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

export default CaseStudies;