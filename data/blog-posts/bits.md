---
title: A brief summary and introduction to how bits work
excerpt: Bits are the most basic foundation of Computer Science. It's interesting to know how they work. Here I explain how numbers and text are represented by sequences of bits.
date: 2023-09-29T23:14:50.239Z
tags: [Programming, Memory, Computer Science]
---

Everything we produce with our code is, in the end, bits. We write code in a programming language, but the computer only knows how to read bits. To organize these bits in a way that makes sense to us, we create values ​​in our programming language. In this article we will talk a little about what bits are and how they represent values.

# Bits

Computers are not intelligent, they can only understand two things: zero and one. They don't know what two or three are. And when we write numbers, what our computer understands is the sequence of zeros and ones that represents that number. In this sense, zeros and ones are pieces of information, and we call these zeros and ones bits.

Each 0 (zero) in the computer's memory is a bit, and each 1 (one) is also a bit. Alone, these bits don't mean much, but we can combine them so that a sequence of them signifies some value. For example, the bit sequence equivalent to the number 42 is 101010, for the number 80 the sequence is 1010000, and for 4280 it is 1000010111000.

Every bit sequence, whatever it may be, will represent a number to the computer. In a bit sequence, each bit carries a value, and to know what number the sequence represents, simply add these values. The value of each bit increases by a factor of 2 for each position from right to left. So if a bit is in the last position in the sequence, it's worth 1; if it's in the second-to-last position, it's worth 2; if it's one position before that, it's worth 4, then 8, and so on. The bit only carries the value of its position if it is 1 (one). If it is 0 (zero), it does not carry any value.

The model below represents the number 25 and makes this clear:

```jsx
  0    0    0    1   1   0   0   1
128   64   32   16   8   4   2   1
```

In the sequence above, we add 16 + 8 + 1 = 25.

> 👾 Challenge: calculate what number the following bit sequence represents:
>
> ```jsx
>
>   0    1    1    1   1   0   1   1
> 128   64   32   16   8   4   2   1
> ```

This also happens with text. There is something called the [Unicode standard](https://pt.wikipedia.org/wiki/Unicode) that assigns a number to each letter and emoji. If each letter and emoji means a number to the computer, then we can also represent text through binary code (“binary code” is another name for “bit sequence”). The word “Hi” is represented by the sequence “01001111 01101001”.

> 🔥 By the way, to transform text into binary code and vice versa, you can use an app I made, [Binary Shift](https://binaryshift.netlify.app/). (Perhaps in the future number translation will be implemented as well)

---

I hope it's now clearer to you how binary code represents information.
