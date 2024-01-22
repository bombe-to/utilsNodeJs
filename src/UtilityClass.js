import Sorter from './Sorter.js';
import PromisUtils from './PromisUtils.js';

export default class UtilityClass {

    sorter;
    promisUtils;

    constructor() {
        this.sorter = new Sorter();
        this.promisUtils = new PromisUtils();
    }
}