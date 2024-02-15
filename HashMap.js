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
        return hashCode;
    }
    set(key, value){
        // this.checkLoad(); // need to make that funckion
        
        const hashCode = this.hash(key);
        if(this.buckets[hashCode] === null){
            this.buckets[hashCode] = {key, value}
            this.length++

        }else if(!(this.buckets[hashCode] instanceof linkedList)){

            let newList = new linkedList()
            newList.append(this.buckets[hashCode].key, this.buckets[hashCode].value)
            newList.append(key, value)
            this.buckets[hashCode] = newList
            this.length++
        }else if(this.buckets[hashCode] instanceof linkedList){
            this.buckets[hashCode].append(key, value)
            this.length++
        }
    }
    get(key){
        const hashCode = this.hash(key);

        if(this.buckets[hashCode] && this.buckets[hashCode] instanceof linkedList){
            const node = this.buckets[hashCode].findNodeByKey(key)

            return node ? node.node.value : null;
        }else if(this.buckets[hashCode] && this.buckets[hashCode].key === key){

            return this.buckets[hashCode].value
        }
    }
    has(key){
        const hashCode = this.hash(key);
        if(this.buckets[hashCode] && this.buckets[hashCode] instanceof linkedList){
            const node = this.buckets[hashCode].findNodeByKey(key)
            
            return node ? true : false
        }else if(this.buckets[hashCode] && this.buckets[hashCode].key === key){

            return true
        }

        return false
    }
    remove(key){
        const hashCode = this.hash(key);
        if(this.buckets[hashCode] && this.buckets[hashCode] instanceof linkedList){ 
            this.buckets[hashCode].removeAt(key)
            this.length--

            return true
        }                                       
        else if(this.buckets[hashCode] && this.buckets[hashCode].key === key){
            this.buckets[hashCode] = null
            this.length--

            return true
        }

        return false
    }

    arrayLength(){
        return this.length;
    }

    clear(){
        this.buckets.fill(null);
        this.length = 0
    }
    keys(){
        let allKeys = []
        this.buckets.forEach(bucket => {
            if(bucket instanceof linkedList){ // bucket or bucket !== null
               allKeys.push(...bucket.getKeys())
                
            }else if(bucket && bucket.key !== undefined){
                allKeys.push(bucket.key);
            }    
        });
        return allKeys
    }
    values(){
        let allValues = []
        this.buckets.forEach(bucket => {
            if(bucket instanceof linkedList){
            allValues.push(...bucket.getValues())
            }else if (bucket && bucket.value !== undefined){
                allValues.push(bucket.value);
            }
        })
        return allValues
    }
    entries(){
        const allKey = this.keys();
        const allValues = this.values();

        let allPairs = allKey.map((key, index) => [key, allValues[index]]);
        return allPairs;
    }


}

let Hashm = new HashMap(11, 75);

Hashm.set('tsiots', 'thomas tsiotsias');
Hashm.set('binou', 'Anastasia Binou');
Hashm.set('tsiotsi', 'Joseph Tsiotsias');
Hashm.set('e', 'Joseph Tsiotsias2');

Hashm.keys();
Hashm.entries();





