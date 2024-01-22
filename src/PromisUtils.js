export default class PromisUtils {
   
    asyncOperation(task, error, timeout) {
        return new Promise((resolve, reject) => {
            // Führe eine asynchrone Operation aus
            try  {
                task();
                setTimeout(() => {
                    resolve("Operation abgeschlossen");
                }, timeout); 
            } catch(e)   {
                error(e);
                reject(new Error("task failed"));
            }
        });
    }
    
}