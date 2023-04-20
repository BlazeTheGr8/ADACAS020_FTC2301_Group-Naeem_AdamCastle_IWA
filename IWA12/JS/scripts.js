// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const Status = document.getElementsByClassName('status');
const reserve = document.getElementsByClassName('reserve')
const checkout = document.getElementsByClassName('checkout')
const checkin = document.getElementsByClassName('checkin')

for (let i = 0; i < checkin.length; i++) {
  checkin[i].style.color = "";
  Status[i].style.color = STATUS_MAP[Status[i].textContent].color;
  reserve[i].disabled = STATUS_MAP[Status[i].textContent].canReserve ? false : true;
  checkout[i].disabled = STATUS_MAP[Status[i].textContent].canCheckout ? false : true;
  checkin[i].disabled = STATUS_MAP[Status[i].textContent].canCheckIn ? false : true;
}

