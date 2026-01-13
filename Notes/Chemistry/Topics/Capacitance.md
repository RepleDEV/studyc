## Capacitors
Capacitors usually hold electric charge by using two parallel plates. When a potential difference $V$ is run across the capacitor, electrons flow from the power source and collect on one side of the plate. Conversely, on the other side of the plate, the same number of electrons flow away. The negative side of the plate would then have a charge of $-Q$, and the right side of the plate would have an equal positive charge of $+Q$. As $V$ increases, more charge accumulates on the capacitor. Therefore, we can say that:
$$
Q\propto V
$$
The proportionality constant of this relationship is called the capacitor's **capacitance** $C$.
$$
Q=CV\to C=\frac{Q}{V}
$$
Capacitance $C$ of a capacitor is defined as the charge $Q$ stored per unit potential difference $V$.
## Capacitors in series 
For capacitors in series, we can see that the voltages ($v$) of all capacitors add up to the e.m.f. of the power source ($E$).
$$
E = \sum v_n
$$
Since $V = \frac{Q}{C}$, therefore:
$$
\frac{Q}{C_\text{total}} = \sum\frac{Q_n}{C_n}
$$
Since all charges between capacitors in series are equal, therefore:
$$
\frac{1}{C_\text{total}}=\sum\frac{1}{C_n}
$$
## Capacitors in parallel
For parallel capacitors, all of their voltages must be the same. 
$$
V = v_n 
$$
All capacitors in parallel can act as one singular capacitor, and as all charges passing through the capacitors are spread throughout all the capacitors:
$$
\begin{align*}
Q = \sum{q_n}
\end{align*}
$$
Dividing both sides by their voltages, we get that:
$$
\begin{align*}
\frac{Q}{V}&=\sum\frac{q_n}{v_n}\\
C&=\sum{c_n}
\end{align*}
$$
## Stored energy
From the equation of $Q$ earlier, we can get an equation for $V$:
$$
V=\frac{Q}{C}
$$
Potential difference $V$ is defined as the work done per unit of charge. Therefore, the stored energy in a capacitor can be calculated by finding the **area under the curve** of $V$ with respect to $Q$:
$$
W=\int_{0}^{Q} VdQ=\frac{1}{2} \frac{Q^{2}}{C}=\frac{1}{2}QV=\frac{1}{2}CV^{2}
$$
## Capacitor Discharge
When a capacitor discharges, the charge stores goes through **exponential decay**:
$$
Q=Q_{0}\exp\left( -\frac{t}{RC} \right)
$$
## Time Constant
The time constant $\tau$ is the product of the resistance $R$ and capacitance $C$:
$$
\tau=RC
$$
$\tau$ is the time it takes for the charge $Q$ of the capacitor to fall to $e^{-1}$ of $Q_{0}$.
### More Exponential Decay
Since $Q = CV$ and $C$ is constant, the exponential decay can be used for $V$ as well:
$$
V=V_{0}\exp\left( -\frac{t}{RC} \right)
$$
[[Notes/Physics/Topics/Electricity & Resistivity#Resistivity|Ohm's law]] states that $V=IR$, and snice $R$ is constant, we get:
$$
I=I_{0}\exp\left( -\frac{t}{RC} \right)
$$