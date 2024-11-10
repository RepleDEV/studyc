---
tags: polynomial, quadratic, factorizing
---
#### [[Quadratics#^442076|Jump to Conclusion]]
## What's a quadratic?
A quadratic equation is a **second degree** polynomial.
For example:
$$
6x^2 + 11x - 35 = 0
$$
And there are two main ways of solving for $x$. **Factorizing**, using **quadratic equation**, and by **completing the square**.

To factorize, it's the same way as factorizing a polynomial . (Refer to [[Factorizing Polynomials]])
$$
\begin{align*}
6x^2+11x-35&=0\\
(3x+5)(2x+7)&=0\\
\end{align*}
$$
Now we have our factors $(3x-5)$ and $(2x+7)$. Next, we need to find the value(s) of $x$ (if any) that makes the equality true.
Notice that **if any of the factors of the polynomial is zero**, the left side of the equation would be zero (thus making the quality true).
For $(3x-5)$, it would be $x = \frac{5}{3}$. Plugging it back in:
$$
\begin{align*}
(3\left(\frac{5}{3}\right) - 5)(2\left(\frac{5}{3}\right)+7) &= 0\\
(0)(2\frac{5}{3}+7)&=0\\
0 &= 0
\end{align*}
$$
And we're done :3
Though that's only **one** of the **roots**. We also have to find the root to $(2x+7)$.
Spoiler alert: it's $x = \frac{-7}{2}$
So the **roots** aka the solution(s) to the quadratic equation is:
$$
x = \frac{5}{3} \text{ or } x=-\frac{7}{2}
$$
## Quadratic Inequalities
Before solving **quadratic inequalities**, it's useful to know the "shape" of the curve. If the coefficient of $x^2$ is **positive**, the curve of the parabola will open **upwards**. And if it's **negative** then it will open **downwards**.
This is an **upward** parabola ($x^2$):
![[Pasted image 20230718183722.png]]
And, this is a **downward** parabola ($-x^2$):
![[Pasted image 20230718183842.png]]
Knowing this is important to solving the inequality as we'll see later.
> [!warning]
> Note the difference between $-x^2$ and $(-x)^2$. With exponents, the former reads $-(x^2)$, so the minus sign is **AFTER** the exponent.
### Solve by factorizing
Now, let's say we have the inequality:
$$
x^2-3x-4 \geq 0
$$
First we factorize the left hand side.
$$
(x+1)(x-4) \geq 0
$$
Now, find the solutions to where the equation is **zero**.
* $x=-1$
* $x=4$
Here, the coefficient of $x^2$ is positive, so it's an **upward** parabola. So, the solutions would be
$$
x\leq-1 \text{ or } x\geq4
$$
The solution with a **smaller number** gets the **less than or equal** sign and vice versa.

Okay, now what if the coefficient of $x^2$ is negative like in this example? (Mirrored equation from the previous one)
$$
(-x-1)(x-4) \geq 0
$$
This time, the solution is when $x$ is in between the two factors.
$$
-1\leq x \leq 4
$$
## Completing the Square
A **quadratic** can also be expressed in the form $a(x+p)^2+q$, where $p$ and $q$ are constants. To do this, we must **"complete the square"** of the quadratic.

