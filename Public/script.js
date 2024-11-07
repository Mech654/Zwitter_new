const burgerButton = document.getElementById('burgerButton');
const leftPanel = document.querySelector('.LeftPanel');



burgerButton.addEventListener('click', () => {
    leftPanel.style.display = leftPanel.style.display === 'none' ? 'block' : 'none';
});



window.addEventListener('orientationchange', () => {
    leftPanel.style.display = window.matchMedia("(orientation: landscape)").matches ? 'block' : 'none';
});



function loadPosts(postContent, tags = '', videoId = '') {
    const postHtml = `
        <div class="post">
            <div class="postContent">
                <img src="Resources/Profile_photo.png" style="width: 10%; height: 10%">
                <p>${postContent}</p>
                ${tags ? `<p style="color: deepskyblue">${tags}</p>` : ''}
                ${videoId ? `
                <div class="videoContainer">
                    <iframe 
                        src="https://www.youtube.com/embed/${videoId}" 
                        frameborder="10" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                ` : ''}
            </div>
        </div>
    `;
    document.getElementById('posts').innerHTML += postHtml;
}



let posts = {
    1: { "postContent": "This is a post", "tags": "tag1, tag2", "videoId": "videoId1" },
    2: { "postContent": "This is another post", "tags": "tag3, tag4", "videoId": "videoId2" },
    3: { "postContent": "This is a third post", "tags": "tag5, tag6", "videoId": "videoId3" },
    4: { "postContent": "This is a fourth post", "tags": "tag7, tag8", "videoId": "videoId4" },
    5: { "postContent": "This is a fifth post", "tags": "tag9, tag10", "videoId": "videoId5" },
    6: { "postContent": "This is a sixth post", "tags": "tag11, tag12", "videoId": "videoId6" },
    7: { "postContent": "This is a seventh post", "tags": "tag13, tag14", "videoId": "videoId7" },
    8: { "postContent": "This is an eighth post", "tags": "tag15, tag16", "videoId": "videoId8" },
    9: { "postContent": "This is a ninth post", "tags": "tag17, tag18", "videoId": "videoId9" },
    10: { "postContent": "This is a tenth post", "tags": "tag19, tag20", "videoId": "videoId10" },

};



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

    uploadPosts();
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



function uploadPosts() {
    for (const key in posts) {
        const { postContent, tags, videoId } = posts[key];
        loadPosts(postContent, tags, videoId);
    }
}



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








