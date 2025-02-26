/**
 * click on a cell
 * get price of each item in cell
 * when a cell is clicked, freeze cell
 * enter weight for item
 * calculate weight * price
 * display results
 */

const data = [
    {
        id: 1,
        item: 'romaTomato',
        itemDisplay: 'Roam Tomato',
        pricePerPound: 1.35
    },
    {
        id: 2,
        item: 'redTomato',
        itemDisplay: 'Red Tomato',
        pricePerPound: 1.05
    },
    {
        iid: 3,
        item: 'greenPea',
        itemDisplay: 'Green Pea',
        pricePerPound: 0.75
    }, 
    {
        id: 4,
        item: 'mushroom',
        itemDisplay: 'Mushroom',
        pricePerPound: 0.38
    }, 
    {
        id: 5,
        item: 'greenPepper',
        itemDisplay: 'Green Pepper',
        pricePerPound: 1.45
    }, 
    {
        id: 6,
        item: 'spinach',
        itemDisplay: 'Spinach',
        pricePerPound: 0.60
    }, 
    {
        id: 7,
        item: 'bellPepper',
        itemDisplay: 'Bell Pepper',
        pricePerPound: 1.89
    },
    {
        id: 8,
        item: 'gabbage',
        itemDisplay: 'Gabbage',
        pricePerPound: 1.95
    },
    {
        id: 9,
        item: 'oninon',
        itemDisplay: 'Oninon',
        pricePerPound: 1.15
    }, 
    {
        id: 10,
        item: 'sweetPotato',
        itemDisplay: 'Sweet Potato',
        pricePerPound: 1.99
    }
]

let pricePerPound = 0

//2. Display data on browser .map()

// .map() => return a copied array after performing a task on an original array

// let arr1 = ['JOSH', 'MARY', 'EZEKIEL']

// let arr2 = arr1.map(name => name.toLowerCase())
// console.log(arr2);

const cells = data.map(item => {
    const cell = document.createElement('div')
    cell.classList.add('item')
    cell.setAttribute('data-item', `${item.item}`)
    cell.innerText = `${item.itemDisplay} - ${item.pricePerPound} per lb.`
    return cell
})

cells.forEach(cell => {
    document.getElementById('itemSection').appendChild(cell)
})

cells.addEventListener('click', ()=> {
    // console.log('clicked')
    for (let obj of data) {
        if (obj.item == cells.getAttribute('data-item')) {
            price = obj.pricePerPound
            console.log(pricePerPound)
        }
    }
})