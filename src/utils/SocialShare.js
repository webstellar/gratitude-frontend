// Use this if you are are a developer and testing app on local machine
const defaultURL = `https://socialcoinproj.herokuapp.com/appreciation/62e78959fd6db6181a784780`;

export const shareOnLinkedIn = () => {
    const URL = `https://www.linkedin.com/sharing/share-offsite/?url=${document.URL}`;
    window.open(URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');   
}

export const shareOnFacebook = () => {
    const URL = `https://www.facebook.com/sharer/sharer.php?u=${document.URL}&hashtag=%23socialcoin`;
    window.open(URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}
