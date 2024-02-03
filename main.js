import './style.css'
import { fetchProfile } from './profile.js'
import whoami from './typing.js'

const username = 'gdsclpu';
const data = await fetchProfile(username);

document.querySelector('#app').innerHTML = `
  <div>
    <a href="${data?.html_url}" target="_blank">
      <img src="https://github.com/${username}.png" class="logo vanilla img-size" alt="JavaScript logo" />
    </a>
    <h1 id="whoami"></h1>
    <p>${data?.bio}</p>
    <div class="card">
      <button id="redictToProfile" type="button">Checkout my profile</button>
    </div>
    <p class="profile-data">
      <strong>Followers:</strong> ${data?.followers} <br />
      <strong>Followings:</strong> ${data?.following} <br />
      <strong>Repos:</strong> ${data?.public_repos} <br />
      <strong>On github since:</strong> ${new Date(data?.created_at).toLocaleDateString()} <br />
    </p>
  </div>
`

document.getElementById('redictToProfile').addEventListener('click', () => {
  window.location.href = `${data?.html_url}`
})

whoami(username)