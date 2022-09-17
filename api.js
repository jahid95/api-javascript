const loadRandomUser = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayRandomUser(data.results[0]));
}

loadRandomUser();

const displayRandomUser = users =>{
    console.log(users.name.title, users.name.first);
}

// mealdp

const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display =displayStyle;
}
const toggleSearchResult = displayStyle =>{
    document.getElementById('meals').style.display =displayStyle;
}


const searchMeal = () =>{
  const searchText = document.getElementById('search-field').value;

//   display spinner 
toggleSpinner('block');
toggleSearchResult('none');
  loadMealDb(searchText);
  document.getElementById('search-field').value='';
} 

const loadMealDb = searchText =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDb(data.meals));
}

const displayMealDb = meals =>{
    console.log(meals);
    const container = document.getElementById('meals');
    container.innerText ='';
    meals?.forEach(meal =>{
       
     const div = document.createElement('div');
     div.innerHTML =`
                    <h3>${meal.strMeal}</h3> 
                    <p>${meal.strMeasure13? meal.strMeasure13:'Not Found Release Date'}</p>
                    <button onclick="loadMealDetail('${meal.strMeal}')">Click Me</button>   
     `;
     container.appendChild(div);
    
    })
    toggleSpinner('none');
    toggleSearchResult('block');
}

// loadMealDb(searchText);

const loadMealDetail = mealName =>{
    console.log(mealName);
}