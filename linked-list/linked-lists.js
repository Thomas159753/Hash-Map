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
}   

class Node{
    constructor(key, value, next){ 
        this.key = key;              
        this.value = value;
        this.next = next || null;
    }
}

module.exports = linkedList