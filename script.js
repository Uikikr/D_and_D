function attribute() {
    const pointEls = document.getElementsByClassName('att_score');
    for (i = 0; i < pointEls.length; i++) {
        const randomN = Math.floor(Math.random() * (18 - 3 + 1) + 3);
        pointEls[i].innerHTML = randomN;
        document.getElementsByClassName('modifier')[i].innerHTML = Math.floor(randomN / 2 - 5);
    };
}

const Races = {
    'dwarf' : {
        height: 50
    },
    'High elf' : {
        height: 250
    }
    
}
const Alignment = {
    'Lawful Good': {
        description: 'creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.'
    }
}

Races['High elf'].height

