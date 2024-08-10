function navigate(sectionEd){
    const selection = document.getElementById(sectionEd);
    if (selection) {
        selection.scrollIntoView({behavior:"smooth"})

    }

}