import React from 'react'

const DyanmicSlugPage = async ({ params }: { params: Promise<{ category: string, slug: string }> }) => {
    const {category , slug}  = await params
    return (
        <div>
            <h1>DyanmicSlugPage {category} , {slug}</h1>
        </div>
    )
}

export default DyanmicSlugPage
