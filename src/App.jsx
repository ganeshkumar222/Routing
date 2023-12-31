// import React from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Cards } from './components/Cards'
import fsd1 from "./assets/FullStack/fsd1.webp"
import fsd2 from "./assets/FullStack/fsd2.webp"
import fsd3 from "./assets/FullStack/fsd3.webp"
import fsd4 from "./assets/FullStack/fsd4.webp"
import fsd5 from "./assets/FullStack/fsd5.webp"
import fsd6 from "./assets/FullStack/fs6.webp"
import cs1 from "./assets/Cyber/cs1.webp"
import cs2 from "./assets/Cyber/cs2.webp"
import cs3 from "./assets/Cyber/cs3.png"
import cs4 from "./assets/Cyber/cs4.gif"
import cs5 from "./assets/Cyber/cs5.png"
import cs6 from "./assets/Cyber/cs6.gif"
import ds1 from "./assets/DS/ds1.webp"
import ds2 from "./assets/DS/ds2.webp"
import ds3 from "./assets/DS/ds3.webp"
import ds4 from "./assets/DS/ds4.webp"
import ds5 from "./assets/DS/ds5.webp"
import ds6 from "./assets/DS/ds6.webp"
import cr1 from "./assets/Cr/cr1.jpg"
import cr2 from "./assets/Cr/cr2.webp"
import cr3 from "./assets/Cr/cr3.webp"
import cr4 from "./assets/Cr/cr4.webp"
import cr5 from "./assets/Cr/cr5.webp"
import cr6 from "./assets/Cr/cr6.webp"
function App() {
  let data =[
    {
    img:fsd1,
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    description:"When you're hiring a full-stack developer, what are the most important things you look for?",
    footer:"15 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:fsd2,
    title:"Top Differences: Full Stack developer vs Software Engineer 2024",
    description:"A Full Stack Developer is a tech all-rounder.They Work on both",
    footer:"15 November . No Comments",
    category:"Fsd"
  },{
    img:fsd3,
    title:"Horizontal vs vertical Scaling for Efficient System design ",
    description:"In the world of system design, envision a digital skyscraper-a multifaceted structure built",
    footer:"10 November 2023 . No Comments",
    category:"Fsd"
  },
  {
    img:fsd4,
    title:"Best Books to Learn Full-Stack Development",
    description:"Are you interested in becoming a full-stack developer but not sure where to start?",
    footer:"9 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:fsd5,
    title:"Top 10 Product-Based Companies for FSD",
    description:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world",
    footer:"8 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:fsd6,
    title:"Best Books to Learn Full-Stack Development",
    description:"Are you interested in becoming a full-stack developer but not sure where to start?",
    footer:"9 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:cs1,
    title:"Non-coding jobs in Cybersecurity:A Comprehensive Guide",
    description:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    footer:"4 December 2023 . No Comments",
    category:"cs"
  },{
    img:cs2,
    title:"What Is hacking? Types of Hacking & More",
    description:"Have you ever wondered that hacking is all about? It's a big deal in today's",
    footer:"25 september 2023 . No Comments",
    category:"cs"
  },{
    img:cs3,
    title:"Cybersecurity vs Ethical Hacking: Top 10 Differences",
    description:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    footer:"27 December 2022 . No Comments",
    category:"cs"
  },{
    img:cs4,
    title:"What is Cybersecurity?  The growing challenges in 2023",
    description:"look around today, we are more relaint on technology and devices",
    footer:"20 December 2022 . 1 Comment",
    category:"cs"
  },
  {
    img:cs5,
    title:"8 Different types of Cybersecurity and Threats Involved",
    description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assests of the organization from",
    footer:"9 November 2022 . 1 Comment",
    category:"cs"
  },
  {
    img:cs6,
    title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity",
    description:"Many people ask how important is coding for cybersecurity and the lawyerly answer is:Well",
    footer:"22 June 2022 . No Comments",
    category:"cs"
  },{
    img:ds1,
    title:"Top 10 High Paying Non-Coding Jobs in Data Sceince in 2024",
    description:"Are you someone who’s not interested in coding, but wants to get placed in tech",
    footer:"28 November 2023 . No Comments",
    category:"ds"
  },{
    img:ds2,
    title:"Impact of certification programs on Hiring Data Scientists",
    description:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
    footer:"15 November 2023 . No Comments",
    category:"ds"
  },{
    img:ds3,
    title:"Top Product-Based Companies for Data Science Freshers",
    description:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    footer:"10 November 2023 . No Comments",
    category:"ds"
  },
  {
    img:ds4,
    title:"What is the Difference between data Science and Data Engineering?",
    description:"India has been making some serious waves in the world of data. Just like the",
    footer:"8 November 2023 . No Comments",
    category:"ds"
  },
  {
    img:ds5,
    title:"Top 10 Data Science Tools in 2024",
    description:"Data Science is an in-demand profession and will continue growing in the coming years. From",
    footer:"1 November 2023 . No Comments",
    category:"ds"
  },
  {
    img:ds6,
    title:"Best data Science Books to Learn in 2024",
    description:"Today, we’re going to talk about something really cool: data science. It’s all about using",
    footer:"26 October 2023 . No Comments",
    category:"ds"
  },
  {
    img:cr1,
    title:"UI/UX Designer Job Description and Roles & Responsibilities",
    description:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
    footer:"13 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:cr2,
    title:"Top 5 IT Jobs for Economics Students",
    description:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities fo",
    footer:"4 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:cr3,
    title:"Top IT Jobs for Commerce students: A Lucrative Career Path",
    description:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
    footer:"2 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:cr4,
    title:"Automation Test Engineer Resume",
    description:"The world is moving towards automating the testing of products in order to increase work",
    footer:"1 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:cr5,
    title:"Professional Civil Engineer Resume:A Guide to Attract Employers in 2024",
    description:"The world is moving towards automating the testing of products in order to increase work",
    footer:"1 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:cr6,
    title:"9 Best Product-Based Companies for Project Management",
    description:"In today’s tech-driven world, the demand for project managers is higher than before. The workload",
    footer:"1 December 2023 . No Comments",
    category:"cr"
  }
  ]
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/All' element={<Cards data={data}></Cards>}></Route>
      <Route path='/FullStack' element={<Cards data={data} ></Cards>}></Route>
      <Route path='/DataScience' element={<Cards data={data} ></Cards>}></Route>
      <Route path='/CyberSecurity' element={<Cards data={data} ></Cards>}></Route>
      <Route path='/Career' element={<Cards data={data} ></Cards>}></Route>
      <Route path="*" element={<Navigate to="/All"></Navigate>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App