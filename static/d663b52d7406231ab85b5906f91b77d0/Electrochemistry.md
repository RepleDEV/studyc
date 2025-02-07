Electrochemistry is the study of electricity and how it relates to chemistry. The most prominent use of electrochemistry is the invention of batteries, where through electrolysis and [[Notes/Chemistry/Topics/Redox Reactions|Redox Reactions]], [[Notes/Physics/Topics/Electricity & Resistivity|Electricity]] is generated.
## Electrolysis
The main purpose of electrolysis is to use electricity to cause a chemical reaction. Specifically, a **redox** reaction. It uses an **electrolytic cell**, which uses **direct current** connected to two *electrodes* which are dipped into an *electrolyte*. 
### Electrolyte
The *electrolyte* is a compound that is decomposed during electrolysis. Definitions of an electrolyte vary immensely, of which they include, but are not limited to:
* a substance that conducts electricity through the movement of ions ([wikipedia](https://en.wikipedia.org/wiki/Electrolyte)).
* a compound that dissociates into ions in water

In the context of electrolysis, the electrolyte is the compound being *decomposed*.
### Electrodes
In an electrolytic cell, it uses electrodes to drive current into the electrolyte. It's connected to a power supply (direct current), one to the positive end and the other to the negative end. These ends are then called:
* **cathode**: the **negative** end 
* **anode**: the **positive** end

While connected to the power supply, the **anode** creates a *lack* of electrons, making the surface slightly *positively* charged, while the **cathode** creates an abundance of electrons, which makes the surface more *negatively* charged.
### The Process
During electrolysis, two different reactions occur at each electrode. 

At the **cathode**, **cations** (positive ions) are attracted to the negatively charged electrode. The ions then grab an electron from said electrode, making a **reduction** reaction.
$$
\ce{Z+(aq) + e- -> Z}
$$
Meanwhile, at the **anode**, **anions** (negative ions) are attracted to the positively charged electrode. The ions then lose their spare electron(s) to the electrode, making an **oxidation** reaction.
$$
\ce{Z -> Z+(aq) + e- }
$$

The amount of substance produced during electrolysis can be calculated using the charge formula, where it states that:
$$
Q = I \times t
$$
This way, we can find the amount of charge passed through the electrolyte. By using the **Faraday constant**, we can also determine the amount of electrons used during the reaction.

The Faraday constant is defined as the amount of charge present in one mole of electrons.
$$
F = 96500 \space \ce{C mol^{-1}}
$$
>[!info]
>The Faraday constant is determined by comparing the change in mass from one electrode after a set amount of time in electrolysis. 

From this, the Avogadro's constant can be determined by this relationship:
$$
F = L \times e
$$
Where $e$ is the charge of a single electron.
## Electrode potential
The electrode potential ($E^{\ominus}$) is the voltage of a galvanic cell built from a standard reference electrode (half-cell) and another electrode. 
### Half-cells
A half cell may consist of:
* an element in contact with its aqueous ions
* the same element in different oxidation states

For such elements that are solid metals, as they conduct electricity, rods of said element can be used as the electrodes. For gaseous elements, bubbles of said element are supplied through at **1 atmospheric** pressure, and **platinum** is used as an electrode.
### Standard reference electrode
The standard reference electrode is defined as the *standard hydrogen electrode* (SHE) where it is the half-cell of hydrogen gas at a pressure of 1 atm bubbles through a solution of $\ce{1 mol dm^{-3} H+(aq)}$ ions. This standard reference electrode is defined to have an electrode potential of 0 volts at standard conditions.

To measure the standard electrode potential ($E^{\ominus}$) of other substances, a half-cell of said substance is connected to the SHE by a voltmeter (pointed towards the measured half-cell), and the voltmeter is read.

At the electrodes, an equilibrium redox reaction happens.
$$
\ce{Z+ + e- <=> Z}
$$
Where this equilibrium is shifted is measured by the voltmeter. 

If the voltmeter reads a negative value, there is an abundance of electrons at the measured half-cell. This then makes the measured half-cell the **cathode** and the SHE the **anode**. This then means that at the cathode, **oxidation** happens.
$$
\ce{Z -> Z+ + e-}
$$
The substance releases the electrons, which then flows towards the **anode**.

Conversely, with the SHE, the hydrogen ion retrieves the electron and does a **reduction** reaction:
$$
\ce{H+(aq) + e- -> 1/2H2(g)}
$$
## Redox/electrochemical series
From measuring the electrode potential, we can determine if a substance will either be a good oxidizer or a good reducer. From the example earlier, with a negative voltmeter reading, it means that the substance is more readily available to donate its electron(s). Therefore, the substance would be a good **reducer**, or would be easy to **oxidize**. The more negative the voltage reading is, the **better** of a reducing agent it is. 

Conversely, with a positive voltage, the more positive the voltage is the better the substance is at **oxidizing**, or the easier it is to be **reduced**.
## Standard cell potential
The standard cell potential $E^{\ominus}_{\text{cell}}$ is the voltage developed (under standard conditions) when two half cells are joined to make a whole galvanic cell. For a whole galvanic cell, the electron flows from the half-cell that has the more negative electrode potential towards the half-cell that has a less negative electrode potential. This is due to the fact that a more negative electrode potential correlates to a higher readiness for the substance to donate its electron.
## Redox reaction feasibility
By measuring the standard cell potential between two substances, we can predict if the two substances can react with each other within a redox reaction. Given two substances $\ce{X}$ and $\ce{Y}$. The electrode potential of $\ce{X}$ is more negative than $\ce{Y}$. Therefore, $\ce{X}$ ions would reduce $\ce{Y}$, however, $\ce{Y}$ would not reduce $\ce{X}$ ions. 

The resulting reaction would be:
$$
\ce{X- + Y -> X +Y-}
$$
This is given that the electrode potentials of $\ce{X}$ and $\ce{Y}$ are in their oxidized forms.
$$
\begin{align*}
\ce{
X + e- &<=> X- \\
Y + e- &<=> Y-
}
\end{align*}
$$
However, if the electrode potentials of $\ce{X}$ and $\ce{Y}$ are in their reduced form, and the electrode potential of $\ce{X}$ is more positive than $\ce{Y}$, then $\ce{Y}$ would reduce $\ce{X}$ ions, but not the other way around.
$$
\ce{Y + X+ -> Y+ + X}
$$
Given the electrode potentials are:
$$
\begin{align*}
\ce{
X+ +e- &<=> X \\
Y+ + e- &<=> Y
}
\end{align*}
$$