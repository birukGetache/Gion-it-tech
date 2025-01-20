"use client";
const About = ({ isVisible }) => {
  return (
    <section
      className={`lg:py-16 py-6 px-4 sm:px-6 lg:px-8 w-screen transition-opacity duration-500 ease-in-out   ${
        isVisible ? "opacity-100  animate-aboutanime" : "opacity-0"
      }`}
      id="about"
    >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between space-y-10 lg:space-y-0">
          {/* Left Column: Description */}
          <div className="">
            <div className="lg:w-1/2 text-center lg:text-left bg-white bg-opacity-5 rounded-md min-w-[260px] max-w-[700px] box-border p-10">
              <h2 className="text-4xl font-extrabold  text-gray-800 mb-4">
                About Gion
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Gion, we are committed to empowering ideas with cutting-edge
                technology. We specialize in innovative solutions that make your
                life simpler and more secure. Join us as we create the future of
                technology, one idea at a time.
              </p>
            </div>
          </div>

          <div className="grid-cols-[1fr_1fr] hidden sm:grid gap-4 p-5">
            <div
              className="bg-white bg-opacity-5 rounded-md flex items-center justify-center p-3 border-l border-green-500 text-gray-600 grid-item"
              style={{ borderLeftWidth: "5px", borderTopWidth: "5px" }}
            >
              Founded in 2024, Gion Solutions Ltd. is a premier technology
              solutions provider based in Bahir Dar, Ethiopia. The company was
              established by a group of dedicated professionals passionate
              harnessing the power of technology to create lasting impacts. With
              offices in Addis Ababa, Dire Dawa, Bahir Dar, Hawassa, Mekelle,
              Adama, Kombolcha, Yirgalem, and Debre Birhan, Safeware extends its
              reach across multiple regions.
            </div>
            <div
              className="bg-white bg-opacity-5 rounded-md flex items-center justify-center p-3 border-red-500 text-gray-600 grid-item"
              style={{ borderRightWidth: "5px", borderTopWidth: "5px" }}
            >
              Safeware Solutions specializes in providing innovative technology
              consulting and cloud platform development services, focusing on
              sectors such as government, international development, education,
              and business solutions. With extensive experience working on
              projects in Ethiopia, Kenya, Uganda, Zambia, South Sudan, and other
              African countries, Safeware has a strong track record of delivering
              tailored solutions that meet the unique needs of its clients.
            </div>
            <div
              className="bg-white bg-opacity-5 rounded-md flex items-center justify-center p-3 border-blue-400 text-gray-600 grid-item"
              style={{ borderLeftWidth: "5px", borderBottomWidth: "5px" }}
            >
              The company excels in providing a broad range of services including
              enterprise resource planning (ERP) systems, data security
              solutions, mobile applications, cloud infrastructure, and business
              intelligence tools. Safeware’s commitment to delivering exceptional
              quality and customer satisfaction has earned the company a solid
              reputation among its clients, as reflected in the positive feedback
              and testimonies.
            </div>

            <div
              className="bg-white bg-opacity-5 rounded-md flex items-center justify-center p-3 text-gray-600 border-yellow-500 grid-item"
              style={{ borderRightWidth: "5px", borderBottomWidth: "5px" }}
            >
              With a client-centered approach, Safeware takes full responsibility
              for the analysis and resolution of complex issues, ensuring that
              every project is executed to the highest standards, regardless of
              scope or challenges. The team’s dedication to continuous improvement
              and their ability to provide innovative, reliable solutions is key
              to Safeware's success in transforming businesses and organizations in
              the ever-evolving digital landscape.
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default About;
