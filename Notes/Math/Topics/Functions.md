---
tags: functions, function, transforms, domain, range
---
**Functions** take an input and gives an output.
$$
f(x) = x^2
$$
Here, we have a function $f(x)$ (pronounced **f of x**). It takes an **input x** and outputs the square of the input. Functions can have any letter to define it, be it $f$, $g$, $\pi$, $\lambda$, anything. And it can also take any variable as input. Like $f(n)$ (**f of n**).
## Domains and Ranges
Each function has a **domain** and a **range**.
* **Domain**: the set of values that a function can take where it will give out a valid output
* **Range**: the set of values that the function can output
For example: the function $f(x) = x^2$. This function can take any input $x$ so long that $x$ is a real number and it will give a real number as its output. Which means that the function's domain is: $\{ x \in \mathbb{R} \}$ (reads **x is element of all real numbers**). For the range, there is no valid $x$ value that is a real number and where the function will output a negative number. So, the range is $\{y \in \mathbb{R}, 0 \leq y\}$.

Another example would be $g(x) = \frac{1}{x}$. Here, the domain is all real numbers again, but with the exception of $x = 0$ as when $x=0$ the function evaluates to $\frac{1}{0}$. Thus, the domain of $g(x)$ would be $\{x\in\mathbb{R},x \neq 0\}$. The range would also be $\{y\in\mathbb{R}, y \neq 0\}$. as there are no possible solutions for $\frac{1}{x}=0$ except for $\infty$ or $-\infty$.
## Function mappings
Functions can also be thought as **mapping** a set of inputs to a set of outputs.

Functions can have different types of mappings. It can map values as **one-to-one** where one value as an input maps to a single value as an output, such as **linear functions**.
It can also be **many-to-one** where multiple values maps to one output, such as **quadratics**.
One other mapping type is **one-to-many**, where one value maps to multiple values, such as $\sqrt{x}$. Such mappings **may not** be defined as a function.
## Piecewise Functions
Functions can be made of multiple equations, these are called **piecewise functions**. Here's a simple example:
$$
f(x)=
\begin{cases}
x^{2} & \text{when }x\leq0 \\
-x^{3}& \text{when }x > 0
\end{cases}
$$
## Composite Functions
In short: **functions of functions**. Functions that take another function as input. For example:
$$
f(g(x)) = (f\circ g)(x)
$$
This function is pronounced **f of g of x**. There are two ways to compute the value of the function, which are:
* Computing each function separately
* Computing the implicit equation of the composite function
The first one is to simply compute $g(x)$ first, and inputting the value to $f(x)$.
$$
x\rightarrow g(x)\rightarrow f(x) = (f\circ g)(x)
$$
The second one is to simply substitute $x = g(x)$ to $f(x)$. For example:
$$
\begin{align*}
f(x) &= x-2\\
g(x) &= x^2\\
(f\circ g)(x) &= (x^2)-2
\end{align*}
$$
## Inverse Functions
Inverse functions gives you the input to a function given the output. A widely used example is:
$$
\begin{align*}
f(x) &= e^x\\
f^{-1}(x) &= \ln(x)\\
f(f^{-1}(x)) &= \ln(e^{x})=x
\end{align*}
$$
The notation is $f^{-1}$, pronounced **f inverse (of x)**. Inverse functions have the property of reflecting the function across the $y = x$ line.
## Function Transformations
Functions can also be **transformed**, it can be:
* Translated
* Reflected
* Stretched
### Translation
Function translation is where the function is moved across the two axes.
$$
\begin{align*}
f(x + 1) &\rightarrow \text{translate towards negative $x$}\\
f(x) + 1 &\rightarrow \text{translate towards positive $y$}
\end{align*}
$$
> [!warning]
> Remember that when translating across the $x$ axis, a positive $x$ translation translates $f$ towards **negative x** (translates to the left).
### Reflection
Functions can be reflected along the two main axes.
* $f(-x)$ reflects it along the **y-axis**
* $-f(x)$ reflects it along the **x-axis**
