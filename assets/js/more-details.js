const loadMoreDetails = document.getElementById('loadMoreDetails')
const moreDetails = document.getElementById('moreDetails')
let display = 'none';

loadMoreDetails.addEventListener('click', () => {
    if (display == 'none')
    {
        moreDetails.style.display = 'block';
        display = 'block';
    }
    else
    {
        moreDetails.style.display = 'none';
        display = 'none';
    }
})