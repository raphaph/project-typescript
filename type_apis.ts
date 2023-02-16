type ProfileResponse = {
    name: string;
    avatar_url: string;
};


async function fetchData() {
    const response = await fetch('http://api.github.com/users/raphaph');
    const data = await response.json() as ProfileResponse;
    console.log(data.name)
}


fetchData();