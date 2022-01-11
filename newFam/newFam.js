import { 
    createFamily, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.family-form');
const logoutButton = document.getElementById('logout');


form.addEventListener('submit', async(e) => {
  // prevent default
    e.preventDefault();
  // get the name and family id from the form
    const data = new FormData(form);
    const name = data.get('family-name');

  // use createBunny to create a bunny with this name and family id

    await createFamily({
        name
    });

    form.reset();
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
