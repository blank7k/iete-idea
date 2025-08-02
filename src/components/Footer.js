import React from 'react';

const Footer = () => {
  return (
    <section id="footer" className="relative min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 overflow-hidden">
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get in <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-pink-200 mb-12 max-w-3xl mx-auto">
            Ready to join our innovative electronics community? Connect with us and be part of the future of technology.
          </p>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-pink-200">iete@committee.edu</p>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-pink-200">Electronics Department<br />University Campus</p>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-pink-200">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Social Media Links */}
          {/* Keep this section unchanged */}
          {/* Newsletter Signup */}
          {/* Keep this section unchanged */}

          <div className="mt-16 pt-8 border-t border-pink-500/30 text-center">
            <p className="text-pink-200">
              © 2024 IETE Committee. All rights reserved. | Designed with ❤️ for innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
