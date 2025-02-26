import React from 'react'
import education from '../data.js'
const Eduaction = () => {
  return (
 
    <div className='education-container  container ' data-aos="fade-up" data-aos-duration="1500">
        <h1 className='ed-title title' style={{textAlign:"center"}}> MY EDUCATION<span style={{ color: "#08ff88" }}>.</span></h1>
        <div className="timeline mt-5">
           
               {education.map((items)=>{
                return (
                    <div className="edu-content   mb-3" data-aos="fade-up" data-aos-duration="1000">
                    <h3 key={items.id}>{items.title}</h3>
                    <h5>{items.place}</h5>
                    <p className='date'>{items.duration}</p>
                    <p>{items.percentage}</p>
                    </div>

                )
               })}
            
        </div>

    </div>
    
  )
}

export default Eduaction 