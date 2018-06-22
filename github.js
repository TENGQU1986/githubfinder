class GitHub {
  constructor() {
    this.client_id = 'f4a0640a8c461845bc94';
    this.client_secret = 'b3ade368086b377f3888e774f49a0e5601ea646c';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}