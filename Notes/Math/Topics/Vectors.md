A vector can be described as a way to store multidimensional quantities/data. Vectors are contrary to scalars, which can be described as one dimensional. Visually, vectors can be like arrows.

Scalars can be described as a point on a number line. For two dimensions, such as with the cartesian plane, a point is described as a position along the x-axis, and a point along the y-axis. Vectors then store this information, for example, in a two-dimensional vector:
$$
\vec{v}=
\begin{bmatrix}
x \\ y
\end{bmatrix}
$$

This can then be extended to any number of dimensions:
$$
\vec{v}=
\begin{bmatrix}
v_1 \\ v_2 \\ \vdots \\ v_{n-1} \\ v_n
\end{bmatrix}
$$
## Vector Properties
Vectors all have a **magnitude** which describes the vector's **length**. For two dimensions, the length of a vector is the length of the hypotenuse of the triangle with side lengths of the vector's elements. The [[Notes/Math/Topics/Pythagorean Theorem|Pythagorean Theorem]] applies to any number of dimensions.
## Sums of vectors
Adding two vectors together is equal to adding each of their respective element. Graphically, this is equivalent to the vector arrows being joined from head to tail, in any order.
![[Pasted image 20230720160605.png]]
### Subtracting
A similar concept:
![[Pasted image 20230720160752.png]]
## Scalar multiples of Vectors
Vectors are able to be multiplied by a scalar, which results in its magnitude being lengthened by a factor of said vector. The scalar multiplication is applied to every element within the vector.
## Unit Vectors
Unit vectors are vectors with a magnitude of $1$. Dividing a vector by its magnitude *normalizes* the vector's magnitude, to $1$. 
### Unit vector notation
A vector in 3 or fewer dimensions can be defined using the sum of scalar multiples of unit vectors following the axis directions.
$$
\begin{align*}
\vec{v} = 
v_x \hat{\textbf{i}} +
v_y \hat{\textbf{j}} +
v_z \hat{\textbf{k}}
\end{align*}
$$
## Dot product / scalar product
The dot product between two vectors is defined as the product of a vector's projection to the other.

Given a vector $\vec{a}$ with magnitude $a$. The magnitude of the $\vec{a}$'s projection to vector $\vec{b}$ will be equal $a$ multiplied by the cosine of the angle between the two vectors. 

Given this, the dot products between vector $\vec{a}$ and $\vec{b}$ is:
$$
\vec{a} \cdot \vec{b} = |a||b|\cos\theta
$$
