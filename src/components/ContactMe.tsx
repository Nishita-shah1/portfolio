'use client';

import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactMe: React.FC = () => {
  const socialLinks = [
    { icon: FaInstagram, url: "https://www.instagram.com/nis_tales", color: "text-pink-500 hover:text-pink-600" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/nishita-shah1", color: "text-blue-700 hover:text-blue-800" },
    { icon: FaGithub, url: "https://github.com/Nishita-shah1", color: "text-gray-800 hover:text-gray-900" },
    { icon: FaEnvelope, url: "mailto:nishitashah118@gmail.com", color: "text-red-600 hover:text-red-700" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="w-full height-top px-4 py-12 bg-gradient-to-r from-[#FEB3C7] to-[#9A91FF] min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <motion.h2 
        className="text-4xl font-semibold text-black mb-8 text-center -mt-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.div 
        className="max-w-4xl w-full mx-auto bg-white p-8 rounded-lg shadow-lg relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="flex justify-center space-x-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} transition duration-300`}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon size={30} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-20 h-20 bg-pink-300 rounded-full opacity-50"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-50"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute top-3/4 left-1/3 w-12 h-12 bg-blue-300 rounded-full opacity-50"
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
      />
    </section>
  );
};

export default ContactMe;

