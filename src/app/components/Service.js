"use client";
const Services = ({ isVisible }) => {
  return (
    <section id="services" className="service">
      {/* Only show content when it's visible */}
      <section
        className={`py-16 service transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
        }`}
        id="services"
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Website Development Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid #33afff" }}
            >
              <div className="mb-6 text-blue-500">
                <svg
                  className="w-20 h-20 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 5h18M3 12h18M3 19h18" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Website Development
              </h3>
              <p className="text-gray-600">
                We specialize in building responsive, mobile-friendly websites
                that ensure fast load times, great user experiences, and
                effective SEO.
              </p>
            </div>

            {/* Web3 DApps Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid purple" }}
            >
              <div className="mb-6 text-purple-500">
                <svg
                  className="w-20 h-20 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M12 22V12M2 7v10l10 5 10-5V7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Web3 DApps
              </h3>
              <p className="text-gray-600">
                We create decentralized applications that leverage blockchain
                technology, ensuring security, transparency, and scalability.
              </p>
            </div>

            {/* Promotion Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid orange" }}
            >
              <div className="mb-6 text-orange-500">
                <svg
                  className="w-20 h-20 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 11v10h18V11M2 2h20v6H2z" />
                  <path d="M9 22V12m6 10V12M9 6H6M18 6h-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Promotion
              </h3>
              <p className="text-gray-600">
                We provide innovative promotional strategies to help your brand
                stand out and connect with your audience effectively.
              </p>
            </div>

            {/* Digital Marketing Card */}
            <div
              className="bg-white bg-opacity-10 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform scale-95 hover:scale-100 duration-300"
              style={{ border: "2px solid teal" }}
            >
              <div className="mb-6 text-teal-500">
                <svg
                  className="w-20 h-20 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L3 8v8l9 6 9-6V8z" />
                  <path d="M12 22V12" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Digital Marketing
              </h3>
              <p className="text-gray-600">
                Our digital marketing services help you achieve better online
                visibility, drive traffic, and grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
