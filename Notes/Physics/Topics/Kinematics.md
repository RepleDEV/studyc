---
tags:
  - classical_mechanics
---
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
If the final velocity $v$ is given and $t$ seconds has passed, this equation for displacement would be:
$$
s(t)= v_1t-\frac{1}{2}at^2
$$
### Velocity
Acceleration is defined as the instantaneous rate of change of $v$ with respect to time:
$$
a = \frac{dv}{dt}
$$
However, with *constant* acceleration, this can be simplified to:
$$
a=\frac{\Delta v}{\Delta t}
$$
Given an initial velocity $v_0$ and $v(t)$ at time $t$, we get:
$$
a = \frac{v(t)-v_0}{t}
$$
Rewriting:
$$
v(t)=v_0+at
$$
This can be thought of as the velocity as being the starting velocity: $v_0$, added up with the velocity from accelerating at $a$ after $t$ seconds, resulting in $v$: the final velocity.

Squaring both sides we get:
$$
\begin{align*}
(v(t))^{2} &= v_0^2+2v_0at+a^2t^2\\
&= v_0^2+2a(v_0t+\frac{1}{2}at^2)\\
&= v_0^2+2as
\end{align*}
$$
## SUVAT Derivation Using Integrals
The first few equations of SUVAT comes from the integral of **acceleration**, given that:
$$
a = \frac{dv}{dt}=\frac{d^2 s}{dt^2}
$$
Taking the first integral, we get:
$$
\begin{align*}
\int adt &= \int dv \\
at + C &= v
\end{align*}
$$
where $C$ represents the initial velocity, $v_0$.

Integrating once more, we get:
$$
\begin{align*}
\int v= \int\frac{ds}{dt} &= \int at+v_0\\
ds &=(at+v_0)dt
\end{align*}
$$
$$
\begin{align*}
\int vdt = s = \frac{1}{2}at^2 + v_0t + C
\end{align*}
$$
Where $C$ would be the initial displacement (often would be $0$).
>[!warning]
>Note that these suvat equations only apply for constant velocities and accelerations. 
