class PostListView {
    constructor() {
        postModel = new postModel();
    }
    init() {
        this.postsModel.getAllPosts()
            .then(posts => {
                const html = this.buildHtml(posts);
                this.displayPostList(html);
            })
    }
    buildHtml(posts) {
        // const container = document.querySelector("[data-post-container]");

        const fragment  = document.createDocumentFragment();

        for (const post of posts) {
            const p = document.createElement("p");
            const a = document.createElement("a");
            p.append(a);
            a.innerText = post.title;
            a.href = "postDetails.html?id=" + post.id;

            fragment.appendChild(p);
        }
        return fragment;
    }
}

const PostListView = new PostListView();
PostListView.init();