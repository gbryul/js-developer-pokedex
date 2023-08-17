

function loadDetails(number){
    const moreDetails = []
    moreDetails[number] = document.getElementById(`moreDetails${number}`)


        if(moreDetails[number].style.display == "block"){
            moreDetails[number].style.display = "none"
        }
        else
        {
            moreDetails[number].style.display = "block"
        }
}