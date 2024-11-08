

if (localStorage.getItem('user') === null) {
    //window.location.href = 'logout.html';
}




const burgerButton = document.getElementById('burgerButton');
const leftPanel = document.querySelector('.LeftPanel');





burgerButton.addEventListener('click', () => {
    leftPanel.style.display = leftPanel.style.display === 'none' ? 'block' : 'none';
});



window.addEventListener('orientationchange', () => {
    leftPanel.style.display = window.matchMedia("(orientation: landscape)").matches ? 'block' : 'none';
});





document.addEventListener('DOMContentLoaded', function() {
    const forYou = document.querySelector('.ForYou');
    const following = document.querySelector('.Following');

    forYou.addEventListener('click', function() {
        forYou.classList.add('active');
        following.classList.remove('active');
    });

    following.addEventListener('click', function() {
        following.classList.add('active');
        forYou.classList.remove('active');
    });

    
});



document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    const tags = document.getElementById('tags').value;
    const youtubeLink = document.getElementById('youtubeLink').value;

    let videoId;
    if (youtubeLink.includes('shorts')) {
        videoId = youtubeLink.split('/shorts/')[1].split('?')[0];
    } else if (youtubeLink.includes('youtu.be')) {
        videoId = youtubeLink.split('youtu.be/')[1];
    } else {
        videoId = youtubeLink.split('v=')[1]?.split('&')[0];
    }

    loadPosts(postContent, tags, videoId);

    document.getElementById('postContent').value = '';
    document.getElementById('tags').value = '';
    document.getElementById('youtubeLink').value = '';
});





function selectParagraphsInTendingList() {
    const tendingList = document.getElementById('tending_list');
    if (tendingList) {
        const paragraphs = tendingList.getElementsByTagName('p');
        return Array.from(paragraphs);
    }
    return [];
}




let trending = ['#hey', '#hello', '#hi', '#howdy', '#hola', '#bonjour', '#ciao', '#hallo', '#salut', '#ola']; // Custom trends, will be fetched from the server later



function getMostTrending() {
    return trending;
}



function putTrendInList() {
    let x = 1;
    const tendingList = document.getElementById('trending_List');
    const trending = getMostTrending();
    trending.forEach(trend => {
        const p = document.createElement('p');
        p.textContent =  x + ". __  " + "" + trend;
        p.classList.add('trending_p'); 

        tendingList.appendChild(p);
        x++;
    });
}



putTrendInList();



