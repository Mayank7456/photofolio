import { useRef } from "react";
import styles from "./ImageForm.module.css";
import { toast } from "react-toastify";

const AddImages = ({AddPhoto}) => {
    let titleRef = useRef(null);
    let urlRef = useRef(null);

    function isValidImageUrl(url, callback) {
        const img = new Image();
        img.onload = () => callback(true); 
        img.onerror = () => callback(false); 
        img.src = url;
    }

    function handleSubmit(e){
        e.preventDefault();

        isValidImageUrl(urlRef.current.value, (isValid) => {
            if (!isValid ) {
                toast.warning("Please enter correct url")
                return;
            }
            const photoData = {
                title: titleRef.current.value,
                url: urlRef.current.value
            }
    
            AddPhoto(photoData);
    
            titleRef.current.value = "";
            urlRef.current.value = "";
        })
    }
    
    return(
        <form className={styles.addImageForm} onSubmit={handleSubmit} >
            <p className={styles.FormLabel} >Add Images </p>
            <div className={styles.container} >
                <input placeholder="Title" ref={titleRef} required />
                <input placeholder="Image URL" ref={urlRef} required />
                <div className={styles.buttonContainer} > 
                    <button className={styles.resetButton} type="reset" >Clear</button>
                    <button className={styles.submitButton} type="submit" >Create</button>
                </div>
            </div>
        </form>
    )
}

export default AddImages;