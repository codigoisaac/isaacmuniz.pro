---
title: "Sistemas de Tipos: os três eixos que definem como uma linguagem se comporta"
subtitle: "Com exemplos em TypeScript, Python, Go e mais"
excerpt: Forte ou fraca, estática ou dinâmica, nominal ou estrutural - entenda os três eixos que definem o sistema de tipos de qualquer linguagem de programação.
date: 2026-05-01
publishedOn:
  hashnode: https://imuniz.hashnode.dev/sistemas-de-tipos
  devto: https://dev.to/imuniz/sistemas-de-tipos-os-tres-eixos-que-definem-como-uma-linguagem-se-comporta-1na6
tags:
  - Tipagem
  - Programação
  - TypeScript
  - Python
  - Go
  - PHP
  - Java
  - JavaScript
---

Todo dado em um programa tem um tipo. Um número inteiro, um texto, um valor verdadeiro ou falso - cada um desses é um tipo diferente, e a linguagem precisa saber com qual está lidando para executar operações sobre ele corretamente.
Mas o que acontece quando você tenta somar um número com um texto? Ou usar um objeto onde se espera outro? É aí que entram os sistemas de tipos: o conjunto de regras que cada linguagem define para lidar com essas situações. Diferentes linguagens fazem escolhas muito diferentes nesse sentido, e entender essas escolhas é essencial para qualquer desenvolvedor.

Para entender essas diferenças, precisamos primeiro responder uma pergunta mais fundamental: o que é exatamente um tipo?

# Mas afinal, o que é um tipo?

Um tipo define duas coisas: quais valores são válidos e quais operações podem ser realizadas sobre eles. Quando você cria uma variável do tipo `number`, a linguagem entende que você pode fazer contas com ela. Quando cria uma do tipo `string`, a linguagem sabe que você pode concatenar, dividir em partes, converter para maiúsculas.

## Tipos Primitivos e Tipos Compostos

Existem dois grandes grupos de tipos: os primitivos e os compostos.

### Tipos Primitivos

Tipos primitivos são os blocos de construção elementares. Toda linguagem tem algo parecido com isto:

```ts
// TypeScript
const idade: number = 27;
const nome: string = "Isaac";
const ativo: boolean = true;
```

```python
# Python
idade = 27    # int
nome = "Isaac"    # str
ativo = True    # bool
```

```go
// Go
var idade int = 27
var nome string = "Isaac"
var ativo bool = true
```

São valores simples, indivisíveis. Um número é um número. Uma string é uma sequência de caracteres. Um booleano é verdadeiro ou falso.

### Tipos compostos

Tipos compostos são construídos a partir de outros tipos - sejam primitivos ou outros compostos. Eles agrupam dados relacionados em uma estrutura única. Aqui é onde as diferenças entre linguagens começam a aparecer:

```ts
// TypeScript
interface Pessoa {
  nome: string;
  idade: number;
}

const isaac: Pessoa = {
  nome: "Isaac",
  idade: 27,
};
```

```python
# Python
class Pessoa:
    def __init__(self, nome: str, idade: int):
        self.nome = nome
        self.idade = idade

isaac = Pessoa("Isaac", 27)
```

```go
// Go
type Pessoa struct {
    Nome  string
    Idade int
}

isaac := Pessoa{Nome: "Isaac", Idade: 27}
```

A ideia é a mesma em todas: agrupar dados relacionados sob um único tipo. Mas por que isso importa?

Porque assim a linguagem consegue garantir certos comportamentos. Se você tem uma função que espera receber uma `Pessoa`, a linguagem pode verificar que você está passando realmente uma `Pessoa` - não uma string confundida por acaso. E é aqui que as linguagens começam a divergir: cada uma tem regras diferentes sobre o que é ou não permitido. Vamos começar pela diferença mais intuitiva.

# Como diferentes linguagens tratam a tipagem

Agora que sabemos o que é um tipo, podemos explorar como as linguagens diferem na forma de lidar com eles. Essa diferença aparece em situações concretas do dia a dia: o que acontece quando você passa um valor do tipo errado para uma função? Quando a linguagem detecta o problema? Ela avisa ou simplesmente segue em frente? As respostas variam bastante, e entendê-las ajuda a tomar decisões mais conscientes, tanto na escolha de uma linguagem quanto no uso dela. Vamos aos exemplos.

