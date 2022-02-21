import Image from 'next/image'
import React from 'react'

const ImageComp = ({ src, alt }) => {
    return (
        <Image src={src} alt={alt} width='100%' height="100%" />
    )
}

export default ImageComp