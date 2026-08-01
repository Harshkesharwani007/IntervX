import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "framer-motion";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';
import hrImg from "../assets/HR.png";
import Introo from "../assets/Introo.jpg"
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';



function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate()
  return (
    <div className='min-h-screen bg-[#E5E5E5] flex flex-col'>
      <Navbar />

      <div className='flex-1 px-6 py-20'>
        <div className='max-w-6xl mx-auto'>

          {/* HERO */}
          <div className='relative grid md:grid-cols-2 items-center gap-14 mb-28'>

            {/* soft accent glow behind the whole hero, same green family as the rest of the page */}
            <div className='pointer-events-none absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-emerald-200/40 blur-3xl' />
            <div className='pointer-events-none absolute top-10 right-0 w-[320px] h-[320px] rounded-full bg-green-300/30 blur-3xl' />

            <div className='relative'>
              <div className='inline-flex bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full items-center gap-2 mb-6'>
                <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
                <HiSparkles size={16} className="bg-green-50 text-green-600" />
                AI Powered Smart Interview Platform
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-4xl md:text-6xl font-semibold leading-[1.25] tracking-tight max-w-xl'>
                <span className='font-light text-gray-700 '> Interview Preparation</span>
                <br />
                <span className='font-light text-gray-700'>with</span>{" "}
                <span className='relative inline-block pb-2 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent font-extrabold'>
                  AI Intelligence
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='text-gray-500 mt-6 max-w-md text-lg leading-relaxed'>
                Role-specific AI mock interviews with adaptive questioning, intelligent follow-ups, and real-time performance analytics.
              </motion.p>

              <div className='flex flex-wrap gap-4 mt-10'>
                <motion.button
                  onClick={() => {
                    if (!userData) {
                      setShowAuth(true)
                      return;
                    }
                    navigate("/interview")
                  }}
                  whileHover={{ opacity: 0.9, scale: 1.03 }}
                  whileTap={{ opacity: 1, scale: 0.98 }}
                  className='bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md'>
                  Start Interview
                </motion.button>

                <motion.button
                  onClick={() => {
                    if (!userData) {
                      setShowAuth(true)
                      return;
                    }
                    navigate("/history")
                  }}
                  whileHover={{ opacity: 0.9, scale: 1.03 }}
                  whileTap={{ opacity: 1, scale: 0.98 }}
                  className='border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition'>
                  View History
                </motion.button>
              </div>
            </div>

            {/* big picture on the right of the interview-preparation text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[2.5rem] rotate-3 opacity-20' />
              <div className='relative rounded-[2.5rem] overflow-hidden border-2 border-green-100 shadow-2xl bg-white'>
                <img
                  src={Introo}
                  alt="AI interview preparation"
                  className='w-full h-[420px] object-cover'
                />
              </div>
            </motion.div>
          </div>

          {/* STEPS – horizontal timeline */}
          <div className='mb-28'>
            <div className='relative'>
              <div className='hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-green-100' />
              <div className='grid md:grid-cols-3 gap-10'>
                {
                  [
                    {
                      icon: <BsRobot size={24} />,
                      step: "STEP 1",
                      title: "Role & Experience Selection",
                      desc: "AI  Specifically adjusts difficulty based questions on selected job role."
                    },
                    {
                      icon: <BsMic size={24} />,
                      step: "STEP 2",
                      title: "Smart Voice  Interview",
                      desc: "Dynamic follow-up questions based on your answers."
                    },
                    {
                      icon: <BsClock size={24} />,
                      step: "STEP 3",
                      title: "Timer Based Simulation",
                      desc: "Real interview pressure with time tracking."
                    }
                  ].map((item, index) => (
                    <motion.div key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 + index * 0.2 }}
                      className='relative flex flex-col items-center text-center'>

                      <div className='relative z-10 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg mb-6'>
                        {item.icon}
                      </div>

                      <div className='bg-white rounded-3xl border-2 border-green-100 hover:border-green-500 p-8 w-full shadow-md hover:shadow-2xl transition-all duration-300'>
                        <div className='text-xs text-green-600 font-semibold mb-2 tracking-wider'>{item.step}</div>
                        <h3 className='font-semibold mb-3 text-lg'>{item.title}</h3>
                        <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))
                }
              </div>
            </div>
          </div>

          {/* CAPABILITIES – zig-zag showcase */}
          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16'>
              Advanced AI{" "}
              <span className="relative inline-block pb-2 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent font-extrabold'">Capabilities</span>
            </motion.h2>

            <div className='flex flex-col gap-10'>
              {
                [
                  {
                    image: evalImg,
                    icon: <BsBarChart size={20} />,
                    title: "AI Answer Evaluation",
                    desc: "Scores communication, technical accuracy and confidence.",
                    points: [
                      "Breaks down every answer into clarity, relevance and depth",
                      "Flags filler words, rambling and weak structure in real time",
                      "Benchmarks your confidence and tone against ideal responses"
                    ]
                  },
                  {
                    image: resumeImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Resume Based Interview",
                    desc: "Project-specific questions based on uploaded resume.",
                    points: [
                      "Reads your resume and pulls out real projects and skills to ask about",
                      "Digs deeper into tools, frameworks and numbers you've mentioned",
                      "Matches question difficulty to your actual experience level"
                    ]
                  },
                  {
                    image: pdfImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Downloadable PDF Report",
                    desc: "Detailed strengths, weaknesses and improvement insights.",
                    points: [
                      "One-page summary with score breakdown per question",
                      "Highlights top 3 strengths and top 3 areas to improve",
                      "Shareable with mentors, coaches or for your own records"
                    ]
                  },
                  {
                    image: analyticsImg,
                    icon: <BsBarChart size={20} />,
                    title: "History & Analytics",
                    desc: "Track progress with performance graphs and topic analysis.",
                    points: [
                      "Visual trend line of your score across every past interview",
                      "Topic-wise breakdown to see which areas need more practice",
                      "Compare performance across roles, modes and difficulty levels"
                    ]
                  }
                ].map((item, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className='bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all'>
                    <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
                      <div className='w-full md:w-1/2 flex justify-center'>
                        <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-64' />
                      </div>

                      <div className='w-full md:w-1/2'>
                        <div className='bg-green-50 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
                          {item.icon}
                        </div>
                        <h3 className='font-semibold mb-3 text-xl'>{item.title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed mb-5'>{item.desc}</p>

                        <ul className='space-y-3'>
                          {item.points.map((point, pIndex) => (
                            <li key={pIndex} className='flex items-start gap-3'>
                              <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0' />
                              <span className='text-sm text-gray-500 leading-relaxed'>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </div>

          {/* MODES – icon-topped grid */}
          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16'>
              Multiple Interview{" "}
              <span className="relative inline-block pb-2 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent font-extrabold'">Modes</span>
            </motion.h2>

            <div className='grid md:grid-cols-4 gap-10'>
              {
                [
                  {
                    img: hrImg,
                    title: "HR Interview Mode",
                    desc: "Behavioral and communication based evaluation."
                  },
                  {
                    img: techImg,
                    title: "Technical Mode",
                    desc: "Deep technical questioning based on selected role."
                  },
                  {
                    img: confidenceImg,
                    title: "Personality Detection",
                    desc: "Basic tone and voice analysis insights."
                  },
                  {
                    img: creditImg,
                    title: "Credits System",
                    desc: "Unlock premium interview sessions easily."
                  }
                ].map((mode, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center">

                    <div className='w-24 h-24 rounded-2xl bg-green-50 flex items-center justify-center mb-6'>
                      <img
                        src={mode.img}
                        alt={mode.title}
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                    <h3 className="font-semibold text-lg mb-3">
                      {mode.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {mode.desc}
                    </p>
                  </motion.div>
                ))
              }
            </div>
          </div>

        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

      <Footer />

    </div>
  )
}

export default Home