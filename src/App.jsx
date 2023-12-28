// import React from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Cards } from './components/Cards'

function App() {
  let data =[
    {
    img:"./src/assets/FullStack/fsd1.webp",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    description:"When you're hiring a full-stack developer, what are the most important things you look for?",
    footer:"15 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:"./src/assets/FullStack/fsd2.webp",
    title:"Top Differences: Full Stack developer vs Software Engineer 2024",
    description:"A Full Stack Developer is a tech all-rounder.They Work on both",
    footer:"15 November . No Comments",
    category:"Fsd"
  },{
    img:"./src/assets/FullStack/fsd3.webp",
    title:"Horizontal vs vertical Scaling for Efficient System design ",
    description:"In the world of system design, envision a digital skyscraper-a multifaceted structure built",
    footer:"10 November 2023 . No Comments",
    category:"Fsd"
  },
  {
    img:"./src/assets/FullStack/fsd4.webp",
    title:"Best Books to Learn Full-Stack Development",
    description:"Are you interested in becoming a full-stack developer but not sure where to start?",
    footer:"9 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:"./src/assets/FullStack/fsd5.webp",
    title:"Top 10 Product-Based Companies for FSD",
    description:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world",
    footer:"8 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:"./src/assets/FullStack/fsdimage.jpg",
    title:"Best Books to Learn Full-Stack Development",
    description:"Are you interested in becoming a full-stack developer but not sure where to start?",
    footer:"9 November 2023 . No Comments",
    category:"Fsd"
  },{
    img:"./src/assets/Cyber/cs1.webp",
    title:"Non-coding jobs in Cybersecurity:A Comprehensive Guide",
    description:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    footer:"4 December 2023 . No Comments",
    category:"cs"
  },{
    img:"./src/assets/Cyber/cs2.webp",
    title:"What Is hacking? Types of Hacking & More",
    description:"Have you ever wondered that hacking is all about? It's a big deal in today's",
    footer:"25 september 2023 . No Comments",
    category:"cs"
  },{
    img:"./src/assets/Cyber/cs3.png",
    title:"Cybersecurity vs Ethical Hacking: Top 10 Differences",
    description:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",
    footer:"27 December 2022 . No Comments",
    category:"cs"
  },{
    img:"./src/assets/Cyber/cs4.gif",
    title:"What is Cybersecurity?  The growing challenges in 2023",
    description:"look around today, we are more relaint on technology and devices",
    footer:"20 December 2022 . 1 Comment",
    category:"cs"
  },
  {
    img:"./src/assets/Cyber/cs5.png",
    title:"8 Different types of Cybersecurity and Threats Involved",
    description:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assests of the organization from",
    footer:"9 November 2022 . 1 Comment",
    category:"cs"
  },
  {
    img:"./src/assets/Cyber/cs6.gif",
    title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity",
    description:"Many people ask how important is coding for cybersecurity and the lawyerly answer is:Well",
    footer:"22 June 2022 . No Comments",
    category:"cs"
  },{
    img:"./src/assets/DS/ds1.webp",
    title:"Top 10 High Paying Non-Coding Jobs in Data Sceince in 2024",
    description:"Are you someone who’s not interested in coding, but wants to get placed in tech",
    footer:"28 November 2023 . No Comments",
    category:"ds"
  },{
    img:"./src/assets/DS/ds2.webp",
    title:"Impact of certification programs on Hiring Data Scientists",
    description:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
    footer:"15 November 2023 . No Comments",
    category:"ds"
  },{
    img:"./src/assets/DS/ds3.webp",
    title:"Top Product-Based Companies for Data Science Freshers",
    description:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
    footer:"10 November 2023 . No Comments",
    category:"ds"
  },
  {
    img:"./src/assets/DS/ds4.webp",
    title:"What is the Difference between data Science and Data Engineering?",
    description:"India has been making some serious waves in the world of data. Just like the",
    footer:"8 November 2023 . No Comments",
    category:"ds"
  },
  {
    img:"./src/assets/DS/ds5.webp",
    title:"Top 10 Data Science Tools in 2024",
    description:"Data Science is an in-demand profession and will continue growing in the coming years. From",
    footer:"1 November 2023 . No Comments",
    category:"ds"
  },
  {
    img:"./src/assets/DS/ds6.webp",
    title:"Best data Science Books to Learn in 2024",
    description:"Today, we’re going to talk about something really cool: data science. It’s all about using",
    footer:"26 October 2023 . No Comments",
    category:"ds"
  },
  {
    img:"./src/assets/Cr/cr1.jpg",
    title:"UI/UX Designer Job Description and Roles & Responsibilities",
    description:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
    footer:"13 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:"./src/assets/Cr/cr2.webp",
    title:"Top 5 IT Jobs for Economics Students",
    description:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities fo",
    footer:"4 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:"./src/assets/Cr/cr3.webp",
    title:"Top IT Jobs for Commerce students: A Lucrative Career Path",
    description:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
    footer:"2 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:"./src/assets/Cr/cr4.webp",
    title:"Automation Test Engineer Resume",
    description:"The world is moving towards automating the testing of products in order to increase work",
    footer:"1 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:"./src/assets/Cr/cr5.webp",
    title:"Professional Civil Engineer Resume:A Guide to Attract Employers in 2024",
    description:"The world is moving towards automating the testing of products in order to increase work",
    footer:"1 December 2023 . No Comments",
    category:"cr"
  },
  {
    img:"./src/assets/Cr/cr6.webp",
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