import { FETCH_POST, NEW_POST } from "./type";

export const fetchPost= ()=> dispatch=> {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then( post=> dispatch({
                type: FETCH_POST,
                payload: post
            })
        )
}


export const addPost= (postData)=> dispatch=> {
   
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }))
}