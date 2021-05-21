class LinkNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cache = {};
        this.head = new LinkNode();
        this.tail = new LinkNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.capacity = capacity;
        this.size = 0;
    }
    get(key) {
        const node = this.cache[key]
        if (!node) {
            return -1;
        }
        // 如果key存在,则通过哈希表定位,再移到头部
        this.moveToHead(node);
        return node.value;
    }
    put(key, value) {
        let node = this.cache[key];
        if (!node) {
            node = new LinkNode(key, value);
            this.cache[key] = node;
            this.addToHead(node);
            this.size += 1;
            if (this.size > this.capacity) {
                const lastNode = this.removeTail();
                this.cache[lastNode.key] = null;
                this.size -= 1
            }
        } else {
            node.value = value;
            this.moveToHead(node);
        }
    }
    moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }
    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }
    removeTail() {
        const node = this.tail.prev;
        this.removeNode(node);
        return node;
    }
}
