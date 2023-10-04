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
  "id": "two-dimensional-systems",
  "level": "1",
  "url": "two-dimensional-systems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Two-dimensional systems of differential equations as ecological models",
  "body": " Two-dimensional systems of differential equations as ecological models  As we transition towards new topics, it is worth mentioning our goals.   Read and interpret models A term by term understanding of the assumptions of a model.    Analyze, solve, or simulate (compute) solutions. Equilibria and stability, or transient dynamics.    Write models.    Evaluate results and draw biological or mathematical conclusions. Dynamics (of NB) were unstable, might be missing biological ingredients.      A disease model  Consider a mild infection circulating among members of a population, where the healthy individuals are susceptible to the infection ( ) and the infectious individuals are capable of transmitting the infection to others ( ).   An model for transmission of a mild infection in a closed population.      Much like in class we will build a word model as we go. and replace the terms with symbols. Our first term is loss to recovery in the equation. We can think of as the leaving rate from the compartment, much like was the leaving rate from the living (i.e., dying) compartment of a population model. Everything, in this model, that leaves one compartment enters another (i.e., there are no leaks ). We can also argue for the infection rate as follows, since infection is only transmitted directly and by infectious hosts, we might expect that the rate that individuals gain infection is proportional to the density (individuals per hectare) of infectious individuals, . In fact here, we assume that the infection rate is a linearly increasing function of . There are plenty of other models of transmission, some we will study in the homework, others later in the semester, still more in our projects.     Since the total number* of individuals is preserved, we can replace the equation for by an algebraic constraint . We can substitute this into the equation for and derive a 1-dimensional, nonlinear model, If we define our model we can plot the more interesting version of our phase line as in . Ignoring graphs for the moment, we can also compute equilibria of continuous time models, defined as solutions to . This gives and It might prove useful to notice that our nontrivial solution exists when this suggests a limitation on the recovery rate that depends on the contact parameter and the total population size .    Analysis    Equilibrium    Phase line and stability    Solutions and observations    Bifurcation diagram   "
},
{
  "id": "fig-epi",
  "level": "2",
  "url": "two-dimensional-systems.html#fig-epi",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " An model for transmission of a mild infection in a closed population.     "
},
{
  "id": "p-83",
  "level": "2",
  "url": "two-dimensional-systems.html#p-83",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "defined as "
},
{
  "id": "harvesting-and-predator-prey",
  "level": "1",
  "url": "harvesting-and-predator-prey.html",
  "type": "Section",
  "number": "2.2",
  "title": "Harvesting and predator-prey",
  "body": " Harvesting and predator-prey   Key concepts in continuous-time models  Consider the model that describes the dynamics of a logistically-growing population subjected to harvesting. Equilibria of this model are and . The removal rate due to harvesting is per . One short derivation of this functional form is given here, we will see another derivation in a few lectures.    Derivation of a functional response  A harvester spends its time, of which it has , searching ( ) or handling ( ), thus, The handling time depends on the number of prey captured ( ) and the handling time per prey ( ), so that, In turn, the number captured depends on the searching or finding rate ( ), the number of prey available ( ), and the time spend searching by predators or harvesters ( ), Solving for the search time, so that Solving for ,   The per predator feeding rate is, since the definition of was per predator . Redefining constants and , we can finally write the per predator harvesting rate as so that the harvesting term is If predators instantaneously consume their prey, which returns the Type I response, because saturation vanishes.   "
},
{
  "id": "two-dim-ecology",
  "level": "1",
  "url": "two-dim-ecology.html",
  "type": "Section",
  "number": "2.3",
  "title": "Two dimensional models in ecology",
  "body": " Two dimensional models in ecology  Consider now, a two dimensional extension where is no longer a parameter, but instead a dynamic variable. Whose growth is proportional to the consumption of prey, up to a scaling factor . Such a model is, We can give ourselves a slightly simpler situation if we assume that the predator is a Type I predator, A common approach to studying such a model is to first nondimensionalize the variables by scaling by some relevant value. Here we have a carrying capacity for , so if we scale by we can define and study the dynamics of which describes the proportion of carrying capacity that is filled. The goal of this is to combine parameters and reduce the dimension of parameter space. We also rescale time by setting and replacing the derivative by . The definition involving is less clear from the start, but as we step through the process we find that using works pretty well. Ultimately, after some failed attempts, we find something like,   Just as we used phase lines in one dimension, we will use phase planes in two dimensions. To introduce this process we will use an even simpler model describing the densities of prey ( ) and predator ( ),   First, we hope to compute equilibria. We can start by solving when each of the equations is equal to zero (i.e., when individual quantities are unchanging). Setting This equation implies that is unchanging along the lines and in the -plane. Additionally, setting This equation implies that is unchanging along the lines and in the -plane. Equilibria require both equations be satisfied simultaneously, thus opposite nullclines must intersect so that both of and are unchanging. We will jump ahead and plot everything in  , this includes trajectories in the phase plane and direction arrows.     On lines , motion is in the vertical direction. On lines , motion is in the horizontal direction.   Direction arrows in  , are obtained by treating the individual differential equations as inequalities. The motivation is that we know that when Since is of interest, the to ensure the derivative is positive, we need Thus, is increasing below the (nonzero) -nullcline. Similarly, is decreasing above this nullcline. Lastly, we can show that is decreasing to the left of the (again, nonzero) vertical -nullcline, and decreasing to the right. This shows that motion is counterclockwise. Numerical solutions show that we have closed orbits around the equilibrium point . We call this point neutrally stable .  If we hadn’t computed solutions, we wouldn’t necessarily know from the phase portrait that these solutions do not spiral in towards or out from the equilibrium. To know for certain, we would need to study the linearized dynamics near each equilibrium point, including the point , as well. Since we have solutions, we might as well plot them in time (see ).    Numbers (or ) of prey ( ) and predators ( ).   "
},
{
  "id": "fig-pred-prey-pp",
  "level": "2",
  "url": "two-dim-ecology.html#fig-pred-prey-pp",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "  On lines , motion is in the vertical direction. On lines , motion is in the horizontal direction.  "
},
{
  "id": "fig-pred-prey",
  "level": "2",
  "url": "two-dim-ecology.html#fig-pred-prey",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": "  Numbers (or ) of prey ( ) and predators ( ).  "
},
{
  "id": "ecological-competition",
  "level": "1",
  "url": "ecological-competition.html",
  "type": "Section",
  "number": "2.4",
  "title": "Ecological competition",
  "body": " Ecological competition   Method  To review, we apply the following method to study 2D nonlinear dynamical systems.     Write a model.    Read and interpret the model (dimensional analysis of parameters.    Compute nullclines and equilibria.    Plot phase portraits with direction arrows and trajectories.    Refine knowledge of stability with linearization via Jacobian.     Consider two species and for ants and beetles, respectively. Assume that each grows (in the absence of the other) according to logistic growth, Here, each species grows independently of the other. Beetles have no effect on ants; ants have no effect on beetles. Our mechanism for interaction will be interference competition, which leads in increased mortality.   To understand interspecific competition, we need to understand the units and magnitude of and . Roughly, translates from units of beetle density to an effective ant density. According to the ratio , beetles fill some of the carrying capacity allotted to ants. Just how much of the capacity that they fill is given by the parameter , which when multiplied by gives the ant equivalency of beetles. We will look more closely at the equation for , but note that we could make similar observations about the equation for .  The dynamics of are given by, which slightly more directly illustrates that both and fill the carrying capacity allotted to . In one dimension, equilibria depend on the zeros of the right hand side of an equation like this. In two dimensions, equilibria depend on the values of both quantities and . The first step, as before, is to compute the nullclines for . Setting implies that either or With a single species, this equation looks like We can solve this equation for the density of animals at equilibrium to find, But we know that we have a particular composition of animals, such that Combining these equations, gives as a function of , the abundance of and that guarantee that is unchanging,   Finally, we have that , if either or . By their definition, on -nullclines, the motion in the direction is zero, and dynamics are strictly increasing (or decreasing) in .  Similarly, we can compute that , if either or . By their definition, on -nullclines, the motion in the direction is zero, and dynamics are strictly increasing (or decreasing) in . We have to consider a variety of parameter combinations and relative magnitudes. This lets us plot four distinct phase portraits, shown in   -      When and , only exists at equilibrium. This is equivalent to and , which suggests that has a weak effect on , but has a strong effect on .     When and , only exists at equilibrium. This is equivalent to and , which suggests that has a strong effect on , but has a weak effect on .     When and , nullclines intersect, and the coexistence equilibrium is stable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on .     When and , but the coexistence equilibrium is unstable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on . The winner depends on the initial conditions.    "
},
{
  "id": "fig-compet-A-only",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-A-only",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": "  When and , only exists at equilibrium. This is equivalent to and , which suggests that has a weak effect on , but has a strong effect on .  "
},
{
  "id": "fig-compet-B-only",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-B-only",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": "  When and , only exists at equilibrium. This is equivalent to and , which suggests that has a strong effect on , but has a weak effect on .  "
},
{
  "id": "fig-compet-AB",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-AB",
  "type": "Figure",
  "number": "2.4.3",
  "title": "",
  "body": "  When and , nullclines intersect, and the coexistence equilibrium is stable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on .  "
},
{
  "id": "fig-compet-saddle",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-saddle",
  "type": "Figure",
  "number": "2.4.4",
  "title": "",
  "body": "  When and , but the coexistence equilibrium is unstable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on . The winner depends on the initial conditions.  "
},
{
  "id": "the-trace-determinant-method",
  "level": "1",
  "url": "the-trace-determinant-method.html",
  "type": "Section",
  "number": "2.5",
  "title": "The ‘Trace-Determinant Method’",
  "body": " The Trace-Determinant Method   Diagnostics for eigenvalues and stability  In many cases, the calculation of eigenvalues from the Jacobian matrix at equilibria is unnecessary. Instead, we prefer a simpler approach that we refer to as the trace-determinant method. Combined with a cautious sketch of the phase plane, the inspection of and    In some situations, the phase plan suggests that trajectories might oscillate about a fixed point. Yet, without the aid of computers we are often unable to distinguish between equilibria that attract, repel, or do neither. We call these attracting (repelling) equilibria stable (unstable) foci, the plural of focus, or neutrally stable centers, in the third case. Since we expect solutions to oscillate given the phase plane, all that remains is to determine whether or not the real part of the eigenvalue is positive, negative, or zero. This is obvious from the sign of . The eigenvalues corresponding to the characteristic polynomial are given by We can see that implies , which means perturbations from equilibria decay and a particular equilibrium is a stable focus. We can repeat the argument for , which suggests an unstable focus, characterized by growing oscillations. Eigenvalues are purely imaginary, giving rise to neutrally stable centers, if . Thus, if we expect oscillations, tells us whether oscillations grow ( ), decay ( ), or are sustained ( ), all without ever calculating the actual eigenvalue.  Another interesting case, that gives us yet another obvious conclusion, is . If we consider a matrix, , then is the sum of its eigenvalues while is the product. Thus, for a matrix , If , then eigenvalues must be of opposite sign. This gives rise the the dynamics of a saddle point, stable in one direction, unstable in the other.  The only other nondegenerate cases occur when we have distinct, real eigenvalues of the same sign. The corresponding equilibria are termed nodes, with stability governed by the sign of , since .  We have our degenerate cases on the axis and along the curve . The case gives us a line of fixed points, where one quantity remains fixed (since one eigenvalue is zero) while the other grows from ( ) or decays towards ( ) zero. Along the curve equilibria are called degenerate nodes, characterized by a repeated eigenvalue.  Stable points, which attract trajectories, are often called sinks. Unstable points, which repel trajectories, are often called sources, since solutions emanate from such a source.  "
},
{
  "id": "parameters-rates-and-units-prelude-to-chemical-kinetics",
  "level": "1",
  "url": "parameters-rates-and-units-prelude-to-chemical-kinetics.html",
  "type": "Section",
  "number": "2.6",
  "title": "Parameters, rates, and units: Prelude to chemical kinetics",
  "body": " Parameters, rates, and units: Prelude to chemical kinetics   Parameters, rates, and units  We always need to keep in mind the fact that our parameters and rates have important units. We will review a few familiar examples to motivate this concept before moving on to biochemical kinetics of enzymatic reactions.    SIR models  Recall the SIR model (illustrated in ), where , , and are the host population densities of susceptible, infect ious , and recovered (or removed) hosts. Susceptible hosts are infected at a rate and infectious hosts recover (or are removed by death) at a rate .   Flow diagram for SIR model.     The prevailing models in the literature are called mass action and constant contact , which refers specifically to the choice of the function within our transmission function.   constant contact (frequency dependent) assumes that   mass action (density dependent) assumes that    Notice that we have to assign different units to the transmission parameter  depending on its form.    Predator - Prey equations  Consider the densities of prey ( ) and its predator ( ), given by the following (slightly incorrect, or at least misleading equations), The interaction term, , is the term that we focus on. This term represents predation in the -equation, but growth in the -equation .   Indeed, describes the rate of predation on , but it cannot describe, as it is now, the growth rate of . The unit’s in the second equation are inconsistent, thus, the model must be wrong! In fact, we have where is some (probably small) number describing the conversion efficiency of producing new predators from consumed prey.   "
},
{
  "id": "example1-sir-models",
  "level": "2",
  "url": "parameters-rates-and-units-prelude-to-chemical-kinetics.html#example1-sir-models",
  "type": "Example",
  "number": "2.6.1",
  "title": "SIR models.",
  "body": " SIR models  Recall the SIR model (illustrated in ), where , , and are the host population densities of susceptible, infect ious , and recovered (or removed) hosts. Susceptible hosts are infected at a rate and infectious hosts recover (or are removed by death) at a rate .   Flow diagram for SIR model.     The prevailing models in the literature are called mass action and constant contact , which refers specifically to the choice of the function within our transmission function.   constant contact (frequency dependent) assumes that   mass action (density dependent) assumes that    Notice that we have to assign different units to the transmission parameter  depending on its form.  "
},
{
  "id": "example-predator-prey",
  "level": "2",
  "url": "parameters-rates-and-units-prelude-to-chemical-kinetics.html#example-predator-prey",
  "type": "Example",
  "number": "2.6.3",
  "title": "Predator - Prey equations.",
  "body": " Predator - Prey equations  Consider the densities of prey ( ) and its predator ( ), given by the following (slightly incorrect, or at least misleading equations), The interaction term, , is the term that we focus on. This term represents predation in the -equation, but growth in the -equation .   Indeed, describes the rate of predation on , but it cannot describe, as it is now, the growth rate of . The unit’s in the second equation are inconsistent, thus, the model must be wrong! In fact, we have where is some (probably small) number describing the conversion efficiency of producing new predators from consumed prey.  "
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
