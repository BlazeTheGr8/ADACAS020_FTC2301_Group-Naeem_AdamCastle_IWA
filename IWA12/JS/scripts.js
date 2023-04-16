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

const staytus = document.querySelectorAll('p .status');
const reserve = document.querySelectorAll('.reserve')
const checkout = document.querySelectorAll('.checkout')
const checkin = document.querySelectorAll('.checkin')

for (i = 0; i < checkin.length; i++) {
    checkin[i].style.color = "";
}

staytus[0].style.color = STATUS_MAP.overdue.color
reserve[0].disabled = STATUS_MAP.overdue.canReserve ? false : true;
checkout[0].disabled = STATUS_MAP.overdue.canCheckout ? false : true;
checkin[0].disabled = STATUS_MAP.overdue.canCheckIn ? false : true;

staytus[1].style.color = STATUS_MAP.reserved.color
reserve[1].disabled = STATUS_MAP.reserved.canReserve ? false : true;
checkout[1].disabled = STATUS_MAP.reserved.canCheckout ? false : true;
checkin[1].disabled = STATUS_MAP.reserved.canCheckIn ? false : true;

staytus[2].style.color = STATUS_MAP.shelf.color;
reserve[2].disabled = STATUS_MAP.shelf.canReserve ? false : true;
checkout[2].disabled = STATUS_MAP.shelf.canCheckout ? false : true;
checkin[2].disabled = STATUS_MAP.shelf.canCheckIn ? false : true;

