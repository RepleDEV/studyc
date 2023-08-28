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

In this case, it's as if you're trying to put 6 different colored blocks in a row, the number of permutations (without repetition) will be how many different ways you can order the blocks.

Following the repeated multiplication pattern as before, but decrementing with each term, it results to:
$$
6\times5\times4\times3\times2\times1=720
$$
The formal notation for this is the [[Factorial]], which is descending multiplication, $n!$.
$$
n!=n\times(n-1)\times(n-2)\times{...}\times3\times2\times1
$$
But what if we only want to order 3 out of the 6 blocks. It would result to:
$$
\begin{align*}
\frac{6\times5\times4\times3\times2\times1}{3\times2\times1}=6\times5\times4=120
\end{align*}
$$
Here, we could see that the $3\times2\times1$ cancels out from the fraction. Formally this is notated as:
$$
P(n,r)={^n}P_r={_n}P_r=\frac{n!}{(n-r)!}
$$