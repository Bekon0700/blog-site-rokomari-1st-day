import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const PostBlog = () => {
  const [tags, setTags] = useState([])
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    const formData = {
      ...data,
      tags: tags
    }
    console.log(formData)
    reset()
  };
  // console.log(errors);

  const selectChange = (e) => {
    const val = e.target.value
    toast.success(`${val}`)
    if (!tags.includes(val)) {
      setTags([...tags, val])
    }
  }

  const deleteTag = (tagName) => {
    const remainingTag = tags.filter(el => el != tagName)
    setTags([...remainingTag])
  }

  return (
    <div className='w-40'>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div>
          <label htmlFor="title">Title *</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: true, minLength: 30, maxLength: 100 })}
          />
          {errors.title?.type === 'minLength' && <p className='errors'>Title should be minimum 30 character long</p>}
          {errors.title?.type === 'maxLength' && <p className='errors'>Title should be maximum 100 character long</p>}
        </div>
        <div>
          <label htmlFor="subTitle">Sub Title *</label>
          <input
            id="subTitle"
            type="text"
            {...register('subTitle', { required: true, minLength: 30, maxLength: 150 })}
          />
          {errors.subTitle?.type === 'minLength' && <p className='errors'>Title should be minimum 50 character long</p>}
          {errors.subTitle?.type === 'maxLength' && <p className='errors'>Title should be maximum 150 character long</p>}
        </div>
        <div>
          <label htmlFor="img">Image URL *</label>
          <input
            id="img"
            type="text"
            {...register('img', { required: true})}
          />
          {errors.img?.type === 'required' && <p className='errors'>An Image link is required.</p>}
        </div>
        <div>
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            type="text"
            {...register('description', { required: true, minLength: 200, maxLength: 1000 })}
          />
          {errors.description?.type === 'minLength' && <p className='errors'>Title should be minimum 200 character long</p>}
          {errors.description?.type === 'maxLength' && <p className='errors'>Title should be maximum 1000 character long</p>}
        </div>
        <div>
          <label htmlFor="tags">Tags *</label>
          <select id="tags" onClick={selectChange}>
            <option value="wildLife" >wildLife</option>
            <option value="camera">camera</option>
            <option value="technology">technology</option>
          </select>
        </div>
        {
          tags.length ?
            <div className='tag-section'>
              {
                tags.map((el, id) => <div key={id} className='tag'>
                  <p>#{el}</p>
                  <button onClick={() => deleteTag(el)}>X</button>
                </div>
                )
              }
            </div>
            :
            ''
        }

        <input type="submit" className='submit-btn' />
      </form>
    </div>
  )
}

export default PostBlog