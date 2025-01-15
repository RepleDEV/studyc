To *differentiate* a [[Functions|function]] is to find the **instantaneous** rate of change of a function at a point, analogous to the speedometer of a car, denoting the car's **velocity**. 
## Definition
*Differentiating* a function results in its **derivative**, which is the **slope** or the **tangent** of the function's curve at a given point.

The slope is defined as change in $y$, $\Delta y$, over the change in $x$, $\Delta x$. As such, the **slope** of a function could be estimated over a period of $\Delta x$. For example, the function $f(x) = x^2$ is equals to $100$ at $x=10$, and it equals to $121$ at $x=11$. With this, we could estimate the slope of the function $f$ at $x=11$ as:
$$
\text{Estimate of slope: }\frac{f(11) - f(10)}{1} = 21
$$
Which is actually really close to its true value of $20$. This all could be written as:
$$
\frac{f(x+\Delta x) - f(x)}{\Delta x}
$$
For $\Delta x > 0$, this results in the slope of the **secant** of the function, which gives an average of the slope. To get the **tangent**, $\Delta x$ must be $0$, ideally, but since $\Delta x$ is the denominator, that isn't really possible. As such, the **limit** is used.
$$
\lim_{h\rightarrow0}{\frac{f(x+h) - f(x)}{h}}
$$
This is the formal definition of a derivative, it is defined as the limit of the distance between $f(x)$ and $f(x+h)$ all over its distance $h$ as $h$ approaches $0$. (Definition of [[Limits]]). This results in the **tangent** slope of $f$ at $x$.
### Notation
The *derivative* is notated in several ways, the two most common used is:
* **Lagrange**'s notation
	* Notated as: $f'(x)$, which denotes the *derivative* of $f(x)$
* **Leibniz**'s notation
	* Notated as: $\frac{dy}{dx}$, as it is the derivative of $y$ with *respect* to $x$.
## Power rule
While derivatives can be solved by its definition, patterns will emerge, then they develop into rules, one of which is the **power rule**. Taking the derivative of $x$ raised to the power of $n$ with respect to $x$, results to $n$ multiplied by $x$ raised to the power of $n-1$.
$$
\frac{d}{dx}x^n=nx^{n-1}
$$
## Constant rule
The derivative of a constant, or the slope of (essentially) a horizontal line, will **always** be $0$.
$$
\frac{d}{dx}C=0
$$
## Constant multiple
The slope of $x$ multiplied by a constant $n$ will be $n$. So:
$$
\frac{d}{dx}nx=n
$$
## Sum rule / distributive property of derivatives
The distributive property of derivatives states that the derivative of a **sum of terms** will be the **sum** of the **derivatives of the individual terms**.
$$
\frac{d}{dx}\left[f(x)+g(x)\right]=\frac{d}{dx}f(x)+\frac{d}{dx}g(x)
$$
proof:
$$
\begin{align*}
\text{Let: } \lambda(x) &= f(x)+g(x)\\
\therefore \lambda(x+h) &= f(x+h)+g(x+h)\\
\frac{d}{dx}\lambda(x)&= \lim_{h\to0}\frac{\lambda(x+h) + \lambda(x)}{h}\\
\frac{d}{dx}[f(x)+g(x)]&=\lim_{h\to0}{\frac{f(x+h)+f(x)+g(x+h)+g(x)}{h}}\\
&=\lim_{h\to0}\frac{f(x+h)+f(x)}{h}+\lim_{h\to0}\frac{g(x+h)+g(x)}{h}\\
&=\frac{d}{dx}f(x)+\frac{d}{dx}g(x)
\end{align*}
$$
## Product rule
$$
\frac{d}{dx}\left[f(x)\cdot g(x)\right]=\left[\frac{d}{dx} f(x)\right]g(x) + f(x)\left[\frac{d}{dx}g(x)\right]
$$
### Product rule proof
Consider the function $y = uv$ where $u$ and $v$ are functions of $x$. Any small change to $x$, results in a change in $y$, $u$, and $v$.

Now, given a small change in $x$: $\delta x$, we get:
$$
y + \delta y =uv + \delta(u \cdot v) = (u+\delta u)(v + \delta v)
$$
We multiply and we get:
$$
uv + \delta(u \cdot v) = uv + u \delta v + v\delta u + \delta u \delta v
$$
As $\delta x$ approaches $0$, $\delta u \delta v$ becomes negligible and can be ignored. Simplifying, we get:
$$
\delta (u \cdot v) = u \delta v + v \delta u
$$
Dividing by $\delta x$:
$$
\frac{\delta(u \cdot v)}{\delta x} = u \frac{\delta v}{\delta x} + v \frac{\delta u}{\delta x}
$$
## Quotient rule
$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right]=
\frac{
	\left[\frac{d}{dx}f(x)\right]g(x)
	+
	f(x)\left[\frac{d}{dx}g(x)\right]
}{
\left[g(x)\right]^2
}
$$
## Chain rule
$$
\begin{align*}
\frac{d}{dx}f(g(x)) &= f'(g(x))\cdot g'(x)\\
\frac{d}{dx}f(x)&=\frac{d}{dg(x)}f(g(x))\cdot\frac{d}{dx}g(x)
\end{align*}
$$
## Trigonometric Functions
$$
\begin{align*}
\frac{d}{dx}\sin x &= \cos x\\
\frac{d}{dx}\cos x &= -\sin x\\
\frac{d}{dx}\tan x&=\frac{d}{dx}\left[\frac{\sin x}{\cos x}\right]\\
&=\frac{\sin^2x+\cos^2x}{\cos^2x}\\
	&=\sec^2x
\end{align*}
$$
## Exponentials
$$
\frac{d}{dx}a^x=a^x\ln a
$$
Proof:
$$
\begin{align*}
\frac{d}{dx}a^x&=\frac{d}{dx}(e^{\ln a})^x\\
&=\frac{d}{dx}e^{x\ln a}\\
&=e^{x\ln a}\ln a\\
&=a^x \ln a
\end{align*}
$$
## Local Extrema / Second Derivative
One of the uses for derivatives is finding **local/global extrema**, which are **maximum/minimum points** in a function. During these points, the derivative of said function will either be $0$ or be undefined. The **second derivative** denotes whether the **extremum** is a (local) **maximum** or **minimum** point.
$$
\text{Second Derivative: }\frac{d^2}{dx^2}f(x)=f''(x)
$$
