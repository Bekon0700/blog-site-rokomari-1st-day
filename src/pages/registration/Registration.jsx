import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Registration = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        // reset()
    };
    return (
        <div className='w-40'>
            <form onSubmit={handleSubmit(onSubmit)} className='form'>
                <div>
                    <label htmlFor="name">Name *</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email *</label>
                    <input
                        id="email"
                        type="text"
                        {...register('email', { required: true })}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password *</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: true })}
                    />
                </div>
                <input type="submit" className='submit-btn' />
            </form>
            <p className="py display-f">Already have an account?
                <Link to='/login' className="">log in</Link>
            </p>
        </div>
    )
}

export default Registration