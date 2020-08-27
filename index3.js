// Define a new component called todo-item
Vue.component('todo-item', {
  template: '<li>This is a todo from component 1</li>'
})


Vue.component('todo-item2', {
  template: '<li>Todo from from component 2</li>'
})

Vue.component('todo-item3', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

var app = new Vue({

el: '#app-3',
data: {
animeList: [
{id:0,text: 'Dragon Ball Z'},
{id:1,text: 'Bungou Stray Dogs'},
{id:3,text: 'CowboyBebop'},
{id:4,text: 'Naruto'},
]
}
})

