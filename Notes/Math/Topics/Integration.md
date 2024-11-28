Integration is the method of reversing the process of differentiation. Where differentiation finds the slope of a function at a given point, integration gives the area under the function, given a set of boundaries.
## Fundamental Theorem of Calculus
The first fundamental theorem of calculus defines the **antiderivative**. In that, for any function $f(x)$ that is continuous and defined along the interval $[a, b]$, the derivative of its antiderivative equals to itself.
$$
\frac{d}{dx}\int_a^x{f(t)dt}=f(x)
$$
We can then say that:
$$
F'(x) = f(x)
$$
Therefore:
$$
F(x)=\int_a^xf(t)dt + C
$$
Where $C$ is the *constant of integration* (as its derivative is $0$). Inputting $x = a$, we get:
$$
F(a)=\int_a^af(t)dt+C
$$
Where the integral is calculating the area under the function $f$ from $a$ to $a$, which is essentially a line. A line has $0$ area, therefore:
$$
F(a)=C
$$
We then have:
$$
F(x)=\int_a^xf(t)dt+F(a)
$$
Renaming $x$ to $b$, and $t$ to $x$, we get the **second part** of the theorem, saying that:
$$
\int_a^b f(x)\space dx = F(b) - F(a)
$$
## Riemann Integral
A Riemann Integral defines the integral as an **infinite sum** of *infinitesimally* small rectangles under a curve. Let's say we want the area $A$ of the curve $f(x) = x^2$ from $2$ to $4$. If we divide that area into four little rectangles, we get a rectangles from $x = 2$ to $x = 4$ with height $f(x_k)$ and width $\frac{4-2}{4}$. The *width* here represents $\Delta x$, or a change in x. The sum of all of these integrals is called a Riemann *approximation* of an integral. The integral is where we divide this area into *infinitesimally* small rectangles, represented as:
$$
\int_a^bf(x)dx=\lim_{n=\infty}\sum_{k=1}^n{f(x_k)}\Delta x
$$
Where: $x_k = a + k\Delta x$ and $\Delta x = \frac{b-a}{n}$.

This limit specifically represents the *right* Riemann sum, where the rectangle's height is referenced from the **right** corner of the rectangle, whereas the *left* Riemann sum will take the **left** corner. If $f(x)$ is always increasing over $[a,b]$, then the **right** Riemann sum will always be an **overestimation** of the area under the curve between $[a, b]$. 

## Solids of revolution
A solid of revolution represents a three-dimensional object made from *rotating* a function about a line. Recall that the area of a circle is $\pi r^2$. If we rotate any point $P$ of a function $f(x)$ along the $x$-axis to form a circle, we get that the area will be $\pi f^2(x)$. A solid of revolution follows the same idea with infinite sums to get:
$$
V = \pi\int_a^bf^2(x)dx
$$
