import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Shield,
  Cookie,
  FileText,
  Phone,
  MapPin,
  CheckCircle,
  Users,
  Award,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Olga M.",
    role: "Logistics Manager",
    text: "Working with BLA BLA LLC is very easy — fast, accurate paperwork and reliable service.",
  },
  {
    name: "John D.",
    role: "Fleet Owner",
    text: "Their compliance rules and documentation helped organize our business quickly.",
  },
  {
    name: "Sasha R.",
    role: "Broker",
    text: "Professional and honest — I recommend them.",
  },
];

const faqs = [
  {
    q: "How can I review the Privacy Policy?",
    a: "Click the 'Privacy Policy' button on the page — all information and contacts are provided in the document.",
  },
  {
    q: "How can I change my cookie settings?",
    a: "You can manage cookie permissions through your browser or adjust them in the on-site cookie preferences panel.",
  },
  {
    q: "How can I contact your services?",
    a: "You can reach us via phone, address, or the online contact form — please check the Contact section.",
  },
];

const Home: React.FC = () => {
  const [mcCount, setMcCount] = useState<number>(0);
  const [dotCount, setDotCount] = useState<number>(0);
  const [tIndex, setTIndex] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const targetMc = 1505296;
    const targetDot = 4003402;
    const duration = 1000;
    const steps = 60;
    let currentStep = 0;
    window.scrollTo(0,0);

    const id = window.setInterval(() => {
      currentStep++;
      const progress = Math.min(1, currentStep / steps);
      setMcCount(Math.round(targetMc * progress));
      setDotCount(Math.round(targetDot * progress));
      if (progress >= 1) window.clearInterval(id);
    }, duration / steps);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setTIndex((prev: number) => (prev + 1) % testimonials.length), 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-s bg-white border-b fixed w-screen z-50 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo/image.png" rel="company logo" className="h-11 w-28 text-blue-600" />
              <span className="text-sm text-gray-500">Trusted Logistics & Compliance</span>
            </div>

            <nav className="flex items-center space-x-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }}
              >Home</a>
              <Link to="/privacy-policy" className="text-gray-700 hover:text-blue-600">Privacy</Link>
              <Link to="/terms-of-service" className="text-gray-700 hover:text-blue-600">Terms</Link>
              <a href="/contact" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:opacity-95"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-44 pt-32 z-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center">
          <div className="transform transition duration-700 z-20 ease-out hover:scale-[1.02]">
            <img src="/logo/image.png" rel="image" className="h-16 w-30 z-30 mx-auto mb-6"/>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to BLA BLA LLC</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">BLA BLA LLC is a modern logistics company that offers a comprehensive range of supply chain management services. We specialize in optimizing delivery and storage processes, ensuring high service levels and reliability for our clients.</p>

            <div className="mt-6 flex justify-center gap-6">
              <div className="text-center">
                <div className="text-lg text-gray-500">MC</div>
                <div className="text-2xl font-bold text-gray-900">{mcCount.toLocaleString()}</div>
              </div>

              <div className="text-center">
                <div className="text-lg text-gray-500">DOT</div>
                <div className="text-2xl font-bold text-gray-900">{dotCount.toLocaleString()}</div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <a href="#contact" className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Phone className="w-4 h-4 mr-2" /> Contact Us
              </a>
              <a href="#about-us" className="inline-flex items-center border border-transparent bg-white px-5 py-3 rounded-md shadow-sm hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Users className="w-4 h-4 mr-2 text-blue-600" /> About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Documents Section */}
      <section className="py-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Legal Documents</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { to: "/privacy-policy", Icon: Shield, title: "Privacy Policy", desc: "How we collect, use and protect your data." },
              { to: "/cookie-policy", Icon: Cookie, title: "Cookie Policy", desc: "How cookies enhance your browsing experience." },
              { to: "/terms-of-service", Icon: FileText, title: "Terms of Service", desc: "Rights and responsibilities of our users and company." },
            ].map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                aria-label={card.title}
              >
                <card.Icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.desc}</p>
                <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                  Read {card.title.split(" ")[0]}
                  <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {/* Quick facts / trust badges */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border transition-transform hover:translate-y-[-4px]">
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-yellow-500" />
                <div>
                  <div className="text-sm text-gray-500">Certification</div>
                  <div className="font-semibold">ISO Compliant Processes</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border transition-transform hover:translate-y-[-4px]">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <div>
                  <div className="text-sm text-gray-500">Verified</div>
                  <div className="font-semibold">Compliance & Filing Accuracy</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border transition-transform hover:translate-y-[-4px]">
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-indigo-500" />
                <div>
                  <div className="text-sm text-gray-500">Trusted by</div>
                  <div className="font-semibold">200+ Clients Worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Details */}
      <section id="about-us" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-2xl font-bold mb-4">Who we are</h2>
            <p className="text-gray-600 mb-4">BLA BLA LLC is a full-service logistics and compliance partner that helps fleets, brokers and shippers maintain regulatory compliance while optimizing operations. We provide document management, filing assistance, and consultation services.</p>

            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Transparent pricing and clear documentation</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Fast response times and 24/7 support options</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Secure handling of sensitive records and data</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-lg font-semibold mb-2">Fast facts</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-500">Avg. Response</div>
                <div className="font-semibold">Under 4 hours</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-500">On-time Filing</div>
                <div className="font-semibold">99.2%</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-500">Nationwide Coverage</div>
                <div className="font-semibold">50+ States & Territories</div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="text-sm text-gray-500">Satisfied Clients</div>
                <div className="font-semibold">200+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Testimonials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">Frequently asked questions</h3>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white p-4 rounded border">
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-medium">{f.q}</span>
                    <span className="text-sm text-gray-500">{openFaq === i ? "—" : "+"}</span>
                  </button>
                  {openFaq === i && <div className="mt-3 text-gray-600">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">What clients say</h3>
            <div className="bg-white p-6 rounded border">
              <div className="min-h-[120px]">
                <p className="text-gray-700">“{testimonials[tIndex].text}”</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonials[tIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[tIndex].role}</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="text-yellow-400 flex items-center">
                      <Star className="w-4 h-4" />
                      <Star className="w-4 h-4" />
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <button onClick={() => setTIndex((i: number) => (i - 1 + testimonials.length) % testimonials.length)} className="text-sm text-gray-500 hover:text-gray-700">Previous</button>
                <button onClick={() => setTIndex((i: number) => (i + 1) % testimonials.length)} className="text-sm text-gray-500 hover:text-gray-700">Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter sign-up
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Stay informed</h3>
          <p className="text-gray-600 mb-6">Sign up for updates on regulatory changes, new services and company announcements.</p>

          <form
            className="mx-auto max-w-xl flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              // Replace with API call in a real app
              alert("Thank you! We've received your signup (demo).");
            }}
          >
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" required placeholder="Your email" className="flex-1 px-4 py-3 border rounded" />
            <button type="submit" className="px-4 py-3 bg-blue-600 text-white rounded">Subscribe</button>
          </form>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <p className="text-lg text-gray-600 mb-8">Have questions about our policies or need assistance? We're here to help.</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+1-305-636-8257" className="text-gray-600 hover:text-blue-600 transition-colors">+1-305-636-8257</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <address className="text-gray-600 not-italic">26250 Euclid Ave, 9th Floor<br />Suite #916<br />Euclid, Ohio, 44132, USA</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="text-lg font-semibold">BLA BLA LLC</span>
            </div>
            <div className="flex justify-center gap-2 texy-xl mb-4">
              <div className="font-bold">MC: {mcCount.toLocaleString()}</div>
              <div className="font-bold">DOT: {dotCount.toLocaleString()}</div>
            </div>
            <p className="text-gray-400 mb-6">Committed to transparency, compliance, and exceptional service.</p>
            <div className="flex justify-center space-x-8">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} BLA BLA LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating quick contact button */}
      <a
        href="tel:+1-305-636-8257"
        className="fixed right-6 bottom-6 z-50 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
        aria-label="Call us"
      >
        <Phone className="w-4 h-4" /> Call
      </a>
    </div>
  );
};

export default Home;