If you're asking why, hold on to that thought first until the end.
What it means to **"complete the square"** is this: say we have an expression $x^2+bx$. Geometrically speaking, it's as if adding a square with side lengths $x$ and a rectangle with length $b$ and height $x$.
![[Pasted image 20230718213922.png]]
If we rearrange $bx$, we can *sort of* make an entire square. 
![[Pasted image 20230718213956.png]]
There's just a tiny bit in the corner that's missing. That's where the **"completing the square"** part comes in.
![[Pasted image 20230718214044.png]]
Geometrically speaking, it quite **literally completes the square**.
$$
(x+\frac{b}{2})^2
$$
Okay but now, since we had to add $(\frac{b}{2})^2$ to the equation, the value would be **different**. Thus, we also have to **subtract** it from the equation to make it equal.
$$
x^{2} + bx=(x\frac{b}{2})^2-(\frac{b}{2})^2
$$
This might seem like it makes it more confusing but! I swear it will look cleaner later.
Let's do a different example.
$$
x^2+6x+7
$$
We complete the square on $x^2+bx$ (which would be $x^2+6x$), and subtract $(\frac{b}{2})^2$ at the end as well.
$$
\begin{align*}
x^2+6x+(\frac{6}{2})^2+7-(\frac{6}{2})^2 &=\\
\end{align*}
$$
Now at this point, what you might have noticed is that the first tree terms matches the **2nd degree [[Binomial Expansion]]**. Thus:
$$
\begin{align*}
(x+\frac{6}{2})^2+7-9&=\\
(x+3)^2-2&=
\end{align*}
$$
What if $a \neq 1$? It's pretty much the same thing.
$$
\begin{align*}
5x^2-4x-2&=0\\
\end{align*}
$$
First, divide all terms by $a$.
$$
x^2 - \frac{5}{4}x - \frac{2}{5}=0
$$
Complete the square as usual.
$$
\begin{align*}
x^2 - \frac{5}{4}x + (\frac{5}{8})^2 - \frac{2}{5} - (\frac{5}{8})^2=0\\
(x - \frac{5}{4})^2 - \frac{2}{5} - \frac{25}{64}=0
\end{align*}
$$
Now, to get it to be equal to the original equation, multiply everything by $a$.
$$
5(x - \frac{5}{4})^2-2 - \frac{25}{20}=0
$$
Now, if you follow the variables everything turns out to be:
$$
\begin{align*}
a(x+p)^2+q=0\\
p=\frac{b}{2a},\space q=c-\frac{b^2}{4a}
\end{align*}
$$
And thus, here is the reason we did all this in the first place.
**p** here is equal to the **x-coordinate** of the **vertex** of the curve,. and **q** is the **y-coordinate**. 
Having it in this form also makes it easy to solve for $x$.
$$
\begin{align*}
(x+p)^2 &= -\frac{q}{a}\\
x+p &= \pm \sqrt{-\frac{q}{a}}\\
x&=\pm \sqrt{-\frac{q}{a}}-p
\end{align*}
$$
## Vertex
The vertex is the *absolute extrema* of the quadratic. Which means either the **maximum** value of the curve, or the **minimum**, depending on the curve.
* If $a$ is positive (curve opens **upwards**), the curve will have a **minimum**.
* And if $a$ is negative, the curve will have a **maximum**.
## Quadratic Equation
Now, after all of that, the other way we could solve a quadratic equation is to use the **quadratic equation**, which is:
$$
x=\frac{b\pm \sqrt{b^2-4ac}}{2a}
$$
Using this formula, we ican instantly solve any quadratic equation! Assuming that the quadratic has a **real solution(s)**. How do we know that? Why are there quadratics without a **real** solution?
![[Pasted image 20230719191149.png]]
This quadratic ($x^2-4x+5$) has **zero(!)** real solutions. As you can see, the **vertex**'s **y-coordinate** is greater than zero. So, the function never touches the **x-axis**, which means that there are **zero possible (real) x-values** that can solve the equation.

But, how do we know if a quadratic has any solution at all? Well, calculate its **discriminant**.
## Discriminant
The discriminant tells us whether or not a quadratic has **no real solution**, only **one solution**, or **two solutions***.
$$
d=b^2-4ac
$$

The example quadratic above has a discriminant of **less than zero**, which means that the quadratic has **no real solutions**. 
![[Pasted image 20230719195106.png]]
This quadratic ($x^2+10x+25$) has only **one solution**, and has a discriminant of **zero**. The **y-coordinate** of the vertex is **zero**, making it the only point in the curve where it touches the **x-axis**.
![[Pasted image 20230719195232.png]]
And this one has **two solutions**, so the discriminant is **greater than zero**. See how the curve intersects the **x-axis** on two points.
> [!info]
> To not get things flipped when it comes to discriminants, just remember that in the **quadratic formula**, the **square root** of the discriminant is used, which means that if the discriminant is negative, the solution MUST NOT be a real value.
## Intersecting lines
To find the tangent of a quadratic at $x = p$, the linear equation can be substituted for $y$, giving:
$$
m(p)+q=ax^2+bx+c
$$
Rearranging to quadratic form:
$$
\begin{align*}
m(q)+b &= ax^2+bx+c\\
ax^2+(b-m)x
\end{align*}
$$

> [!done] Conclusion
> A quadratic equation is a **two-degree polynomial** in the form:
> $$
> ax^2+bx+c=0
> $$
> #### Quadratic Types
> * If $a$ is positive, the curve opens **upwards**
> * If otherwise, the curve opens **downwards**
> Solving it can be done by:
> * Factorizing
> * Completing the Square
> * Quadratic equation
> #### Factorizing
> Can quickly find solutions but is limited to whole number solutions.
> #### Completing the Square
> $$
> \begin{align*}
> a(x+p)^2+q=0\\
> p=\frac{b}{2a},\space q=c-\frac{b^2}{4a}
> \end{align*}
> $$
> Can be used to quickly find the vertex, and solve the equation.
> #### Quadratic Equation
> $$
> x=\frac{b\pm \sqrt{b^2-4ac}}{2a}
> $$
> #### Vertex
> The *absolute extrema* of the quadratic, depending on the type.
> #### Discriminant
> $$
> d=b^2-4ac
> $$
> Used to find if the quadratic has:
> * **No real solutions:** when $d$ is **less than zero**
> * **One solution**: when $d$ is **zero**
> * **Two solutions**: when $d$ is **greater than zero**

^442076
