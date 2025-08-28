// like button calulation 
let likes = document.getElementsByClassName('likes');
for (const like of likes) {
    like.addEventListener('click', function () {

        let totalLikeCount = parseInt(document.getElementById('total-like-count').innerText);
        totalLikeCount = totalLikeCount + 1;
        document.getElementById('total-like-count').innerText = totalLikeCount;

    })
}

