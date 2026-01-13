The kinematics of circular motion describes the motion of systems with rotation, such as a wheel. The kinematics of circular motion can be used to describe the *linear speed* of a rotating wheel. All equations *circle* around $\omega$, representing the **rate of change** of the rotating wheel's angle.
$$
\omega = \frac{d\theta}{dt}
$$
## Angular Speed 
Assuming constant angular speed, it can be simplified to:
$$
\omega=\frac{\Delta \theta}{\Delta t}
$$

Given that an object moving in circular motion completes a single revolution within a time period $T$, assuming constant angular speed, it can be defined as:
$$
\omega=\frac{2\pi}{T}
$$
Since $\Delta \theta = 2\pi$ is the angle required to make a full revolution.


Given the equation for [[Circular Measure#Arc|arc length]], we can see that the distance traveled of $s$ as a function of $\theta$ ($s(\theta)$) is given as:
$$
s(\theta) = r\theta
$$
To find velocity we can conclude that:
$$
\frac{ds}{dt} = v=\frac{ds}{d\theta} \cdot \frac{d\theta}{dt} = r\omega
$$
## Centripetal Acceleration
For any object to follow a circular motion, it must have **centripetal acceleration**. Given a position vector $\vec{s}$ denoting the position of an object following a constant circular motion and its velocity $\vec{v}$ denoting its velocity, which is perpendicular to $\vec{s}$. After a small change in time $\Delta t$, the position of $\vec{s}$ must change by an angle $\Delta\theta$ relative to the origin of the motion. The angle between the change in $\vec{v}$ must also be $\Delta\theta$. 

![centripetal acceleration vectors](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Velocity-acceleration.svg/800px-Velocity-acceleration.svg.png)
*By Original: Brews ohare Vector: AntiCompositeNumber - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=83732123*

Since the position vector is of constant length relative to the origin, the magnitude of the velocity is also constant, and the angle between the initial vectors and the vectors after time $\Delta t$ are equal, therefore they must form congruent triangles.
$$
\frac{|\Delta\vec{v}|}{v}=\frac{|\Delta\vec{r}|}{r}
$$
We can then substitute $|\Delta\vec{v}|$ to the formula of acceleration:
$$
a = \lim_{\Delta t \rightarrow 0}\frac{|\Delta\vec{v}|}{\Delta t}
=\frac{v}{r}\lim_{\Delta t \rightarrow 0}\frac{|\Delta\vec{r}|}{\Delta t}
=\frac{v^2}{r}=\omega^2r
$$

For acceleration, it is important to understand that for *linear* circular motion, the acceleration only changes the **direction** of the velocity. For an object that moves in circular motion, it can be visualized that the *linear velocity* at a certain point in the circle is a [[Notes/Math/Topics/Vectors|vector]] that spins around tangentially. 
## Centripetal Force
By newton's definition of force, $F=ma$, we can substitute the centripetal acceleration to $F$:
$$
F=ma=m\frac{v^2}{r}=\omega^2r
$$
