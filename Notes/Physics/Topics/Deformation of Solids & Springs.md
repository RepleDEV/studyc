The deformation of a material is a consequence of **tensile** or **compressive** forces.
## Hooke's law
Hooke's law states that the force required to compress or extend a spring to some distance $\Delta l$ scales linearly, or is proportional to said extension.
$$
\begin{align*}
F&\propto \Delta l \\
\therefore F &= k\Delta l
\end{align*}
$$
$k$ here is defined as the spring's spring constant which describes its stiffness.
## Stress
Stress arises form materials receiving compressive or tensile force.
$$
\sigma=\frac{F}{A}
$$
Where $F$ is the force, and $A$ is the cross-sectional area of the material.
## Strain
Strain is the ratio of the material's deformation to its original length.
$$
\epsilon=\frac{\Delta l}{l}
$$
## Young's modulus
Young's modulus is a quantity of the stiffness of a material, i.e., how much resistance a given material has to deformation. It is defined as the ratio of the stress over strain applied to the object within its elastic region.
$$
E = \frac{\sigma}{\varepsilon}
$$
This quantity, when graphed, can be used to visualize a material's elastic region and plastic region.

![[Pasted image 20231122113221.png]]
Materials will deform linearly until it hits its proportional limit, also known as the **limit of proportionality** (point A in the graph), but it will continue to follow elastic behavior until its **elastic limit**.
* Elastic behavior: the behavior of materials where if forces are removed, they will **return to their original shape or form**. A part of this region will follow Hooke's law.
* Plastic behavior: the behavior where materials will **not** return to their original shape or form when their forces are removed.
## Elastic Potential Energy
Using the integral definition of [[Notes/Physics/Topics/Energy|energy]], we get:
$$
\begin{align*}
E_\ce{EPE} &= \int F \space d\Delta l\\
&= \int k\Delta l \space d\Delta l\\
&=\frac{1}{2}k\Delta l^2
\end{align*}
$$
## Springs in Series
For springs in series, the whole connection of every spring can be thought of one big spring with a spring constant $k_{series}$.. The whole spring, when in extension, will have a total extension that is the sum of the extensions of all of its individual springs.
$$
\Delta l_{series}=\sum\Delta l_n
$$
From Hooke's law earlier, we can substitute:
$$
\frac{F_{series}}{k_{series}} = \sum \frac{F_n}{k_n}
$$
From here, when a pulling force is done at the end of one spring, the same force will be applied to the adjacent spring connected to it:
$$
F_{series} = F_n
$$
Therefore:
$$
\frac{1}{k_{series}}=\sum\frac{1}{k_n}
$$
## Springs in Parallel
For springs in parallel, it can be thought that the whole arrangement of all the springs, when given a force, has equal extension:
$$
\Delta l_{parallel} = \Delta l_n
$$
This is also combined with the fact that the force given to the whole arrangement is dispersed throughout the individual springs:
$$
F_{parallel} = \sum F_n
$$
Therefore:
$$
k_{parallel} = \sum k_n
$$