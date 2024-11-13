import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from 'lucide-react'

export default function ContactPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh]">
        <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
            {...fadeIn}
          >
            Get in Touch
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={fadeIn} className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-500" />
                  <span>123 Travel Street, Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <span>+92 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <span>info@pakistantravel.com</span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Office Hours</h2>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="/placeholder.svg?height=450&width=800"
              alt="Map"
              width={800}
              height={450}
              className="rounded-lg object-cover"
            />
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeIn} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <MessageCircle className="h-6 w-6 mr-2 text-blue-500" />
                How do I book a tour?
              </h3>
              <p>You can book a tour by filling out our online booking form, calling our office, or sending us an email. We'll guide you through the process and answer any questions you may have.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-500" />
                What's your cancellation policy?
              </h3>
              <p>Our cancellation policy varies depending on the tour and how far in advance you cancel. Generally, we offer full refunds for cancellations made 30 days or more before the tour start date.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-blue-500" />
                Do you offer customized tours?
              </h3>
              <p>Yes, we specialize in creating customized tours tailored to your preferences and interests. Contact us to discuss your dream Pakistan adventure, and we'll make it a reality.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <MapPin className="h-6 w-6 mr-2 text-blue-500" />
                Which areas of Pakistan do you cover?
              </h3>
              <p>We offer tours throughout Pakistan, including popular destinations like the Karakoram Highway, Hunza Valley, Shalimar Gardens, and many more. Check our tour packages or contact us for specific locations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}