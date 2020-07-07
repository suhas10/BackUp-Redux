import React,{ Component } from "react";
import {connect} from "react-redux"
import { fetchPost } from "../actions/postAction";

class PostFeed extends Component{
    
    componentDidMount(){
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render(){
        const postFeeds = this.props.posts.map( post=>(
            <div key = {post.id}>
                <label>Title:</label>
                <h4> { post.title } </h4> <br/>
                
                <label>Body:</label>
                <p> {post.body} </p> <br/>
            </div>
         ) );
        return(
            <div>
                { postFeeds }
            </div>
        )
    }
}

const mapStateToProps = state=> ({
    posts: state.posts.items,
    newPost : state.posts.item
})
export default connect(mapStateToProps, { fetchPost } )(PostFeed)