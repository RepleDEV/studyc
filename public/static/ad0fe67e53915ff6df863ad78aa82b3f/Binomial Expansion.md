The binomial expansion, as the name implies, is the expansion of the exponent of two terms.
$$
(a+b)^n
$$
For exponents $n$ of a small number like $2$ or $3$, it's not very difficult to manually multiply the terms, but for anything larger it becomes more of a chore. Fortunately there is a pattern to this, for example, here is the expanded polynomial for $n = 2$ and $n = 3$.
$$
\begin{align*}
(a+b)^{2}&= a^{2}+2ab+b^{2}\\
(a+b)^{3}&= a^{3}+3a^{2}b+3ab^{2}+b^{3}
\end{align*}
$$
Notice the exponents for $a$ and $b$. As the equation goes further to the right, the exponent of $a$ decreased from $n$ to $0$, and it is the opposite for $b$.

For the coefficients form the **pascal's triangle**. A triangle that is formed with the summation of the two above numbers. As in:
* 1
* 1 2 1
* 1 3 3 1
* 1 4 6 4 1
* 1 5 10 10 5 1
* 1 6 15 20 15 6 1
Any number in this triangle is the sum of the two numbers above it, and these numbers forms the coefficient for the $k$'th term of the binomial expansion.

The formula for the $k$'th term of the expansion is actually part of the [[Combinations & Permutations]].
$$
^{n}C_{k}={n\choose k}=\frac{n!}{(n-k)!\times k!}
$$
All in all, the combination formula can actually be written as:
$$
(a+b)^n = \sum_{k=0}^{n}{
 {n \choose k}a^{n-k}\times b^k
}
$$
## General Binomial Expansion
Given a binomial $f(x)$ defined as:
$$
f(x) = (1+x)^n
$$
Where $n \in \mathbb{R}$. The expansion of $f$ will be:
$$
f(x) = 1 + nx + \frac{n}{2!}x+\frac{n(n-1)}{3!} + \dots
$$
In general:
$$
(1+x)^n = \sum_{i=0}^{\infty}{\frac{\prod_{j=0}^{i}{(n-j)}}{i!}x^i}
$$
Given that $n$ is a positive integer.
## Binomial Formula Generalization
The binomial expansion formula can be generalized for all rational $n$ with a [[Maclaurin Series]] where: 
$$
f(x) = (1+x)^n
$$
We can see it's first derivative results in:
$$
f'(x) = n(1+x)^{n-1}
$$
And it's successive derivative continues the [[Notes/Math/Topics/Differentiation#Power rule|power rule]], giving:
$$
f^{(k)}(x) = \left[n(n-1)(n-2)\dots(n-k)\right](1+x)^{n-k}
$$
Giving:
$$
(1+x)^n=1+nx+\frac{n(n-1)}{2!}x^2+\frac{n(n-1)(n-2)}{3!}+\dots
$$