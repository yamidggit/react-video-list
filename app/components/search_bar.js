import React from  'react';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={query: ""};
    }
    render(){
        return(
            <div className="search_bar">
               
                <input placeholder="Search"
                    value={this.state.query}
                    onChange={(e)=>{
                        this.setState({query: e.target.value});
                        
                    }}
                />
                <span  id="search_button" 
                    onClick={(e)=>{
                        this.props.OnSearch(this.state.query);
                        
                    }}>
                    <img className="img_button" src="../app/images/search-button.PNG" height="24px" />
                </span>
                
            </div>
        );
    }
};


