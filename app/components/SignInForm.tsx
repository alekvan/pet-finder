'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignInInputData } from '../dtos';

export default function App() {
  const inputStyle =
    'border-2 focus:border-solid focus:border-orange-dark focus:outline-none px-2 rounded-md h-12';

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignInInputData>({
    mode: 'onTouched',
  });
  const onSubmit: SubmitHandler<SignInInputData> = (data) => console.log(data);

  console.log(watch('username'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-center w-full h-70vh mx-auto bg-gradient-to-br from-blue-light'
    >
      <div className='w-80 flex-col self-center h-fit'>
        <div className='flex flex-col h-28'>
          <label htmlFor='username' className='text-lg font-semibold'>
            Username
          </label>
          <input
            defaultValue='user123'
            {...register('username', { required: true })}
            className={inputStyle}
            id='username'
          />
          {errors.username && (
            <span className='text-red-700'>This field is required</span>
          )}
        </div>

        <div className='flex flex-col h-28'>
          <label htmlFor='password' className='text-lg font-semibold'>
            Password
          </label>
          <input
            {...register('password', { required: true, maxLength: 255 })}
            className={inputStyle}
            type='password'
            id='password'
          />
          {errors.password && (
            <span className='text-red-700'>This field is required</span>
          )}
        </div>

        <div className='w-full flex justify-center'>
          <button
            type='submit'
            className='cursor-pointer w-1/2 shadow-lg rounded hover:bg-orange-dark font-nunito my-4 h-10 text-lg font-semibold bg-orange-light text-blue-dark'
          >
            Логин
          </button>
        </div>
      </div>
    </form>
  );
}
