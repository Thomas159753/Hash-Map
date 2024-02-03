const linkedList = require('./linked-lists/linked-lists');

class HashMap {
    constructor(initialCapacity, loadFactor){
        if (typeof initialCapacity !== 'number' || initialCapacity <= 0){
            throw new Error('Initial capacity must be a possitive number.')
        }
        if (typeof loadFactor !== 'number' || loadFactor < 1 || loadFactor > 100){
            throw new Error('Load factor must be a number between 1 - 100')
        }
        this.loadFactor = (loadFactor / 100) * initialCapacity;
        this.buckets = new Array(initialCapacity).fill().map(() => new linkedList());
        this.length = 0
    }

    hash(value){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < value.length; i++) {
          hashCode = primeNumber * hashCode + value.charCodeAt(i);
        }
      
        return hashCode;
    }
    set(key, value){
        this.checkLoad(); // need to make that funckion
        
        const hashCode = this.hash(key);
        const index = hashCode % this.loadFactor;

        if(this.buckets[index] === null){
            newList.append(value);
            
        }else{
            //add the value at linked list if there is another
        }
    }
}