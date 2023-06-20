const shoppingList = ['uova', 'latte', 'farina', 'pomodori', 'spinaci', 'pasta', 'riso', 'pollo', 'carote', 'salvia', 'panna', 'gelato']

const listItem = document.getElementById('list-item');

let i = 0;

while(i < shoppingList.length) {
    
    const newLi = document.createElement('li');
    listItem.append(newLi);
    newLi.innerHTML = shoppingList[i];
    i++;
    
    
};

