import React from 'react'
import '../Styles/Movies.css'
import VideoPlayer from 'react-player'
import Gallery1 from "../Images/musicgallery1.jpg";


export default function Movies() {
       const poster = Gallery1;

       return (
              <div className="moive" id="video">
                     <div className="moiveHeading">
                            <h1 className="moiveHeadingText">VIDEO</h1>
                     </div>
                     <div className="VideoContainer">

                            <div className="secondVideo">
                                   <VideoPlayer
                                          poster="../Videos/NewBandSong.mp4"
                                          className='video2'
                                          width="100%"
                                          height="500px"
                                          controls={true}
                                          url="https://www.youtube.com/watch?v=n9_KJP7Meek&ab_channel=AnythingButHuman"
                                   />
                            </div>
                            <div className="firstVideo">
                                   <VideoPlayer
                                          poster={poster}
                                          className='video1'
                                          url="https://www.youtube.com/watch?v=VEjkbudsTPw&ab_channel=AnythingButHuman"
                                          controls={true}
                                   />
                                   <VideoPlayer
                                          poster="../Videos/NewTheme.mp4"
                                          className='video3'
                                          // width="100%"
                                          // height="auto"
                                          url="https://www.youtube.com/watch?v=-TiNLIQIvJA&ab_channel=AnythingButHuman"
                                          controls={true}
                                   />
                            </div>

                     </div>
              </div>
       )
}
