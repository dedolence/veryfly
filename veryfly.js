function removeShitheads(off=true) {
    // search for verified badges
    const shitHeadBadges = document.querySelectorAll('svg[data-testid="icon-verified"]');
    for (let shitHead of shitHeadBadges) {
        // traverse parents until the article (tweet) is reached, then remove it
        while (shitHead.parentElement) {
            if (shitHead.nodeName == "ARTICLE") {
                shitHead.parentElement.removeChild(shitHead);
                break;
            } else {
                shitHead = shitHead.parentElement;
            }
        }
    }
}

// to account for any new tweets that show up
document.addEventListener("scroll", removeShitheads);

removeShitheads();