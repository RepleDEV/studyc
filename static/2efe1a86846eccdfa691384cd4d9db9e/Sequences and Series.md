The gist of the difference between **sequences** and **series** is that a sequence is a **part** of a series, and a series denotes **every** part of a series.

Series and sequences have two types, **arithmetic** and **geometric**, and each series type could either be **finite** or **infinite**.
## Arithmetic sequences
Arithmetic sequences are sequences where every element is sequenced by a constant number.

For example:

| n'th term | value |
| --------- | ----- |
| 1         | 4     |
| 2         | 7     |
| 3         | 10    |
| 4         | 13    |
| 5         | 16    |

In this sequence the first number, the **first term**, is 4. The differences between the terms is +3.

There are two formulas that can represent arithmetic sequences. Those being recursive formulas and explicit formulas.
### Recursive Formulas
$$
\begin{cases} a(1)=b \\ a(n)=a(n-1) + c \end{cases}
$$

With recursive formulas, $a(1)$ is explicitly defined, and $a(n)$ is defined as the previous term plus a constant $c$.

>[!info]
>Sequences can also be notated as $u_n$ where $n$ is the $n$'th term of $u$
### Explicit Formulas
$$
a_n = b + c(n-1)
$$
Here it works the same, $b$ being the starting term and a constant factor $c$. $n-1$ is used because the sequence starts at $n=1$.
## Sum of Arithmetic Series
The sum of an arithmetic series can be written using the sum notation:
$$
\sum_{n=1}^{k}[b+c(n-1)]
$$
which is equal to:
$$
S_n=\frac{n}{2}\left[2b+c(n-1)\right]
$$
another way of calculating the sum is by the average of the first and last term:
$$
S_n=\frac{n}{2}(u_1+u_n)
$$
## Geometric sequences

Geometric sequences are sequences where the terms are sequenced by a common ratio.

For example:

|1|1|
|---|---|
|2|2|
|3|4|
|4|8|
|5|16|

Here, the first term of the sequence is $1$, and each consecutive term is $2$ times the previous term.

### Recursive Formulas

$$ \begin{cases} a(1)=k \\ a(n)=a(n-1)r \end{cases} $$

### Explicit Formulas

$$ a_n=kr^{n-1} $$
Here, we have $k$ as the first term and $r$ as the common ratio. 
### Sum of geometric series.
$$
\sum_{k=0}^{n-1}(ar^k)=a\left(\frac{1-r^n}{1-r}\right)
$$
Taking the limit as $n\to\infty$, $r^n \to 0 \iff |r| < 1$, therefore we get its infinite sum:
$$
\sum_{k=0}^{\infty}{(ar^k)}=\frac{a}{1-r} \iff |r|<1
$$