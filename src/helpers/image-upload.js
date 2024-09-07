import {storage} from "../services/firebase"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";

export const handleImageEdit = (currentImage, imageUpload) => {
    return new Promise((resolve, reject) => {
        if (imageUpload === null) resolve(currentImage);
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef,imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
         
   
                resolve(url);
            }).catch(reject);
        }).catch(reject);
    });
}

export const handleImageCreate = (imageUpload) => {
    return new Promise((resolve, reject) => {
        if (imageUpload === null) resolve(null);
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef,imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
         
   
                resolve(url);
            }).catch(reject);
        }).catch(reject);
    });
}