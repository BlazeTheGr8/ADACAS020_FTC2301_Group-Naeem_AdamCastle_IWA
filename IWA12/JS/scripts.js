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

for (i = 0; i < checkin.length; i++) {
  checkin[i].style.color = "";
  Status[i].style.color = STATUS_MAP[Status[i].textContent].color;
  reserve[i].disabled = STATUS_MAP[Status[i].textContent].canReserve ? false : true;
  checkout[i].disabled = STATUS_MAP[Status[i].textContent].canCheckout ? false : true;
  checkin[i].disabled = STATUS_MAP[Status[i].textContent].canCheckIn ? false : true;
}

// for (i = 0; i < Status.length; i++) {
//   Status[i].style.color = STATUS_MAP[Status[i].textContent].color;

//   reserve[i].disabled = STATUS_MAP[Status[i].textContent].canReserve
//     ? false
//     : true;

//       checkout[i].disabled = STATUS_MAP[Status[i].textContent].canCheckout ? false : true;

//       checkin[i].disabled = STATUS_MAP[Status[i].textContent].canCheckIn ? false : true;
// }

// for (i = 0; i < reserve.length; i++) {
//     reserve[i].disabled = STATUS_MAP[Status[i].textContent].canReserve ? false : true;

//     checkout[i].disabled = STATUS_MAP[Status[i].textContent].canCheckout ? false : true;

//     checkin[i].disabled = STATUS_MAP[Status[i].textContent].canCheckIn ? false : true;
// }

// Status[0].style.color = STATUS_MAP[stattus[0].textContent].color;
// reserve[0].disabled = STATUS_MAP.overdue.canReserve ? false : true;
// checkout[0].disabled = STATUS_MAP.overdue.canCheckout ? false : true;
// checkin[0].disabled = STATUS_MAP.overdue.canCheckIn ? false : true;

// Status[1].style.color = STATUS_MAP.reserved.color
// reserve[1].disabled = STATUS_MAP.reserved.canReserve ? false : true;
// checkout[1].disabled = STATUS_MAP.reserved.canCheckout ? false : true;
// checkin[1].disabled = STATUS_MAP.reserved.canCheckIn ? false : true;

// Status[2].style.color = STATUS_MAP.shelf.color;
// reserve[2].disabled = STATUS_MAP.shelf.canReserve ? false : true;
// checkout[2].disabled = STATUS_MAP.shelf.canCheckout ? false : true;
// checkin[2].disabled = STATUS_MAP.shelf.canCheckIn ? false : true;

