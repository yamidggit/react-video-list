import React from 'react';
import Search from 'youtube-api-search';

import SearchBar from './search_bar';
import ListVideoItems from './list_video_items';

import VideoDetail from './video_detail';

const API_KEY="AIzaSyASKyrctJLkMTgyGePNPL3vWRtBRVXi7io";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo: null
        };
        this.ApiSearch();
    }
    
    ApiSearch(query){
        query=query||"dogs";
        const self=this;
        
        Search({term: query, key: API_KEY}, function(data) { 
            self.setState(
                { 
                    videos: data,
                    selectedVideo: data[0]
                }
            );
        });
    }
    
    render(){
        
        return (
            <div className="app">
                
                    <h1>{this.props.name}</h1>
                    <SearchBar OnSearch={(query)=>this.ApiSearch(query)}/>
                    <VideoDetail video={this.state.selectedVideo} />
                
                
                    <ListVideoItems videos={this.state.videos}
                            onVideoSelect={(video)=>this.setState({selectedVideo:video})}
                    />
              
            </div>
        );
    }
};


