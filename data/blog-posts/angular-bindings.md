---
title: "Angular: tipos de data-binding - property, event e two-way"
excerpt: Vinculações de dados no Angular, explicadas de forma que você vai entender!
date: 2025-07-01
tags:
  - Angular
  - Desenvolvimento Web
  - Programação
  - Frontend
---

“Binding”, do Inglês, significa “vinculação” ou “ligação”, no sentido de conectar uma coisa com a outra.

E sabemos que no Angular, nossos componentes vão ter três partes: a classe, que define a lógica, a template, que define o conteúdo, e por último a estilização do conteúdo.

Mas o que é relevante para a gente aqui e agora são apenas duas partes: **a classe e a template**.

Essas duas partes do nosso componente lidam com dados, e existem formas de _vincular_ esses dados entre as duas.

# Os dois tipos de vinculação de dados

Para começar, há dois tipos de vinculação:

1. **Vinculação unidirecional** ⇒ quando uma informação vai de uma parte do componente para outra. Pode ser tanto da classe para a template, ou da template para a classe. A informação segue um caminho só, portanto, unidirecional.

2. **Vinculação bidirecional** ⇒ quando uma informação vai tanto da classe para a template quanto da template para a classe. Ela vai e volta, logo, bidirecional.

# Vinculação unidirecional

Falando sobre vinculação unidirecional, existem dois tipos dela:

1. **Property binding** (vinculação de propriedade) ⇒ quando uma propriedade, que tem seu valor definido na _classe,_ é vinculada à template, fazendo com que quando esse valor é alterado na classe, a template o reflita, mas se ele for alterado na template a alteração não é refletida na classe. Ou seja, a propriedade vai da classe para a template, apenas.
2. **Event binding** (vinculação de evento) ⇒ quando um evento acontece na _template_ (por exemplo: o usuário digitou em um input), a template envia alguma informação para a classe. Mas nada é enviado da classe para a template. Ou seja, o evento vai somente da template para a classe.

Perceba que: no _property binding_ a informação vai da classe para a template, e no _event binding_ é o inverso, a informação vai da template para a classe.

Ou seja, ambos são _vinculações unidirecionais_.

## Exemplo de vinculação de propriedade

```html
<input [value]="userName" />
```

Nesse exemplo, o valor do input [value] vai ser igual ao valor da propriedade userName, que está definida na classe. Quando o valor da propriedade for alterado, o valor do input refletirá, mas quando o valor do input for alterado, não acontecerá o inverso.

## Exemplo de vinculação de evento

```html
<input (input)="userName = $event.target.value" />
```

Já aqui, temos uma vinculação de evento, onde a informação vai fluir da template para a classe: quando o usuário digitar no input, a propriedade userName irá receber o valor que está digitado no input, mas o input não recebe o valor da propriedade caso ela seja alterada em outro lugar.

# Vinculação bidirecional

No Inglês, vinculação bidirecional é “two-way binding”.

E a vinculação bidirecional na prática é a união dos dois métodos que falamos acima: _property binding_ e _event binding._

Usando os dois juntos você tem uma vinculação bidirecional, já que um manda os dados em uma direção, e o outro, em outra.

Inclusive a sintaxe usada para fazer uma vinculação bidirecional é literalmente a sintaxe das duas acima, unidas: enquanto no _property binding_ nós usamos colchetes `[ ]` e no _event binding_ nós usamos parênteses `( )`, no _two-way binding_ nós usamos ambos juntos: `[( )]`.

## Exemplo “sujo” de vinculação bidirecional

Podemos fazer uma vinculação bidirecional usando vinculação de propriedade e vinculação de evento no mesmo elemento:

```html
<input [value]="userName" (input)="userName = $event.target.value" />
```

No exemplo acima, o valor do input recebe o valor da propriedade userName, e a propriedade userName por sua vez recebe o valor que é digitado no input, fazendo com que tenhamos uma vinculação bidirecional. Mas essa não é a forma inteligente de escrever uma.

## Exemplo “limpo” de vinculação bidirecional

Há um jeito mais limpo de fazer a vinculação bidirecional:

```html
<input [(ngModel)]="userName" />
```

Elegante, não?!

Essa sintaxe, de colocar os parênteses dentro dos colchetes, é informalmente chamada de **_banana-in-a-box_** pela comunidade Angular, que significa “banana em uma caixa”, e dá para perceber por quê: `[()]`.

### ngModel

O ngModel é uma **diretiva** do Angular, usada para implementar vinculações bidirecionais. É usada principalmente em elementos de formulário, como inputs, mas pode, com uma customização extra, ser usada em qualquer elemento.

A diretiva conecta os dados da classe do componente com elementos de input. Ela é parte do módulo **FormsModule** do Angular, então para usá-la você precisa importá-lo no módulo do componente, dessa forma:

```tsx
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  // ...
})

```

---

Espero que você tenha compreendido com clareza esses três tipos de vinculação de dados no Angular.
