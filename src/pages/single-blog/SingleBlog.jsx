import React from 'react'

const blog = {
    title: 'An Exciting, life long Service',
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--sqXFkEvv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png',
    author: 'Emdadul Islam',
    subTitle: 'Fascinating story about a Elephant and a dog.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis minus quas iusto, perspiciatis ab similique corporis inventore nihil hic aliquam eveniet delectus provident praesentium quis, odit dolorem id consequatur nesciunt.',
    createdAt: '2 December 2022',
    lastUpdate: '8 December 2022',
    tags: ['wild-life', 'inspiring']
}


const SingleBlog = () => {
    return (
        <div className='single-blog-container'>
            <img src={blog.img} alt=""/>
            <div>
                <p>{blog.title}</p>
                <p>{blog.subTitle}</p>
                <p>{blog.author}, {blog.createdAt}</p>
            </div>
        </div>
    )
}

export default SingleBlog