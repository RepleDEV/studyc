This note is a temporary note on [[Cambridge Syllabus (9702)]], for **chapter 17: Oscillations**. This chapter continues with concepts and definitions from [[Notes/Physics/Topics/Circular Motion|Circular Motion]].
## Simple Harmonic Motion
Simple harmonic motion (SHM) occurs when an object's acceleration is proportional to the displacement from a fixed point, and is in the opposite direction. SHM approximates motion such as springs and a simple pendulum.

SHM acceleration can be expressed in terms of displacement ($x$):
$$
a = -\omega^{2}x
$$
where $\omega$ is the angular frequency, similar to [[Notes/Physics/Topics/Circular Motion#Angular Speed|angular speed]].

### Angular speed with spring system SHM
Given a mass attached to a vertical [[Notes/Physics/Topics/Deformation of Solids & Springs|spring]] with stiffness $k$. The mass and spring system is in equilibrium. When the spring is pulled downward with displacement $x$, the spring exerts a force with magnitude $-kx$ upwards. From the definition of [[Notes/Physics/Topics/Dynamics|force]] ($F=ma$):
$$
\begin{align*}
F=-kx&=ma\\
a&=-\frac{k}{m}x
\end{align*}
$$
Therefore, from the relationship of $a$ and $\omega$, we get:
$$
\omega^{2}=\frac{k}{m} \to \omega=\sqrt{ \frac{k}{m} }
$$
## SHM Displacement
We can then solve the differential equation $a+\omega^{2}x=0$ to find $x$ and $v$ as a function of time.
$$
\begin{align*}
x&=x_{0}\cos \omega t\\
v&=v_{0}\sin \omega t
\end{align*}
$$
Where $v_{0}$, its maximum speed, is equal to: $v_{0}=\omega x_{0}$

Squaring $x$ we get:
$$
\begin{align*}
x^{2}&=x_{0}^{2}\cos ^{2}\omega t
\\ &=x_{0}^{2}(1-\sin ^{2}\omega t)
\\ &=x_{0}^{2}-x_{0}^{2}\sin ^{2}\omega t
\end{align*}
$$
Substituting $x_{0}=\frac{v_{0}}{\omega}$, we get:
$$
\omega^{2}x^{2}=\omega^{2}x_{0}^{2}-v_{0}^{2}\sin ^{2}\omega t
$$
Substituting for $v$, we can simplify to:
$$
v=\omega\sqrt{ x_{0}^{2}-x^{2} }
$$
>[!warning]
>Despite many books defining $x$ as a function of the *cosine* of $\omega t$, Cambridge defines it as:
>$$
>x= x_{0}\sin \omega t
>$$
>The sine definition can be explained with the definition (explained below) where $x=A\cos(\omega t+\delta)$ and its phase angle, $\delta=-\frac{\pi}{4}$. To put it simply, Cambridge defines the starting state $t=0$ at the point where $x=0$.

### Differential Equation Derivation
Solving the second order differential equation for $a+\omega^{2}x=0$ gives the general solution of:
$$
x=c_{1}\cos \omega t+c_{2}\sin \omega t
$$
which, by following these [[Notes/Math/Topics/Trigonometry#Trigonometric transformations (2)|trigonometric transformations]], we can rewrite $x$ as:
$$
x=\left( \sqrt{  c_{1}^{2}+c_{2}^{2}  } \right) \cos (\omega t+\delta)
$$
The peak value of $x$, its amplitude $A$, can be written as $A=\sqrt{ c_{1}^{2} + c_{2}^{2}}$.
$\delta$, its **phase angle** is then:
$$
\delta=\arctan \left( \frac{c_{2}}{c_{1}} \right) 
$$
where: $\cos\delta=\frac{c_{1}}{A}$ and $\sin\delta=-\frac{c_{2}}{A}$.

Given the initial state of $x(0)=x_{0}$, we get that $c_{1}=x_{0}$.

Finding the derivative of $x$ gives $v$:
$$
v=\omega(c_{2}\cos \omega t-c_{1}\sin \omega t)
$$
Given an initial velocity $v(0)$, we get that $c_{2}=\frac{v(0)}{\omega}$. In the usual case where $v(0)=0$, $c_{2}$ would be $0$. $x$ would then simplify to:
$$
x=x_{0}\cos \omega t
$$
where $x_{0}=A$. 

For $v$, it simplifies to:
$$
v=-\omega x_{0}\sin \omega t
$$
It can be seen that the maximum value of $v$ is $\omega x_{0}$. This is why $v_{0}$ from earlier is defined as is. The negative sign is due to the definition of SHM, where the acceleration is in opposite direction of the displacement. In the initial state of $t=0$, $x$ would be at its maximum value, $A$. The instant that the object is released, $x$ would be less than $x_{0}$. The velocity $v$ would have the **opposite sign** of $x_{0}$, hence the negative sign.
## Energy with SHM
The total energy within a system $E$ is the sum of the potential energy $PE$ and the kinetic energy $KE$.

With that in mind, at $t=0$, when the object is at its **maximum displacement** $x=x_{0}$, it would have the maximum amount of $PE$. The object would accelerate until the point of equilibrium $x=0$ where it would have its maximum velocity $v=v_{0}$. As such, its maximum amount of $KE$ would be at equilibrium.

Given the definition of [[Notes/Physics/Topics/Deformation of Solids & Springs#Elastic Potential Energy|potential energy in a spring]], we get that:
$$
PE = \frac{1}{2}kx^{2}=\frac{1}{2}kx_{0}^{2}\cos ^{2}\omega t
$$

Given the definition of [[Notes/Physics/Topics/Energy#Mechanical kinetic energy|kinetic energy]], we get that:
$$
KE=\frac{1}{2}mv^{2}=\frac{1}{2}mx_{0}^{2}w^{2}\sin ^{2}\omega t=\frac{1}{2}kx_{0}^{2}\sin ^{2}
wt$$
therefore:
$$
E=PE+KE=\frac{1}{2}kx_{0}^{2}(\sin ^{2}\omega t+\cos ^{2}\omega t)=\frac{1}{2}kx_{0}^{2}
$$
## Damped Oscillations
Real-life oscillations lose energy over time due to resistive forces, with the amplitude decreasing over time. By modifying the force equation earlier $ma=-kx$, we then add the **damping force** $F_{d}=-b \dot{x}$, making the force equation:
$$
ma=m \ddot{x}=-kx-b \dot{x}
$$
We then get the auxiliary equation:
$$
mr^{2}+br+k=0
$$

## Underdamping
Underdamping is the case where the roots $r$ of the auxiliary equation for damped motion is less than $0$: $b^{2}-4mk <0$. Solving the differential equation, the function $x$ can be found and it can be seen that it's proportional to the **damping constant** $b$, while also oscillating:
$$
x = Ae^{-(b/2m)t}(\cos \omega't+\phi)
$$
## Critical Damping
A critically damped oscillator returns to its position of equilibrium $x=0$ in as short time as possible without oscillating. This is the case where the roots $r$ of the auxiliary equation is equal to $0$: $b^{2}-4mk=0$. This gives a function of $x$ that decreases exponentially and $x\to 0$ as $t \to \infty$.
## Forced Oscillations & Resonance
Oscillators can be driven by an external system, transferring energy into the oscillator system. Given a driving force with a variable angular frequency $\omega _d$, a forced oscillator oscillates at the angular frequency of $\omega_{d}$, and its displacement $x$ given by:
$$
x=A\cos(\omega_{d}t+\phi)
$$
Its amplitude $A$ depends on the $\omega_{d}$. $A$ is greatest when: $\omega_{d}=\omega$, when the angular frequency of the driving force is **equal to** the **resonant frequency** (also known as the **natural angular frequency**) of the oscillator. This condition is called **resonance**.