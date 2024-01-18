export default class SyncWaiter {
    wait(func, ...args) {
        // Implementierung des Wartens auf eine synchrone Funktion
        return func(...args);
    }
}