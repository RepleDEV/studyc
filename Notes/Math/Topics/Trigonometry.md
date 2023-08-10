In short, trigonometry is the measure of circular [[angles]] and triangular side length ratios.
## Applied example
Given a right triangle with sides $a$ and $b$ with hypotenuse $h$, and angle $\angle ah = \theta$.
![[Pasted image 20230807091846.png]]
The **sine** of the angle $\theta$ will be equal to the ratio of sides $b$ to $h$. In other words:
$$\sin(\theta) = \frac{b}{h}$$
Which means that given any right triangle with a known hypotenuse and a known angle, the two other sides could be deduced.
$$b = \sin(\theta)\times h$$
To find $a$, the **cosine** of $\theta$ must be used.
$$
\begin{align*}
\cos(\theta) &= \frac{a}{h}\\
a &= \cos(\theta)\times h
\end{align*}
$$
## Unit circle
Another way of thinking about trigonometric functions is with a [[unit circle]]. 
![[Pasted image 20230807094926.png]]
Given a circle with radius of $1$, the point $P$ that sits on the circle with angle $\theta$ relative to the center of the circle, will be equal to $(\cos(\theta), \sin(\theta))$.

Notice how the $cos$ and $sin$ coordinates form a right triangle, with the radius being the hypotenuse.

>[!info]
>The **sine** of $\theta$ will be equal to the **cosine** of the angle at $P$ (the complementary angle).
>
>This is because the angles of any triangle will always sum up to $180^\circ$, which means that the two angles of a right triangle **must** add add up to $90^\circ$. This fact is evident in the function's name: **cosine**, which stands for the **sine** of the **co**mplementary angle.

The tangent ($tan$) function is defined as the ratio of the **opposite** side to the **adjacent side**. Knowing the the unit circle, it would be:
$$\tan(\theta)=\frac{\sin(\theta)}{\cos(\theta)}$$
And with $\sin$ being the $y$ coordinate and $cos$ being the $x$ coordinate, from the definition of a [[slope]], $tan(\theta)$ is equals to the **slope** of a straight line with angle $\theta$. 
>[!warning]
>If you see the unit circle again, the **tangent** of the circle at angles $0$ and $\pi$, it will be a vertical line, for which a slope for a vertical line is **undefined**. Which means that the **tangent** of $0$ and $\pi$ is **undefined**.
## Related angles
For any angle $\theta$ in the first quadrant, there exists an equivalent angle in the second quadrant where the **sine** of said angle will be equal, and it is the **mirror angle** of $\theta$ (angle reflected across the **x-axis**).
$$
\sin(\theta)=\sin(\pi-\theta)
$$
If the same two angles are reflected across the **y-axis** it will be equal to the negative of the sine of $\theta$.
$$
\sin(\theta)=-\sin(2\pi-\theta)
$$
For **cosine**, it is reversed.
$$
\cos(\theta)=\cos(2\pi-\theta)=-\cos(\pi-\theta)
$$
Lasty, for **tangent**, the slope of the tangent at any point $P$ that sits on a circle, will be equal the point that in is the other side of $P$. Which means that, the angle $\theta$ must be reflected in **both** the **y-axis** and the **x-axis**.
$$
\begin{align*}
\text{Reflect across the $x$-axis:}\tan(\theta)&= \tan(\pi-\theta)\\
\text{Reflect across the $y$-axis:}\tan(\theta)&= \tan(2\pi-(\pi-\theta))\\
\tan(\theta)&= \tan(\pi+\theta)
\end{align*}
$$
## Inverse functions
Trigonometric functions also have their inverses, where they take the ratio of two sides as input and outputs an angle.
* $\arcsin$: the inverse **sine** function (also $sin^{-1}$)
* $\arccos$: the inverse **cosine** function ($cos^{-1}$)
* $\arctan$: the inverse **tangent** function ($tan^{-1}$)
>[!warning]
>Due to [[Angles#Angular equivalence|angular equivalence]], any multiple of $2\pi$ plus the output of the inverse functions will also be correct. This is also the case for [[#Related angles]].
>
>Usually, angles will be reduced to within the range of $0\leq\theta\leq2\pi$ unless stated.
## Function transformations
Trigonometric functions are **periodic** functions, which means that they repeat their values at regular intervals. For the trigonometric functions, the period is $2\pi$, which means that after $2pi$, the output would then repeat.

Every formula works from [[Functions#Function Transformations]].

For the functions **sine** and **cosine**, the function produces a **sinusoidal** wave (sine wave), which means that **sine** and **cosine** has an **amplitude**. For $\sin(x)$ and $\cos(x)$, the **amplitude**, is $1$, with the range being $[0,1]$. When transformed, the amplitude and/or range may change.
## Trigonometric identities
By seeing the unit circle once again, we could see that the circle's radius of $1$ forms the hypotenuse of a right triangle with side lengths $\sin(\theta)$ and $\cos(\theta)$. By using the [[Pythagorean Theorem]], we can deduce the fact that:
$$
\sin^2(\theta)+\cos^2(\theta)=1
$$
