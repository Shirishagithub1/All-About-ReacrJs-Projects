const ImageData =  (props) =>{

    const { imageDetails } = props;

    return(
        <div className="border border-primary p-2 m-3 text-center rounded d-flex justify-content-center"  >
            <h6 id ="album">{imageDetails.title}</h6>
            
            <h6 id ="album">Album id: {imageDetails.id}</h6>
            <img id ="head"src={imageDetails.image} alt="pic" height="200px"/>
        </div>
    )
}

export default ImageData;