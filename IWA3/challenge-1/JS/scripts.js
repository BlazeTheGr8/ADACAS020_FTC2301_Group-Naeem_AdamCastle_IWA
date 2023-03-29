/* scripts.js

import company form 'configuration'
import year form 'configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message */

import { company } from './configuration.js';
import { year } from "./configuration.js";

const message = '© ' + company + ' (' + year + ')';

document.querySelector('footer').innerText = message;


/* -- Why does the code not work?
    -- errors in syntax importing 

What changes do you need to make to achieve the intended behaviour?
 -- fixed brackets around vairable and corrected spelling for from while adding source

Are there any other ways in which it can be been solved? 
 -- Not that i know of 
*/