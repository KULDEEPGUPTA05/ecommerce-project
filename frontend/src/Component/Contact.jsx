const Contact = () =>{

    return(
 
         <div className="min-h-screen bg-[#F5F5DC] px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl !text-black font-bold text-[#3E2723]">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-2">
          Have a question? We'd love to hear from you.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Contact Information */}
        <div className="bg-[#3E2723] text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-200 mb-8">
            Feel free to contact us for any questions, feedback or
            support related to your order.
          </p>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="text-gray-300 mt-1">
                New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📧 Email</h3>
              <p className="text-gray-300 mt-1">
                support@example.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p className="text-gray-300 mt-1">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">🕒 Working Hours</h3>
              <p className="text-gray-300 mt-1">
                Monday - Saturday: 9 AM - 6 PM
              </p>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">

          <h2 className="text-2xl font-bold text-[#3E2723] mb-6">
            Send us a Message
          </h2>

          <form className="space-y-5">

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3E2723]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3E2723]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#3E2723]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#3E2723]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3E2723] text-white py-3 rounded-lg font-semibold hover:bg-[#5D4037] transition duration-200"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </div>

        
    )
}
export default Contact;