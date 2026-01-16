---
title: Laravel - my first impressions on the framework
excerpt: Is it really an "elegant" and "productivity-optimized" framework?
date: 2025-06-27T00:10:28.160Z
tags: [PHP, Laravel, Programming, Web dev, Fullstack]
---

Is Laravel really an "elegant" and "productivity-focused" framework as its website claims?

That's the question I had when, after more than 3 years without using the framework, and without using PHP, I decided to start studying and working with it again.

So, with the help of Laracasts – a great learning platform focused on Laravel – I decided to rediscover the framework from scratch. And of course, to create a simple application with it, which is the best way to learn.

Here are my initial observations, and my answer to the question above:

(Note that I only dipped my toe into the framework to gauge its quality, only experiencing its most basic features. Therefore, it's not a complete or in-depth analysis, but a superficial one – which was enough to answer the questions above.)

---

# Folder Structure

The first thing to notice is the framework's folder structure – it's well-organized and quite large. Laravel really delivers a lot. You won't need to look for third-party tools to do things that practically every web application needs, such as sending emails, user authentication, input validation, testing, etc.

The little red framework delivers all of that. It's the famous term "batteries-included" – it's a framework of that type, a toy that already comes with batteries included; you don't need to "go to the market" to buy one to do what you want.

And yes, here we already have an argument to answer the question of whether it's "designed for productivity": If you already have Everything you need is right there; you don't need to spend time searching for other tools or integrating other tools. And you don't need to worry about support for those tools, because the Laravel ecosystem evolves together. Everything there will have official support from the framework developers.

So less time needed to search for, choose, and use tools to do specific things you'll use, and less worry about support for the technology you're using.

![Folder structure of the super simple application I'm building.](Laravel%20-%20my%20first%20impressions%20about%20the%20frame/image.png)

Folder structure of the super simple application I'm building.

---

# MVC Structure

The second point I want to touch on is the framework's MVC structure, and show a little bit about how it works.

Since my application is still very small, I'm not yet using the `app/Http/Controllers` folder to save controllers, but in a slightly larger application, that would be ideal. For now, I'm using the routes file itself to execute the logic and return what the route needs. And I'm using a file in the `app/Models` folder as a model to save the data.

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

Here in `routes/web.php` we define the four routes of the application and what each one returns.

Note that the routes `/` and `/contact` return only one view, which I will show later.

The other two routes, which refer to "jobs" (since the application is about job listings), also return views, but first they process information.

Both use a `Job` class, which is exactly what's in my `app/Models/Job.php` file:

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
```

(Here I'm using hardcoded static data, but of course, in a real application this data would be retrieved from a database.)

The `Job` class (or model) has two methods: one to return all jobs and another to return only one, based on a given id.

So far so good, it's standard for a controller to call a model to process the data and then return a view with the processed data. Nothing too complicated. But there are two things in the code above that are interesting to note, and which are another example of how Laravel facilitates and speeds up development, and makes you more productive:

1 - The `Arr` class provides a cleaner and more elegant API for array operations. Note that we did the following in the code above:

```php
$job = Arr::first(static::all(), fn ($job) => $job['id'] == $id);
```

While in pure PHP (PHP < 8.4) we would have to use two methods:

```php
$job = reset(array_filter(static::all(), fn($job) => $job['id'] == $id));
```

However, in PHP 8.4+ (released in November 2024) the `array_find()` method was introduced (and some other array methods) which does the same thing as the Laravel method:

```php
$job = array_find(static::all(), fn($job) => $job['id'] == $id);
```

But it's interesting to know that the framework takes care of these language details as well!

2 - Take a look at the `abort(404)` method. This method aborts the application execution and returns an HTTP response with the code you defined, in this case 404, and the framework already has a screen ready to inform the user of this, without them seeing any error message:

![image.png](Laravel%20-%20minhas%20primeiras%20impress%C3%B5es%20sobre%20o%20fram/image%201.png)

Of course, in important applications you will create a more decent error screen, with a clearer message and a link for the user to return to the site's homepage, for example, but it's very nice that the framework gives you a ready-made screen so you don't have to worry about this while developing the first versions of your application.

---

# Views and _Blade Templates_

Now let's talk about views.

You can use any frontend framework/library for a Laravel application, because even though it's a full-stack framework, it can also be used just to create an API, allowing you to do the frontend in a separate project.

Within a Laravel application, however, you can create your frontend in several different ways. You can even use React or Vue.

However, for my current case, which is simply a super simple application, just to understand the framework, I'm doing the frontend in the most direct and simple way possible: using _blade templates_.

“Blade is the simple yet powerful template engine included in Laravel,” says the [documentation](https://laravel.com/docs/12.x/blade#main-content). It's a technology that allows you to create `.blade.php` files that use HTML but with superpowers, allowing you to create loops, conditionals, etc., within the HTML. If you've ever used React, Angular, or Vue, you've already done "HTML with superpowers".

Of course, you can use TailwindCSS as well.

With Blade Templates, this code:

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

This will render:

![image.png](Laravel%20-%20my%20first%20impressions%20about%20the%20frame/image%202.png)

Considering that we are using the data we saw above in `app/Models/Job.php`, which is returned along with the view in the `/jobs` route that we also saw above in the `routes/web.php` file.

---

# Is it really an elegant framework designed for productivity?

So, answering the questions above:

YES! Laravel is an "elegant" framework, at least I found it very elegant, because it already delivers everything I need to make complex applications, and because it delivers this in a super well-designed and organized structure.

And YES! It's a framework designed for productivity, for the reasons mentioned throughout this text – it has a ready-made structure, I don't need to look for third-party tools, I have APIs that facilitate the use of native PHP APIs, and I don't even need to create error pages if I'm working on an MVP.

In short, although I haven't used it much for simple things, I've really enjoyed it and felt very comfortable within the framework. The development experience is truly great.

The framework manages to deliver a great development experience even though I'm not a big fan of PHP syntax. That's valuable.

But this is just an initial observation. When I've progressed further in using the framework, I can offer more mature insights.
