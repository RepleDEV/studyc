An ideal gas describes a gas in which all collisions between the atoms or molecules are perfectly elastic and there are no intermolecular forces. Such gases obey the relationship between pressure $p$, volume $V$, and temperature $T$, described as:
$$
pV = nRT
$$
where:
* $p$ is pressure
* $V$ is volume
* $n$ is the number of [[Notes/Chemistry/Topics/Moles|moles]] in the gas itself
* $R$ is the molar gas constant
* $T$ is temperature (in kelvins)

In terms of the **Boltzmann constant $k$:**
$$
pV=NkT
$$
Where $N$ is the amount of gas particles/molecules.

The ideal gas equation(s) comes from three laws:
* $p \propto \frac{1}{V}$ at constant temperature: **Boyle's law**
* $V \propto T$ at constant pressure: **Charles' law**
* $p \propto T$ at constant volume: **Pressure law**
## Kinetic Theory of Gases
The kinetic theory of gases is based on a model of gas with many identical particles moving randomly, with constantly changing velocity, colliding with each other and the container.

The theory makes the assumptions:
* the individual gas molecules have negligible volume (compared to the volume of the gas as a whole)
* the forces between gas molecules are negligible (except when colliding with each other)
* collisions are perfectly elastic
* the time for a collision is negligible (compared to the time between collisions)

Given a single molecule with mass $m$ inside a cube with side length $L$, travelling with speed $c$ towards the right side of the cube. As the collision is perfectly elastic, its [[Notes/Physics/Topics/Dynamics#Conservation of momentum|momentum]] is conserved:
$$
\Delta p = mc - (-mc) = 2mc
$$
The molecule then rebounds on the left side wall of the cube, travelling a total distance of $2L$ at speed $c$. The time taken between collisions of a particular wall would then be:
$$
\frac{2L}{c}
$$
Using [[Notes/Physics/Topics/Dynamics#Momentum|newton's second law]] to find the force $F$ on the right hand wall:
$$
\begin{align*}
F &= \frac{\Delta p}{\Delta t} \\
&= \frac{2mc}{\left( \frac{2L}{c} \right)}=\frac{mc^{2}}{L}
\end{align*}
$$
From here, we can divide by the side's area of $L^{2}$ to get the pressure:
$$
p=\frac{mc^{2}}{L^{3}}
$$
For $N$ molecules, the pressure becomes:
$$
p=N \frac{m\langle c^{2} \rangle }{L^{3}}=N \frac{m\langle c^{2} \rangle }{V}
$$
$\langle c^{2} \rangle$ denotes the **mean** of the molecules' squares of the speed.

This pressure only applies if all $N$ molecules travel in one dimension. Since the molecules travel randomly, at any one side the pressure would be **a third** of $p$. We can then rewrite the equation to be:
$$
pV=\frac{1}{3}Nm\langle c^{2} \rangle 
$$
For $p$ in terms of gas density $\rho$:
$$
p=\frac{1}{3}\rho \langle c^{2} \rangle
$$
## Kinetic energy of a gas molecule
We can then substitute the ideal gas equation to find the (mean) kinetic energy of a gas molecule:
$$
\begin{align}
\frac{1}{3}Nm\langle c^{2} \rangle &= nRT \\ \\
\frac{1}{2}m\langle c^{2} \rangle  & = \frac{3}{2}\left( \frac{n}{N} \right) RT
\end{align}
$$
We then substitute the **Boltzmann constant** $k$ from earlier:
$$
k=\frac{pV}{TN}=\frac{nRT}{TN}=R\left( \frac{n}{N} \right) =\frac{R}{N_{A}}
$$
We get:
$$
\text{KE}=\frac{1}{2}m\langle c^{2} \rangle =\frac{3}{2}kT
$$
