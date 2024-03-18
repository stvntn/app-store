import React, { useState } from 'react';
import Image from 'next/image';
import { Grid, Paper } from '@mui/material';

    interface ImageData {
        src: string;
        alt: string;
    }

    interface Props {
        images: ImageData[];
    }

    const ImageGallery: React.FC<Props> = ({ images }) => {
        const [currentImage, setCurrentImage] = useState(images[1]);

    const handleThumbnailClick = (image: ImageData) => {
        setCurrentImage(image);
    };

    return (        
        <div style={{ display: 'flex', padding:'0 20px'}}>
            <div style={{display:'flex', flexDirection:'column', marginRight:'10px', height:'100%'}}>
                {images.map((image, index) => (                        
                    <Paper
                        onClick={() => handleThumbnailClick(image)}
                        key={index}
                        elevation={0}
                        style={{
                            cursor: 'pointer',
                            border: `1px solid ${currentImage.src === image.src ? 'black' : 'transparent'}`,
                            borderRadius: '5px',
                            margin: '5px',
                            padding: '2px',
                            boxShadow: `0px 0px 0px ${currentImage.src === image.src ? 'black' : 'transparent'}`
                        }}
                    >
                        <Image src={image.src} alt={image.alt} width={50} height={50} />
                    </Paper>                        
                ))}
            </div>
            <Image src={currentImage.src} alt={currentImage.alt} width={500} height={600} />                
        </div>        
    );
};

export default ImageGallery;