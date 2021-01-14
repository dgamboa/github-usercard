import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const URL = 'https://api.github.com/users/dgamboa';
const cards = document.querySelector('.cards');

axios.get(URL)
  .then(res => {
    const userCard = userCardBuilder(res);
    cards.appendChild(userCard);
  })
  .catch(err => {
    console.log(err);
  })

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
                        'dustinmyers',
                        'justsml',
                        'luishrd',
                        'bigknell'];

function URLify(username) {
  return `https://api.github.com/users/${username}`;
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function userCardBuilder(userData) {
  const divCard = document.createElement('div');
  const img = document.createElement('img');
  const divInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const pUsername = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const aProfileLink = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');

  divCard.classList.add('card');
  divInfo.classList.add('card-info');
  h3.classList.add('name');
  pUsername.classList.add('username');

  img.src = userData.data.avatar_url;
  h3.textContent = userData.data.name;
  pUsername.textContent = userData.data.login;
  pLocation.textContent = userData.data.location;
  pProfile.textContent = "Profile: ";
  aProfileLink.textContent = userData.data.html_url;
  aProfileLink.href = userData.data.html_url;
  pFollowers.textContent = `Followers: ${userData.data.followers}`;
  pFollowing.textContent = `Following: ${userData.data.following}`;
  pBio.textContent = `Bio: ${userData.data.bio}`;

  pProfile.appendChild(aProfileLink);
  divInfo.append(h3, pUsername, pLocation, pProfile, pFollowers, pFollowing, pBio);
  divCard.appendChild(divInfo);

  return divCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
