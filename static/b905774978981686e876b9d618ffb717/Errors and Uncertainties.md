In scientific research, **measurement error** is the difference between an observed value and the true value of something. It’s also called observation error or experimental error.

There are two main types of measurement errors:
- **Random error** is a chance difference between the observed and true values of something (e.g., a researcher misreading a weighing scale records an incorrect measurement).
- **Systematic error** is a consistent or proportional difference between the observed and true values of something (e.g., a miscalibrated scale consistently registers weights as higher than they actually are).
In research, systematic errors are generally a bigger problem than random errors.

Because we live in an imperfect world, **random errors** are natural. There's always **variability**.
## Random error
Random errors mainly affects **precision** in data. Which means how close the data is between repeated measurements. 
## Systematic error
Systematic errors on the other hand affects the **accuracy** of a measurement. Which is how close the **observed** value is compared to the true value.

## #Precision vs #Accuracy
These two often get mixed up, but they mean very different things. Think of it like shooting an arrow at a target.
* **Precision:** is when you aim at the bullseye and your arrows hit in and around the bullseye. How **precise** you are is **how big** of an area that you hit around the bullseye. The bigger the area, the **less precise** you are. 
* **Accuracy:** is when you aim at the bullseye, but the wind sways it to the right. You aim and shoot again to the bullseye, and the arrow hits *right next* to the previous arrow. Both of them are close to each other, but are also far away from the bullseye. This is where you re **precise** but isn't very **accurate**. 
* **Zero-error**: is when you can hit the bullseye, and consistently hit it, then you are both **precise** and **accurate**.

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
### Exponents of uncertainties
