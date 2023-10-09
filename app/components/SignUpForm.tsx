'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpInputData } from '../dtos';

export default function SignUp() {
  const inputStyle =
    'border-2 focus:border-solid focus:border-orange-dark focus:outline-none px-2 rounded-md h-12';
  const inputWrapperStyle = 'flex flex-col h-28';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<SignUpInputData>({
    mode: 'onTouched',
  });
  const onSubmit: SubmitHandler<SignUpInputData> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-center w-full h-full py-12 lg:h-70vh lg:py-0 mx-auto bg-gradient-to-br from-blue-light'
    >
      <div className='w-80 flex-col self-center h-fit'>
        <div className={inputWrapperStyle}>
          <label htmlFor='username' className='text-lg font-semibold w-fit'>
            Username
          </label>
          <input
            placeholder='Enter username'
            {...register('username', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Username needs to be at least 3 characters',
              },
            })}
            className={inputStyle}
            id='username'
          />
          {errors.username && (
            <span className='text-red-700'>{errors.username.message}</span>
          )}
        </div>
        <div className={inputWrapperStyle}>
          <label htmlFor='email' className='text-lg font-semibold w-fit'>
            E-mail
          </label>
          <input
            placeholder='Enter email'
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,
                message: 'Incorrect email format',
              },
            })}
            className='border-2 focus:border-solid focus:border-orange-dark focus:outline-none  px-2 rounded-md h-12'
            type='email'
            id='email'
          />
          {errors.email && (
            <span className='text-red-700'>{errors.email.message}</span>
          )}
        </div>

        <div className={inputWrapperStyle}>
          <label htmlFor='password' className='text-lg font-semibold w-fit'>
            Password
          </label>
          <input
            placeholder='Enter password'
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
              maxLength: 250,
            })}
            className={inputStyle}
            type='password'
            id='password'
          />
          {errors.password && (
            <span className='text-red-700'>{errors.password.message}</span>
          )}
        </div>
        <div className={inputWrapperStyle}>
          <label
            htmlFor='confirmPassword'
            className='text-lg font-semibold w-fit'
          >
            Confirm Password
          </label>
          <input
            placeholder='Confirm password'
            {...register('confirmPassword', {
              required: 'This field is required',
              validate: (value) =>
                watch('password') === value || 'Passwords do not match',
            })}
            className={inputStyle}
            type='password'
            id='confirmPassword'
          />
          {errors.confirmPassword && (
            <span className='text-red-700'>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className='w-full flex justify-center'>
          <button
            type='submit'
            className='cursor-pointer w-1/2 shadow-lg rounded hover:bg-orange-dark font-nunito my-4 h-10 text-lg font-semibold bg-orange-light text-blue-dark'
          >
            Креирај
          </button>
        </div>
      </div>
    </form>
  );
}
