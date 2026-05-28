import Button from '@/components/button';
import React from 'react'

export default async  function Home  () {

  const res = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
  const data = await res.json();
  console.log(data)
  return (
    <div className='p-10 bg-gray-600' >
      <h1 className='text-3xl font-bold underline'>
        Next.js 13.4 App Router with Server Components
      </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sequi laboriosam, laudantium accusamus officia excepturi aperiam neque nesciunt voluptatem ad ullam, quas repellat quisquam magnam! Ut tenetur iure deleniti incidunt.
      Vel cupiditate similique molestias voluptatem laborum est fuga neque dolor? Libero, excepturi nihil modi quam tempora delectus blanditiis non, quaerat cumque at repudiandae aperiam quo accusamus ex iste quia. Ab!
      </p>
      <Button />
    </div>
  )
}

