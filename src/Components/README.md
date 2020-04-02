# Components

Здесь хранятся файлы компонентов, в соответствии со структурой:

Components
|-Block
|  |-Block.scss
|  |-Block.jsx
|  |-index.js
|-other-block

Все `scss` файлы объединяются и компилируются c автопрефиксами в файл `build/css/common.css`.
`js` файлы - в файл `build/js/common.js` c `babel` обработкой (нужно использовать ES6).
