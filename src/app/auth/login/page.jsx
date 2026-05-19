'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';


import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
 const onSubmit = async (e) => {
  e.preventDefault();
  const formData = await new FormData(e.target);
  const user = await Object.fromEntries(formData.entries());
  console.log(user)


  const { data, error } = await authClient.signIn.email({
   email: user.email,
   password: user.password,
   rememberMe: true,

  });
  if (data) {
   alert('user login successfully')
   redirect('/')
  } if (error) {
   alert(error)
  }


 }
 const loginWithGoogle = async () => {
  const data = await authClient.signIn.social({
   provider: 'google',
   callbackURL: '/dashboard'
  })
  if (data) {
   alert('Google login successfully')
  }



 }
 return (
  <div  >
   <div className='mt-10 flex items-center justify-center'>
    <Card className="border">
     <Form onSubmit={onSubmit} className="flex  flex-col gap-4">
      <TextField
       isRequired
       name="email"
       type="email"
       validate={(value) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
         return "Please enter a valid email address";
        }
        return null;
       }}
      >
       <Label>Email</Label>
       <Input placeholder="john@example.com" />
       <FieldError />
      </TextField>
      <TextField
       isRequired
       minLength={8}
       name="password"
       type="password"
       validate={(value) => {
        if (value.length < 8) {
         return "Password must be at least 8 characters";
        }
        if (!/[A-Z]/.test(value)) {
         return "Password must contain at least one uppercase letter";
        }
        if (!/[0-9]/.test(value)) {
         return "Password must contain at least one number";
        }
        return null;
       }}
      >
       <Label>Password</Label>
       <Input placeholder="Enter your password" />
       <Description>
        Must be at least 8 characters with 1 uppercase and 1 number
       </Description>
       <FieldError />
      </TextField>
      <div className="flex justify-center gap-2">
       <Button className={"rounded-none w-full bg-cyan-500"} type="submit">
        Login
       </Button>

      </div>
     </Form>

     <div className="flex justify-center items-center gap-3">

     </div>
     <div>
      <Button
       onClick={loginWithGoogle}
       variant="outline"
       className={"w-full text-cyan-500 rounded-none"}
      >
       <FaGoogle /> Sign in with Google
      </Button>
     </div>
    </Card>
   </div>
  </div>
 );
};

export default LoginPage;