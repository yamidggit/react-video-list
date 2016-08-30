import React from 'react';


export default class VideoDeatil extends React.Component{
    url(){
        let url=`https://www.youtube.com/embed/${this.props.video.id.videoId}`;
        return url;
    }
    loading(){
        if(!this.props.video){
            return <div className="video-detail">Video loading... </div>;
                
        }    
        else{
            return(
                <div className= "video-detail">
                    <iframe src={this.url()}></iframe>
                    <div className="description">
                        <h2>{this.props.video.snippet.title}</h2>
                        <p>Description: {this.props.video.snippet.description}</p>
                    </div>
                </div>
            );
        }
      
    }
    render(){
          return <div>{this.loading()}</div>;
    }
    
};