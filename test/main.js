import Utils from '../src/UtilityClass.js';

class Test{
    constructor(){
        this.utils = new Utils();
    }

    run(){
        this.utils.promisUtils.asyncOperation(
            () => console.log("test1 passed"), 
            (e) => console.log(e), 
            2000);
            
            
            console.log(this.utils.sorter.sortAlphabetically(["test", "peter", "pater", "Phine"], a=> a, true));
            console.log(this.utils.sorter.sortAlphabetically(["test", "peter", "pater", "Phine"], a=> a, false));
            this.utils.sorter.sortByNumbers([10, 2, 1], a=> a);
            this.utils.sorter.sortByNumbers([10, 2, 1], a=> a, false);
            console.log("Tests2 passed")


            // Sorting by timestamp
            const objectsWithTimestamps = [
                { id: 1, timestamp: '2021-07-20T12:30:00' },
                { id: 2, timestamp: '2021-07-20T12:25:00'}
            ];
            console.log(this.utils.sorter.sortByTimestamp(objectsWithTimestamps, o => {o.timestamp})); 

            console.log("Tests 3 passed")
    }

}

new Test().run();