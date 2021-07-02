const main = document.querySelector(".outer-wrapper");
const wrapperPos = document.querySelector(".wrapper")
const scrollElement = document.querySelector(".last-name");
const scrollElement1 = document.querySelector(".first-name");
const scrollElement2 = document.querySelector(".portrait");
const scrollElement3 = document.querySelector(".img-work");
const scrollElement4 = document.querySelector(".bio-text-1");
const scrollElement5 = document.querySelector(".bio-text-2");
const scrollElement6 = document.querySelector(".bio-text-3");
const scrollElement7 = document.querySelector(".bio-text-4");
const scrollElement8 = document.querySelector(".bio-main");

const displayScrollElement = (element) => {
    element.classList.remove("scrolled");
    element.classList.add("init");
};

const hideScrollElement = (element) => {
    element.classList.remove("init");
    element.classList.add("scrolled");
};

const moveX = (element, movement) => {
    element.style.transform = `translateX(${movement}px)`;
};

const handleScrollAnimation = () => {
    const windowWidth = window.innerWidth;
    // console.log(windowWidth);
    const elementLeft = wrapperPos.getBoundingClientRect().left;
    // console.log(elementLeft);
    let movement = (windowWidth - elementLeft) / 10;
    // console.log(movement);
    // console.log(windowWidth * -1);
    moveX(scrollElement2, movement);

    if (elementLeft < (windowWidth * -1) + 1) {
        hideScrollElement(scrollElement);
        hideScrollElement(scrollElement1);
        let movement2 = (windowWidth + elementLeft) * -1/10;
        moveX(scrollElement3, movement2);
    }
    if (elementLeft > -0.25) {
        displayScrollElement(scrollElement);
        displayScrollElement(scrollElement1);
    }

    if (elementLeft < (windowWidth * -1) * 0.66) {
        displayScrollElement(scrollElement4);
        displayScrollElement(scrollElement5);
        displayScrollElement(scrollElement6);
        displayScrollElement(scrollElement7);
        displayScrollElement(scrollElement8);
        if (elementLeft < (windowWidth * -1) * 2) {
            hideScrollElement(scrollElement4);
            hideScrollElement(scrollElement5);
            hideScrollElement(scrollElement6);
            hideScrollElement(scrollElement7);
            hideScrollElement(scrollElement8);
        }
    }

    if (elementLeft > (windowWidth * -1) * 0.05) {
        hideScrollElement(scrollElement4);
        hideScrollElement(scrollElement5);
        hideScrollElement(scrollElement6);
        hideScrollElement(scrollElement7);
        hideScrollElement(scrollElement8);
    }


};

main.addEventListener('scroll', () => {
    handleScrollAnimation();
});