import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const CreateTags = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        toast.success(`#${data.tag} created.`)
        // reset()
    };
    return (
        <div className='w-40'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div>
                    <label htmlFor="tag">Tag Name *</label>
                    <input
                        id="tag"
                        type="text"
                        {...register('tag', { required: true, minLength: 10, maxLength: 40 })}
                    />
                    {errors.tag?.type === 'minLength' && <p className='errors'>Title should be minimum 10 character long</p>}
                    {errors.tag?.type === 'maxLength' && <p className='errors'>Title should be maximum 40 character long</p>}
                </div>
                <input type="submit" className='submit-btn' />
            </form>
        </div>
    )
}

export default CreateTags