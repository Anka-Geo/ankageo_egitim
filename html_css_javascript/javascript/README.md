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

## Sorular

### Soru 1
```js
// points array'ini aşağıdaki stringe çeviren algoritmayı yazınız.
const points = [[28.81, 41.07],[28.75, 41.01]];
'LINESTRING (28.81 41.07  0, 28.75 41.01  0)'
```

### Soru 2
```js
// Aşağıdaki geojson'ı kullanarak geometrinin en küçük Bbox(bounding box) değerini bulunuz. 
// bounding box: 4 noktadan oluşan bir nokta arrayidir. Bir dikdörtgeni temsil eder. [batı, güney, doğu, kuzey] şeklindedir
const geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            28.804349899291992,
            41.06783368386694
          ],
          [
            28.804156780242916,
            41.066418125766894
          ],
          [
            28.806205987930298,
            41.06602985307676
          ],
          [
            28.80913496017456,
            41.06598131882931
          ],
          [
            28.805766105651852,
            41.06704906399861
          ],
          [
            28.805841207504272,
            41.065002537193365
          ],
          [
            28.80459666252136,
            41.065196676857916
          ],
          [
            28.80529403686523,
            41.06474368341578
          ]
        ]
      }
    }
  ]
}

```