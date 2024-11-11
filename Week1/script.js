async function fetchUserData() {
    const data2 = document.getElementById('data1');
    const error2 = document.getElementById('error1');

    try {
        const response = await fetch('https://fakerapi.it/api/v1/users');
        if (!response.ok) {
            throw new Error('occured an error during fetching');
        }
        const data = await response.json();

        let html = '';
        data.data.forEach(user => {
            html += `
                <div class="user">
                    <h2>${user.firstname} ${user.lastname}</h2>
                    <p><b>Email</b>: ${user.email}</p>
                    <p><b>username</b>: ${user.username}</p>
                    <p><b>website</b>: ${user.website}</p>
                    <p><b>Ip address</b>: ${user.ip}</p>
                </div>
            `;
        });
        data2.innerHTML = html;
        error2.innerHTML = '';
    } catch (error) {
        console.error('Error:', error);
        errorMessage.textContent = ' error occurred during fetching data.';
        dataContainer.innerHTML = '';
    }
}
fetchUserData();