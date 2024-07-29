Variance is (informally) a measure of how varied a set of data is. It is also defined as the **square** of the *standard deviation*, often denoted as:
$$
\sigma^2 = s^2 = Var(X)
$$
With it defined as:
$$
Var(X) = \frac{\Sigma(X-\mu)^2}{n} = \frac{\Sigma(X^2)}{n} - \mu^2
$$
With it derived using [[expectation]]:
$$
Var(X) = E(X^2) - E(X)
$$
### Variance properties
With variance, since it's in essence measuring the distances of the data from each other, no matter where the data is, the variance would be the same. Hence, the variance of any variable **plus a constant** will be the same as the variance of the variable itself:
$$
Var(X) = Var(X+ b)
$$
### Combined variance
For variance of two variables:
$$
Var(X+Y) = \frac{\Sigma X^2 + \Sigma Y^2}{n_x+n_y} -\left(\frac{\sum(X+Y)}{n_x + n_y}\right)^2
$$