Em JavaScript:

```js
// JavaScript
"5" + 3   // == "53" - o número foi silenciosamente convertido para string
"5" - 3   // == 2 - agora a string foi silenciosamente convertida para número
[] + {}   // "[object Object]" - resultado que não faz sentido
```

O resultado muda dependendo do operador, sem nenhum aviso, sem nenhum erro. Por isso nos exemplos está escrito "silenciosamente". A linguagem fez **coerções implícitas** - converteu os tipos automaticamente para tentar fazer a operação funcionar de qualquer jeito. Isso é **tipagem fraca**: a linguagem aceita operações entre tipos incompatíveis sem reclamar.

PHP tem um comportamento semelhante:

```php
// PHP
"5" + 3;   // == 8 - string convertida para número automaticamente
```

PHP moderno evoluiu bastante com o suporte a type hints.

> **O que são type hints?**
> Type hints são anotações opcionais que você adiciona ao código para indicar explicitamente qual tipo de dado uma variável, parâmetro ou retorno de função deve ter. O nome é sugestivo: são "dicas de tipo". Dependendo da linguagem, elas podem ser verificadas pela própria linguagem, por ferramentas externas como editores e analisadores estáticos, ou por ambos. Em PHP moderno, ficaria assim:
>
> ```php
> // PHP
> function dobrar(int $n): int {
>     return $n * 2;
> }
> ```

PHP moderno, com type hints, melhorou bastante - mas ainda carrega o legado de ser permissivo com coerções. Outras linguagens fizeram a escolha oposta. Veja o que acontece em Python com a mesma tentativa de somar string e número:

```python
# Python
"5" + 3  # TypeError: can only concatenate str (not "int") to str

# Ou seja: "Erro de Tipagem: só é possível concatenar uma string (não um inteiro) à outra string"
```

A linguagem simplesmente se recusa. Se você quiser concatenar, precisa ser explícito: `"5" + str(3)`. Isso é **tipagem forte**: a linguagem exige que as operações façam sentido entre os tipos envolvidos.

TypeScript e Go se comportam da mesma forma:

```ts
// TypeScript
const x: number = "cinco"; // Erro: Type 'string' is not assignable to type 'number'

// Traduzindo: "Erro: Tipo 'string' não é atribuível a tipo 'número'"
```

```go
// Go
var x int = "cinco" // cannot use "cinco" (type string) as type int

// Traduzindo: "não é possível usar "cinco" (do tipo string) como tipo inteiro"
```

> **Resumindo:** forte/fraco mede a **tolerância da linguagem à ambiguidade de tipos**. Linguagens fracas tentam resolver a situação sozinhas, linguagens fortes exigem que você resolva.

# Type hints e verificação em cada linguagem

Type hints existem em várias linguagens, mas como cada uma as usa na prática? As diferenças são grandes - vão desde linguagens que verificam tudo antes de executar até linguagens que tratam type hints como puros comentários decorativos.

Antes de ver uma tabela comparativa, vale entender o que acontece em cada linguagem quando um erro de tipo ocorre num programa real, porque as consequências são muito diferentes dependendo de onde a verificação acontece.

Nas linguagens que verificam tipos em compilação, como TypeScript, Go e Java, erros de tipo nunca chegam ao usuário. O compilador rejeita o código e o programa simplesmente não é gerado. O desenvolvedor precisa corrigir o problema antes de compilar e portanto antes de publicar qualquer coisa.

Nas linguagens que verificam em runtime, como PHP, o erro aparece durante a execução. Se não for tratado pelo código, o servidor retorna uma tela de erro para o usuário. Mas o PHP faz isso de duas formas diferentes, dependendo da configuração do arquivo.

## Type hints em PHP, e modo padrão vs modo estrito

No modo padrão, o PHP tenta ser prestativo: antes de reclamar de um tipo errado, ele tenta converter o valor para o tipo esperado. Se conseguir, segue em frente silenciosamente. Só lança um erro quando a conversão é realmente impossível:

```php
// PHP
dobrar("5");   // PHP converte "5" para 5 silenciosamente - sem erro
dobrar("abc"); // TypeError - impossível converter
```

