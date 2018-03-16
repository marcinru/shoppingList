var model = {
    items: [{text: 'Banany', checked: true },
            {text: 'Jabłka', checked: false}],
    title: 'Moja lista zakupów',
    newItem: ''
};

new Vue({
    el: '#app',
    data: model,
    methods: {
        addItem: function(event) {
            event.preventDefault();
            this.items.push({text: this.newItem, checked: false});
            this.newItem = '';
        }
    }
});
