import React from 'react'

const DynamicDocsPage = async({params}  ) => {
    const {slug} = await params

    console.log(slug)
  return (
    <div>
      <h1>Dynamic Page Docs  </h1>
    </div>
  )
}

export default DynamicDocsPage
