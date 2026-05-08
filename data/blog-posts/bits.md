---
title: Um pequeno resumo e introdução sobre como bits funcionam
excerpt: Bits são a fundação mais básica da Ciência da Computação. É interessante saber como eles funcionam. Aqui eu te explico como números e texto são representados por sequências de bits.
date: 2023-09-29
tags: [Programação, Memória, Ciência da Computação]
---

Tudo que produzimos com nosso código é, no final, bits. Nós escrevemos código em uma linguagem de programação, mas o computador sabe ler apenas bits. Para organizar esses bits de uma forma que faça sentido para nós, nós criamos valores em nossa linguagem de programação. Nesse artigo nós vamos falar um pouco sobre o que são bits e como eles representam valores.

## Bits

Computadores não são inteligentes, eles só podem entender duas coisas: zero e um. Ele não sabe o que é dois ou três. E quando escrevemos números, o que nosso computador entende é a sequência de zeros e uns que representa aquele número. Nesse sentido, zeros e uns são pedaços de informação, e nós chamamos esses zeros e uns de bits.

Cada 0 (zero) na memória do computador é um bit, e cada 1 (um) também. Sozinhos esses bits não conseguem significar muito, mas podemos juntá-los para que uma sequência deles signifique algum valor. Por exemplo, a sequência de bits que equivale ao número 42 é 101010, para o número 80 a sequência é 1010000 e para 4280 é 1000010111000.

Toda sequência de bits, seja ela qual for, vai significar um número para o computador. Em uma sequência de bits, cada bit carrega um valor, e para saber qual número a sequência significa basta somar esses valores. O valor de cada bit aumenta por um fator de 2 a cada posição da direita para a esquerda. Então se um bit está na última posição na sequência, ele vale 1, se ele está na penúltima posição ele vale 2, se ele está uma posição antes dessa ele vale 4, depois 8, e assim por diante. O bit só carrega o valor de sua posição caso ele seja 1 (um). Caso ele for 0 (zero) ele não carrega nenhum valor.

O modelo abaixo representa o número 25 e deixa isso claro:

```jsx
  0    0    0    1   1   0   0   1
128   64   32   16   8   4   2   1
```

Na sequência acima nós somamos 16 + 8 + 1 = 25.

> 👾 Desafio: calcule qual número significa a sequência de bits abaixo:
>
> ```jsx
>
>   0    1    1    1   1   0   1   1
> 128   64   32   16   8   4   2   1
> ```

Isso também acontece com texto. Existe algo chamado [padrão Unicode](https://pt.wikipedia.org/wiki/Unicode) que atribui um número para cada letra e emoji. Se cada letra e emoji significa um número para o computador, então também podemos representar texto através de código binário (“código binário” é outro nome para “sequência de bits”). A palavra “Oi” é representada pela sequência “01001111 01101001”.

> 🔥 Aliás, para transformar texto em código binário e vice-versa, você pode usar um app que eu fiz, o [Binary Shift](https://binaryshift.netlify.app/). (Talvez no futuro seja implementada tradução de números também)

---

Espero que agora esteja mais claro para você como código binário representa informação.
