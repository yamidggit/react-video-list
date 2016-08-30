import React from  'react';



export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state={query: ""};
    }
    render(){
        return(
            <div className="search_bar">
                <input
                    value={this.state.query}
                    onChange={(e)=>{
                        this.props.OnSearch(e.target.value);
                        this.setState({query: e.target.value});
                        
                    }}
                />
    
            </div>
        );
    }
};


