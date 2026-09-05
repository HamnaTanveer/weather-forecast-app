fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {

    const cardsRow1 = document.getElementById('cards-row1');
    const cardsRow2 = document.getElementById('cards-row2');

    cardsRow1.innerHTML = "";
    cardsRow2.innerHTML = "";

     /*  const images = [
      "running.jpg",
      "sneaker.jpg",
      "basketball.jpg",
      "casual.jpg",
      "booots.jpg",
      "sandals.jpg",
      "running.jpg",
      "casual.jpg",
    ];

     const headings = [
  "Running",
  "Sneaker",
  "BasketBall",
  "Casual",
  "Boots",
  "Sandals"
];

const text = [
  "Performance shoes built for speed and endurance",
  "Classic and contemporary streetwear styles",
  "Court-ready shoes with superior ankle support",
  "Everyday comfort meets effortless style",
  "Rugged style for any terrain",
  "Breathable comfort for warm days"
]; 
 */


    users.forEach((user, index) => {
           console.log('heading',user.name);
           console.log('para:', user.company.catchPhrase);
          
            

      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
       <img src="https://picsum.photos/200?random=${index}">
        <div class="card-text">
          <h3>${user.name}</h3>
           <p>${user.company.catchPhrase}</p>
        </div>
      `;


    });

  })
  .catch(error => console.error('Error:', error));