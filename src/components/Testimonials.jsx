import React from 'react'

const Testimonials = () => {
    const data = [
        {
            id: 1,
            desc: "I purchased the theme a few weeks ago. I had some issues with the theme, I asked customer support to help me with and they were helpful and kind to help me with all my problems. I definitely recommend this theme to everyone.",
            cover: "https://avatars.mds.yandex.net/i?id=c0ec7127f4e8fa9797753cb3e12545cc3a94c8a3-8981832-images-thumbs&n=13",
            name: "Justin Bider",
            catgeory: "Web Designer",
        }
    ]
  return (
    <>
      <section className='Testimonials'>
        <div className="container flexSB">
            <div className="left row">
                <span className='baget'>Testimonials</span>
                <h1 className='title'>What clients say about my Testimonials templates</h1>
            </div>
            <div className="right row">
                {data.map((val) => {
                    return (
                    <div className="box">
                      <p>{val.desc}</p>
                        <div className="details flex">
                          <div className="img">
                           <img src={val.cover} alt="" />   
                        </div>
                        <div className="name">
                        <h3>{val.name}</h3>
                        <p>{val.catgeory}</p>
                        </div>               
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
