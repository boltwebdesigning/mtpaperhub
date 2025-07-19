import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Home, ShoppingBag, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-8">
            <div className="text-9xl font-bold text-indigo-600 opacity-10">404</div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <BookOpen className="h-16 w-16 text-indigo-600 mb-2" />
              <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
            </div>
          </div>
          
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
            >
              <Home className="h-5 w-5 mr-2" />
              <span>Home</span>
            </Link>
            
            <Link
              to="/build-your-own"
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              <span>Build Package</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors shadow-md"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Go Back</span>
            </button>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Looking for something specific?</h2>
            <p className="text-gray-600 mb-4">
              You might find what you need in one of these sections:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <Link to="/build-your-own" className="text-indigo-600 hover:text-indigo-700 flex items-center">
                <ChevronRightIcon className="h-4 w-4 mr-1" />
                <span>O Level Resources</span>
              </Link>
              <Link to="/build-your-own" className="text-indigo-600 hover:text-indigo-700 flex items-center">
                <ChevronRightIcon className="h-4 w-4 mr-1" />
                <span>A Level Resources</span>
              </Link>
              <Link to="/build-your-own" className="text-indigo-600 hover:text-indigo-700 flex items-center">
                <ChevronRightIcon className="h-4 w-4 mr-1" />
                <span>IGCSE Resources</span>
              </Link>
              <Link to="/about" className="text-indigo-600 hover:text-indigo-700 flex items-center">
                <ChevronRightIcon className="h-4 w-4 mr-1" />
                <span>About Us</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Helper component for the chevron icon
const ChevronRightIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

export default NotFoundPage;