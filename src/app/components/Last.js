export default Last = ({isVisible}) =>{
    return(
       
        <section
        className={`container mx-auto px-4 py-12 service rounded-md bg-white bg-opacity-10 transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100 animate-serviceanime" : "opacity-0"
        }`}
        id="subscribe"
      >
        <h3 className="text-2xl font-semibold text-center text-gray-300 mb-6 font-Comic">
          Subscribe to Our Social Media Pages
        </h3>
        <div className="grid grid-cols-3 gap-10 place-items-center mx-auto max-w-32">
          <a href="https://www.instagram.com/nahom.k_12/" target="_blank">
            <FaInstagram size={40} />
          </a>
          <a href="https://t.me/nahigoph12" target="_blank">
            <FaTelegramPlane size={40} />
          </a>
          <a href="https://www.linkedin.com/in/nahom-keneni-638290330/">
            <FaLinkedin size={40} />
          </a>
        </div>
        
      </section>
        
    )
}