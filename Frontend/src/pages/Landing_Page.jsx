import Navbar from "../components/Navbar.jsx";
import { ArrowRight, Car, Shield, Clock, MapPin, Star, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 p-8 font-sans">
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Go anywhere with <br />
            <span className="text-blue-600">RebU</span>
          </h1>
          <p className="text-lg text-gray-600">
            Your reliable ride-hailing service. Fast, safe, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-md">
              See prices
            </button>
            <button className="bg-white text-black border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm">
              Download app
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center shadow-lg">
            <p className="text-gray-500 text-lg">Map Placeholder</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">RebU Economy</h3>
              <p className="text-gray-600">Affordable rides for everyday travel. Perfect for solo travelers or small groups.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">RebU Comfort</h3>
              <p className="text-gray-600">Higher-end cars with extra legroom. Enjoy a premium experience for a reasonable price.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Car className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">RebU XL</h3>
              <p className="text-gray-600">Spacious vehicles for larger groups. Perfect for airport trips or nights out.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RebU</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">Available anytime, day or night, whenever you need a ride.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Tracking</h3>
              <p className="text-gray-600">Know exactly where your driver is and when they'll arrive.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safe Rides</h3>
              <p className="text-gray-600">Verified drivers and safety features in every trip.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rated Drivers</h3>
              <p className="text-gray-600">All our drivers are highly rated for quality service.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download App Section */}
      {/* <div className="bg-blue-600 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Download the RebU App</h2>
            <p className="text-lg mb-6">Get the best experience with our mobile app. Track your ride, pay seamlessly, and enjoy exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center">
                <span>App Store</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center">
                <span>Google Play</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-96 bg-gray-200 rounded-lg flex items-center justify-center shadow-lg">
              <p className="text-gray-500 text-lg">App Screenshot</p>
            </div>
          </div>
        </div>
      </div>
 */}
      {/* How It Works */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How RebU Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold text-blue-600">1</div>
              <h3 className="text-xl font-semibold mb-2">Request a Ride</h3>
              <p className="text-gray-600">Enter your destination and choose your ride type in our app</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold text-blue-600">2</div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">We'll connect you with the nearest driver available</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold text-blue-600">3</div>
              <h3 className="text-xl font-semibold mb-2">Enjoy the Ride</h3>
              <p className="text-gray-600">Track your trip in real-time and pay seamlessly when you arrive</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"RebU has been my go-to ride service for the past year. Always reliable and the drivers are so professional!"</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Michael Torres</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"I love the transparency with pricing. No surprises, just fair rates and excellent service every time."</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Jennifer Lee</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">"The app is so easy to use, and I've never waited more than 5 minutes for a ride. Absolutely recommend!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to ride with RebU?</h2>
          <p className="text-lg mb-8">Join thousands of satisfied customers who rely on RebU for their daily commute.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md">
              Get Started
            </button>
            <button className="bg-transparent text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RebU</h3>
            <p className="text-gray-400">Your reliable ride-hailing service available 24/7.</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span>F</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span>T</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span>I</span>
                </div>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">COVID-19</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Community Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span>1-800-REBU-APP</span>
              </li>
              <li className="text-gray-400">
                <a href="mailto:support@rebu.com" className="hover:text-white">support@rebu.com</a>
              </li>
              <li className="text-gray-400">
                <p>123 Main Street, Suite 100</p>
                <p>San Francisco, CA 94105</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-8 mt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 RebU Technologies Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}