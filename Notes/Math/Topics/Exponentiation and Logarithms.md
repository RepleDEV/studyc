Exponentiation refers to repeated multiplication. $a^x$ means to multiply $a$ by itself $x$ times. Logarithm tries to answer the question
> "If $a^x$ is equal to $y$, $a$ must be multiplied by itself how many times to equal $y$?"

The logarithm function needs a *base*, which by the question before refers to $a$. Resulting in:
$$
\begin{align*}
a^x &= y\\
\log_a(y)&=x
\end{align*}
$$
More generally:
$$
\begin{align*}
\log_a(a^b)&=b\\
a^{\log_a(b)} &= b
\end{align*}
$$
## Logarithm Properties
A property of logarithms is that, addition of logarithms *with the same base* equals to the logarithm of the product of the two terms.
$$
\log(a) + \log(b) = \log(ab)
$$
If we exponentiate both sides:
$$
\begin{align*}
10^{\log(a) + \log(b)} &= ab\\
10^{\log(a)}\times10^{\log(b)}&=\\
a\times b&=ab
\end{align*}
$$
For subtraction, it's the same concept but with division, since $a^{-1} = \frac{1}{a}$.

Repeated additions, or multiples of logarithms would then equal to the inside function raised to the power of the multiple.
$$
x\log(a) = \log(a^x)
$$
## Euler's Number
Euler's number is the result of the problem of **compound interest**. If a dollar has a yearly interest rate of 100%, the dollar will double (100% of the dollar will be given) at the end of the year. If the dollar is credited twice within the year, the dollar will increase by 50% 6 months in, then increase by another 50% at the end of the year. For each month, the dollar will increase by 1/12 of its value, 12 times. 

More generally, the dollar will follow this function for 100% yearly interest credited $n$ times in a year:
$$
f(n)=$1.00 \times \left(1+\frac{1}{n}\right)^n
$$
Despite being named Euler's number, it was Bernoulli who deduced that $f(n)$ converges as $n\rightarrow\infty$, or in other words, if the dollar *continuously* compounds interest throughout the year.
$$
\lim_{n\rightarrow\infty}\left(1+\frac{1}{n}\right)^n=e
$$
$e$ has unique properties in which it's exponent is its own derivative and its own integral:
$$
\frac{d}{dx}e^x=e^x=\int e^x\space dx
$$