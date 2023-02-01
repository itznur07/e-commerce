import React from 'react'

const BlogCard = ({img, date, title, desc }) => {
  return (
    <>
        <div className='card rounded-2'>
            <div className="card-img">
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className="card-content p-3">
                <p className='text-uppercase c-c-date'>{date}</p>
                <h6 className='c-c-title'>{title}</h6>
                <p className=''>{desc}</p>
                <button className='button border-0 text-uppercase'>Read more</button>
            </div>
        </div>
    </>
  )
}

export default BlogCard