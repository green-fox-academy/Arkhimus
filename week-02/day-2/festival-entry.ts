'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

const queue: any[] = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: 10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
];

function securityCheck(queueList: any[]) {
    let blackList: string = '';
    let canEnter: string = '';
    let securityAlcholLoot: number = 0;
    for (let i: number = 0; i < queueList.length; i++) {
        if (queueList[i]['guns'] != 0) {
            blackList = blackList.concat(queueList[i]['name'] + ' ');
            queueList[i]['guns'] = 0;
        } else {
            canEnter = canEnter.concat(queueList[i]['name'] + ' ');
        }
        if (queueList[i]['alcohol'] != 0) {
            securityAlcoholLoot = securityAlcoholLoot + queueList[i]['alcohol'];
            queueList[i]['alcohol'] = 0;
        }
    }
    console.log(' Whatchlist: ' + blackList + '\n','They can enter: ' + canEnter + '\n','Alcohol loot: ' + securityAlcoholLoot);
    // console.log(queueList);
}
securityCheck(queue);

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns
// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcoholLoot) and let them enter the festival
export = securityCheck;