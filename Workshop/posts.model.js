class PostsModel {
    apiUrl = "https://jsonplaceholder.typicode.com/posts";
    // CRUD
    
    // READ
    getAllPosts() {
        return fetch(this.apiUrl).then(res => res.json());
    }

    getPostbyId(is) {
        return fetch(`${this.apiUrl}/${id}`).then(res => res.json());
    }
    // CREATE
    createPost(title, body, user) {
        return fetch(this.apiUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(post)
        }).then(res => res.json());
    }
    // UPDATE
    updatePost(id, post) {
        return fetch(`${this.apiUrl}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(post)
        })
    }   

    // DELETE
    deletePost(id){
        return fetch(`${this.apiUrl}/${id}`, {
            method: "DELETE",
        }).then(res => res.json());
    }
    getApiData(id, options) {
        return fetch(this.apiUrl + (id ? `/${id}` : ""), options)
                    .then(res => res.json());
    }
}
