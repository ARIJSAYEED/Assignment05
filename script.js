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

let historys = [];
let callBtns = document.getElementsByClassName('call-btns');

for (const callbtn of callBtns) {
    callbtn.addEventListener('click', function () {
        let totalCoinCount = parseInt(document.getElementById('total-coin-count').innerText);

        if (totalCoinCount >= 20) {
            let cards = this.closest('.cards');
            let serviceTitle = cards.querySelector('.service-title').innerText;
            let serviceName = cards.querySelector('.service-names').innerText;
            let serviceNumber = cards.querySelector('.service-numbers').innerText;
            alert(`📞 Calling ${serviceName} ${serviceNumber}`);


            totalCoinCount -= 20;
            document.getElementById('total-coin-count').innerText = totalCoinCount;


            let callData = {
                service: serviceTitle,
                number: serviceNumber,
                date: new Date().toLocaleTimeString()
            };
            historys.push(callData);


            let callHistory = document.getElementById('call-history');
            callHistory.innerHTML = "";

            for (const history of historys) {
                let div = document.createElement('div');
                div.innerHTML = `
                    <div class="bg-gray-100 flex justify-between items-center mt-3 p-4 rounded-lg max-sm:flex-col max-sm:items-start">
                        <div>
                            <h1 class="text-lg font-semibold">${history.service}</h1>
                            <p class="text-gray-600 text-lg">${history.number}</p>
                        </div>
                        <div>
                            <p class="text-lg">${history.date}</p>
                        </div>
                    </div>
                `;
                callHistory.appendChild(div);
            }

        } else {
            alert("❌ You can't make the call (not enough coins)");
        }
    });
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

// Clear button functionality

document.querySelector(".clear-history-btn").addEventListener("click", function () {
    historys = [];
    document.getElementById("call-history").innerHTML = "";
});
