Coordinate geometry (or analytic geometry) is defined as **the study of geometry using the coordinate points**.
## Line segments
Line segments are straight lines that connects two points. 
### Line segment length/distance
Say, we have two points $A$ and $B$. The length of the line segment $\overline{AB}$ is the positive square root of the sum of squares of the vertical and horizontal distances. In other words: the vertical and horizontal distances of the two points, $\Delta x$ and $\Delta y$ forms a right triangle with $\overline{AB}$ being the hypotenuse, meaning that the [[Pythagorean Theorem]] can be used to find $\overline{AB}$.
$$
\overline{AB} = \sqrt{(\Delta x)^2+(\Delta y)^2}
$$
### Line segment midpoint
The midpoint of a line segment is quite literally the middle of it and it is calculated by averaging the horizontal and vertical distances of the two endpoints.
$$
\frac{A+B}{2} = \left(\frac{\Delta x}{2},\frac{\Delta y}{2} \right)
$$
### Line segment gradient
The gradient, also known as the [[Slope]] of the line segment is the rate of change of the line. Meaning: how much the line is raised or lowered per a given distance. 
$$
m = \frac{\Delta y}{\Delta x}
$$
## Parallel lines
Lines or line segments which are parallel to each other has the same gradient.
$$
\overline{AB} \| \overline{CD} \iff m(\overline{AB})=m(\overline{CD})
$$
> [!warning]
> I don't know if writing it this way is valid in any way but it is pronounced $\overline{AB}$ is parallel to $\overline{CD}$ if the slope ($m$) of $\overline{AB}$ is equal to the slope of $\overline{CD}$
## Perpendicular Lines
The definition of two perpendicular lines is when the product of the two slopes equals to negative one.
$$
m_1\times m_2=-1
$$
Rearranging the equation we get:
$$m_1 \perp -\frac{1}{m_{1}}= m_2$$
## Line through two points
A straight line extending all the way to infinity can also connect two points: $(x_1, y_1)$ and $(x_2,y_2)$ . Using the slope formula from earlier, we get:
$$
\begin{align*}\\
m &= \frac{y_2-y_1}{x_2-x_1}\\
y-y_1 &= m(x-x_1)\\
y-y_1 &= \left(\frac{y_2-y_1}{x_2-x_1}\right)\times(x-x_1)\\
%\frac{y-y_1}{x-x_1} &= \frac{y_2-y_1}{x_2-x_1}\\
\end{align*}
$$
This uses the [[Notes/Math/Topics/Linear Functions#Point-slope form|point-slope form]] of a linear equation.
## Perpendicular bisector of a line through two points
The perpendicular bisector has a perpendicular slope and its origin is the midpoint of the two points.
## Circles
A circle with origin (center) at $(0,0)$ and radius $r$ it is given by the equation:
$$
x^2+y^2=r^2
$$
The reason why the graph forms a circle is because the equation follows the [[Pythagorean Theorem]] as it forms a right triangle with side lengths $x$ and $y$ with hypotenuse $r$, and since $r$ is constant, the graph forms a circle. Also, if we solve for $y$:
$$
\begin{align*}
y^2&=r^2-x^2\\
y &= \pm\sqrt{r^2-x^2}
\end{align*}
$$
Here, $y$ gives two values: the **positive** square root and the **negative**, each forming a semicircle.

For circles with origin $(a,b)$, the equation is:
$$
(x-a)^2+(y-b)^2=r^2
$$
$a$ and $b$ are $x$ and $y$ function [[Functions#Translation|translations]]. 
## Circles that pass through a point
Following the methods of [[Notes/Math/Topics/Functions#Translation|function translations]], a circle with origin $(a,b)$ passes through $(p,q)$ equates to:
$$
\begin{align*}
\text{Circle equation: } (x-a)^2+(y-b)^2&=r^2\\
\text{Substitute $x=p$ and $y=q$: } (p-a)^2+(q-b)^2&=r^2\\
\text{Solve for $r$: }\pm\sqrt{(p-a)^2+(q-b)^2}&=r\\
\end{align*}
$$
We can also see that essentially, $r$ is equal to the [[Notes/Math/Topics/Coordinate Geometry#Line segment length/distance|distance]] between the two points.
## Circle tangents
Given a point $P$ that sits at any arbitrary circle $A$, the tangent of $A$ at point $P$ will always be the perpendicular bisector to $\overline{AP}$ at $P$. 