Esse comportamento é conveniente, mas também perigoso - pode esconder bugs em vez de expô-los. Por isso o PHP oferece um modo mais rigoroso. Basta adicionar a linha `declare(strict_types=1);` no topo do arquivo para que a linguagem passe a exigir que os tipos batam exatamente, sem nenhuma conversão automática:

```php
// PHP
declare(strict_types=1);

dobrar("5"); // TypeError - mesmo sendo conversível
```

## JavaScript

Em JavaScript, o comportamento é o mais permissivo de todos: erros de tipo raramente interrompem o programa. A linguagem tenta resolver a situação por conta própria com coerções, e o que sobra vai para o console do navegador - invisível para o usuário, silencioso para o desenvolvedor desatento.

## Type hints em Python

Python fica num meio-termo curioso: a linguagem tem tipagem forte - não faz coerções - mas as type hints não causam nenhum erro por si só. Se um valor do tipo errado entrar numa função, Python não vai reclamar das anotações. Vai reclamar somente quando a operação em si falhar, como tentar multiplicar uma string por outra. Nesse caso, lança uma exceção que, se não tratada, retorna um erro 500 para o usuário.

Para verificação antecipada em Python, existem ferramentas externas que leem as type hints e apontam inconsistências antes da execução. As mais usadas são **mypy**, a mais tradicional da comunidade, e **pyright**, criada pela Microsoft. Já o **Pylance** é uma extensão do VS Code que usa o pyright por baixo dos panos para mostrar os erros diretamente no editor enquanto você digita.

## JSDoc em JavaScript

JavaScript também tem uma solução para verificação antecipada sem abrir mão de ser JavaScript: o **JSDoc** combinado com a diretiva `// @ts-check`. JSDoc é um padrão de comentários estruturados que permite anotar tipos diretamente em arquivos `.js`:

```js
// JavaScript
// @ts-check

/**
 * @param {number} n
 * @returns {number}
 */
function dobrar(n) {
  return n * 2;
}

dobrar("cinco"); // o editor sublinha o erro
```

A diretiva `// @ts-check` no topo do arquivo instrui o VS Code a verificar o arquivo usando o mesmo mecanismo do TypeScript por baixo dos panos. Você continua escrevendo JavaScript puro, sem mudar a extensão do arquivo, sem compilar nada. Em execução, os comentários são ignorados e nenhuma verificação acontece - só o editor lê e interpreta as anotações.

# Tabela: Tipagem em diferentes linguagens

Com isso em mente, a tabela abaixo resume como cada linguagem se comporta:

| Linguagem          | Quando a verificação acontece | Quem verifica                                             | O que acontece num programa rodando quando há erro de tipo                                        |
| ------------------ | ----------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| JavaScript         | Não acontece nativamente      | Ferramentas externas (VS Code com `// @ts-check` e JSDoc) | O programa continua rodando com resultado imprevisível; erros aparecem só no console do navegador |
| PHP (modo padrão)  | Em runtime                    | A própria linguagem                                       | Converte o valor silenciosamente e segue em frente                                                |
| PHP (modo estrito) | Em runtime                    | A própria linguagem                                       | Lança `TypeError`; se não tratado, o usuário vê uma página de erro 500                            |
| Python             | Não acontece nativamente      | Ferramentas externas (mypy, pyright, Pylance)             | Lança exceção; se não tratada, o usuário vê uma página de erro 500                                |
| TypeScript         | Em compilação                 | O compilador `tsc`                                        | Impossível: o código não compila e nunca chega ao usuário                                         |
| Go                 | Em compilação                 | O compilador `go`                                         | Impossível: o código não compila e nunca chega ao usuário                                         |
| Java               | Em compilação                 | O compilador `javac`                                      | Impossível: o código não compila e nunca chega ao usuário                                         |

# Os três eixos dos sistemas de tipos

Forte e fraca, como falamos acima, é apenas uma das formas de classificar o sistema de tipos de uma linguagem. Existem três eixos independentes, e confundir um com o outro é muito comum:

| Eixo                     | Pergunta que responde                                   | Resposta                                    |
| ------------------------ | ------------------------------------------------------- | ------------------------------------------- |
| **Forte / Fraca**        | A linguagem aceita operações entre tipos incompatíveis? | Não aceita: Forte / Aceita: Fraca           |
| **Estática / Dinâmica**  | Os tipos são verificados antes ou durante a execução?   | Antes: Estática / Durante: Dinâmica         |
| **Nominal / Estrutural** | Dois tipos são compatíveis pelo nome ou pela forma?     | Pelo nome: Nominal / Pela forma: Estrutural |

