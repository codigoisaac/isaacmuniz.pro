---
title: "Angular: property binding, event binding, and bidirectional binding"
excerpt: Data binding in Angular, explained in a way you'll understand!
date: 2025-07-01T50:23:08.187Z
tags: [Programming, Web dev, Angular, Frontend]
---

"Binding," from English, means "linking" or "connection," in the sense of connecting one thing to another.

And we know that in Angular, our components will have three parts: the class, which defines the logic; the template, which defines the content; and finally, the styling of the content.

But what is relevant to us here and now are only two parts: **the class and the template**.

These two parts of our component handle data, and there are ways to _link_ this data between the two.

# The two types of data binding

To begin, there are two types of binding:

1. **One-way binding** ⇒ when information goes from one part of the component to another. It can be either from the class to the template, or from the template to the class. The information follows only one path, therefore, unidirectional.

2. **Two-way binding** ⇒ when information goes both from the class to the template and from the template to the class. It goes back and forth, therefore, bidirectional.

# Unidirectional Binding

Speaking of unidirectional binding, there are two types:

1. **Property binding** ⇒ when a property, whose value is defined in the _class_, is bound to the template, so that when this value is changed in the class, the template reflects it, but if it is changed in the template, the change is not reflected in the class. That is, the property goes from the class to the template only.

2. **Event binding** ⇒ when an event happens in the _template_ (for example: the user typed in an input), the template sends some information to the class. But nothing is sent from the class to the template. That is, the event goes only from the template to the class.

Note that: in _property binding_ the information goes from the class to the template, and in _event binding_ it is the reverse, the information goes from the template to the class. In other words, both are _one-way bindings_.

## Example of property binding

```html
<input [value]="userName" />
```

In this example, the value of the input `[value]` will be equal to the value of the property `userName`, which is defined in the class. When the value of the property is changed, the value of the input will reflect it, but when the value of the input is changed, the reverse will not happen.

## Example of event binding

```html
<input (input)="userName = $event.target.value" />
```

Here, we have an event binding, where the information will flow from the template to the class: when the user types in the input, the property `userName` will receive the value that is typed in the input, but the input will not receive the value of the property if it is changed elsewhere.

# Two-Way Binding

In English, two-way binding is "two-way binding".

In practice, two-way binding is the combination of the two methods we discussed above: _property binding_ and _event binding_.

Using both together gives you two-way binding, since one sends data in one direction and the other in the opposite direction.

The syntax used to create two-way binding is literally the syntax of the two methods above combined: while in _property binding_ we use square brackets `[ ]` and in _event binding_ we use parentheses `( )`, in _two-way binding_ we use both together: `[( )]`.

## "Dirty" Example of Bidirectional Binding

We can create bidirectional binding using property binding and event binding on the same element:

```html
<input [value]="userName" (input)="userName = $event.target.value" />
```

In the example above, the input value receives the value of the `userName` property, and the `userName` property in turn receives the value that is typed into the input, resulting in bidirectional binding. But this is not the smart way to write it.

## "Clean" Example of Bidirectional Binding

There is a cleaner way to create bidirectional binding:

```html
<input [(ngModel)]="userName" />
```

Elegant, isn't it?!

This syntax, of placing parentheses inside square brackets, is informally called **_banana-in-a-box_** by the Angular community, meaning "banana in a box," and you can see why: `[()]`.

### ngModel

ngModel is an Angular **directive** used to implement bidirectional bindings. It's mainly used in form elements, such as inputs, but with extra customization, it can be used in any element.

The directive connects the component's class data to input elements. It's part of Angular's **FormsModule**, so to use it you need to import it into the component module, like this:

```tsx
import { FormsModule } from '@angular/forms';

@NgModule({

imports: [FormsModule],

// ...
})

```

---

I hope you have clearly understood these three types of data binding in Angular.
