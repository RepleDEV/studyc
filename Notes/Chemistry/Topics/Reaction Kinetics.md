## Rate of reaction
The rate of reaction is defined as:
$$
\text{rate of reaction} = \frac{\text{change in concentration}}{\text{time taken}}
$$
This relates to the concept of [[Notes/Math/Topics/Differentiation|derivatives]] being rates of change, in this case, the concentration over time.
## Rate equations
Only from experimentation, it can be found that the rate of reaction over time is proportional to either a constant, or the concentration of at least one reactant raised to some power. Mathematically, we get the reaction constant $k$.
$$
\text{rate} =k [A]^m[B]^n\dots
$$
This determines the overall *order* of the reaction, which is the sum of all the powers $m+n+\dots$. 
### Concentrations over time
For **zero order** reactions, the rate would be:
$$
\text{rate} = k = -\frac{d[A]}{dt}
$$
The negative on the derivative indicates that the concentration decreases over time. 

[[Notes/Math/Topics/Integration|Integrating]], we get that:
$$
\begin{align*}
\int d[A] &=- \int k\space dt\\
[A] &=-kt +[A]_0
\end{align*}
$$
This indicates a constant rate $k$, linearly decreasing the concentration over time.

For **first order** reactions:
$$
\text{rate} = k[A] = -\frac{d[A]}{dt}
$$
Integrating:
$$
\begin{align*}
d[A] &=-k[A]\space dt \\
\int\frac{d[A]}{[A]} &= \int-k\space dt\\
\ln[A]&= -kt +\ln[A]_0 \\
[A]&=[A]_0e^{-kt}
\end{align*}
$$

## Half-life $\lambda$
The half-life of a reactant is defined as the time taken for the reactant to fall to half of its initial concentration.

For a first order reaction, we can deduce this time from the equation:
$$
[A]=[A]_0e^{-kt}
$$
From the half-life definition, it must reach half of its initial concentration:
$$
[A]_0e^{-kt_\frac{1}{2}}=\frac{1}{2}[A]_0
$$
Simplifying:
$$
\begin{align*}
e^{-kt_\frac{1}{2}} &= \frac{1}{2} \\
-kt_\frac{1}{2} &= -\ln2 \\
t_\frac{1}{2}&=\frac{\ln2}{k}
\end{align*}
$$
From here we can deduce that successive half-lifes are a constant multiple of the initial half-life.