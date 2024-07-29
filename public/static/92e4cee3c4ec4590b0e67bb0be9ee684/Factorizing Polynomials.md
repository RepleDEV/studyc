#### [[Factorizing Polynomials#^efe2cf|Jump to Conclusion]]
There are a few different methods to finding the factors of a #polynomial, but the quickest that I can find is by #cross_multiplication .
Say we have this polynomial:
$$
x^2+3x+2
$$
Here, we have the three coefficients for $a$, $b$, and $c$.

The basics of #factorizing a #polynomial is to find the **sum of the factors of $a$ and $c$ that equals to $b$.** 
For example:
* $a = x^2$
* The factors of $a$ would be $1x$ and $1x$ (or just two $x$'s).
* $c = 2$
* The factors would be $2$ and $1$.
* We then sum and multiply the factors.
* $2(x) + 1(x) = 3x$
* We can see that the sum is equal to $b$, which means that the factors to the polynomial is $(x+2)(x+1)$
## Cross Multiplication method
This whole process can be "organized" using the #cross_multiplication method. 
Say, we have the polynomial:
$$
x^2+15x+54
$$
First, we find the factor(s) for $a$. Since it has no coefficients the factors would be two $x$'s.
Next, is finding the factor(s) for $c$. There are multiple factors this time, and they are:
* $1 \times 54$
* $2 \times 27$
* $3 \times 18$
* $6 \times 9$

The next step is to try one of the factors and write it out in this format:
![[Pasted image 20230718102416.png]]
Notice the factors for $x^2$ on the left side of the cross, and (one) of the factors of $54$ on the other side. The cross denotes the direction of the products to sum to find $b$. Thus:
![[Pasted image 20230718102710.png]]
Here we can see that the sum is equals to $b$ which is $15x$. Which means that the factors for the polynomial is:
$$
(x+6)(x+9)
$$
> [!tip]
> Instead of writing down every cross multiplication combination, try doing it in your head first, then write it down to check.

 >[!note]
 >In the case that $b$ is negative with $a$ and $c$ being positive, the two factors of $c$ must both be negative.
## Higher order polynomials
With higher order polynomials, the process is more or less the same.
For example:
$$
4x^8 + 28x^5 +48x^2
$$
First, to make it easy, try to make the last term be a constant.
$$
4x^2(x^6+28x^3+48)
$$
Then, cross multiply the polynomial inside the parentheses and factorize.
![[Pasted image 20230718103816.png]]
And finally, we have:
$$
4x^2(x^3+3)(x^3+4)
$$
## [[Polynomial Identities]]
Using polynomial #Identities can also be a quick way to factorize polynomials.
> [!done] Conclusion 
> * Factorize using #cross_multiplication 
> * Find factors of $a$ and $c$ where the sum of products is equal to $b$
> * Use [[Polynomial Identities]] when applicable

^efe2cf