Já vimos o primeiro eixo em detalhes. Vamos relembrá-lo e explorar os outros dois.

## Forte vs. Fraca: o quanto a linguagem tolera operações entre tipos incompatíveis?

Linguagens com tipagem fraca, como JavaScript e PHP, fazem coerções implícitas para tentar fazer a operação funcionar. Linguagens com tipagem forte, como Python, TypeScript e Go, se recusam e exigem que o código seja explícito.

## Estática vs. Dinâmica: quando os tipos são verificados?

Linguagens como Go compilam o código antes de rodar: um programa chamado compilador lê o código inteiro, verifica os tipos e só então gera o executável. Se houver um erro de tipo, o programa nem começa a rodar. Isso é **tipagem estática**.

Linguagens como Python e JavaScript não têm essa etapa. O código é lido e executado linha a linha, e os tipos só são verificados quando aquela linha específica roda. Um erro de tipo numa função raramente chamada pode passar despercebido por muito tempo - até o dia em que essa função for executada em produção. Isso é **tipagem dinâmica**.

> **TypeScript é um caso especial:** ele compila, mas não gera código de máquina - gera JavaScript, que depois é interpretado. Mesmo assim, é durante a compilação que os tipos são verificados, por isso é considerado estaticamente tipado.

Uma consequência prática da tipagem dinâmica é que a mesma variável pode receber valores de tipos diferentes ao longo do código:

```python
# Python
x = 5        # x aponta para um inteiro
x = "hello"  # x agora aponta para uma string - sem erro
```

Isso funciona porque em Python o tipo pertence ao valor, não à variável. A variável `x` é só um nome que aponta para um valor: primeiro apontava para `5` (do tipo `int`), depois passou a apontar para `"hello"` (do tipo `str`). Os valores em si continuam tendo seus tipos - o que mudou foi apenas para qual valor `x` está apontando.

Em linguagens com tipagem estática, como Go, é o oposto: o tipo pertence à variável. Quando você declara `var x int`, está dizendo que `x` é um recipiente que só aceita inteiros. Ele não pode passar a apontar para uma string, independentemente do que aconteça:

```go
// Go
var x int = 5
x = "hello" // ❌ cannot use "hello" (type string) as type int
```

### A escolha entre tipagem estática vs. dinâmica

A escolha entre estática e dinâmica envolve uma troca. Tipagem estática oferece segurança antecipada: erros são detectados antes de o programa rodar, o que é especialmente valioso em projetos grandes. Tipagem dinâmica oferece flexibilidade e agilidade: o código tende a ser mais enxuto e não exige declarações de tipo em todo lugar, o que pode acelerar o desenvolvimento em projetos menores ou exploratórios. Não há uma escolha universalmente certa - depende do contexto.

## Nominal vs. Estrutural: o que torna dois tipos compatíveis?

Esse eixo responde a uma pergunta mais sutil: para a linguagem aceitar que um tipo `B` seja usado onde se espera um tipo `A`, o que precisa ser verdade?

Em linguagens com tipagem **nominal**, o que importa é o nome declarado. Dois tipos são compatíveis somente se houver uma relação explícita entre eles. Java é um exemplo claro:

```java
// Java
interface Animal {
    void speak();
}

class Dog implements Animal {
    public void speak() { System.out.println("Au!"); }
}
```

Se você criar uma classe `Cat` com exatamente os mesmos métodos mas sem declarar `implements Animal`, o Java não vai aceitar um `Cat` onde se espera um `Animal` - mesmo que a estrutura seja idêntica:

```java
// Java
class Cat {
    public void speak() { System.out.println("Miau!"); }
}

Animal a = new Cat(); // ❌ Cat cannot be converted to Animal
```

Em linguagens com tipagem **estrutural**, o que importa é a forma - os métodos e propriedades que o tipo possui. Se a estrutura bate, a operação é aceita, independentemente do nome ou de qualquer declaração explícita. TypeScript funciona assim:

```ts
// TypeScript
interface Animal {
  speak(): void;
}

class Dog {
  speak() {
    console.log("Au!");
  }
}

// Dog nunca declarou que implementa Animal,
// mas TypeScript aceita porque a estrutura é compatível
const a: Animal = new Dog(); // ✅
```

