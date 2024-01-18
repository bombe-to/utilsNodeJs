import Sorter from './Sorter.js';
import SyncWaiter from './SyncWaiter.js';

export default class UtilityClass {
    constructor() {
        this.sorter = new Sorter();
        this.syncWaiter = new SyncWaiter();
    }

    sortArray(array) {
        return this.sorter.sort(array);
    }

    waitForSyncFunction(func, ...args) {
        return this.syncWaiter.wait(func, ...args);
    }
}