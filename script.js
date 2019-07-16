//Global varibles
const xpLevel = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
//let startLevel = generateLevel()

//Functions
function attribute() {
    const pointEls = document.getElementsByClassName('att_score');
    for (i = 0; i < pointEls.length; i++) {
        const randomN = Math.floor(Math.random() * (18 - 3 + 1) + 3);
        pointEls[i].innerHTML = randomN;
        document.getElementsByClassName('modifier')[i].innerHTML = Math.floor(randomN / 2 - 5);
    };
};

function getAlignmentDescription() {
    const sourceAlignment = document.getElementById('alignment');
    let selectAlignment = sourceAlignment.options[sourceAlignment.selectedIndex].value;
    console.log(sourceAlignment.selectedIndex);
    document.getElementById('align_desc').innerHTML = alignment[selectAlignment].description;
};

function classAttributes() {
    const sourceClass = document.getElementById('classP');
    let selectedClass = sourceClass.options[sourceClass.selectedIndex].value;
    console.log(selectedClass)
    console.log(document.getElementById('level').innerHTML + classP[selectedClass].hitdice)
    document.getElementById('hit_die').innerHTML = document.getElementById('level').innerHTML + classP[selectedClass].hitdice;
    function hpGenerator() {
        if (document.getElementById('level').innerHTML >= 1) {
            document.getElementById('hp').innerHTML = classP[selectedClass].hitpoints;
        } else {
            document.getElementById('hp').innerHTML = classP[selectedClass].hitpoints + classP[selectedClass].hitPointLevel;
        }
    };
    hpGenerator()
}

function raceAttributes() {
    const sourceRace = document.getElementById('race');
    let selectedRace = sourceRace.options[sourceRace.selectedIndex].value;
    console.log(selectedRace)
    document.getElementById('Speed').innerHTML = Races[selectedRace].speed;
    document.getElementById('consco').innerHTML = Races[selectedRace].ability;
    console.log(Races[selectedRace].ability);
}

function generateLevel() {
    const getXpPoints = document.getElementById('XP');
    let selectedXp = getXpPoints.value;
    console.log(selectedXp)
    xpLevel.forEach((s, l) => {
        if (selectedXp >= s) {
            document.getElementById('level').innerHTML = l + 1
                ;
        }
    });
};

//Objects
const Races = {
    'Hill Dwarf': {
        speed: 25,
        ability: () => {
            parseInt(document.getElementById('consco').innerHTML) + 2
        }, //why you no work? Bork
    },
    'High elf': {
        height: 250
    }
};

const classP = {
    'Fighter': {
        hitdice: 'd10',
        hitpoints: 10,
        hitPointLevel: Math.floor(Math.random() * (10 - 1 + 1) + 1),
    },
    'Cleric': {
        hitdice: 'd8',
        hitpoints: 8,
        hitPointLevel: Math.floor(Math.random() * (8 - 1 + 1) + 1),
    },
    'Rogue': {
        hitdice: 'd8',
        hitpoints: 8,
        hitPointLevel: Math.floor(Math.random() * (8 - 1 + 1) + 1),
    },
    'Wizard': {
        hitdice: 'd6',
        hitpoints: 6,
        hitPointLevel: Math.floor(Math.random() * (6 - 1 + 1) + 1)
    }
}

const alignment = {
    'Lawful Good': {
        description: 'Creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.'
    },
    'Neutral Good': {
        description: 'Folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.'
    },
    'Chaotic Good': {
        description: 'Creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.'
    },
    'Lawful Neutral': {
        description: 'Individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.'
    },
    'Neutral': {
        description: 'Is the alignment of those who prefer to steer clear of moral questions and don’t take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.'
    },
    'Chaotic Neutral': {
        description: 'Creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.'
    },
    'Lawful Evil': {
        description: 'Creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.'
    },
    'Neutral Evil': {
        description: 'Is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and yugoloths are neutral evil.'
    },
    'Chaotic Evil': {
        description: 'Creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.'
    }
}

function test(Races) {
    console.log(classP.hitPointLevel)
};
