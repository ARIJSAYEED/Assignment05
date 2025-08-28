// like button calulation 
let likes = document.getElementsByClassName('likes');
for (const like of likes) {
    like.addEventListener('click', function () {

        let totalLikeCount = parseInt(document.getElementById('total-like-count').innerText);
        totalLikeCount = totalLikeCount + 1;
        document.getElementById('total-like-count').innerText = totalLikeCount;

    })
}

// Call button

let callBtns = document.getElementsByClassName('call-btns');

for (const callbtn of callBtns) {
    callbtn.addEventListener('click', function () {
        let totalCoinCount = document.getElementById('total-coin-count').innerText;


        if (totalCoinCount >= 20) {
            let cards = this.closest('.cards');
            let serviceName = cards.querySelector('.service-names').innerText;
            let serviceNumber = cards.querySelector('.service-numbers').innerText;
            alert(`📞 Calling ${serviceName} ${serviceNumber}`);

            let coinPoint = 20
            let totalCoinCount = document.getElementById('total-coin-count').innerText;
            totalCoinCount = totalCoinCount - coinPoint
            document.getElementById('total-coin-count').innerText = totalCoinCount

        }
        else {
            alert('you cant make the call')
        }
    })
}