Isso tem um nome: **duck typing estático**. A expressão vem de um ditado em inglês: _"If it walks like a duck and quacks like a duck, it's a duck"_ - "se anda como pato e grasna como pato, é um pato". A identidade de um tipo é definida pelo que ele faz, não pelo que ele se declara ser. O "estático" indica que essa verificação ainda acontece em tempo de compilação.

Python também é estrutural, mas sem checagem antecipada - qualquer objeto que tenha os métodos certos é aceito, e a linguagem só descobre incompatibilidades em execução. Go mistura as duas abordagens: tipos concretos são nominais, mas interfaces são estruturais, o que significa que uma struct satisfaz uma interface automaticamente, sem precisar declará-la explicitamente.

### A escolha entre tipagem nominal vs. estrutural

Tipagem nominal exige mais cerimônia no código - você precisa declarar explicitamente as relações entre tipos - mas em troca oferece contratos mais claros e verificáveis. É mais fácil saber exatamente o que uma função aceita e o que ela rejeita. Tipagem estrutural é mais flexível e menos verbosa, mas exige mais atenção do desenvolvedor: dois tipos podem ser compatíveis por acidente, simplesmente por terem os mesmos métodos, mesmo que representem conceitos completamente diferentes.

# Onde cada linguagem se encaixa

Com os três eixos em mente, fica mais fácil comparar as linguagens de forma objetiva. A tabela abaixo mostra como cada uma se posiciona nesses eixos de tipagem:

| Linguagem  | Forte / Fraca | Estática / Dinâmica | Nominal / Estrutural                                                      |
| ---------- | ------------- | ------------------- | ------------------------------------------------------------------------- |
| Java       | Forte         | Estática            | Nominal                                                                   |
| C#         | Forte         | Estática            | Nominal                                                                   |
| Go         | Forte         | Estática            | Misto (nominal para tipos concretos, estrutural para interfaces)          |
| TypeScript | Forte         | Estática            | Estrutural                                                                |
| Python     | Forte         | Dinâmica            | Estrutural                                                                |
| Ruby       | Forte         | Dinâmica            | Estrutural                                                                |
| PHP        | Fraca         | Dinâmica            | Ambíguo (nominal com classes e interfaces, mas historicamente permissivo) |
| JavaScript | Fraca         | Dinâmica            | Estrutural                                                                |

Nenhuma combinação é universalmente melhor. Cada uma reflete escolhas de design que priorizam coisas diferentes: segurança, flexibilidade, produtividade ou clareza de contrato.

### Do sistema de tipos mais rígido para o mais permissivo

Considerando os três eixos juntos - onde forte é mais rígido que fraco, estática mais rígida que dinâmica, e nominal mais rígida que estrutural - é possível ordenar as linguagens do sistema de tipos mais restritivo para o mais permissivo:

1. **Java, C#** - forte + estática + nominal: o nível mais alto de restrição, com verificação antecipada e contratos explícitos obrigatórios
2. **Go** - forte + estática + nominal/estrutural: tão rígido quanto Java e C# na verificação antecipada, mas um pouco mais flexível nas interfaces
3. **TypeScript** - forte + estática + estrutural: verificação antecipada sem exigir declarações explícitas de conformidade
4. **Python, Ruby** - forte + dinâmica + estrutural: sem coerções, mas erros só aparecem em execução
5. **PHP** - fraca + dinâmica + ambíguo: permissivo por padrão, com rigor opcional via `strict_types`
6. **JavaScript** - fraca + dinâmica + estrutural: o sistema de tipos mais permissivo da lista

Vale lembrar que essa ordenação é uma simplificação. Na prática, a rigidez de um sistema de tipos depende também de como o desenvolvedor usa a linguagem - PHP com `strict_types` e mypy no Python, por exemplo, podem se comportar de forma bem mais rígida do que a posição deles na lista sugere.

# Conclusão

Tipos são um daqueles assuntos que parecem simples até você começar a comparar como linguagens diferentes os tratam. Um mesmo erro pode travar o programa antes de rodar, explodir em produção, ou passar completamente despercebido, dependendo das escolhas que a linguagem faz. Conhecer essas diferenças muda a forma como você lê erros, escolhe ferramentas e escreve código.
