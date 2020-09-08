class PostDetailsView {
    postModel = new PostsModel();
    constructor() {
        const id = this.getPostId();
        console.log(typeof id);
        const post = this.postModel.getPostbyId(id);
        this.hidrateHtml(post);
    }
    getPostId() {
        const params = new URLSearchParams(location.search);
        return params.get("id");
    }
    hidrateHtml(data) {
        post.then(post => {
            const titleElem = document.querySelector(`[data-post = "tile"]`);
            const bodyElem = document.querySelector(`[data-post = "body"]`);

            titleElem.innerText = post.title;
            bodyElem.innerText = post.body;
        });
    }
    hidrateAuthor() {
        
    }
    hidrateComments() {

    }
}


new PostDetailsView();