
let images = ['img/sunset.jpg', 'img/bulldog.jpg', 'img/girl.jpg', 'img/boy.jpg']
let names = ['Sunset', 'Bulldog', 'Elli', 'Net_bro'];
let additionals = ['Neu auf Instagram', 'Jypsy is Follower', 'Irene ist Follower', 'Neu auf Instagram'];


let newposts = [
    {

        'authorprof': 'img/girl.jpg',
        'author': 'Elli',
        'location': 'irgendwo',
        'picture': 'img/ice-bubble.jpg',
        'description': 'An ice bubble sparkled in the winter sun, a frozen gem suspended in the crisp air. It was a delicate and fleeting creation, formed by the perfect combination of temperature, wind, and water. The ice bubble was like',
        'description-more': 'a miniature world, each layer of frozen water distorting and refracting the light in a different way, creating a mesmerizing display of colors. As the sun rose higher in the sky, the ice bubble grew more and more fragile, until with a gentle pop, it disappeared into the air, leaving behind only memories of its beauty. Despite its brief existence, the ice bubble had left a lasting impression on all who had the privilege to see it.',
        'user1': 'Daniel:',
        'user1comment': 'Wow, so beautiful',
        'user2': 'Marie:',
        'user2comment': 'Love this',
        'user3': 'Horst:',
        'user3comment': 'Fascinating',
        'liked': 'calvary',
        'likes': 39,
        'postage': '5',
        'addposts': [],

    },

    {
        'authorprof': 'img/sunset.jpg',
        'author': 'Ima',
        'location': 'weiss nich wo',
        'picture': 'img/old_farmer.jpg',
        'description': 'An old farmer in Romania lived a simple life. He spent his days tending to his crops and livestock, working tirelessly to provide for his family. Despite the harsh conditions and long hours, he found',
        'description-more': 'joy in the land and the work that he did. His wisdom and experience were respected by all who knew him, and he passed down his love for the land to his children and grandchildren. The old farmers legacy lived on through his family and the community, reminding future generations of the importance of hard work and the simple pleasures of life.',
        'user1': 'Hellen:',
        'user1comment': 'A man who has sacrificed himself all his life!',
        'user2': 'Anton:',
        'user2comment': 'He has a long story in his life',
        'user3': 'Marco:',
        'user3comment': 'Iam sure he would have a lot to tell',
        'liked': 'henry',
        'likes': 75,
        'postage': '23',
        'addposts': [],
    },

    {
        'authorprof': 'img/music.jpg',
        'author': 'Jo_Man',
        'location': 'weiss nich wo',
        'picture': 'img/old-books.jpg',
        'description': 'An old library stood as a testament to a bygone era. Its shelves were filled with countless books, their pages yellowed with age, their bindings worn from years of use. The musty smell of old',
        'description-more': 'paper and ink filled the air, and the sound of pages turning echoed throughout the silent halls. The librarian, a soft-spoken elderly woman, would sit at her desk and greet visitors with a warm smile. Despite the advent of digital technology, the library remained a cherished and well-visited place, beloved by generations of locals. It was a place of knowledge, of quiet reflection, and of timeless beauty, an oasis from the fast-paced world outside.',
        'user1': 'Jenny:',
        'user1comment': 'I love books',
        'user2': 'Anne:',
        'user2comment': 'This books are very old',
        'user3': 'Jonas:',
        'user3comment': 'They will soon disintegrate',
        'liked': 'Daniel',
        'likes': 7,
        'postage': '14',
        'addposts': [],
    }
]

function addComponents() {
    show();
    renderProposal();
}

function show() {

    document.getElementById('posts').innerHTML = '';
    for (let i = 0; i < newposts.length; i++) {
        load(i);
        const post = newposts[i];

        document.getElementById('posts').innerHTML += generateShowHtml(i, post);
        renderComment(i);
        commentCounter(i);
    }
}

