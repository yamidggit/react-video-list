import React from 'react';

export default class VideoItem extends React.Component {
    render(){
        
        return(
           
            <div className="video_item" onClick={()=>this.props.onVideoSelect(this.props.video)}>
                <div ><img src={this.props.video.snippet.thumbnails.medium.url}></img></div>
                <div className="video_item_title">{this.props.video.snippet.title}</div>
                
            </div>
    
        );
    }
};