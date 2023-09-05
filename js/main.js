/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Soane Bernon
 * @version 0.2
 * @since   05.09.2023
 */
'use strict'; // Demande un interprétation stricte du code

let degresC = parseInt(prompt("Température en celsius "));

if (isNaN(degresC)) {
    alert(`Veuillez noter un nombre de degres !`);
} else {
    let degresF = degresC * 9 / 5 + 32;
    alert(`${degresC} °C = ${degresF} °F`);
}
