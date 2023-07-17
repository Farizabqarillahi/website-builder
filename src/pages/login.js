import React from 'react';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
    const{ register, handleSubmit, formstate : { errors} } = useform();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
    
          <label htmlFor="password">Password</label>
          <input type="password" {...register("password", { required: true })} />
          {errors.password && <span>This field is required</span>}
    
          <input type="submit" value="Sign In" />
          <p>Don't have an account?<a href="/signup">Sign Up</a></p>
        </form>
      );
    }


