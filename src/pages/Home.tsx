import React, { useEffect, useState, useRef } from "react";
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
  ChevronRight,
  ChevronLeft,
  Clock,
  Globe
} from "lucide-react";
import "./animations.css";

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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Check which sections are in view
      const newVisibleSections = new Set(visibleSections);
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            newVisibleSections.add(key);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targetMc = 1505296;
    const targetDot = 4003402;
    const duration = 1000;
    const steps = 60;
    let currentStep = 0;
    window.scrollTo(0, 0);

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

  const isSectionVisible = (section: string) => visibleSections.has(section);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with smooth scroll effect */}
      <header className={`border-s border-b fixed w-screen z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent border-transparent py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-11 w-28 rounded-md flex items-center justify-center text-white font-bold text-lg animate-truck-arrive">
                <img src="/logo/image.png" alt="company logo" className="h-11 w-28 text-blue-600 transition-transform duration-300 hover:scale-105" />
              </div>
              <span className={`text-sm transition-opacity duration-300 ${isScrolled ? "text-gray-500 opacity-100" : "text-white opacity-90"}`}>Trusted Logistics & Compliance</span>
            </div>

            <nav className="flex items-center space-x-4">
              <a href="#home" className={`transition-colors duration-300 hover:text-blue-600 ${isScrolled ? "text-gray-700" : "text-white"}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }}
              >Home</a>
              <Link to="/privacy-policy" className={`transition-colors duration-300 hover:text-blue-600 ${isScrolled ? "text-gray-700" : "text-white"}`}>Privacy</Link>
              <Link to="/terms-of-service" className={`transition-colors duration-300 hover:text-blue-600 ${isScrolled ? "text-gray-700" : "text-white"}`}>Terms</Link>
              <a href="#contact" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with enhanced animations */}
      <section id="home" ref={sectionRefs.home}
        className="py-44 pt-32 z-20 bg-gradient-to-br bg-cover bg-no-repeat from-blue-50 to-indigo-100 relative overflow-hidden"
        style={{ backgroundImage: "url('/logo/hero-bg.png')" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 text-center relative z-30">
          <div className="transform transition duration-700 ease-out hover:scale-[1.02]">
            <div className="h-16 w-40 rounded-lg mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl animate-build-in">
              <img src="/logo/image.png" alt="company logo" className="h-16 w-30 mx-auto mb-6 transform transition-all duration-700 hover:scale-110" />
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold text-gray-200 mb-4 ${isSectionVisible('home') ? 'animate-road-in' : 'opacity-0'}`}>Welcome to BLA BLA LLC</h1>
            <p className={`text-xl text-gray-100 mb-8 max-w-3xl mx-auto ${isSectionVisible('home') ? 'animate-road-in delay-1' : 'opacity-0'}`}>BLA BLA LLC is a modern logistics company that offers a comprehensive range of supply chain management services. We specialize in optimizing delivery and storage processes, ensuring high service levels and reliability for our clients.</p>

            <div className={`mt-6 flex justify-center gap-6 ${isSectionVisible('home') ? 'animate-road-in delay-2' : 'opacity-0'}`}>
              <div className="text-center transform transition-all duration-500 hover:scale-110">
                <div className="text-lg text-gray-100">MC</div>
                <div className="text-2xl font-bold text-gray-300">{mcCount.toLocaleString()}</div>
              </div>

              <div className="text-center transform transition-all duration-500 hover:scale-110">
                <div className="text-lg text-gray-100">DOT</div>
                <div className="text-2xl font-bold text-gray-300">{dotCount.toLocaleString()}</div>
              </div>
            </div>

            <div className={`mt-8 flex justify-center gap-4 ${isSectionVisible('home') ? 'animate-road-in delay-3' : 'opacity-0'}`}>
              <a href="#contact" className="inline-flex items-center bg-blue-600 text-white px-5 py-3 rounded-md shadow hover:bg-blue-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Phone className="w-4 h-4 mr-2" /> Contact Us
              </a>
              <a href="#about-us" className="inline-flex items-center border border-transparent bg-white px-5 py-3 rounded-md shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
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

      {/* Legal Documents Section with enhanced card animations */}
      <section ref={sectionRefs.services} className="py-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-gray-900 text-center mb-8 ${isSectionVisible('services') ? 'animate-road-in' : 'opacity-0'}`}>Our Legal Documents</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { to: "/privacy-policy", Icon: Shield, title: "Privacy Policy", desc: "How we collect, use and protect your data." },
              { to: "/cookie-policy", Icon: Cookie, title: "Cookie Policy", desc: "How cookies enhance your browsing experience." },
              { to: "/terms-of-service", Icon: FileText, title: "Terms of Service", desc: "Rights and responsibilities of our users and company." },
            ].map((card, index) => (
              <Link
                key={card.title}
                to={card.to}
                className={`group bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isSectionVisible('services') ? `animate-card-${index % 2 === 0 ? 'left' : 'right'}` : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
                aria-label={card.title}
              >
                <card.Icon className="h-10 w-10 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.desc}</p>
                <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-300">
                  Read {card.title.split(" ")[0]}
                  <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            ))}
          </div>

          {/* Quick facts / trust badges */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className={`bg-white p-6 rounded-lg border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${isSectionVisible('services') ? 'animate-card-left delay-1' : 'opacity-0'}`}>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-yellow-500 transform hover:rotate-12 transition-transform duration-300" />
                <div>
                  <div className="text-sm text-gray-500">Certification</div>
                  <div className="font-semibold">ISO Compliant Processes</div>
                </div>
              </div>
            </div>

            <div className={`bg-white p-6 rounded-lg border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${isSectionVisible('services') ? 'animate-card-top delay-2' : 'opacity-0'}`}>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 transform hover:rotate-12 transition-transform duration-300" />
                <div>
                  <div className="text-sm text-gray-500">Verified</div>
                  <div className="font-semibold">Compliance & Filing Accuracy</div>
                </div>
              </div>
            </div>

            <div className={`bg-white p-6 rounded-lg border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${isSectionVisible('services') ? 'animate-card-right delay-3' : 'opacity-0'}`}>
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-indigo-500 transform hover:rotate-12 transition-transform duration-300" />
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
      <section id="about-us" ref={sectionRefs.about} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div className={isSectionVisible('about') ? 'animate-road-in' : 'opacity-0'}>
            <h2 className="text-2xl font-bold mb-4">Who we are</h2>
            <p className="text-gray-600 mb-4">BLA BLA LLC is a full-service logistics and compliance partner that helps fleets, brokers and shippers maintain regulatory compliance while optimizing operations. We provide document management, filing assistance, and consultation services.</p>

            <ul className="space-y-2">
              <li className="flex items-start space-x-2 transform transition-all duration-300 hover:translate-x-1">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Transparent pricing and clear documentation</span>
              </li>
              <li className="flex items-start space-x-2 transform transition-all duration-300 hover:translate-x-1">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Fast response times and 24/7 support options</span>
              </li>
              <li className="flex items-start space-x-2 transform transition-all duration-300 hover:translate-x-1">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>Secure handling of sensitive records and data</span>
              </li>
            </ul>
          </div>

          <div className={isSectionVisible('about') ? 'animate-road-in delay-1' : 'opacity-0'}>
            <h3 className="text-lg font-semibold mb-2">Fast facts</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded transform transition-all duration-300 hover:scale-105">
                <Clock className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
                <div className="text-sm text-gray-500">Avg. Response</div>
                <div className="font-semibold">Under 4 hours</div>
              </div>
              <div className="bg-gray-50 p-4 rounded transform transition-all duration-300 hover:scale-105">
                <FileText className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
                <div className="text-sm text-gray-500">On-time Filing</div>
                <div className="font-semibold">99.2%</div>
              </div>
              <div className="bg-gray-50 p-4 rounded transform transition-all duration-300 hover:scale-105">
                <Globe className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
                <div className="text-sm text-gray-500">Nationwide Coverage</div>
                <div className="font-semibold">50+ States</div>
              </div>
              <div className="bg-gray-50 p-4 rounded transform transition-all duration-300 hover:scale-105">
                <Users className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
                <div className="text-sm text-gray-500">Satisfied Clients</div>
                <div className="font-semibold">200+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Testimonials */}
      <section ref={sectionRefs.testimonials} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className={isSectionVisible('testimonials') ? 'animate-card-left' : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-6">Frequently asked questions</h3>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="bg-white p-4 rounded border transition-all duration-300 hover:shadow-md">
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-medium">{f.q}</span>
                    <span className="text-sm text-gray-500 transition-transform duration-300">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && <div className="mt-3 text-gray-600 animate-fade-in">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className={isSectionVisible('testimonials') ? 'animate-card-right' : 'opacity-0'}>
            <h3 className="text-2xl font-bold mb-6">What clients say</h3>
            <div className="bg-white p-6 rounded border hover:shadow-md transition-all duration-300">
              <div className="min-h-[120px]">
                <p className="text-gray-700 animate-fade-in">"{testimonials[tIndex].text}"</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonials[tIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[tIndex].role}</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="text-yellow-400 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => setTIndex((i: number) => (i - 1 + testimonials.length) % testimonials.length)}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center transition-colors duration-300"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                </button>
                <button
                  onClick={() => setTIndex((i: number) => (i + 1) % testimonials.length)}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center transition-colors duration-300"
                >
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl font-bold text-gray-900 mb-8 ${isSectionVisible('contact') ? 'animate-road-in' : 'opacity-0'}`}>Contact Information</h2>
            <p className={`text-lg text-gray-600 mb-8 ${isSectionVisible('contact') ? 'animate-road-in delay-1' : 'opacity-0'}`}>Have questions about our policies or need assistance? We're here to help.</p>

            <div className={`grid md:grid-cols-2 gap-8 ${isSectionVisible('contact') ? 'animate-road-in delay-2' : 'opacity-0'}`}>
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
                <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+1-305-636-8257" className="text-gray-600 hover:text-blue-600 transition-colors">+1-305-636-8257</a>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1">
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
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
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
        className="fixed right-6 bottom-6 z-50 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300 animate-bounce-slow"
        aria-label="Call us"
      >
        <Phone className="w-4 h-4" /> Call
      </a>
    </div>
  );
};

export default Home;