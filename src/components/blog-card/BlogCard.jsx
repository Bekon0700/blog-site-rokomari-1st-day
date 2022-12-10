import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'

const BlogCard = ({ el }) => {
    return (
        <div className='blog-card'>
            <Link to='/blog'>
                <img src={el.img} alt="" />
            </Link>
            <div className='card-container'>
                <div className='tags-container'>
                    {
                        el.tags.map((tag, id) => <p key={id} className='card-tags'>#{tag}</p>)
                    }
                </div>
                <div className='card-title-top'>
                    <Link to='/blog' className='card-title'>{el.title}</Link>
                    <p className='card-author'>{el.author}</p>
                </div>
                <p className='card-description'>{el.description}</p>
                <Link to='/blog' className='read-more-btn'>Read-More <CgArrowLongRight /></Link>
            </div>
        </div>
    )
}

export default BlogCard