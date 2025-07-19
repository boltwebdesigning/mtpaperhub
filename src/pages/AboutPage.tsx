import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Award, 
  Target, 
  Users
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-50 py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-indigo-100 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About MTPaperhub</h1>
              <p className="text-lg text-gray-600 mb-8">
                We're dedicated to providing premium quality study resources for students preparing for O Level, A Level, and IGCSE examinations. Our mission is to make high-quality educational materials accessible to all students.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/build-your-own" 
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                >
                  Build Your Package
                </Link>
                <Link 
                  to="/custom-requests" 
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Custom Requests
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-200 rounded-full opacity-30"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-300 rounded-full opacity-30"></div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">MT</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-4">Our Commitment</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Providing the highest quality educational resources to help students achieve academic excellence.
                  </p>
                  
                  <div className="flex justify-center space-x-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Quality</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Excellence</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg" 
                  alt="Students studying together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="text-white text-lg font-medium">From Cadet College to Educational Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center mb-6 space-x-2">
                <div className="h-1 w-10 bg-indigo-600"></div>
                <span className="text-indigo-600 font-medium">Our Story</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">From Humble Beginnings to Educational Excellence</h2>
              
              <p className="text-gray-600 mb-6">
                MTPaperhub began during my time at Cadet College Hassanabdal when my friends wanted some stickers, so I started printing them. I hadn't imagined that this small venture would evolve into something much bigger. What started as "Banner Buzz" slowly grew as I discovered the potential in educational printing services.
              </p>
              
              <p className="text-gray-600 mb-6">
                After passing out from college, I decided to expand the business. I invested in printing machines, compiled educational resources, and started this educational startup. The name "MT" is derived from Malik and Tareen - Malik being myself and Tareen my business partner who joined me in this journey.
              </p>
              
              <p className="text-gray-600">
                Today, MTPaperhub serves thousands of students across Pakistan, providing high-quality study materials for O Level, A Level, and IGCSE examinations. What began as a simple printing service has transformed into a comprehensive educational resource platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6 space-x-2">
              <div className="h-1 w-10 bg-indigo-600"></div>
              <span className="text-indigo-600 font-medium">Our Values</span>
              <div className="h-1 w-10 bg-indigo-600"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values shape everything we do, from creating study materials to serving our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We are committed to excellence in everything we do, from the quality of our study materials to our service delivery.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe that high-quality educational resources should be accessible to all students, regardless of their background.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student-Centered</h3>
              <p className="text-gray-600">
                Students are at the heart of everything we do. We constantly seek feedback to improve our resources and services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6 space-x-2">
              <div className="h-1 w-10 bg-indigo-600"></div>
              <span className="text-indigo-600 font-medium">FAQ</span>
              <div className="h-1 w-10 bg-indigo-600"></div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our resources and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How do I place an order?</h3>
              <p className="text-gray-600">
                You can place an order by using our "Build Your Own" feature to create a custom package with exactly the subjects, papers, and years you need.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept bank transfers and mobile payments (EasyPaisa). All payments are processed securely.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How long does shipping take?</h3>
              <p className="text-gray-600">
                Shipping times vary depending on your location. Local orders typically arrive within 2-3 business days, while other cities may take 3-5 business days.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Can I get a refund if I'm not satisfied?</h3>
              <p className="text-gray-600">
                We offer a 15-day satisfaction guarantee. If you're not satisfied with your purchase, you can return it for a full refund or exchange within 15 days of receipt.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Do you offer digital resources?</h3>
              <p className="text-gray-600">
                Currently, we focus on high-quality printed materials. All our resources are professionally printed and bound for the best study experience.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">How can I track my order?</h3>
              <p className="text-gray-600">
                Once your order is processed, you'll receive a confirmation call with delivery details. Our team will keep you updated throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Excel in Your Exams?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Start your journey to academic success today with our premium resources tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/build-your-own"
              className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition-colors shadow-lg flex items-center justify-center"
            >
              <span>Build Your Package</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;