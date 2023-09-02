'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import Map, { MapCordsObj } from './Map';

export type Inputs = {
  example: string;
  exampleRequired: string;
  mapCords: MapCordsObj;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-between w-2/3 mx-auto my-20'
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input
        defaultValue='test'
        {...register('example')}
        className='border-2 border-solid border-red-600 my-1'
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register('exampleRequired', { required: true })}
        className='border-2 border-solid border-red-600 my-1'
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <Map lat={42.0003} lng={21.4} />

      <input
        type='submit'
        className='cursor-pointer w-1/3 self-center border rounded bg-slate-500 my-4'
      />
    </form>
  );
}
