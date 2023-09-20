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
Another way (arguably an easier way) of thinking about trigonometric functions is with a [[unit circle]]. 
![[Pasted image 20230807094926.png]]
Given a circle with radius of $1$, the point $P$ that sits on the circle with angle $\theta$ relative to the center of the circle, will be equal to $(\cos(\theta), \sin(\theta))$.

Notice how the $cos$ and $sin$ coordinates form a right triangle, with the radius being the hypotenuse.

The tangent ($tan$) function is defined as the ratio of the **opposite** side to the **adjacent side** to an angle of a right triangle. Knowing the the unit circle, it would be:
$$\tan(\theta)=\frac{\sin(\theta)}{\cos(\theta)}$$
With $\sin$ being the $y$ coordinate and $cos$ being the $x$ coordinate, using the definition of a [[slope]], $\tan(\theta)$ is equals to the **slope** of a straight line with angle $\theta$. 
>[!warning]
>If you see the unit circle again, the **tangent** of the circle at angles $\frac{\pi}{2}$ and $\frac{3}{2\pi}$, it will be a vertical line, for which a slope for a vertical line is **undefined**. Which means that the **tangent** of $0$ and $\pi$ is **undefined**.
## Related angles
For any angle $\theta$ in the first quadrant, there exists an equivalent angle in the second quadrant where the **sine** of said angle is equal to $\sin(\theta)$, and it is the **mirror angle** of $\theta$ (angle reflected across the **x-axis**).
![[Pasted image 20230906122737.png]]
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
Lastly, for **tangent**, the slope of the tangent at any point $P$ that sits on a circle, will be equal the point that is in the other side of $P$. Which means that, the angle $\theta$ must be reflected in **both** the **y-axis** and the **x-axis**.
$$
\begin{align*}
\text{Reflect across the $x$-axis:}&= \tan(\pi-\theta)\\
\text{Reflect across the $y$-axis:}&= \tan(2\pi-(\pi-\theta))\\
\tan(\theta)&= \tan(\pi+\theta)
\end{align*}
$$
## Inverse functions
Trigonometric functions also have their inverses, where they take the ratio of two sides as input and outputs an angle.
* $\arcsin$: the inverse **sine** function (also $\sin^{-1}$)
* $\arccos$: the inverse **cosine** function ($\cos^{-1}$)
* $\arctan$: the inverse **tangent** function ($\tan^{-1}$)
>[!warning]
>Due to [[Angles#Angular equivalence|angular equivalence]], any multiple of $2\pi$ plus the output of the inverse functions will also be correct. This is also the case for [[#Related angles]].
>
>Usually, angles will be reduced to within the range of $0\leq\theta\leq2\pi$ unless stated.
## Function transformations
Trigonometric functions are **periodic** functions, which means that they repeat their values at regular intervals. For the **sine** and **cosine** functions, the period is $2\pi$ (for **tangent** it is $\pi$), which means that after $2\pi$, the output would then repeat.

Every formula works from [[Functions#Function Transformations]].

For the functions **sine** and **cosine**, the function produces a **sinusoidal** wave (sine wave), which means that **sine** and **cosine** has an **amplitude**. For $\sin(x)$ and $\cos(x)$, the **amplitude**, is $1$, with the range being $[0,1]$. When transformed, the amplitude and/or range may change depending on the transformation.
## Trigonometric identities
By seeing the unit circle once again, we could see that the circle's radius of $1$ forms the hypotenuse of a right triangle with side lengths $\sin(\theta)$ and $\cos(\theta)$. By using the [[Pythagorean Theorem]], we can deduce the fact that:
$$
\sin^2(\theta)+\cos^2(\theta)=1
$$
Dividing this equation by either $\sin^2(\theta)$ or $\cos^2(\theta)$ we get:
$$
\begin{align*}
1+\frac{\cos^2(\theta)}{\sin^2(\theta)} &= \frac{1}{\sin^2(\theta)}\\
1+\cot^2 &= \csc^2(\theta)\\
\cot^2(\theta)&=\csc^2(\theta)-1
\end{align*}
$$
and
$$
\begin{align*}
1+\frac{\sin^2(\theta)}{\cos^2(\theta)} &= \frac{1}{\cos^2(\theta)}\\
1+\tan^2(\theta) &= \sec^2(\theta)\\
\tan^2(\theta)&=\sec^2(\theta)-1
\end{align*}
$$
This leads to:
### Reciprocals of trigonometric functions
* Reciprocal of $\sin$: $\frac{1}{\sin(\theta)}=\csc(\theta)$
* Reciprocal of $\cos$: $\frac{1}{\cos(\theta)}=\sec(\theta)$
* Reciprocal of $\tan$: $\frac{1}{\tan(\theta)}=\cot(\theta)$
## Trigonometric formula for area of any triangle
The area of any triangle is half of the base times the height.
$$
A=\frac{1}{2}h_b \times b
$$
Given the side lengths of the two adjacent sides to an angle of any triangle and the angle itself, we can calculate the area of said triangle.
![[Pasted image 20230814201703.png]]
Here, we can see that if we draw a perpendicular line $h_b$ of $b$ that goes through a corner of the triangle, it divides the triangle into two right triangles. 
$$
\begin{align*}
h_b&=\sin(\gamma)\times a\\
A&= \frac{1}{2}\sin(\gamma)\times a \times b
\end{align*}
$$
## Law of Sines
The Law of Sines states that the ratios of the sine of the angle of any corner of a triangle to the length of the side that it's facing towards will **all** be **equal**.
![[Pasted image 20230815083849.png]]
$$
\frac{a}{\sin(A)}=\frac{b}{\sin(B)}=\frac{c}{\sin(C)}
$$
### Proof
![[Pasted image 20230815084258.png]]
The triangle could be divided to its two right angled triangle components sharing the side $h$. The side $h$ will be equal to the sine of the angle $C$ times side $b$, which would also be equal to the side $B$ times the side length $c$.
$$
\sin(C)\times b=\sin(B)\times c
$$
Rearranging, we get:
$$
\frac{b}{\sin(B)}=\frac{c}{\sin(C)}
$$
This could also be done with angle $A$, giving the formula above.
## Law of Cosines
The Law of Cosines is a law that **generalizes** the [[Pythagorean Theorem]], so that an equation could be used to find the sides of any triangle.

For example: given any triangle with side lengths $a$, $b$, and $c$; with the respective angles that face them be $A$, $B$, and $C$; and $C < 90^\circ$.
![[Pasted image 20230815091539.png]]
If we were to plug it to the Pythagorean theorem, we get:
$$
a^2+b^2=c^2
$$
But if we actually calculate it, we could see that $a^{2}+b^{2}$ is **greater** than $c^2$ and it is because $C$ is less than $90^\circ$. We must **subtract** something from the left hand side of the equation to make it equal to $c^2$.
![[Pasted image 20230815091954.png]]
Say we take the perpendicular bisector of $a$ that passes through $A$. Here we can see that it forms a right triangle with sides $c$, $h$ and $a-r$ with $r$ being the adjacent side of $C$ until $h$.

Using the Pythagorean theorem we get:
$$
c^2 = (a-r)^2+h^2
$$

From this we could deduce that:
$$
\begin{align*}
\sin(C)=\frac{h}{b} &\implies h=b\times\sin(C)\\
\cos(C)=\frac{r}{b} &\implies r=b\times\cos(C)\\
\end{align*}
$$
Plugging everything in:
$$
\begin{align*}
c^2 
&= (b \times \sin(C))^2 + (a - b \times \cos(C))^2 \\
&= b^2 \times \sin^2(C) + a^2 - 2ab \times \cos(C) + b^2 \times \cos^2(C) \\
&= b^2 \times \big( \sin^2(C)+ \cos^2(C) \big) + a^2 - 2ab \times \cos(C)\\
&= b^2 + a^2 - 2ab \times \cos(C)\\
c &= \sqrt{a^2 + b^2 - 2ab \times \cos(C)}
\end{align*}
$$
[Source](https://brilliant.org/wiki/cosine-rule/)
> [!done] Conclusion
> Trigonometry is the measure of circular angles and ratios of triangle side lengths.
> * $\sin$ gives $\frac{\text{opp}}{\text{hyp}}$
> * $\cos$ gives $\frac{\text{adj}}{\text{hyp}}$
> * $\tan$ gives $\frac{\text{opp}}{\text{adj}}$ or $\frac{\sin}{\cos}$
> 
> $\tan$ is also the **slope** of the straight line with angle $\theta$.
> 