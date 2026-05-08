---
title: "Laravel: minhas primeiras impressões sobre o framework"
excerpt: Será que é mesmo um framework “elegante” e “otimizado para produtividade”?
date: 2025-06-27
tags:
  - PHP
  - Laravel
  - Programação
  - Desenvolvimento Web
  - Fullstack
---

Será que o [Laravel](https://laravel.com) é mesmo um framework “elegante” e “pensado para produtividade” como diz seu site?

Essa é a dúvida que eu tinha, quando, depois de mais de 3 anos sem usar o framework, e sem usar PHP, resolvi voltar a estudá-lo e trabalhar com ele.

Então resolvi, com a ajuda da [Laracasts](https://laracasts.com) - uma ótima plataforma de ensino focada em Laravel - conhecer de novo, do zero, o framework. E é claro, fazer uma simples aplicação com ele, que é o melhor jeito de aprender.

Aqui estão minhas percepções iniciais, e minha resposta para pergunta acima:

> Note que eu apenas coloquei a ponta do pé no framework para sentir sua temperatura, entrando em contato somente com suas características mais básicas. Portanto, não é uma análise completa e nem profunda, mas uma superficial - o que já foi suficiente para ter uma resposta para as perguntas acima.

---

## Estrutura de pastas

Primeira coisa para notar é a estrutura de pastas do framework - é bem organizada, e é bem grande. Realmente o Laravel te entrega muita coisa. Você não vai precisar buscar ferramentas de terceiros para fazer coisas que praticamente toda aplicação web precisa, como enviar emails, autenticação de usuário, validação de inputs, testes, etc.

O framework vermelhinho te entrega tudo isso. É o famoso termo “batteries-included” - ele é um framework desse tipo, um brinquedo que já vem com as baterias incluídas, tu não precisa “ir no mercado” comprar uma para fazer o que você quer.

E sim, aqui já temos um argumento para responder a pergunta de se ele é “pensado para produtividade”: Se tu já tem tudo que precisa ali, tu não precisa gastar tempo procurando outras ferramentas e nem integrando outras ferramentas. E tu não precisa se preocupar com o suporte dessas ferramentas, porque o ecossistema Laravel evolui em conjunto. Tudo ali vai ter suporte oficial dos desenvolvedores do framework.

Então menos tempo necessário para ir atrás, escolher e usar ferramentas para fazer coisas específicas que você vai usar, e menos preocupação com suporte da tecnologia que você está usando.

![Estrutura de pastas](/images/blogPosts/laravel-primeiras-impressoes/folder-structure.png)

Estrutura de pastas da aplicação super simples que eu estou construindo.

---

## Estrutura MVC

O segundo ponto que eu quero tocar é a estrutura MVC do framework, e mostrar um pouco como ela funciona.

Como a minha aplicação ainda é super pequena, ainda não estou usando a pasta `app/Http/Controllers` para salvar controllers, mas em uma aplicação um pouco maior, seria o ideal. Por enquanto, estou usando o próprio arquivo de rotas mesmo para executar a lógica e retornar o que a rota precisa. E estou usando um arquivo na pasta `app/Models` como modelo para salvar os dados.

`routes/web.php`:

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Models\Job;

Route::get('/', function () {
  return view('home');
});

Route::get('/jobs', function () {
  $jobs = Job::all();

  return view('jobs', ['jobs' => $jobs]);
});

Route::get('/jobs/{id}', function ($id) {
  $job = Job::find($id);

  return view('job', ['job' => $job]);
});

Route::get('/contact', function () {
  return view('contact');
});

```

Aqui no `routes/web.php` nós definimos as quatro rotas da aplicação e o que cada uma retorna.

Note que as rotas `/` e`/contact` retornam apenas uma view, que eu vou mostrar mais à frente.

As outras duas rotas, que são referentes a “jobs” (já que a aplicação é sobre listagens de vagas de emprego), também retornam views, mas antes fazem um processamento de informações.

Ambas usam uma classe `Job`, que é exatamente o que está no meu arquivo `app/Models/Job.php`:

```php
<?php

namespace App\Models;

use Illuminate\Support\Arr;

class Job {
  public static function all(): array {
    return [
      [
        'id' => 1,
        'title' => 'Director',
        'salary' => '$50,000',
      ],
      [
        'id' => 2,
        'title' => 'Programmer',
        'salary' => '$15,000',
      ],
      [
        'id' => 3,
        'title' => 'Teacher',
        'salary' => '$40,000',
      ],
    ];
  }

  public static function find(int $id): array {
    $job = Arr::first(static::all(), fn ($job) => $job['id'] == $id);

    if (! $job) {
      abort(404);
    }

    return $job;
  }
}
```

(Aqui estou usando dados estáticos de forma hardcoded, mas é claro, numa aplicação real esses dados seriam buscados e viriam de um banco de dados.)

A classe (ou model) `Job` tem dois métodos: um para retornar todos os jobs e outro para retornar somente um, a partir de uma id fornecida.

Até aí tudo bem, é o padrão de um controller chamar um model para processar os dados e depois retornar uma view com os dados processados. Nada demais. Mas tem duas coisinhas no código acima que são interessantes de notar, e que são mais uma amostra de como o Laravel facilita e agiliza o desenvolvimento, e te deixa mais produtivo:

1 - A classe `Arr` te fornece uma API mais limpa e elegante para operações com arrays. Note que nós fizemos o seguinte no código acima:

```php
$job = Arr::first(static::all(), fn ($job) => $job['id'] == $id);
```

Enquanto em PHP puro (PHP < 8.4) teríamos que utilizar dois métodos:

```php
$job = reset(array_filter(static::all(), fn($job) => $job['id'] == $id));
```

Já no PHP 8.4+ (lançado em Novembro de 2024) foi introduzido o método array_find() (e alguns outros métodos de array) que faz a mesma coisa que o método do Laravel:

```php
$job = array_find(static::all(), fn($job) => $job['id'] == $id);
```

Mas é interessante saber que o framework cuida desses detalhes de linguagem também!

2 - Dá uma olhada no método `abort(404)`. Esse método aborta a execução da aplicação e retorna retorna uma resposta HTTP com o código que você definiu, nesse caso 404, e o framework já tem uma tela pronta para informar isso para o usuário, sem que ele veja nenhuma mensagem de erro:

![Página padrão de erro 404](/images/blogPosts/laravel-primeiras-impressoes/404-not-found.png)

É claro que em aplicações importantes você vai fazer uma tela de erro mais decente, com uma mensagem mais clara e um link para o usuário retornar para a página inicial do site por exemplo, porém é muito bacana que o framework te dê uma tela pronta para você não precisar se preocupar com isso enquanto desenvolve as primeiras versões da sua aplicação.

---

## Views e Blade Templates

Agora vamos falar das views.

Você pode usar qualquer framework/biblioteca de frontend para uma aplicação Laravel, porque por mais que ele seja um framework fullstack, ele pode também ser usado somente para criar uma API, te permitindo fazer o frontend em um projeto separado.

Dentro de uma aplicação Laravel, porém, você pode criar seu frontend de algumas formas diferentes. Você pode inclusive usar React ou Vue.

Porém, para o meu caso atual, que é simplesmente uma aplicação super hiper simples, somente para entender sobre o framework, eu estou fazendo o frontend da forma mais direta e simples possível: usando _blade templates_.

“Blade é o mecanismo de template simples, mas poderoso, incluído no Laravel” diz a [documentação](https://laravel.com/docs/12.x/blade#main-content). É uma tecnologia que te permite criar arquivos `.blade.php` que usam HTML porém com superpoderes, te permitindo fazer loops, condicionais, etc, dentro do HTML. Se você já usou React, Angular ou Vue, já fez “HTML com superpoderes”.

É claro, você pode usar TailwindCSS também.

Com Blade Templates, esse código:

```html
<x-layout>
  <x-slot:heading> Jobs </x-slot:heading>

  @foreach ($jobs as $job)
  <li>
    <a href="/jobs/{{ $job['id'] }}" class="text-cyan-500 hover:underline">
      <strong>{{ $job['title'] }}:</strong> Pays {{ $job['salary'] }} per year.
    </a>
  </li>
  @endforeach
</x-layout>
```

Vai renderizar isso:

![Exemplo de Blade Templates](/images/blogPosts/laravel-primeiras-impressoes/blade-templates-example.png)

Considerando que estamos usando os dados que vimos lá em cima em app/Models/Job.php, que são retornados junto com a view na rota /jobs que também vimos mais acima no arquivo routes/web.php.

---

## É realmente um framework elegante e pensado para produtividade?

SIM! O Laravel é um framework “elegante”, pelo menos eu achei ele muito elegante, por já entregar tudo que eu preciso para fazer aplicações complexas, e por entregar isso numa estrutura super bem projetada e organizada.

E sim, é um framework pensado para produtividade, pelos motivos citados durante esse texto - estrutura já pronta, não preciso buscar ferramentas de terceiros, tenho API’s que facilitam o uso de API’s do PHP nativo, e não preciso nem criar páginas de erro se estiver fazendo um MVP.

Enfim, embora eu tenha o usado pouco para coisas simples, tenho gostado bastante e me sentido muito confortável dentro do framework. A experiência de desenvolvimento é realmente ótima.

O framework consegue me entregar uma ótima experiência de desenvolvimento mesmo eu não sendo um grande fã da sintaxe do PHP. Isso é algo valioso.

Mas, é uma percepção inicial. Quando eu tiver avançado mais no uso do framework, posso trazer percepções mais maduras.
