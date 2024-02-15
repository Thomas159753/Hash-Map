class linkedList{
    constructor(){
        this.head = null;
        this.length = 0
    }

    prepend(value){
        const newNode = new Node(key, value, this.head);
        this.head = newNode;
        this.length++
    }

    append(key,value){
        if(!this.head){ // if there isnt a head make one
            this.head = new Node(key, value)
        }else{
            let current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = new Node(key, value)
        }
        this.length++
    }
    size(){
        return this.length;
    }
    gethead(){
        return this.head;
    }
    tail(){
        if(this.head === null) {
            return null
        }else{
            let current = this.head;
            while (current.next){
                current = current.next
            }
            return current
        }
    }
    at(index){
        if(index < 0 || index >= this.length) return null

        let current = this.head;
        let currentIndex = 0
        while(currentIndex < index){
            current = current.next;
            currentIndex++
        }
        return current;
    }
    pop(){
        if(this.length === 0) return null

        if(this.length ===1){// if there is only one
            this.head = null
            this.length--
        }
        let current = this.head
        let prev = null
        while(current.next){
            prev = current
            current = current.next
        }
        prev.next = null
        this.length--;
    }
    contains(value){
        if(this.length === 0) return false
        let current = this.head
        while(current.value !== value && current.next){// if not the same value and current.next isnt null then while = true
            current = current.next;
        }
        return current.value === value ? true : false;
    }
    find(key){
        if(this.length === 0) return null
        let current = this.head
        let currentIndex = 0
        while(current.key !== key && current.next){
            current = current.next
            currentIndex++
        }
        if(current.key === key){
            return currentIndex
        }
        return null
    }
    findNodeByKey(key){
        if(this.length === 0) return null
        let current = this.head
        let currentIndex = 0
        while(current.key !== key && current.next){
            current = current.next
            currentIndex++
        }
        if(current.key === key){
            return {node: current, index: currentIndex}
        }
        return null
    }
    toString(){
        let output = ''
        let current = this.head;
        while(current){
            if(!current.next){
                output +=`(${current.value}) -> null`
            }else{
                output += `(${current.value}) ->`
            }
            current = current.next
        }
        console.log(`${output}`)
    }

    // Extra credit
    
    insertAt(value, index){
        if (index === 0 ){
            this.head = new Node(value)
        }
        const prev = this.at(index - 1);
        if (prev == null) return null

        prev.next = new Node(key, value, prev.next)
        this.length++
    }

    removeHead(){
        this.head = this.head.next;
        this.length--
    }
    removeAt(key){
        if (this.length === 0) return null

        if(this.head.key === key) {
            this.removeHead()
            return
        }
        const nodeInfo = this.findNodeByKey(key);
        if(!nodeInfo) return null
        const prev = this.at(nodeInfo.index - 1);
        if(prev == null || prev.next === null) return null

        prev.next = prev.next.next;
        this.length--
    }
    getKeys(){
        if (this.length === 0) return null;
        if (this.length === 1 ) return this.head.key;
        let current = this.head;
        let keys = []
            while (current.next) {
                keys.push(current.key)
                current = current.next;
            }
        keys.push(current.key)
        return keys;
    }
    getValues(){
    if (this.length === 0) return null;
    if (this.length === 1) return this.head.value;
        let current = this.head;
        let values = []
        while(current.next){
            if(current.value !== undefined){
                values.push(current.value)
                current = current.next;
            }else if (current.value === undefined || current.value === null){
                values.push(null)
                current = current.next;
            }
        }
        values.push(current.value);
        return values
    }
}   

class Node{
    constructor(key, value, next){ 
        this.key = key;              
        this.value = value;
        this.next = next || null;
    }
}

module.exports = linkedList

const ll = new linkedList();
ll.append(10, "V10")
ll.append(20, "V20")
ll.append(30, "V30")
ll.append(40)
ll.append(50)
ll.append(60)
// ll.getKeys()

ll.getValues();