import  { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Cards = ({data}) => {
  let location = useLocation()
  let [details,setDetails] = useState([])
  let [title,setTitle] = useState("")
  let getData = ()=>{
    let array =[]
    let path = location.pathname
    if(path==="/All")
    {
      array = [...data]
      setTitle("Available Courses")
    }
    else if(path==="/FullStack")
    {   
      setTitle("Full Stack Development")
       array = data.filter((e)=>{
        return e.category==="Fsd"
      })
    }
    else if(path==="/DataScience")
    {
      setTitle("Data Sceince")
        array = data.filter((e)=>{
        return e.category==="ds"
      })
    }
    else if(path==="/CyberSecurity")
    {
      setTitle("CyberSecurity")
        array = data.filter((e)=>{
        return e.category==="cs"
      })
    }
    else if(path==="/Career")
    {    
      setTitle("Career oppornuities")
        array = data.filter((e)=>{
        return e.category==="cr"
      })
    }
    setDetails(array)
   
  }
 
  useEffect(()=>{
    getData()
  })
  return (
        <>
        <div className='container-fluid mt-4'>
          <h1 className='h3 text-center  mb-4' >{title}</h1>
        <div className='row   m-2 '>
          {details.map((e,i)=>{

            return <>
                 <div className='col mb-4' key={i}>
          <div className="card" style={{width:"20rem",height:"30rem"}} >
            <img className="card-img-top" src={e.img} alt="Card image"/>
            <div className="card-body">
              <h4 className="card-title">{e.title}</h4>
              <p className="card-text">{e.description}</p>
              <a href="#" style={{color:"red"}}>Read More <i className="fa fa-angle-double-right"></i></a>
            </div>
            <div className='card-footer'>
              <p className='card-text'>{e.footer}</p>
            </div>
          </div> 
          </div>
            </>

          })}
          
        </div>
        </div>
       
        
        </>
  )
}
