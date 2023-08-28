Kinematics is a branch of classical mechanics that deals with the description of motion, including the position, velocity, and acceleration of objects without considering the forces that cause the motion. 

Kinematics involves these properties in a moving object:
* **Distance**: the total length of travel of an object, regardless of where it went and how.
* **Displacement**: the change in position of an object which includes direction and distance.
* **Speed**: rate of change ([[slope]] or [[Differentiation|derivative]]) of **distance**.
* **Velocity**: rate of change of **displacement**:
* **Acceleration**: rate of change of **velocity**.
## Graphs of motion
Graphs for motion in one dimension could be thought of as $t$ for time for the $x$ axis and the $y$ axis could either be any of the properties mentioned above.
### SUVAT equations
SUVAT equations are a set of equations for one dimensional motion involving the five letters of its name as variables.
* $s$: displacement (I really don't know why)
* $u$: initial velocity (easier as $v_i$ or $v_1$ honestly)
* $v$: final velocity ($v_f$ or $v_2$)
* $a$: acceleration (this one actually makes sense)
* $t$: time

>[!warning]
>I have replaced $u$ and $v$ with $v_0$ and $v_1$ respectively to make things easier to understand.
### Displacement
$$
s(t) = v_0t+\frac{1}{2}a(t)t^2
$$
With initial velocity of zero it's:
$$
s(t)=\frac{1}{2}a(t)t^2
$$
This is also because acceleration is the **second derivative** of displacement.

If the final velocity $v$ is given and $t$ seconds has passed, this equation for displacement would be:
$$
s(t)= v_1t-\frac{1}{2}at^2
$$
### Velocity
$$
v(t)=v_0+at
$$
This can be thought of as the velocity as being the starting velocity: $u$, added up with the velocity from accelerating at $a$ after $t$ seconds, resulting in $v$: the final velocity.

Squaring both sides we get:
$$
\begin{align*}
(v(t))^{2} &= v_0^2+2v_0at+a^2t^2\\
&= v_0^2+2a(v_0t+\frac{1}{2}at^2)\\
&= v_0^2+2as
\end{align*}
$$
## 2 dimensional motion
For motion in two dimensions, the angle of the forces must also be considered. Depending on the angle, there could be two forces that act on said object which faces the horizontal and vertical axes.

For an object that is thrown vertically with angle $\theta$ to the horizontal, and an initial velocity of $v_0$, the horizontal velocity of said object will be **constant** (given no air resistance of course), and it would be the **cosine** of $\theta$ times $v_0$. For the vertical velocity, it would be the **sine** of $\theta$ times $v$.
$$
\begin{align*}
V_h &= \cos(\theta)\times v\\
V_v &= \sin(\theta)\times v\\

\end{align*}
$$
The Suvat equations still apply here, the equations for the vertical and horizontal distances would be:
$$
\begin{align*}
s_{h}(t)&=tv_0\cos(\theta)+\frac{1}{2}\\
s_{v}(t)&=tv_0\sin(\theta)
\end{align*}
$$