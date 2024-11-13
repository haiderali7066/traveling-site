'use client'

import React from 'react'
import { motion } from "framer-motion"
import { Phone, PhoneIcon, MapPin, Award, Leaf, Calendar, Users, Heart, Mountain, Tent, Snowflake } from 'lucide-react'

export default function Component() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const destinations = [
    { name: "Neelum Valley", img: "/img/9.jpg" },
    { name: "Skardu", img: "/img/6.jpg" },
    { name: "Shogran Valley", img: "/img/4.jpg" },
    { name: "Hunza Valley", img: "/img/7.jpg" },
    { name: "Fairy Meadows", img: "/img/8.jpg" }
  ]

  const tourPackages = [
    {
      title: "3 DAYS TREKKING TRIP TO SPINDHOR LAKE KALAM",
      price: "17,500",
      duration: "3 Days (2 Nights)",
      type: "trek"
    },
    {
      title: "4 DAYS TRIP TO DUDIPATSAR LAKE NARAN",
      price: "21,500",
      duration: "4 Days (3 Nights)",
      type: "trek"
    },
    {
      title: "4 DAYS TRIP TO KUMRAT VALLEY AND KATORA LAKE",
      price: "21,500",
      duration: "4 Days (3 Nights)",
      type: "trek"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="./img/1.jpg"
          alt="Shangri La"
          fill
          className="object-cover h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-6 md:p-12">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            {...fadeIn}
          >
            OPEN YOUR EYES TO
          </motion.h1>
          <motion.h2 
            className="text-5xl md:text-7xl font-bold text-white mb-8"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            SHANGRI LA
          </motion.h2>
          <motion.h3 
            className="text-3xl md:text-5xl font-bold text-white mb-12"
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            The hidden World
          </motion.h3>
          <motion.div 
            className="flex gap-4"
            {...fadeIn}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center">
              <PhoneIcon className="mr-2 h-5 w-5" /> Whatsapp
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="h-8 w-8" />
              <div>
                <p className="font-bold">50+</p>
                <p className="text-sm">Destinations</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="h-8 w-8" />
              <div>
                <p className="font-bold">Best Price</p>
                <p className="text-sm">Guaranteed</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Leaf className="h-8 w-8" />
              <div>
                <p className="font-bold">Eco Friendly</p>
                <p className="text-sm">Tourism</p>
              </div>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="h-8 w-8" />
              <div>
                <p className="font-bold">Super Fast</p>
                <p className="text-sm">Booking</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section className="py-12 bg-blue-500 bg-opacity-70">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Request a Custom Travel Quote</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Corporate Tours</button>
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Family Tours</button>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Pakistan's Top Tourism Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                className="relative h-64 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {dest.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Tour Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-sm font-medium">Family Tours</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <p className="text-sm font-medium">Honeymoon Tours</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mountain className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-sm font-medium">Cultural Tours</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <Tent className="h-8 w-8 text-yellow-600" />
              </div>
              <p className="text-sm font-medium">Camping Tours</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-sm font-medium">Customized Tours</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <Snowflake className="h-8 w-8 text-cyan-600" />
              </div>
              <p className="text-sm font-medium">Winter Tours</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Tour Packages</h2>
            <a href="#" className="text-blue-600 hover:underline">
              View All Packages
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src="/img/11.jpg"
                  alt={pkg.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="font-bold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-gray-600">{pkg.duration}</p>
                </div>
                <div className="flex justify-between items-center p-4 border-t">
                  <p className="font-bold text-lg">Rs.{pkg.price}</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: 'url(/img/12.jpg)' }}>
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative container mx-auto px-4">
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold text-white mb-4">
        Explore Pakistan with us.
      </h2>
      <p className="text-xl text-white mb-4">
        Avail Discounted Tours <span className="text-orange-400">Up to 30% off</span>
      </p>
      <p className="text-gray-200 mb-8">
        Let's help in the amazing life experience of traveling to Pakistan. 
        Hassle-free fully managed tours with an option to customization as per 
        client needs, guided tours, safe and secure travel, best accommodations 
        and quality food.
      </p>
      <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded">
        See Promotional Tours
      </button>
    </div>
  </div>
</section>

    </div>
  )
}