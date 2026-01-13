## Density
**Density** is defined as **how much** a material is per its given volume. Formally, mass per unit volume:
$$
\rho=\frac{m}{V}
$$
## Pressure
**Pressure** is defined as how much [[Notes/Physics/Topics/Dynamics|force]] is exerted over a given area. Formally, pressure is the normal force per unit area:
$$
p=\frac{F}{A}
$$
When it comes to pressure, the direction of force that it is acted on is always perpendicular to the surface area it's acting upon as pressure is calculated using the *normal* force.

Using **pascals** as the unit, defined as $N$ (newtons, force) per $m^2$ (area).
$$
\text{Pa} = \frac{N}{m^2}=\text{kgm}^{-1}\text{s}^{-2}
$$
## Hydrostatic Pressure
From these two equations, we can derive the equations for **hydrostatic pressure**, known as the pressure an object experiences under a **fluid** (also known as buoyancy force).

Consider an object being submerged in water. The object would experience pressure from the water above it. The water above it would have weight:
$$
W=mg
$$
We can get the water's mass using the water's density and the column of water above the object:
$$
m=\rho V
$$
Since the water is **above** the object, at a depth of $h$, and cross-sectional area $A$ of the object, its volume would be equal to $V = hA$.

Substituting:
$$
\begin{align*}
p &= \frac{W}{A}\\
&=\frac{\rho Vg}{A} = \frac{\rho hAg}{A}\\
&=\rho gh
\end{align*}
$$
## Archimedes' principle
Archimedes' principle states that with an object resting in a fluid there's an upwards buoyancy force acting upon it.

Given that in any object there is hydrostatic pressure pushing **down** from above, and pushing **up** from below, we can calculate the difference in the two pressures as:
$$
\Delta p = \rho g \Delta h
$$
Where $\Delta h$ is equal to the height difference between the top and bottom of the object.

These two pressures contribute to the **buoyant force** to the object:
$$
\begin{align*}
F &= \Delta p\times A \\
&= \rho g \Delta h\times A \\
&= \rho g V
\end{align*}
$$
Where $V$ is equal to the volume of the object submerged.