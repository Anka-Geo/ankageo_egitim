# JavaScript
Javascript ile alakalı öğrenilmesi tavsiye edilen fonksiyonlar eklenmiştir.
## Array fonksiyonları
- `map`
- `find`
- `findIndex`
- `filter`
- `indexOf`
- `forEach`
- `every`
- `some`
- `concat`
- slice
- splice
- `join`
- `push`
- `pop`
- `shift`
- `unshift`
- `reduce`
- `reverse`
- `includes`
- flat
- flatMap
- `sort`
## Array Static fonksiyonları
- Array.from
- `Array.isArray`

## Object fonksiyonları
- hasOwnProperty
## Object Static fonksiyonları
- `Object.assign`
- `Object.keys`
- Object.create // pek bakmaya gerek yok

## Sorular

```Javascript
const arr = [
    {name: 'A'},{name: 'b'},{name: 'c'},{name: 'd'}
];
// Aşağıdaki map fonksiyonu nasıl çalışır, nasıl bir sonuç return eder.
arr.map(a => a.name);
arr.map((a) => { return a.name });
arr.map((a) => a.name);
arr.map(({ name }) => name);
arr.map(function(a) {return a.name});

// Aşağıdaki filter, find, findIndex fonksiyonu nasıl çalışır ne return eder.
arr.filter(a => a.name);
arr.filter(a => a.name === 'b');

arr.find(a => a.name);
arr.find(a => a.name === 'b');

arr.findIndex(a => a.name);
arr.findIndex(a => a.name === 'b');

// Komplex Sorular

// Ne return eder ?
arr.map(a => a.name).join(',');

// Ne return eder ?
arr.map(a => a.name)
    .filter((_, i) => i % 2)
    .join(',');

// Ne return eder ?
arr.every(a => typeof a.name === 'string');

// Ne return eder ?
arr.map((a, i) => ({
    username: a.name,
    index: i
}));

// Ne return eder ?
arr.map(a => ({[a]: 'foo'}));

```
