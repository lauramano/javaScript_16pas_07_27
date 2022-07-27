'use strict';
// 1.1 sukurti objekta kuris turi auksti ploti ir gyli
//  1.2 prideti objektui metoda turis, ir apskaiciuoti turi

const kubas1 = {
    ilgis: 5,
    plotis: 12,
    aukstis: 3,
    turis: function(){
        const turis1 = this.ilgis * this.plotis * this.aukstis;
    console.log(`turis yra: ${turis1} m3`);
    },
}

kubas1.turis();

//  galima paskaiciuoti plota grindu, ir kitus parametrus.