In scientific research, **measurement error** is the difference between an observed value and the true value of something. It’s also called observation error or experimental error.

There are two main types of measurement errors:
## Random error
Random error happens as a limitation of the experimenter, human error. Random errors mainly affects **precision** in data, as it gives distributes the measurements around the true value in a random fashion. 

Random error can be reduced by taking **several measurements** and by calculating the **mean** of the measurements.
## Systematic error
Systematic errors on the other hand affects the **accuracy** of a measurement. Which is how close the **observed** value is compared to the true value.

Systematic errors can be caused by **zero errors**, incorrectly calibrated scales, changes in environmental conditions when it comes to thermometers.

Systematic errors can be reduced by checking for zero errors, or by using two ammeters in series.
## Precision vs Accuracy
These two often get mixed up, but they mean very different things. Think of it like shooting an arrow at a target.
* **Precision:** is when you aim at the bullseye and your arrows hit in and around the bullseye. How **precise** you are is **how big** of an area that you hit around the bullseye. The bigger the area, the **less precise** you are. 
  
  More formally, precision is the degree to which the measurement is **repeatable**. The precision of an instrument is the smallest non-zero reading that can be measured by the instrument.
* **Accuracy:** is when you aim at the bullseye, but the wind sways it to the right. You aim and shoot again to the bullseye, and the arrow hits *right next* to the previous arrow. Both of them are close to each other, but are also far away from the bullseye. This is where you are **precise** but isn't very **accurate**. 
  
  More formally, accuracy is how close the measurement is to the true value.

Given any measurement value, uncertainties of such measurement must be defined. 
## Uncertainties
In every measurement there will always be random error. Denoted as a **plus minus** symbol after a measurement's quantity. For example: $d = (20 \pm 0.5)\text{mm}$. The quantity $d$ measures $20\text{mm}$ with an error of $\pm0.5\text{mm}$ from the true value. This is called the **absolute error** of the measurement, where the error is an absolute quantity. The error may also be **relative**, where the error is a **percentage** of the measured quantity. Denoted as:
* $\Delta d$, the **absolute** uncertainty of $d$
* $\Delta d\%$ as the **relative** uncertainty of $d$
$$
\begin{align*}
\Delta d&= \Delta d\% \times d\\
\Delta d\%&= \frac{\Delta d}{d}\times100\%
\end{align*}
$$
### Adding uncertainties 
Say we have two measurements, $d$ and $m$.
* $d=(50\pm1)\text{m}$
* $m = (25\pm0.5)\text{m}$
Now, we sum the two. $dm$. Their uncertainties must also be summed together.
$$
d+m = (25\pm1.5)\text{m}
$$
### Multiplying uncertainties
For multiplying uncertainties, their **relative** uncertainties must be summed. Same example as before:
$$
\begin{align*}
\Delta d\% &= \frac{1}{50}\times100\%\\
\Delta m\% &= \frac{0.5}{25}\times100\%
\end{align*}
$$
Now, the uncertainty of their products is the sum of their relative uncertainties.
$$
\begin{align*}
r &= dm\\
\Delta r\% &= \Delta d\% + \Delta m\%
\end{align*}
$$
