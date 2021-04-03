Vue.component('selections', {
  props: ['selectionData'],
  template: `
  <div class='selections'>
  <h2 >Selections</h2>
  <div v-for='selection in selectionData'>
  <img class='image' v-bind:src= "selection.image">
  <p class='name'>{{selection.name}}</p>
  <p class='content'>{{selection.content}}</p>
  <button>Add to cart</button>
  </div>
  </div>`,
});
const vue = new Vue({
  el: '#vue',
  data: {
    selectionData: [
      {
        id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg', 
        name:'Pasta',
        content: 'Healthy pasta'
      },
      {
        id: 2,
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg', 
        name: 'Red Crab',
        content: 'Fresh From Alaska'
      },
      {
        id: 3,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg', 
        name: 'Breakfast Special',
        content: 'good for the soul'
      },
      {
        id: 4,
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg',
        name: 'Sea Shell Mix',
        content: 'For the shell lovers'
      },
      {
        id: 5,
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg', 
        name: 'Ultimate Kebab',
        content: 'The best from middle east '
      },
      {
        id: 6,
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg', 
        name: 'Chicken Steak ',
        content: 'Grilled to perfection'
      },
      {
        id: 7,
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg', 
        name: 'Filet Mignon',
        content: 'Juicy steak served with potatoes'
      },
      {
        id: 8,
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg', 
        name: 'Bistro Brunch',
        content: 'A touch of Australia'
      },
      {
        id: 9,
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg', 
        name: 'California Crepe',
        content: 'Stuffed with grilled shrimps '
      },
      {
        id: 10,
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg', 
        name: 'Top burger',
        content: 'The tallest hamburger from Peru'
      },
      {
        id: 11,
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG', 
        name: 'Chicken garlic pizza',
        content: 'Our specialty Pizza'
      },
      {
        id: 12,
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg',    
        name: 'Work away healthy',
        content: 'Healthy blend of noodles and vegies'
      },
      
      
    ]
  }
})