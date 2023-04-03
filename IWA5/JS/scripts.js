const FREE_WARNING = "Free shipping only applies to single customer orders"
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'
let customers = 1
let country = 'RSA'
let currency = null
let shipping = null


if (country === "RSA") {
    shipping = 400;
    currency = 'R'
} else if (location === "NAM") {
    shipping = 600;
    currency = "$"
} else {
    shipping = 800;
    currency = "$"
}

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

if ((shoes + batteries + pens + shirts + toys) > 1000 &&  location==='RSA'||'NAM') {
	if (country === "NAM" && customers > 1) {
			 shipping = 0 
    } else if (country === "RSA" && customers > 1) {
            shipping= 0
    }
	}


if ((shipping == 0) && (customers !== 1)) {
    console.log(FREE_WARNING)
}

country == 'NK' ? console.log(BANNED_WARNIN) : console.log('Price: ', currency +  (shoes + toys + batteries + pens + shirts + shipping))

/*

FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

if (location = RSA) { shipping === 400 && currency === 'R' }

if location = NAM
shipping = 600 
else shipping = 800

shoes = 300 * 1
toys - 100 * 5
shirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
const location = 'RSA'
currency = null

*/