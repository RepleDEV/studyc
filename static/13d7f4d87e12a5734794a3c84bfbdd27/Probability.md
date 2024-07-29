 Probability is simply the likelihood of an event happening as a range from $0$, meaning an event is **impossible** to happen, to $1$ for when an event will **always** happen. In mathematical terms, it's given the notation: 
 $$
 P(\text{event})
 $$
Intuitively, in a **set** of possible outcomes, the probability of an event happening is the **ratio** of the number of outcomes in the set of **favorable outcomes** to all the possible outcomes. 
$$
P(\text{event})=\frac{n\space({\text{favorable outcomes})}}{n\space(\text{possible outcomes})}
$$
## Mutually Exclusive Events
A set of events where no two events can **not** happen at the same time. This can be proven where their intersection is **zero**.
$$
A\text{ and } B\text{ are mutually-exclusive if: } P(A\cap B) = 0
$$
## Independent Events
Independent events are events where the probabilities don't change if either happened before. Such examples are flipping a coin as each successive flip gives the same probabilities as the flips before. 

Any two events $A$ and $B$ can be proven independent if the probability of $B$ given $A$ is equal to the probability of $B$
$$
A\text{ and }B\text{ are independent if: } P(B\mid A) = P(B)
$$
## Addition Law
The addition law states that any two **mutually exclusive** events are the sum of their individual probabilities:
$$
P(A\text{ or }B) = P(A) + P(B)
$$
For non-mutually exclusive events, the probability of their **intersection** must be deduced. Conceptually, for the addition of the probabilities of two non-mutually exclusive events, the resultant probability is comprised of their individual probabilities, along with their **intersection**, which is the probability of the event that **both** events happen.
$$
P(A\text{ or }B) = P(A) + P(B) - P(A\cap B)
$$
## Multiplication Law
The multiplication law for independent events states that the probability of any independent events happening, or the intersection of their events is their product.
$$
P(A\text{ and }B\text{ and } \ldots\text{ and } P(X) ) = \prod P(X)
$$
This is due to the fact that the probability of any event happening is simply the ratio of its likeliness to happen to the collection of all possible events.

Conceptually, the probability of two events $A$ **and** $B$ happening is as if $A$ happens $P(B)$ times.
## Dependent Events
Dependent events are a set of events that can only happen if the other happens. 
# Probability Distributions
Probability distributions involve the specific distribution of a **probability** function given a discrete or continuous random variable which can be represented as a table and as a curve respectively.
## Random Variables
A random variable is simply a variable taken from a statistical experiment. Assigning a numerical value to any sample point in an experiment to quantify a probabilistic outcome to perform statistical observations upon it. These such variables are denoted by a capital letter, and its lowercase counterpart denotes any one value that it can take. These random variables can be either **discrete** or **continuous**. 

Probability distributions display the possible values of any random variable and their corresponding probabilities. A way to seek patterns and visualize a statistical observation.

## Probability Functions
Probability functions involving a random variable is denoted as:
$$
P(X = x)
$$
 where the sum of probabilities of every possible value of said random variable is always **one**.
 $$
\Sigma P(X=x) =1
$$
Concepts from FTC applies here, in that:
$$
\begin{align*}
P(a \le X \le b) &= P(X \le b) - P(X \le a)\\
P(X \ge a) &= 1-P(X<A)
\end{align*}
$$
## Expected Value
The expected value of a random variable $X$, $E(X)$ is equal to the sum of the product of the values of $X$ and $P(X = x)$, notated as:
$$
E(X) = \sum\left[ x_iP(X=x_i)\right]
$$
### Binomial Distribution
The binomial distribution is one of many distributions to calculate the probabilities of an event. Given a discrete random variable $X$ where the outcome is binary, i.e., either **success** or **failure**, $P(X = x)$ is equal to the probability that the event happens $x$ times with constant probability of $p$ out of $n$ times.

In simpler terms, it can be used to calculate the probability of getting heads for example 3 times out of 8 throws. In this case, $n = 8$ and $x = 3$.

In mathematical terms, it's expressed as:

If $X \sim \text{Bin}(n, p)$, then:
$$
P(X = x) = \binom nx p^x(1-p)^{n-x},\space x=0,1,\ldots,n
$$
where $P(\text{"success"}) = p$.

Conceptually, with the coin example, one possibility of getting 3 heads out of 8 throws is getting three heads in a row then getting 5 tails, which equates to $p^3(1-p)^5$. But, there are other possibilities of getting 3 heads out of 8 throws, that's where the combination $\binom nx$ comes in.

