export default function Menu({ onSelectVideo, videoValues }){
    return(
        <form onClick={(event) => onSelectVideo(event.target.value)}>
            {
                videoValues.map((value, i) => (
                    <div className="video-inputs">
                        <input type="radio" name="src" key={i} value={value}/>
                        {value}
                    </div>
                ))
            }
        </form>
    )

}