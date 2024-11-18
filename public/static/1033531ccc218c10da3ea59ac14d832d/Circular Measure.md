Circular measure is the topic of measuring the lengths and areas of sections of a circle.

Given the formula for the circumference or perimeter of a full circle:
$$
P=2\pi r
$$
## Arc
We can calculate **a part** of the **circumference** by multiplying it to the degree that we want to extract. For example:
$$
L=\frac{\theta}{2\pi}\times P
$$
This is called an **arc**, which is a section of the circumference of a circle. Given an angle, we can measure the **arc length** ($L$). If we simplify the equation we get:
$$
L=\theta r
$$
## Arc length with an [[Notes/Math/Topics/Integration|integral]]
Given the equation $r = c$ where $c$ is a constant, we can calculate arc lengths with the integral of an arc length in polar coordinates.
$$
L = \int_0^\theta \sqrt{r^2 + {\frac{dr}{d\theta}}^2}d\theta
$$
Since $r$ is a constant, $\frac{dr}{d\theta} = 0$, as such, the integral simplifies to:
$$
L = \int_0^\theta rd\theta=[r\theta]_0^\theta=\theta r
$$
## Sector
The same could also be done for the area of a part of a circle.
$$
\begin{align*}
A&= \pi r^2\\
A_{sec} &= \frac{\theta}{2\pi}\times A\\
&= \frac{1}{2}\theta r^2
\end{align*}
$$
This area is called a **sector** of a circle (for $\theta$ radians).
## Chord
A chord is the line that connects two points that sits at any point in a circle (where the resulting line isn't the diameter). The length of a chord can be thought as the length of the base of an isosceles triangle with side lengths $r$.
![[Pasted image 20230814194748.png]]
From here we can deduce that the length of the chord is twice the length of the two right triangles that make up an isosceles triangle. The angle $\gamma$ would be $\frac{1}{2}$ of the angle of the chord: $\theta$.
$$
L_{crd}=2\sin(\frac{\theta}{2})\times r
$$
For the angle of the resulting isosceles triangle, this [[Trigonometry#Trigonometric formula for area of any triangle|formula]] can be used.