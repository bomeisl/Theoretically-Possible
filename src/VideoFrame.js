const VideoFrame = ({url}) => {
    return (
        <iframe width="100%" height="700px" src={url}
                title="Master Quantum Computing" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
    );
}

export default VideoFrame;

