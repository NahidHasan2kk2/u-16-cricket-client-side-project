'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const RegisterPage = () => {
 const onSubmit = async (e) => {
  e.preventDefault();
  const formData = await new FormData(e.target);
  const user = await Object.fromEntries(formData.entries());
  console.log(user)




  const { data, error } = await authClient.signUp.email({
   name: user.name,
   email: user.email,
   password: user.password,
   image: user.image

  });
  if (data) {
   alert('Added new user successfully')
   redirect('/auth/login')
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
  <div>
   <div className=' mt-10 flex items-center justify-center'>
    <Card className="border">
     <Form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
      <TextField
       isRequired
       name="name"
       type="text"

      >
       <Label>Name</Label>
       <Input placeholder="Enter your name" />
       <FieldError />
      </TextField>
      <TextField
       isRequired
       name="email"
       type="email"

      >
       <Label>Email</Label>
       <Input placeholder="john@example.com" />
       <FieldError />
      </TextField>
      <TextField
       isRequired
       name="image"
       type="text"

      >
       <Label>Photo Url</Label>
       <Input placeholder="Enter Photo Url" />
       <FieldError />
      </TextField>
      <TextField
       isRequired
       minLength={8}
       name="password"
       type="password"

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
        Register
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

export default RegisterPage;