
# CSS 3

## Sorular
- `position` kaç değer alır
- div'in ve span'in default `display` değeri nedir
- selector soruları

    ```css 
    // bu ikisi arasında ne fark vardır. 
    p { color: red; }
    .p { color: red; }
    ```

    ```css 
    // bu selectorler nasıl çalışır neyi temsil eder
    p.foo { color: red; }
    .p.foo { color: red; }
    p.p.foo { color: red; }
    p .foo { color: red; }
    p > .foo { color: red; }
    p + .foo { color: red; }
    p ~ .foo { color: red; }
    ```

    ```css
    // selectorler ne yapar.
    p:before { content: "🦄"; }
    p:after { content: "🦜"; }
    ```
## 