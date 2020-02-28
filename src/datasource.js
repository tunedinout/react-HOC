
let DataSource = {
    listeners : [],
    items: [],
    colors: [],
    addItem: function(item){
        this.items.push(item);
        this.notify();
    },
    addColor: function(str) {
        this.colors.push(str);
        this.notify();
    },
    getItems : function() {
        return this.items;
    },
    notify: function(){
        for(let i=0;i<this.listeners.length;i++){
            this.listeners[i]();
        }
    },
    getColors : function () {
        return this.colors;
    },
    subscribe:function(func){
        this.listeners.push(func);
    },
    unsubscribe: function(func){
        this.listeners.splice(this.listeners.indexOf(func),1);
    } 
    
};

export default DataSource;