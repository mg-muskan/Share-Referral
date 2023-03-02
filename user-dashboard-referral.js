let copyText = document.getElementById('user-referral');
let copyReferral = document.getElementById('user-ref-copy');

copyReferral.addEventListener('click', function() {
    
    copyText.select();
    copyText.setSelectionRange(0, 149);
    copyText.classList.add('active');
    copyReferral.classList.add('active');

    navigator.clipboard.writeText(copyText.value).then(() => {
        // window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyReferral.classList.remove('active');
            copyText.classList.remove('active');
        }, 1500);
    });

})

var sharebtn = document.getElementById('invite-share-btn');

sharebtn.addEventListener('click', () => {
    if (navigator.share) {
        sharebtn.removeAttribute('data-bs-toggle');
        navigator.share ({
            title: 'Share your referral',
            url: 'https://referralLink.com'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
        console.log('Not working.')
        sharebtn.setAttribute('data-bs-toggle', 'modal');
    }
});