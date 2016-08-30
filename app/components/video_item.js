import React from 'react';

export default class VideoItem extends React.Component {
    render(){
        
        return(
           
                <div className="video_item" onClick={()=>this.props.onVideoSelect(this.props.video)}>
                    <div className="col-3"><img src={this.props.video.snippet.thumbnails.medium.url}></img></div>
                    <div className="col-8"><h3>{this.props.video.snippet.title}</h3></div>
                    
                </div>
    
        );
    }
};