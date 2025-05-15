export function highlightNavButton(val){
    document.getElementById("nav-home").classList = "nav-text-button";
    document.getElementById("nav-projects").classList = "nav-text-button";
    document.getElementById("nav-about").classList = "nav-text-button";
    document.getElementById("nav-contact").classList = "nav-text-button";

    document.getElementById("nav-" + val).classList.add("selected-nav-text-button");
}

export function backToTop(){
    document.getElementById("navbar").scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});
}