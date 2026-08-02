import React, { useState } from 'react'
import { BsRobot, BsEnvelope, BsTelephone, BsGeoAlt, BsSend } from 'react-icons/bs'

function Footer() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();

    const YOUR_GMAIL = "harshkesharwani047@gmail.com";

    const subject = encodeURIComponent(`Support Request from ${contactForm.name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    );

    window.location.href = `mailto:${YOUR_GMAIL}?subject=${subject}&body=${body}`;

    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className='bg-[#f3f3f3] flex justify-center px-3 sm:px-4 pb-6 sm:pb-10 py-4 pt-6 sm:pt-10'>
      <div className='w-full max-w-6xl flex flex-col gap-4 sm:gap-6'>

        {/* CONTACT */}
        <div className='bg-white rounded-2xl sm:rounded-[24px] shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8'>
          <div className='text-center mb-6 sm:mb-10'>
            <h2 className='text-xl sm:text-2xl font-semibold mb-2'>
              Need Help? <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 font-extrabold'>Get in Touch</span>
            </h2>
            <p className='text-gray-500 text-sm max-w-md mx-auto px-2'>
              Facing an issue or have a question? Send us a message and we'll get back to you directly on email.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8'>

            {/* Contact info panel */}
            <div className='md:col-span-2 bg-black text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left'>
              <div>
                <h3 className='text-lg font-semibold mb-4 sm:mb-5'>Contact Details</h3>

                <div className='space-y-4 sm:space-y-5'>
                  <div className='flex items-start gap-3'>
                    <div className='bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center shrink-0'>
                      <BsEnvelope size={16} />
                    </div>
                    <div className='min-w-0'>
                      <p className='text-xs text-gray-400 mb-0.5'>Email</p>
                      <p className='text-sm break-all'>harshkesharwani047@gmail.com</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center shrink-0'>
                      <BsTelephone size={16} />
                    </div>
                    <div>
                      <p className='text-xs text-gray-400 mb-0.5'>Phone</p>
                      <p className='text-sm'>+91 77777 55555</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <div className='bg-white/10 w-9 h-9 rounded-lg flex items-center justify-center shrink-0'>
                      <BsGeoAlt size={16} />
                    </div>
                    <div>
                      <p className='text-xs text-gray-400 mb-0.5'>Location</p>
                      <p className='text-sm'>Lucknow, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className='text-xs text-gray-400 mt-6 sm:mt-8'>
                We usually respond within 24 hours.
              </p>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleContactSubmit}
              className='md:col-span-3 space-y-4 text-left'>

              <div>
                <label className='text-sm text-gray-600 mb-1 block'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder=" "
                  className='w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500'
                />
              </div>

              <div>
                <label className='text-sm text-gray-600 mb-1 block'>Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder=" "
                  className='w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500'
                />
              </div>

              <div>
                <label className='text-sm text-gray-600 mb-1 block'>Message / Issue</label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Describe the problem you're facing..."
                  className='w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 resize-none'
                />
              </div>

              <button
                type="submit"
                className='w-full bg-black text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition'>
                <BsSend size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* BRAND / ABOUT STRIP */}
        <div className='bg-white rounded-2xl sm:rounded-[24px] shadow-sm border border-gray-200 py-6 sm:py-8 px-4 sm:px-3 text-center'>
          <div className='flex justify-center items-center gap-3 mb-3'>
            <div className='bg-black text-white p-2 rounded-lg'><BsRobot size={16}/></div>
            <h2 className='font-semibold'>IntervX</h2>
          </div>
          <p className='text-gray-500 text-sm max-w-xl mx-auto'>
            AI-powered interview preparation platform designed to improve
            communication skills, technical depth and professional confidence.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Footer