import React,{Component} from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/postAction";

class AddPost extends Component{
    constructor(props){
        super(props);

        this.state = {
            title :'',
            body : ''
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    onChange(event){
        this.setState( {[event.target.name]: event.target.value} )
    }

    handleSubmit(event){
        event.preventDefault();
        const post = {
            title: this.state.title,
            body : this.state.body
        }
        
        this.props.addPost(post)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Title: </label>
                    <input type = "text" name="title" value = {this.state.title} onChange={this.onChange}/> <br/>
                    <label>Body:</label>
                    <textarea  name="body" onChange={this.onChange} value = {this.state.body}  />           <br/>     

                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}



export default connect(null, { addPost } )( AddPost);