### Expectation
Given $n$ numbers of independent *Bernoulli random variables*, also known as binomial variables with $n = 1$, or a binomial event run once, with mean $p$ and variance $p(1-p)$. A binomial random variable $X$ can thought of as $n$ repeating independent Bernoulli random variables.
$$
\begin{align*}
&\text{Let U $\sim$ Bin(1, p) where $E(U) = p$ and $Var(U) = p(1-p)$}\\
X &= U_1 + \ldots + U_n\\
E(X) &= E(U_1 + \ldots + U_n)\\
E(X) &= E(U_1) + \ldots +E(U_n)\\
E(X) &= np 
\end{align*}
$$
From scratch, using the formula for expectation:
$$
\begin{align*}
E(X) &= \sum_x^nxP(X=x)\\
&= \sum_{x=0}^nx\binom nxp^x(1-p)^{n-x}\\
&= \sum_{x=0}^n x\frac{n!}{x!(n-x)!}p^x(1-p)^{n-x}
\end{align*}
$$
From here, note that when $x = 0$, everything cancels out to $0$, as such, the starting parameter can be changed to $x=1$. 

From here, recall that: $x! = x(x-1)!$, as such, the $x$ cancels out.
$$
E(X)
 = \sum_{x=1}^n\frac{n!}{(x-1)!(n-x)!}p^x(1-p)^{n-x}
$$
From this point, $np$ can be factored out.
$$
E(X) = np\sum_{x=1}^n\frac{(n-1)!}{(x-1)!(n-x)!}p^{x-1}(1-p)^{n-x}
$$
From here, we let $n-x = (n-1) - (x-1)$.
$$
E(X) = np\sum_{x=1}^n\frac{
(n-1)!
}{
(x-1)![(n-1) - (x-1)]!
}
p^{x-1}(1-p)^{(n-1)-(x-1)}
$$
Now, we can let $m = n-1$ and $y = x-1$, changing the parameters as well.
$$
E(X) = np\sum_{y=0}^{m}\frac{m!}{y!(m-y)!}p^y(1-p)^{m-y}
$$
Now, the summation can be reduced from the [[Binomial Expansion]] theorem.
$$
E(X) = np(p +(1-p))^m
$$
From here, $(p+(1-p))^m = 1^m = 1$, finally:
$$
E(X)
 = np$$
### Geometric Distribution
This distribution is also for binary events where the probability of success is constant. It's used to calculate the probability of an event happening at the $x$'th attempt. 

If $X \sim \text{Geo}(p)$, then:
$$
P (X = x) = p(1-p)^{x-1}
$$

Conceptually, the probability of rolling a head for the first time at the third attempt, is equal to $P(X = 3) = p(1-p)^2$. Which reads $P(\text{tails twice AND heads once})$.
## Expectation
For a geometric distribution, its expectation is:
$$
E(X) = \frac{1}{p}
$$
This is due to the properties of the infinite sum of a geometric series. We start by the definition of expectation:
$$
\begin{align*}
E(X) &=\sum_{x=1}^{\infty}xP(X = x) =\sum_{x=1}^{\infty}xp(1-p)^{x-1} \\
&= P(X = 1)\times 1 + P(X = 2) \times 2 + P(X=3) \times 3 + \ldots\\
&=p + 2p(1-p) + 3p(1-p)^2 + \ldots
\end{align*}
$$
Next, we multiply both sides by $(1-p)$
$$
(1-p)E(X) = p(1-p) + 2p(1-p)^2 + 3p(1-p)^3 + \ldots
$$
Now, if we subtract this equation with the one before:
$$
\begin{align*}
E(X) - (1-p)E(X) = pE(X) = p + p(1-p) +p(1-p)^2 + \ldots
\end{align*}
$$
All of this because everything after the first term aligns making: $np(1-p)^{n-1} - (n-1)p^{n-1} = p(1-p)^{n-1}$.
If we divide both sides by $p$ we get:
$$
E(X) = 1 + (1-p) + (1-p)^2 + \ldots = \sum_{x=0}^{\infty}(1-p)^x
$$
Substituting to the infinite sum formula we get:
$$
E(X) = \frac{1}{1-(1-p)} = \frac{1}{p}
$$
### Probability less/greater than $n$
For a probability less than any integer $n$ (given that $n \geq 1$ ) it's:
$$
P(X\leq n) = \sum_{x=0}^{n-1}p(1-p)^{x}
$$
This then follows the **geometric series** formula:
$$
\begin{align*}
P(X\leq n) &= p\left(\frac{1-(1-p)^{n}}{1-(1-p)}\right) = p\left(\frac{1-(1-p)^n}{p}\right)\\
&=1-(1-p)^n
\end{align*}
$$
Since $P(X \leq n) = 1 - P(X > n)$, we get:
$$
P(X > n) = (1-p)^n
$$
## Probability Density Function
A probability density function (PDF) represents the probability of a **continuous** random variable. Similar to a probability function with discrete random variables, the whole are under the (PDF) curve is equal to **one**.
$$
\int_{-\infty}^{+\infty}f_X(x)dx = 1
$$
In a continuous random variable, the probability of it getting any specific value is **zero**, analogous with:
$$
P(X=a)=\int_a^af_X(x)dx = 0
$$
