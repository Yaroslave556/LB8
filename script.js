class Students {
    constructor(parameter) {
        this.name = parameter.name;
        this.surname = parameter.surname;
        this.group = parameter.group;
        this.age = parameter.age;
    }

    information() {
        console.log("Name:", this.name);
        console.log("Surname:", this.surname);
        console.log("Group:", this.group);
        console.log("Age:", this.age);
    }
}

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    blockHide() {
        this.$el.style.display = 'none';
    }
    
    editColor(color) {
        this.$el.style.background = color;
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector);
        this.$el.style.width = options.width + 'px';
        this.$el.style.height = options.height + 'px';
        this.$el.style.background = options.color;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const box1 = new Box({
        selector: '#box1',
        width: 1000,
        height: 50,
        color: 'blue'
    });
});


let student1 = new Students({name: 'Dubrovskiy', surname: 'Yaroslave', group: '407-AKIT', age: 19});
let student2 = new Students({name: 'Dmitry', surname: 'Minenkov', group: '407-AKIT', age: 18});
let student3 = new Students({name: 'Mukhin', surname: 'Ilya', group: '407-AKIT', age: 19});

student1.information();
student2.information();
student3.information();
