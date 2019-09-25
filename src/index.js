import StorageController from './js_modules/controllers/storage-controller';

const storageController = new StorageController(localStorage);
storageController.init();

// responsive
document.querySelector('.menuBtn').addEventListener('click', () => {
  const menuView = document.querySelector('.projects-menu');
  menuView.classList.toggle('display-flex');
});
