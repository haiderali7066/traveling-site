import { motion } from "framer-motion"
import { Award, Users, ThumbsUp, Star, Globe, Compass } from 'lucide-react'

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const teamMembers = [
    { name: "Ayesha", role: "Founder & CEO", img: "/img/a.jpg" },
    { name: "Haider Ali", role: "Travel Expert", img: "/img/haider.webp" },
    { name: "Mahdia", role: "Customer Relations", img: "/img/m.webp" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <img
          src="/img/2.jpg"
          alt="About Us"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
            {...fadeIn}
          >
            Discover Our Story
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <motion.div variants={fadeIn} className="mb-16">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Pakistan Travel has been at the forefront of showcasing the beauty and culture of Pakistan to the world. Our passion for travel and love for our country drives us to create unforgettable experiences for our clients.
                </p>
                <p className="text-gray-600">
                  We believe in responsible tourism and work closely with local communities to ensure that our tours not only benefit our clients but also contribute positively to the places we visit.
                </p>
              </div>
              <div className="relative h-64 md:h-full">
                <img
                  src="/img/19.jpg"
                  alt="Our Journey"
                  fill
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Award className="h-6 w-6 mr-2 text-blue-500" />
                Expertise
              </h3>
              <p className="text-gray-600">With over a decade of experience, we know Pakistan like the back of our hand.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-500" />
                Personalized Service
              </h3>
              <p className="text-gray-600">We tailor each tour to meet the unique needs and preferences of our clients.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <ThumbsUp className="h-6 w-6 mr-2 text-blue-500" />
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">Our 5-star ratings and glowing reviews speak for themselves.</p>
            </div>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <img
                    src={member.img}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Achievements */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-gray-600">Destinations Covered</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-gray-600">Industry Awards</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <Compass className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Unique Tours</p>
            </div>
          </div>
        </motion.div>

        {/* Our Mission */}
        <motion.div variants={fadeIn} className="mb-16">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full">
                <img
                  src="/img/20.jpg"
                  alt="Our Mission"
                  fill
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-4">
                  Our mission is to showcase the true beauty and rich cultural heritage of Pakistan to the world. We strive to create immersive, responsible, and unforgettable travel experiences that not only satisfy our clients but also benefit local communities.
                </p>
                <p className="text-gray-600">
                  We are committed to promoting sustainable tourism practices, preserving Pakistan's natural wonders, and fostering cross-cultural understanding through our tours.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}