export async function fetchProfile(username) {
  let data;

  await fetch('https://api.github.com/users/'+username, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
    }
  })
    .then(response => response.json())
    .then(json => {
      data = json;
    }
  );

  return data;
}
