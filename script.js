// like button calulation

let likes = document.getElementsByClassName('likes');
for (const like of likes) {
    like.addEventListener('click', function () {

        let totalLikeCount = parseInt(document.getElementById('total-like-count').innerText);
        totalLikeCount = totalLikeCount + 1;
        document.getElementById('total-like-count').innerText = totalLikeCount;

    })
}

// Call button functionality

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


// copy button functionality 
let copyBtns = document.getElementsByClassName('copy-btns')

for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {

        const card = copyBtn.closest('.cards');
        const serviceNumber = card.querySelector('.service-numbers').innerText;
        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert('Copied: ' + serviceNumber);
            })
            .catch(err => {
                console.error('Failed to copy:', err);
            })


        let totalCopyCount = parseInt(document.getElementById('total-copy-count').innerText);
        totalCopyCount = totalCopyCount + 1
        document.getElementById('total-copy-count').innerText = totalCopyCount
    })
}                