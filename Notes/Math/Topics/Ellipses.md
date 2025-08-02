An ellipse is a curve surrounding two *focal points* such that for all points on the curve, the sum of the two distances to the focal points, also known as the *foci* is constant. Ellipses are generalizations of a circle, which is an ellipse where the two focal points are at a single point.
## Ellipse's Axes
The **major** axis of an ellipse is the ellipse's longest diameter, which can be called as its width, while the **minor** axis is its shortest diameter, which can be called its height. Intuitively, the **semi-major** axis is half the distance of the major axis, going from the center of the ellipse through the major axis until the edge, while the **semi-minor** axis goes through the minor axis until its edge.
## Area
The area of an ellipse is the product of both of its semi axes multiplied by $\pi$.
## Equation form of an Ellipse
Given that the major axis of the ellipse is $2a$ and its minor axis is $2b$, the equation of an ellipse centered at the origin is:
$$
\frac{x^2}{a^2} +\frac{y^2}{b^2}=1
$$
With this, assuming $a \geq b$, its foci would be at $(\pm c, 0)$, where $c = \sqrt{a^2 - b^2}$. 

Using parametric equations, an ellipse can be formed with:
$$
(x,y)=(a\cos t, b \sin t) \space \text{ for } \space 0 \leq t \leq 2\pi
$$
## Eccentricity
Eccentricity is roughly a measure of how *squished* an ellipse is, also can be called as its elongation. First, we have its **linear eccentricity**, the distance between the center of the ellipse to a focus: 
$$
c = \sqrt{a^2-b^2}
$$
Its eccentricity is the ratio of its linear eccentricity to its semi-major axis:
$$
e=\frac{c}{a}=\sqrt{1-\frac{b^2}{a^2}}
$$