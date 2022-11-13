const github = new Github;
const ui = new UI;

const search = document.querySelector('#search');

search.addEventListener('keyup', (e) => {
    const userInput = e.target.value;
    if(userInput !== ''){
        github.getUser(userInput)
        .then(response => {
            if(response.profile.message === 'Not Found'){
                ui.showAlert('User not found', 'alert alert-danger');
            }else{
                ui.showProfile(response.profile);
                ui.showRepos(response.repos);
            }
        })
    }else{
        ui.clearProfile();
    }
})