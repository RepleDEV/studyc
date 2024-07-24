Combinations and permutations are the amounts of ways that $k$ number of $n$ different objects can be ordered.
* **Combinations** is when the order **doesn't** matter.
	* In other words, picking $a$ **then** b is the same as $b$ then $a$.
* **Permutations** is when the order **does** matter.
	* In other words, picking $a$ then $b$ is **different** than $b$ then $a$.
## Permutations
There are two types of permutations:
* Permutations **with repetition**
	* For example: a **combination lock**
* and permutations without repetition
	* For example: the number of ways you could pick three cards from a deck at random (**no more** than **one** card of any type can appear in the deck, as such, you can't have duplicates in your hand).
### Permutations with Repetition
The easiest to remember example of this is like rolling two dice. Say we have a table of the possible combinations of dice rolls, 1 through 6 on the horizontal, and the same goes for the vertical. This way, all possible combinations of dice rolls are written, resulting in $6\times6$ combinations of dice if you rolled two of them. If you rolled three, it would be $6\times6\times6$. 

In short, if you picked at random something with $n$ different types, (like for a 6-sided dice, $n$ would be $6$) $k$ times, the amount of possible outcomes will be $n$ to the $k$'th power.
$$
n^k
$$
## Permutations without Repetition
In this case it's the same, but with every successive pick, the number of choices will be reduced by 1.

In this case, it's as if you're trying to order 6 different colored blocks in a row, the number of permutations (without repetition) will be how many different ways you can order the blocks.

In this way, it's as if for position **one**, there are **6 possibilities** for its color (because there are 6 available blocks), and for the next position, as we have already put down one block, we only have 5 more blocks left, as such, the multiplication term decreases by one. This goes on until we run out of blocks. 

Following the repeated multiplication pattern as before, but decrementing with each term, it results to:
$$
6\times5\times4\times3\times2\times1=720
$$
The formal notation for this is the [[Factorial]], which is descending multiplication, $n!$.
$$
n!=n\times(n-1)\times(n-2)\times{...}\times3\times2\times1
$$
But what if we only want to order 3 out of the 6 blocks? If $6!$ multiplies 6 with every number before it, if we only order 3 out of 6 we only want to multiply 6 with the two numbers before it (as if we start with 6 blocks and stop halfway). It would result to:
$$
\begin{align*}
\frac{6\times5\times4\times3\times2\times1}{3\times2\times1}=6\times5\times4=120
\end{align*}
$$
Here, we could see that the $3\times2\times1$ (or $3!$) cancels out the rest of the $6!$, resulting in the term that we want. 

Formally this is notated as:
$$
P(n,r)={^n}P_r={_n}P_r=\frac{n!}{(n-r)!}
$$
## Combinations
For combinations, there are two types of combinations:
* Combinations when **repetition is allowed**
* Combinations when **repetition is not allowed**
### Combinations without repetition
Combinations without repetition is simply an alteration of the permutations (without repetition) formula. If permutations is when order **matters**, combinations is to an alteration to permutations where the order **doesn't** matter. 

Going back to the example of 6 different colored blocks.
* Yellow
* Blue
* Red
* Green
* Purple
* Pink
This way, if we order things as $\ce{\{y,b,r\}}$, it would count as the same as $\ce{\{b,y,r\}}$ (and every other **permutation** of those three objects). Knowing this, we could simply take away the permutations of any number $k$ objects.
>[!info] Notice
>If number of possibilities is added, it is **multiplied**. The opposite would be **dividing**.

As such, we could simply:
$$
{^n}P_k\times \frac{1}{k!}
$$
And that is all there is to it. This formula is pronounced $n$ **choose** $k$.
$$
C(n,k)={^n}C_k={_n}C_k=\frac{n!}{(n-k)!k!}
$$
