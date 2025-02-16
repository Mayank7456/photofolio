import styles from "../AlbumCollection/AlbumCollection.module.css";
import Photos from "../ImageCollection/ImageCollection";
import back from "../../assets/back.png";

const Album = ({imageFormStatus, handleImageForm, handleSwitchRender, currentAlbum}) => {

    console.log(currentAlbum)
    return(
        <section className={styles.albumSection}  >
            <div className={styles.albumContent} >
                <div className={styles.albumHeader} >
                    <div className={styles.backButton} onClick={handleSwitchRender} >
                        <img src={back} alt="X" width="30px" />
                    </div>
                    <div className={styles.albumHeading} >Album: <span className={styles.albumName} >{currentAlbum.album}</span> </div>
                    <div className={styles.AlbumButton} onClick={handleImageForm} id={imageFormStatus? "red" : "blue"} >{imageFormStatus? "cancel":"Add image"}</div>
                </div>
                <Photos currentAlbum={currentAlbum} handleImageForm={handleImageForm}  />
            </div>
        </section>
    )
}

export default Album;