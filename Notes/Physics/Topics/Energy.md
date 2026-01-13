Energy is a quantity of *work* that is transferrable to and from a body or system. According to newton's **first law of thermodynamics**, it states that energy is **always conserved**, and it cannot be created nor destroyed. This is also known as the **principle of conservation of energy**.

Energy is mainly categorized into two forms, **potential** and **kinetic**. Potential energy is a form of energy where work is **stored** to a body or a system and where it has the potential to release that energy. Meanwhile, kinetic energy is the form of energy as a consequence of **movement**.
## Classical mechanics definition
Work or energy is defined conceptually as:
$$
W = \int_C \pmb{F} \cdot d\pmb{s}
$$
Where work, is defined as the [[Notes/Math/Topics/Integration|line integral]] of force along the path $C$. 

In one dimension, it's simply
$$
W = \int F ds
$$
## Power
Power is defined as the rate of change of energy.
$$
P = \frac{dW}{dt}
$$
Simplistically:
$$
P = \frac{W}{t}
$$
Substituting $W = Fs$, we get that:
$$
P = \frac{Fs}{t} = Fv
$$
## Mechanical kinetic energy
Mechanical kinetic energy represents the amount of energy of a non-rotating object that is the result of it having velocity.

Given the formal definition of work, and the fact that $F = ma$ ([[Notes/Physics/Topics/Dynamics|Dynamics]]), we get that:
$$
W = \int  Fds = \int ma \space ds
$$
Acceleration can be defined using chain rule:
$$
a = \frac{d^2s}{dt^2} = \frac{dv}{ds}\cdot\frac{ds}{dt} = \frac{dv}{ds}\cdot v
$$
Therefore:
$$
W = \int ma \space ds = \int m\frac{dv}{ds}\cdot v \space ds
$$
We then can see that the $ds$ cancels out.
$$
W = \int mv dv
$$
Finally:
$$
W =E_k= \frac{1}{2}mv^2
$$
Without calculus, we first assume work with a constant force in one dimension:
$$
W = Fs
$$
Substituting $F = ma$:
$$
W = mas
$$
Using the equation of motion ([[Notes/Physics/Topics/Kinematics|Kinematics]]):
$$
\begin{align*}
v^2 &= v_0^2 + 2as\\
as &=\frac{v^2-v_0^2}{2}
\end{align*}
$$
Multiplying both sides by $m$:
$$
W=mas=m\left(\frac{v^2-v_0^2}{2}\right)
$$
Given an initial velocity $v_o$ of $0$, we get that:
$$
W = \frac{1}{2}mv^2
$$