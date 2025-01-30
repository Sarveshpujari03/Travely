import { v2 as cloudinary } from 'cloudinary'
import { cloud_name } from '../constants';
import ErrorHandler from './ErrorHandler';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: `${cloud_name}`, 
    api_key: `${process.env.CLOUDINARY_API_KEY}`, 
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`
  });

const uploadAvatar = async (localPath) => {
    try {
        
        const result = await cloudinary.uploader.upload(localPath);
        fs.unlink(localPath);
        return result.url

    } catch (error) {
        throw new ErrorHandler(500 , "internal server error" , error)
    }
}

export default uploadAvatar;