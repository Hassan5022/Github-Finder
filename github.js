class Github{

    constructor(){
        this.client_id = "70520bc9048a1785f4ac";
        this.client_secret = "c12bd7a21451520914adc482b29879a441499c5b";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }

    }

}