"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Smartphone, 
  CreditCard, 
  Zap, 
  Shield, 
  Users, 
  Star,
  Menu,
  X,
  ArrowRight,
  Wallet,
  Send,
  QrCode
} from 'lucide-react';

const PayCloneLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Seamless mobile experience with intuitive design"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Bank-grade security with 256-bit encryption"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Transfer",
      description: "Lightning-fast money transfers in seconds"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Multiple Payment Options",
      description: "UPI, cards, wallets - all in one place"
    }
  ];

  const services = [
    {
      icon: <Send className="w-12 h-12" />,
      title: "Send Money",
      description: "Transfer money instantly to friends and family",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <QrCode className="w-12 h-12" />,
      title: "QR Payments",
      description: "Scan and pay at millions of merchants",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Digital Wallet",
      description: "Store money securely in your digital wallet",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Priyanshu Sharma",
      role: "Small Business Owner",
      src : "/2nd.png",
      content: "PayClone has revolutionized how I handle payments for my business. Super easy and reliable!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "Software Developer",
      src : "/3rd.png",
      content: "The user interface is incredibly intuitive. I can send money to anyone in just a few taps.",
      rating: 5
    },
    {
      name: "Anshu Gupta",
      role: "Freelancer",
      src : "/7th.jpg",
      content: "Security is top-notch and transactions are lightning fast. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={()=>redirect("/home")}
            >
              <div
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                Paykaro
              </span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['Features', 'Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1, color: '#3B82F6' }}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              Download App
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 cursor-pointer"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Digital
                </span>
                <br />
                <span className="text-gray-100">Payments</span>
                <br />
                <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience the future of digital payments with Paykaro. Send money, pay bills, 
                and manage your finances with ease and security.
              </p>

              <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-600 text-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-400 transition-all cursor-pointer"
                >
                  Watch Demo
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex items-center space-x-6 pt-8"
              >
                <div className="flex -space-x-2">
                
                    <Image src="/2nd.png" alt='2nd' width={12} height={12} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"/>
                    <Image src="/3rd.png" alt='3rd' width={12} height={12} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"/>
                    <Image src="/7th.jpg" alt='7th' width={12} height={12} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"/>
                    <Image src="/2nd.png" alt='2nd' width={12} height={12} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"/>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Trusted by</p>
                  <p className="font-semibold text-gray-200">10M+ users</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-30"
              ></motion.div>
              
              <div className="relative bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-100">Quick Send</h3>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-xl">
                      <Image className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                       src="/2nd.png"
                       alt='customer'
                       width={10}
                       height={10}
                      />
                      <div>
                        <p className="font-semibold text-gray-100">John Doe</p>
                        <p className="text-sm text-gray-400">+91 98765 43210</p>
                      </div>
                    </div>
                    
                    <div className="text-center py-6">
                      <p className="text-4xl font-bold text-gray-100">₹2,500</p>
                      <p className="text-gray-400">Amount to send</p>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-3 rounded-xl font-semibold cursor-pointer"
                    >
                      Send Money
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Paykaro</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technology to provide you with the best digital payment experience
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  y: -10
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700 text-center hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-100 mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
              Our <span className="bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital payment solutions for all your financial needs
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
                }}
                className="relative group"
              >
                <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-700 text-center overflow-hidden">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
              What Our <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Users Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join millions of satisfied users who trust Paykaro for their digital payments
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image src={testimonial.src} alt='2nd' width={12} height={12} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"/>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Start Your
              <br />
              <span className="text-yellow-300">Digital Journey?</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join millions of users who have revolutionized their payment experience with Paykaro
            </p>
            
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(255,255,255,0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Download Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all cursor-pointer"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Paykaro</span>
              </div>
              <p className="text-gray-400">
                The future of digital payments, available today.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                    <Users className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            {['Product', 'Company', 'Support'].map((category, index) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold">{category}</h3>
                <div className="space-y-2">
                  {['Features', 'Security', 'API', 'Pricing'].map((item) => (
                    <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PayClone. All rights reserved. Made with ❤️ for digital payments.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PayCloneLanding;