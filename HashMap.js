const linkedList = require('./linked-list/linked-lists');

class HashMap {
    constructor(initialCapacity, loadFactor){
        if (typeof initialCapacity !== 'number' || initialCapacity <= 0){
            throw new Error('Initial capacity must be a possitive number.')
        }
        if (typeof loadFactor !== 'number' || loadFactor < 1 || loadFactor > 100){
            throw new Error('Load factor must be a number between 1 - 100')
        }
        this.loadFactor = (loadFactor / 100) * initialCapacity;
        this.buckets = new Array(initialCapacity).fill(null);
        this.length = 0
        
    }

    hash(value){
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < value.length; i++) {
          hashCode = (primeNumber * hashCode + value.charCodeAt(i)) % this.buckets.length;
        }
        hashCode
        return hashCode;
    }
    set(key, value){
        // this.checkLoad(); // need to make that funckion
        
        const hashCode = this.hash(key);
        hashCode //

        if(this.buckets[hashCode] === null){
            this.buckets[hashCode] = {key, value}
            this.length++

        }else if(!(this.buckets[hashCode] instanceof linkedList)){

            let newList = new linkedList()
            newList.append(this.buckets[hashCode].key, this.buckets[hashCode].value)
            newList.append(key, value)
            this.buckets[hashCode] = newList
        }else if(this.buckets[hashCode] instanceof linkedList){
            this.buckets[hashCode].append(key, value)
        }
    }

}

let Hashm = new HashMap(11, 75);
Hashm.set('tsiotsias', 'thomas tsiotsias');
Hashm.set('tsiotsias', 'Anastasia Binou');
Hashm.set('tsiotsias', 'Joseph Tsiotsias');
