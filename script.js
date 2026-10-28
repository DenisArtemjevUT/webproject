
/*prfile button*/
const profileButton = document.getElementById("profBtn");
const profBox = document.getElementById("infBox");

console.log(profileButton);
console.log(profBox);



profileButton.addEventListener("click", function () {
    console.log("Button pressed");
    profBox.hidden = !profBox.hidden;
});

async function loadPosts() {
    const response = await fetch("./posts.json")
    /* const response = await fetch("https://api.npoint.io/8c32942fe1fd125ff4ac") */
    const data = await response.json()
    const posts = data.posts
    const postsContainer = document.getElementById("posts");

    posts.forEach(function (post) {
        const article = document.createElement("article")
        article.className = "post";

        const text = document.createElement("p")
        text.textContent = post.text
        text.className = "place"

        postsContainer.appendChild(article)

        const avatar = document.createElement("img")
        avatar.src = post.author.avatar
        avatar.alt = "Account avatar"
        avatar.className = "avatar"

        const like = document.createElement("p")
        like.textContent = post.likes
        like.className = "like"

        const date = document.createElement("p")
        date.textContent = new Date(post.createTime).toLocaleString("et-EE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
        date.className = "date"

        const postHeader = document.createElement("div")
        postHeader.className = "post-header"


        postHeader.appendChild(date)
        postHeader.appendChild(avatar)
        article.appendChild(postHeader)


        if (post.image != null) {
            const image = document.createElement("img")
            image.src = post.image.src
            image.alt = post.image.alt
            image.className = "post-image"

            article.appendChild(image)
        }

        article.appendChild(text)
        article.appendChild(like)
    });



    console.log(posts)
}

loadPosts();