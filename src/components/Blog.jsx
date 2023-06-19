import React from 'react'

const Blog = () => {
    const data = [
        {
            id: 1,
            cover: "https://i.pinimg.com/originals/77/e7/66/77e76651f4b0802dafa748712fd921a7.jpg",
            title: "Developers watch out for these burnout symptoms",
            date: "20 MAY 2022",
            name: "BY ALEX WATSON",
        },
        {
            id: 2,
            cover: "https://media.atlasformen.com/webmedia/1080by1242/18/c5/6c/18c56cab89ef99d5adc23e72ea91fed5.jpg",
            title: "How to be appreciated for your hard work as a developer",
            date: "07 APRIL 2022",
            name: "BY BROOK KENNEDY",
        },
        {
            id: 3,
            cover: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663681342_58-mykaleidoscope-ru-p-uverennii-paren-pinterest-58.jpg",
            title: "How designers and developers can collaborate better",
            date: "02 MARCH 2022",
            name: "BY PAOLA ATKINS",
        },
    ]

  return (
    <div>
      <section className='blog'>
        <div className="container">
            <span className="baget">News</span>
                <h1 className="title">Latest News</h1>

                <div className="content grid mtop">
                    {data.map((val) =>{
                        return (
                        <>
                        <div className="box">
                        <div className="box">
                            <img src={val.cover} alt="" />
                            <h2>{val.title}</h2>
                            <span>
                                {val.name} / {val.date}
                            </span>
                        </div>
                        </div>
                        </>
                        )
                    })}
                </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
