import React from 'react';

import VideoItem from './video_item';


export default class ListVideoItems extends React.Component{
    render(){
        return(
            
               <div className="list_video_items">{this.props.videos.map( (video, index)=>
                    <VideoItem key={index}
                                video={video}
                                onVideoSelect={this.props.onVideoSelect}
                                />
                                
                            )
               }
               </div>
            
        );
    }
};