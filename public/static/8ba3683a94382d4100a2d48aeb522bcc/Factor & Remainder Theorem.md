Given a polynomial $q(x)$ where: $q(x)\times(x-a) = p(x) = 0$, then $p(a)$ must also equal to $0$. This links to the **factor theorem** which states that for any polynomial $p(x)$ that is *completely divisible* by $x-a$ then: $p(a) = 0$. 

In the same way that dividing $52$ by $5$ yields $50/5 + 2/5$, where $50/5 = 10$ is the quotient and $2$ is the remainder, dividing a polynomial will give a similar result:
$$
\frac{p(x)}{q(x)}=\text{quotient} + \frac{\text{remainder}}{q(x)}
$$
Where the remainder would be a polynomial with a degree **at most one less** than the denominator $q(x)$. This is due to the fact that $p(x)$ can always be divided into:
$$
\frac{p(x)}{q(x)} = c +\frac{P(x)}{q(x)}
$$
Where $c$ is a constant, and $\frac{P(x)}{q(x)}$ *may* be further divided, and $P(x)$ is a polynomial with a degree **one less** than $p(x)$.

Continuing, if we multiply both sides by $q(x)$, we get:
$$
p(x) = q(x)\times\text{quotient} + \text{remainder}
$$
Similar to how dividing numbers always ends with integer quotients and remainders, the *quotient* here is completely divisible by the denominator $q(x)$, therefore, inputting a **factor** of $q(x)$ into $p$, will yield the remainder. In other words: given the polynomial $p(x)$ where it is divided by polynomial $q(x) = ax-b$ and gives an integer remainder, therefore, the **remainder theorem** states that $p(\frac{b}{a})=\text{remainder}$. 