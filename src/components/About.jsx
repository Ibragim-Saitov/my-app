import React from 'react'

const About = () => {
    const data = [
        {
            cover: 'https://img.freepik.com/free-photo/portrait-of-a-cheerful-man-in-a-white-shirt-standing_171337-12073.jpg?w=2000',
            catgeory: "ABOUT ME",
            title: "Creative Software Engineer based in New York, Usa",
            desc: "I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have anquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design progress, from discussion and collaboration."
            },
            ]
            
        
  return (
    <>
      <section className='about'>
        <div className='container flex'>
                {data.map((value) => {
                    return(
                        <> 
                       <div className='left row'>
                        <img src={value.cover} alt='' />
                       </div>
                       <div className='right row'>
                        <span className='baget'>{value.catgeory}</span>
                        <h2>{value.title}</h2>
                        <p>{value.desc}</p>
                        <button className='primary-btn'>Download CV</button>
                       </div>
                       </>
                    )
                })}
        </div>
      </section>
    </>
  )
 }


export default About;