function generateShowHtml(i, post) {
    return `
    <div class="posts">
                <div class="newPosts">
                    <div class="postProfile">
                        <img class="postUserProfile" src="${post['authorprof']}" alt="profilimg">
                        <span class="postUserName">
                            <b>${post['author']}</b><br>
                            <span class="propInfo">${post['location']}</span>
                        </span>
                    </div>
                    <span class="morePoints"><b>...</b></span>
                </div>
                <div>
                    <div> <img class="reelPic" src="${post['picture']}" alt="road"> </div>
                </div>
                <div class="iconSection">
                    <div class="postIcons">
                        <img class="iconsImg" id="heartGrey${i}" src="img/heart-128grey.png" alt="profilimg" onclick="toggleHeart(${i})">                        
                        <img class="iconsImg" src="img/chat-4-grey.png" alt="profilimg">
                        <img class="iconsImg" src="img/pointer-grey.png" alt="profilimg">
                    </div>
                    <img class="bookmark" id="bookmarkGray${i}" src="img/bookmark-grey.png" alt="bookmark" onclick="toggleBookmark(${i})" >
                    <img class="bookmark" id="bookmarkGreen" src="img/bookmark-green.png" alt="bookmark" style="display:none" onclick="toggleBookmarkgreen(${i})">
                </div>
                <div class="likeUserSection">
                    <div class="likeUserMiniPic">
                        <img class="likeUserProfile1" src="img/woman.jpg" alt="profilimg">
                        <img class="likeUserProfile2" src="img/music.jpg" alt="profilimg">
                        <img class="likeUserProfile3" src="img/girl.jpg" alt="profilimg">
                        <span class="likeIt">Liked by <b>${post['liked']}</b> and <b><span id="likes${i}">${post['likes']}</span></b><b>&nbsp;others</span></b></span>
                    </div>
                </div>
                <div class="postDescription">
                    <div class="descriptionProfile">
                        <span class="description"><b>${post['author']}</b> ${post['description']}​<span id="dots${i}" style="display:inline">...</span></span><span id="more${i}" style="display:none" class="description-more">${post['description-more']}</span><span onclick="readMoreDescription(${i})" class="myButton" id="myBtn${i}" > <b>Read more</b></span>
                    </div>
                </div>
                <div class="daySection">
                    <div class="dayProfile">
                        <span class="dayComment">${post['postage']} DAYS AGO</span>
                    </div></div>
                <div class="viewCommentProfile">
                    <div class="viewAllComment">
                        <span class="viewComments" onclick="toggleComments(${i})" ><b>View all <span id="postCounter${i}">3</span> comments</b></span>
                        <span class="noneComments" id="dnoneComments${i}"> <b>${post['user1']}</b> ${post['user1comment']}<br>
                         <b>${post['user2']}</b> ${post['user2comment']}<br>
                        <b>${post['user3']}</b> ${post['user3comment']}  </span>
                    </div>
                </div>                
                <div id="commentSection${i}">
                    <div class="newCommentSection">
                        <div class="newPostComment">                            
                        </div>                        
                    </div>
                </div>
                <form onsubmit="addPost(${i}); return false;">
                <div class="takeNewPostArea">
                    <div class="addNewCommentPart">
                        <textarea class="textarea" id="message${i}" required type="text" placeholder="Add a comment..." rows="1"
                            cols="50"></textarea>
                    </div>
                    <button class="postButton" >Post</button>
                </div></form>
                </div>
    `;
}

function filter() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    document.getElementById('posts').innerHTML = '';
    for (let i = 0; i < newposts.length; i++) {
        load(i);
        const post = newposts[i];
        if (newposts[i]['author'].toLowerCase().includes(search)) {
            document.getElementById('posts').innerHTML += generateShowHtml(i, post);
            renderComment(i);
            commentCounter(i);
        }
    }
}

function addPost(i) {
    let message = document.getElementById(`message${i}`);
    newposts[i]['addposts'].push(message.value);

    document.getElementById(`message${i}`).value = '';

    renderComment(i);
    commentCounter(i);
    save(i);
    load(i);
}

function deletePost(i, j) {
    newposts[i]['addposts'].splice(j, 1);
    document.getElementById(`postCounter${i}`).innerHTML = newposts[i]['addposts'].length + 3;
    renderComment(i);
    save(i);
}

