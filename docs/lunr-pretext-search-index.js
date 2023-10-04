var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-disclaimer",
  "level": "1",
  "url": "preface-disclaimer.html",
  "type": "Preface",
  "number": "",
  "title": "Disclaimer",
  "body": " Disclaimer  These notes were originally written for MATH 056 at Swarthmore College and subsequently quite heavily modified for courses taught at the University of Central Oklahoma. This course was developed and taught as MATH 056 in Fall 2011, and subsequently as MATH 4910\/5910 in the Spring of 2013, 2015, and 2017, 2021, and Fall 2023 . These notes were inspired by a course that I took as a first year graduate student at the University of Utah which was taught by Fred Adler.  Additional references used in the development of these notes (unfortunately at this point in time uncited within the text) are listed on the last \"page\".   "
},
{
  "id": "preface-motto",
  "level": "1",
  "url": "preface-motto.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  Life is a word problem.  "
},
{
  "id": "preface-themes",
  "level": "1",
  "url": "preface-themes.html",
  "type": "Preface",
  "number": "",
  "title": "Themes",
  "body": " Themes  The main theme of the course is to introduce the 'art' of mathematical modeling by using motivating examples from biology. We will touch on mathematical disciplines including applications of calculus, differential equation, linear algebra, probability, and more.  "
},
{
  "id": "what-is-modeling",
  "level": "1",
  "url": "what-is-modeling.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is modeling",
  "body": " What is modeling     What is mathematical biology?   What is mathematics?  The study of number, quantity, space.   What is biology?  The study of life.    What is mathematical biology?  Using mathematical tools to study life.    Understanding the details of interactions between interacting populations of chemicals, cells, or individuals    Understanding or hypothesizing the mechanisms by which any biological quantities (numbers, densities, concentrations) change over time (or space)      Biological science vs. Physical science  Physics has laws , biology has no such laws .      What are our goals for mathematical biology    Draw qualitative conclusions about biological processes.    Apply simplified mechanisms to complex systems.    Guide thought experiments and physical experiments.    Occasionally make precise, quantitative predictions.      What is a mathematical model?   Features and definitions  A mathematical model is an abstract mathematical description of any (biological) system, using logic, notation, and techniques of mathematics.    A familiar example  Picture a tall, cylindrical water tower with radius in which the height of the water is . We want to know how fast the water level is dropping as we draw water from the bottom of the tank at a fixed flow. Our situation relies on the following relationship between volume of water and height of water. But what is the actual relationship between the two, and how do we replace with ? First, and differentiating,   Pause to think about this. We want to know how the height is changing as a function of time. We are thinking of a cylinder with a fixed radius, . We will assume that we are in control of the outflow from the tank, .  We can write a model for the height,   Let’s assume we fix the outflow at , by adjusting the outflow knob. The first consequence is that the volume of water in the tank is decreasing, so that should be negative.  We’ll now use our model to study the dynamics of water depth in two theoretical water tanks: one tall and thin and the other short and thick.  When , So that the water height drops about 1 foot in approximately 3 seconds.  When , So that the water height drops about 1 foot in approximately 5 minutes!  This model allows us to discuss two important and often confused concepts in modeling: the distinction between parameters and (state) variables. The state variable is the thing that we are making an effort to model. Here it is the height, of the water in the tower. Everything else - the outflow volume and the radius is known, or under our control. We call these things parameters. Changing parameters affects the evolution of state variables.     Why do we write models and what can we model?   Counting  Models allow us to count things that might be too expensive, too time consuming, or otherwise impossible to count: animals, cells, proteins, viruses, molecules.    What do we count?    Populations of individual plants or animals that interact (Ecology)    Populations of cells within individuals that interact (Physiology, e.g., Immunology)    Populations of molecules and chemicals within cells that interact (Physiology, e.g., Neurobiology)       What does a model look like?  A model is a description of how things change (like the height of water in a water tower). Biologically similar things might change in very different ways and be governed by very different processes.   Thinking about time  We should think about how the organisms, or components of our model, interact with one another. Dynamics of some plants and animals are characterized by discrete, non-overlapping generations.    Insects might reproduce over just a few days and be dormant over the remainder of the year.    Plants might set seeds over a short season.    Alternatively, we might have a set of measurements at a regular interval (e.g., 2-weeks) that we wish to explain. Many human diseases are often reported to organizations like CDC and WHO at weekly, bi-weekly, or monthly intervals (e.g, measles, cholera, HIV).  Other organisms like yeast, bacteria, mice, and so on, might be best described by continuous-time dynamics.    Thinking about interactions  Interactions might be characterized as linear or non-linear.    From chemistry, first-order reactions are linear - exponential growth or decay result from first order reactions (linear-models).    Reactions with multiple reactants (interactions between Na and Cl, foxes and bunnies, humans and zombies are give rise to nonlinear models - products or functions state variables.      Do we always arrive at the same answer?  Most of the models we study will be deterministic. This means our model (a set of rules, and initial conditions) will always give the same answer.  In contrast, some models can handle (random) variability between individuals or at different points in time. These are stochastic models, and while often more complicated, they allow us to ask and answer very different questions. As an example we’ll look at birth-death process models a bit later.    "
},
{
  "id": "sec-simple-1d-ode",
  "level": "1",
  "url": "sec-simple-1d-ode.html",
  "type": "Section",
  "number": "1.2",
  "title": "Single differential equation models",
  "body": " Single differential equation models  We begin with a few traditional (and a few not so traditional) population models in the form of single differential equations. This provides an opportunity to introduce some modeling ideas and to practice some techniques from calculus and differential equations.  We will often use three related graphs: the phase line diagram (a plot of the derivative against the function value), the solutions (a plot of the value against time), and a bifurcation diagram (a plot of the equilibrium against a parameter of interest).    Logistic growth  The logistic growth equation is often used as a model to describe how the population (density) of some organism changes over time. The model contains two parameters and that describe properties of the organism under consideration. The parameter describes the intrinsic growth rate of the organism, while describes the carrying capacity . The intrinsic growth rate, , is the difference between natural birth and death rates, for birth rate and death rate . The carrying capacity, , reflects the expected population size in a given environment.    Analysis of the logistic growth model While this model can be integrated using common calculus techniques, that formula, while impressive, isn't actually all that interesting. In part because as models become more complicated, we are often unable to find exact solutions. Instead we will apply a mix of qualitative (i.e., descriptive) methods along side a few more detailed analytical methods.  We refer to the right-hand side of the differential equation is the rate function and use intuition from calculus to learn about solutions to the model. As a function of , the rate function is , whose graph is a concave down parabola with zeroes at and . This is our first breakthrough.  Where the right-hand size is exactly zero, the derivative is also zero. This means a population that starts at either number will never change. We call locations like these equilirbium points or equilibria of the model. These are helpful reference points when describing solutions to the model. Elsewhere, we look at the graph of the rate function to determine if it, hence the derivative, is positive or negative. Where the rate function is positive, the derivative is postitive, and our solution increases. Where the derivative is small, the solutions increase slowly and where the derivatgive is large, the solutions increase quickly. Where the derivative is negative, the solution decreases. If the derivative is negative and small in magnitude, the decrease is slow. If the derivative is negative and large in magnitude, the decrease is fast.  We can turn this into a qualitative, graphical method of studying solutions to this and many other models. We call the tool a phase line diagram , and give a finished example in the . In this example, the direction of arrow points to the right if the value of the rate function (i.e., derivative) is positive at that value of the model variable. We like to roughly scale the size of the arrow by the height of the function to indicate of the increase in value is fast or slow. In contrast, where the rate function is negative, we draw arrows to the left. This indicates that the solution decreases.   Phase line diagram for logistic growth with parameters and .    Since negative populations are not biologically interesting, we tend to ignore that direction. But you may notice in that there is an \"empty\" circle at the value of and a \"filled\" circle at the value of . We use this to indicate that is unstable , in the sense that it repels solutions away from it (in this particular case, at least in the positive direction which is all we are interested in). Additionally, we cay that is stable , in the sense that it draws in all \"nearby\" solutions. In addition to the graphical analysis, we can also study this computationally.   What's left is to consider what solutions against time might look like, as in, a graph whose vertical axis is and whose horizontal axis is . According to , if we started at a small initial population just above zero, the population would slowly increase at first, but then start to increase faster and faster as the population size moved towards the peak of the rate function. In this phase, the graph would be concave up and resemble an exponential. Once the population size got bigger than the value where the rate function peaks, the increase would slow, resulting in a change in concavity of the solution. The graph would take on a \"sigmoidal\" or \"S-shape\". A population starting just below would slowly increase towards that same horizontal asymptote at . Solutions starting far above would quickly decrease at first, but would slow down and approach the asymptote from above (again looking almost exponential).   Solutions for logistic growth with parameters and . Solutions from three initial conditions ( in black, in gray, and in gray) are shown and equilibrium solutions at (red, unstable) and (blue, stable)    Solutions starting from initial conditions below will always have the sigmoidal shape of the black curve in . Solutions starting between and will look similar to the gray curve that approaches the horizontal asymptote at from below, and solutions starting above will always look like the curve approaching the asymptote at from above.  Aside from talking in more detail about parameter values in specific applications, there isn't much more to say here. Along those lines, however, changing raises or lowers the horizontal asymptote that guides our solutions and changing increases or decreases the speed at which solutions approach (or leave) equilibria. Next we will consider modifications to this model that address how we might harvest from a population.  Stability analysis motivated by the logistic growth model  For the remainder of this section, we will study the logistic growth equation and variations. The logistic growth equation is given by, Let be an equilibrium point, so that we can write We will derive a stability condition for an arbitrary equilibrium point, starting by identifying the dynamics of , Now, substituting the formula for and expanding, In the last step we can see that the terms that remain are equivalent to the derivative of , with respect to evaluated at . Here we linearize by substituting our formula for the solution and dropping al higher order terms in . You could do this, more formally or generally, by Taylor series.  Solutions to decay to zero if and grow if . Hence, an equilibrium point (trivial or not) is stable if and unstable if .  Evaluating derivatives should work in general, but it is not our only tool. Today we will use graphical methods to develop a qualitative understanding of the dynamics of a harvested population. If we think about what our model means, we can make progress without tackling sometimes frustrating, other times uninspiring, algebra.     Logistic growth with constant harvesting  With a slight modification to the logistic growth equation we can study the impact of a single, relatively simple term on the analysis and the outcome. We use with harvesting rate . We will imagine the parameters and as being out of our control, but as being something we might hope to control.  A common approach is to draw and analyze phase lines, compute equilibria, sketch sample solutions, assess stability analytically, verify that everything makes sense, and summarize what we learned with a bifirucation diagram. It sometimes helps with one step to do another in parallel, for example, the equilibria are relevant to the phase plane.    Phase line analysis of the constant harvesting model  The right-hand side of the differential equation is a quadratic function of . This is similar to the phase line for the regular logistic growth model, but as grows, the parabola is shifted down.   Phase line diagrams for logistic growth with constant harvesting at different rates. Other parameters are and .                  , notice that equilibria have collided and are no longer distinct.      The solutions below are computer-generated, but resemble nicer versions of sketches we could make ourselves from the information in the phase lines in . Notice how the equilibrium that had been fixed at now shifts upward as grows, this suggests small initial populations, that once grew in the absense of harvesting, are now driven to extinction. Once the equation reaches , that solution really stops making biological sense. In fact, it sometimes gets worse as those solutions are essentially growing exponentially (but negative) and can cause computational problems of minor importance but major annoyance.   Sample solutions for logistic growth with constant harvesting at different rates and from different initial conditions. Other parameters are and .                  , notice that equilibria have collided and are no longer distinct.      An important observation from the graphs in is that the smaller equilibrium establishes a minimum population size, below which all populations will be driven to extinction by harvesting. Sadly, but somewhat unsurprisingly, this minimum increases with .    Equilibrium analysis of the constant harvesting model  We can, and sometimes must, confirm graphical results by complementing them with analysis. The right-hand side of the differential equation is a quadratic function of . We cannot factor, and instead can only rely on the quadratic formula - it could be worse, but it's not great. To get anywhere in the next step, it's helpful to expand the quadratic to . From there we apply the quadratic formula,   For real-valued solutions we need or , in words, must be small. When , the equilibria are and (consistent with the basic logistic growth model). When , the equilibria collide at . In between, equilibria are described by the upper and lower halves of a sideways parabola that shares these three points in common.    Bifurcation diagram for the logistic growth model with constant harvesting. Stable equilibria are shown in solid blue and unstable equilibria are shown in dotted red.      Logistic growth with proportional harvesting   Admittedly, that last section was kind of a nightmare, and the change we are about to make might convince you things are only going to get worse. Stick with me. It gets better.  You may have noticed some potential drawbacks of constant harvesting. Chiefly, driving small populations to extinction is probably not a good thing. Instead of a constant harvesting rate, we will now take the term to be porportional to population density, that is . Again, that is a more complicated term than before, but the analysis will go much more smoothly.   Phase line analysis of the proportional harvesting model  The right-hand side of the differential equation is a quadratic function of . This is similar to the phase line for the regular logistic growth model, but as grows, the parabola is again altered. Despite the model looking more complicated than in the previous section, the analysis proceeds more smoothly.   Phase line diagrams for logistic growth with proportional harvesting at different rates. Other parameters are and .                  , notice that the equilibria have collided and are no longer distinct.      The solutions below are computer-generated, but resemble nicer versions of sketches we could make ourselves from the information in the phase lines in . In contrast to the solutions in , here the trivial equilibrium at remains fixed and the nontrivial equilibrium decreases linearly as the proportional harvesting rate increases. For exceeding , the nontrivial equilibrium is negative and is both unstable and biologically meaningless. In this situation, all poplations will go to extinction at the trivial equilibrium , which becomes stable.   Solutions for logistic growth with proportional harvesting at different rates. Other parameters are and .                  , notice that the equilibria have collided and are no longer distinct.        Equilibrium analysis of the proportional harvesting model  We can, and sometimes must, confirm graphical results by complementing them with analysis. The right-hand side of the differential equation is a quadratic function of . This is similar to the equation for the regular logistic growth model, but as grows, the parabola is again altered. Despite the model looking more complicated than in the previous section, the analysis proceeds more smoothly.  Our equilibrium condition highlights the special value of which we call , so we have , or First, we can factor the right-hand side as . From there we get the trivial equilibrium and the nontrivial equilibrium which solves This should make some sense intuitively - if we set , our model reduces to the logistic growth model without harvesting. Notice that with ,  First, we can factor the right-hand side as .    Stability analysis of the proportional harvesting model  The stability of an equilibrium is determined by the sign of the derivative of right-hand side of the differential equation when evaluated at the equilibrium. Here the right-hand side is a quadratic function of , so the derivative, with respect to is . At , . At , .  When , and the nontrivial equilibrium is stable, while and the trivial population is stable. The population equilibrates to some positive number when harvesting is week. In the extreme, when , there is no harvesting and the model is equivalent to the logistic model in terms of equilibria and stability. Otherwise, for , signs and stability are reversed and all positive initial conditions lead to extinction.   Bifurcation diagram for the logistic growth model with proporational harvesting. Stable equilibria are shown in solid blue and unstable equilibria are shown in dotted red.       "
},
{
  "id": "fig-logistic-phase",
  "level": "2",
  "url": "sec-simple-1d-ode.html#fig-logistic-phase",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Phase line diagram for logistic growth with parameters and .   "
},
{
  "id": "fig-logistic-sol",
  "level": "2",
  "url": "sec-simple-1d-ode.html#fig-logistic-sol",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Solutions for logistic growth with parameters and . Solutions from three initial conditions ( in black, in gray, and in gray) are shown and equilibrium solutions at (red, unstable) and (blue, stable)   "
},
{
  "id": "fig-logistic-const-phase",
  "level": "2",
  "url": "sec-simple-1d-ode.html#fig-logistic-const-phase",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Phase line diagrams for logistic growth with constant harvesting at different rates. Other parameters are and .                  , notice that equilibria have collided and are no longer distinct.     "
},
{
  "id": "fig-logistic-const-sol",
  "level": "2",
  "url": "sec-simple-1d-ode.html#fig-logistic-const-sol",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Sample solutions for logistic growth with constant harvesting at different rates and from different initial conditions. Other parameters are and .                  , notice that equilibria have collided and are no longer distinct.     "
},
{
  "id": "figure-13",
  "level": "2",
  "url": "sec-simple-1d-ode.html#figure-13",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " Bifurcation diagram for the logistic growth model with constant harvesting. Stable equilibria are shown in solid blue and unstable equilibria are shown in dotted red.   "
},
{
  "id": "fig-logistic-prop-phase",
  "level": "2",
  "url": "sec-simple-1d-ode.html#fig-logistic-prop-phase",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " Phase line diagrams for logistic growth with proportional harvesting at different rates. Other parameters are and .                  , notice that the equilibria have collided and are no longer distinct.     "
},
{
  "id": "fig-logistic-prop-sol",
  "level": "2",
  "url": "sec-simple-1d-ode.html#fig-logistic-prop-sol",
  "type": "Figure",
  "number": "1.2.7",
  "title": "",
  "body": " Solutions for logistic growth with proportional harvesting at different rates. Other parameters are and .                  , notice that the equilibria have collided and are no longer distinct.     "
},
{
  "id": "figure-24",
  "level": "2",
  "url": "sec-simple-1d-ode.html#figure-24",
  "type": "Figure",
  "number": "1.2.8",
  "title": "",
  "body": " Bifurcation diagram for the logistic growth model with proporational harvesting. Stable equilibria are shown in solid blue and unstable equilibria are shown in dotted red.   "
},
{
  "id": "systems-intro",
  "level": "1",
  "url": "systems-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Introduction to 2D systems",
  "body": " Introduction to 2D systems   To achieve our goals, a little bit from the theory of differential equations is helpful. Ultimately we will linearize a nonlinear system near equilibrium using the Jacobian matrix.   Consider the generic 2D linear system For the choice and (sorry about using the letter , but it becomes standard in the next step), we can establish some important information about solutions. Much of this is linked to properties of . Two important properties of this matrix are the trace  and the determinant    We begin by assuming that solutions to the system are exponential, for example, for some vector of unknown constants Now we differentiate and substitute, Equating these, Moving all terms to one side, Or, where is the identity matrix.  The exponential can never be zero, so we are looking for solutions to , which are given by the eigenvector and eigenvalue of the matrix . Eigenvalues are given by solutions to or We solve for .  The equation can be written and solved for and then the eigenvector. Notice that the equation can be rewritten in terms of the matrix properties referenced above, The trace and determinant show up once again. By the quadratic formula Frome here a lot could happen, depending on the entries of the matrix and the resulting trace and determinant. Roots, , could be  Real and distinct, opposite sign  Real and distinct, same sign  Real and repeated  Complex  Purely imaginary,  roughly in the order you might expect them based on past experience with the quadratic formula. What follows is the most economical summary I can provide of one of my favorite chapters in ordinary differential equations.   Real and distinct eigenvalues of opposite sign   As we will see in this section, this situation corresponds to phase plane dynamics corresponding to a saddle at the equilibrium.  Real and distinct roots is probably the simplest case to introduce. Let's call those solutions and , eventually we will need numbers, but first it's worth pointing out how we find the corresponding eigenvectors. We find those by solving The subscripts indicate that in the case of real and distinct roots we will have one pair of eigenvalue and eigenvector for each solution from the quadratic formula.    Find nullclines, equilibria, and sketch sample solutions for the linear system given by     Real and distinct eigenvalues of opposite sign  Consider the matrix . The trace is and the determinant is . Find both eigenvalues and corresponding eigenvectors.   Eigenvalues are solutions to or Substituting the eigenvalues one at a time, we can solve for entries in each eigenvector.  First, for we have which corresponds to the system of equations The setup is very similar for the second eigenvalue, and solving these both we have with and and with and .  In the phase plane, the eigenvectors represent what are called straight-line solutions.    The conclusion to means that for the linear system of differential equations ... we can write solutions for any initial condition in terms of unknowns and as    Some solutions will start on the first eigenvalue (this means an initial condition whose values are some constant multiple of those of the first eigenvector.) The contribution of the second eigenvector will be zero, and solutions will grow exponentially away from the origin along the first eigenvector. Others will start on the second eigenvalue (this means an initial condition whose values are some constant multiple of those of the second eigenvector.) The contribution of the first eigenvector will be zero, and solutions will decay exponentially towards the the origin along the second eigenvector. For all other initial conditions we have a contribution from both, but with the contribution of the first eigenvector growing and the contribution of the second decaying exponentially over time. We call this dynamic in the phase plane a saddle .  For example, with the initial condition and , we have and . The solution grows exponentially in proportion to the vector.   Use the trace and determinant of each matrix to find eigenvalues and eigenvectors.         Real and distinct eigenvalues of the same sign  As we will see in this section, this situation corresponds to phase plane dynamics corresponding to a node at the equilibrium. Solutions will grow away from equilibrium if both roots are of positie sign and grow towards the equilibrium if both roots are of negative sign. This is due to the exponential nature of the solutions.    Find nullclines, equilibria, and sketch sample solutions for the linear system given by     Real and distinct eigenvalues of same sign  Consider the matrix . The trace is and the determinant is . Find both eigenvalues and corresponding eigenvectors.   Eigenvalues are solutions to or which gives solutions and . Substituting the eigenvalues one at a time, we can solve for entries in each eigenvector.  First, for we have which corresponds to the system of equations The setup is very similar for the second eigenvalue, and solving these both we have with and and with and .    The conclusion to means that with the initial condition and , we have and . The solution grows exponentially from the equilibrium at the origin along the vector. With the initial condition and , we have and . The solution decays exponentially towards the equilibrium at the origin along the vector.   Try to construct a real-valued matrix with distinct eigenvalues of the same sign, either both positive or both negative. Then, using those as coefficients in a first-order linear system of differential equations, sketch the nullclines and phase plane.         Real and repeated eigenvalues   This happens to be a borderline case that takes a bit of work, but fortunately doesn't play a major role in most applications. From the solution to the quadratic, this happens when or, solving for , This is along the curve that separates real and complex solutions.     Complex eigenvalues   By the quadratic formula, any complex roots must be distinct, but some may be purely imaginary with no real part. Recall, we are trying to solve for . We are interested in cases where from the quadratic formula is negative and the square root imaginary.   Since our main goal is to assess local stability of eqiulibria in nonlinear models by linearizing, we won't go so far here as writing explicit general solutions to the linear problems.    Find nullclines, equilibria, and sketch sample solutions for the linear system given by     Real and distinct eigenvalues of same sign  Consider the matrix . The trace is and the determinant is . Find both eigenvalues and corresponding eigenvectors.   Eigenvalues are solutions to or which gives solutions and . Substituting the eigenvalues one at a time, we can solve for entries in each eigenvector.  First, for we have which corresponds to the system of equations The setup is very similar for the second eigenvalue, and solving these both we have with and and with and .    The conclusion to might be surprising. If you're aware of the complex plane, you might think we can graph these. Unfortunately the complex plane has a real axis and an imaginary axis. Or phase plane has two real axes corresponding to model variables. So, as it is, we can't visualize complex eigenvalues in the same way as real ones.  This means that we no longer start with real-valued solutions. Recall that we guessed that , was a part of our solution, but now we have complex-valued exponentials since for real numbers and . Taking just this part, we have . By Euler's formula, we can write these as real-valued solutions that involve products of trigonometric and exponential functions. Solutions will be purely trigonometric (closed periodic orbits) if the real part of the eigenvalues is zero, and otherwise be damped or growing oscillations in the phase plane if the real part is negative or positive, respectively. The trigonometric part comes from writing using Euler's formula. Since our goal here is just to lern about the linearized system, it won't be especially helpful to pursue analytical solutions any longer at this point.   Try to construct a real-valued matrix with complex or purely-imaginary eigenvalues. Then, using those as coefficients in a first-order linear system of differential equations, sketch the nullclines and phase plane.        "
},
{
  "id": "ex-real-distinct-opposite-plane",
  "level": "2",
  "url": "systems-intro.html#ex-real-distinct-opposite-plane",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": " Find nullclines, equilibria, and sketch sample solutions for the linear system given by   "
},
{
  "id": "ex-real-distinct-opposite",
  "level": "2",
  "url": "systems-intro.html#ex-real-distinct-opposite",
  "type": "Example",
  "number": "2.1.2",
  "title": "Real and distinct eigenvalues of opposite sign.",
  "body": " Real and distinct eigenvalues of opposite sign  Consider the matrix . The trace is and the determinant is . Find both eigenvalues and corresponding eigenvectors.   Eigenvalues are solutions to or Substituting the eigenvalues one at a time, we can solve for entries in each eigenvector.  First, for we have which corresponds to the system of equations The setup is very similar for the second eigenvalue, and solving these both we have with and and with and .  In the phase plane, the eigenvectors represent what are called straight-line solutions.   "
},
{
  "id": "ex-saddles",
  "level": "2",
  "url": "systems-intro.html#ex-saddles",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": " Use the trace and determinant of each matrix to find eigenvalues and eigenvectors.      "
},
{
  "id": "ex-real-distinct-same-plane",
  "level": "2",
  "url": "systems-intro.html#ex-real-distinct-same-plane",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " Find nullclines, equilibria, and sketch sample solutions for the linear system given by   "
},
{
  "id": "ex-real-distinct-same",
  "level": "2",
  "url": "systems-intro.html#ex-real-distinct-same",
  "type": "Example",
  "number": "2.1.5",
  "title": "Real and distinct eigenvalues of same sign.",
  "body": " Real and distinct eigenvalues of same sign  Consider the matrix . The trace is and the determinant is . Find both eigenvalues and corresponding eigenvectors.   Eigenvalues are solutions to or which gives solutions and . Substituting the eigenvalues one at a time, we can solve for entries in each eigenvector.  First, for we have which corresponds to the system of equations The setup is very similar for the second eigenvalue, and solving these both we have with and and with and .   "
},
{
  "id": "ex-nodes",
  "level": "2",
  "url": "systems-intro.html#ex-nodes",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": " Try to construct a real-valued matrix with distinct eigenvalues of the same sign, either both positive or both negative. Then, using those as coefficients in a first-order linear system of differential equations, sketch the nullclines and phase plane.      "
},
{
  "id": "ex-complex-imaginary-plane",
  "level": "2",
  "url": "systems-intro.html#ex-complex-imaginary-plane",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " Find nullclines, equilibria, and sketch sample solutions for the linear system given by   "
},
{
  "id": "ex-complex-imaginary",
  "level": "2",
  "url": "systems-intro.html#ex-complex-imaginary",
  "type": "Example",
  "number": "2.1.8",
  "title": "Real and distinct eigenvalues of same sign.",
  "body": " Real and distinct eigenvalues of same sign  Consider the matrix . The trace is and the determinant is . Find both eigenvalues and corresponding eigenvectors.   Eigenvalues are solutions to or which gives solutions and . Substituting the eigenvalues one at a time, we can solve for entries in each eigenvector.  First, for we have which corresponds to the system of equations The setup is very similar for the second eigenvalue, and solving these both we have with and and with and .   "
},
{
  "id": "ex-spirals-centers",
  "level": "2",
  "url": "systems-intro.html#ex-spirals-centers",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": " Try to construct a real-valued matrix with complex or purely-imaginary eigenvalues. Then, using those as coefficients in a first-order linear system of differential equations, sketch the nullclines and phase plane.      "
},
{
  "id": "sec-nonlinear-systems",
  "level": "1",
  "url": "sec-nonlinear-systems.html",
  "type": "Section",
  "number": "2.2",
  "title": "Nonlinear systems",
  "body": " Nonlinear systems   Below we highlight a few classical first-order, nonlinear systems of two differential equations and apply phase plane and Jacobian analysis to get a more complete picture of the dynamics that each model can produce.    SI epidemiological model   The SI (or SIS) model that allows for the transmission of a mild infection through a closed population is a nice way to introduce 2D models.   Consider a mild infection circulating among members of a population, where the healthy individuals are susceptible to the infection ( ) and the infectious individuals are capable of transmitting the infection to others ( ).   An model for transmission of a mild infection in a closed population.      Much like in class we will build a word model as we go. and replace the terms with symbols. Our first term is loss to recovery in the equation. We can think of as the leaving rate from the compartment, much like was the leaving rate from the living (i.e., dying) compartment of a population model. Everything, in this model, that leaves one compartment enters another (i.e., there are no leaks ). We can also argue for the infection rate as follows, since infection is only transmitted directly and by infectious hosts, we might expect that the rate that individuals gain infection is proportional to the density (individuals per hectare) of infectious individuals, . In fact here, we assume that the infection rate is a linearly increasing function of . There are plenty of other models of transmission, some we will study in the homework, others later in the semester, still more in our projects.      This model tracks the populations of individuals in two classes of a population of size . Since there are only two classes, . Differentiating gives in words, the total population size is constant. We can actually replace one of our differential equations with an algebraic constraint given by . This gives us a chance to write our 2D system in 1D, meaning that this model may not actually require any of our new tools. We have With a little rewriting, this becomes . Looking closely, aside from the letters being different, this is exactly the form of the logistic growth model with proportional harvesting from . We could completely analyze this with steps that parallel our work back there. The threshold quantity for stability relates the parameters , , and . Note that wasn't originally in our model, but was introduced in the steps to eliminate the equation for . There was no reason we would have known to do this, but it turned out that there was no reason we couldn't do it.     Predator-prey   Predator-prey dynamics between two species is a classic model.   Consider    Predator-Prey nullclines    Predator-Prey phase plane and equilibria    Predator-Prey Jacobian  For this model, the Jacobian is     Summary of Predator-Prey analysis     Competition   Ecological competition between two species for a shared resource is a classic model.   Consider    Competition nullclines    Competition phase plane and equilibria    Competition Jacobian  For this model, the Jacobian is     Summary of Competition analysis     SIS epidemiological model   The SI (or SIS) model that allows for the transmission of a mild infection through a closed population is a nice way to introduce 2D models.   Consider    SIS nullclines  Since the right-hand side of the -equation factors as , -nullclines are both and . Since the right-hand side of the -equation factors similarly, its nullclines are overlapping.    SIS phase plane and equilibria  Since equilibria are found anywhere opposite nullclines intersect, the entire -axis is a line of equilibrium points as is the vertical line at . This is actually a bit strange, and is the result of some surprising algebraic constraints hidden in the model.   SIS Jacobian  For this model, the Jacobian is     Summary of SIS analysis    "
},
{
  "id": "fig-epi",
  "level": "2",
  "url": "sec-nonlinear-systems.html#fig-epi",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " An model for transmission of a mild infection in a closed population.     "
},
{
  "id": "exercises-1",
  "level": "1",
  "url": "exercises-1.html",
  "type": "Exercises",
  "number": "2.3",
  "title": "Exercises",
  "body": " I would not actually attempt any of these.  What if the prey population in a predator-prey model grew according to logistic growth rather than exponential growth in the absence of its predator?  What if the prey population from the predator-prey model were subject to the Allee effect, that is, the \"single species\" part of its equation paralleled ? Try to find the nontrivial nullcline for each and contemplate how many distinct phase planes are possible.  What if both populations from the competition model were subject to the Allee effect, that is, the \"single species\" parts of the model paralleled ? Try to find the nontrivial nullcline for each and contemplate how many distinct phase planes are possible.  "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "exercises-1.html#exercise-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "What if the prey population in a predator-prey model grew according to logistic growth rather than exponential growth in the absence of its predator? "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "exercises-1.html#exercise-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "What if the prey population from the predator-prey model were subject to the Allee effect, that is, the \"single species\" part of its equation paralleled ? Try to find the nontrivial nullcline for each and contemplate how many distinct phase planes are possible. "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "exercises-1.html#exercise-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "What if both populations from the competition model were subject to the Allee effect, that is, the \"single species\" parts of the model paralleled ? Try to find the nontrivial nullcline for each and contemplate how many distinct phase planes are possible. "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})