function save(i) {
    let saveCommentAstext = JSON.stringify(newposts[i]['addposts']);
    localStorage.setItem(`comment${i}`, saveCommentAstext);
}

function load(i) {
    let saveCommentAstext = localStorage.getItem(`comment${i}`);
    if (saveCommentAstext) {
        newposts[i]['addposts'] = JSON.parse(saveCommentAstext);
    }
}

function commentCounter(i) {
    let counter = newposts[i]['addposts'].length;

    if (counter === 0) {
        document.getElementById(`postCounter${i}`).innerHTML = '3';
    } else {
        document.getElementById(`postCounter${i}`).innerHTML = newposts[i]['addposts'].length + 3;
    }
}

function renderComment(i) {
    let addApost = document.getElementById(`commentSection${i}`);
    addApost.innerHTML = '';

    for (let j = 0; j < newposts[i]['addposts'].length; j++) {

        addApost.innerHTML += `
        <div class="newCommentSection">
        <div class="postNewComment">
                        <span><b>Post:</b>
                            ${newposts[i]['addposts'][j]}</span>
                    </div>
                    <img class="trash" src="img/trash-grey.png" alt="trashimg" onclick="deletePost(${i},${j})">
                    
              </div>
        `;
    }
}

function readMoreDescription(i) {

    var dots = document.getElementById(`dots${i}`);
    var moreText = document.getElementById(`more${i}`);
    var btnText = document.getElementById(`myBtn${i}`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "<b> Read more</b>";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "<b>Read less</b>";
        moreText.style.display = "inline";
    }
}

function renderProposal() {
    let sugestion = document.getElementById('prop');
    sugestion.innerHTML = '';
    for (a = 0; a < images.length; a++) {
        sugestion.innerHTML += generateSugestion(a);
    }
}

function generateSugestion(a) {
    let image = images[a];
    let name = names[a];
    let additional = additionals[a];

    return `
    <div class="proposals">
                    <img class="proposalUserProfile" src="${image}" alt="profilimg">
                    <span class="propUserName">
                        <b>${name}</b><br>
                        <span class="propInfo">${additional}</span>
                    </span>
                    <span id="follower${a}" class="follow" onclick="toggleFollow(${a})"><b>Follow</b></span>
                </div>
    `;
}

function toggleFollow(a) {
    var btnText = document.getElementById(`follower${a}`);

    if (btnText.innerHTML === "<b>Follow</b>") {
        btnText.innerHTML = "<b>Followed</b>";
    } else {
        btnText.innerHTML = "<b>Follow</b>";
    }
}

function toggleComments(i) {
    var element = document.getElementById(`dnoneComments${i}`);
    element.classList.toggle('noneComments');
}

function toggleBookmark(i) {
    var image = document.getElementById(`bookmarkGray${i}`);
    var originalImg = "img/bookmark-grey.png";
    var newImg = "img/bookmark-green.png";

    if (image.getAttribute("src") === originalImg) {
        image.setAttribute("src", newImg);
    } else {
        image.setAttribute("src", originalImg);
    }
}

function toggleHeart(i) {
    var image = document.getElementById(`heartGrey${i}`);
    var originalImg = "img/heart-128grey.png";
    var newImg = "img/heart-red.png";

    if (image.getAttribute("src") === originalImg) {
        image.setAttribute("src", newImg);
        document.getElementById(`likes${i}`).innerHTML = newposts[i]['likes'] + 1;
    } else {
        image.setAttribute("src", originalImg);
        document.getElementById(`likes${i}`).innerHTML = newposts[i]['likes'];
    }
}

function toggleDarkMode() {
    var image = document.getElementById('toggleSun');
    var originalImg = "img/sun-light.png";
    var newImg = "img/sun-dark.png";

    if (image.getAttribute("src") === originalImg) {

        document.getElementById('changeView').classList.remove('body-dark');
        document.getElementById('changeView').classList.add('body');
        image.setAttribute("src", newImg);
    } else {

        document.getElementById('changeView').classList.add('body-dark');
        document.getElementById('changeView').classList.remove('body');
        image.setAttribute("src", originalImg);
    }
}

