var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-disclaimer",
  "level": "1",
  "url": "preface-disclaimer.html",
  "type": "Preface",
  "number": "",
  "title": "Disclaimer",
  "body": " Disclaimer  These notes were originally written for MATH 056 at Swarthmore College and subsequently quite heavily modifited for courses taught at the University of Central Oklahoma. This course was developed and taught as MATH 056 in Fall 2011, and subsequently as MATH 4910\/5910 in the Spring of 2013, 2015, and 2017. These notes were inspired by a course that I took as a first year graduate student at the University of Utah which was taught by Fred Adler.  Additional references used in the development of these notes (unfortunately at this point in time uncited within the text) are listed on the last \"page\".  The structure of these notes might be jarring, but the goal is to facilitate rapid entry to inspired, independent investigations of interesting questions. Often books begin with discrete-time mathematical models (which are conceptually and mathematically interesting, but not of interest to most students), then spend a bit of time in one- and two-dimensional, continuous-time models (which are familiar and interesting, but time consuming and of limited applicability in many ’real-world’ situations). The goal here is introduce a few broad ideas of mathematical modeling and to take an early look at stochastic processes and to introduce modeling that scales to higher dimensional problems. Both of these approaches rely quite heavily on numerical tools.  "
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
  "id": "single-species-population-models",
  "level": "1",
  "url": "single-species-population-models.html",
  "type": "Section",
  "number": "2.1",
  "title": "Single-species population models",
  "body": " Single-species population models   Review  Following the introduction of birth-immigration-death-emigration (BIDE)  We sometimes call this BIDE because it is slightly more pronounceable than BDIE, and because it emphasizes and groups the gain terms and the loss terms. models and we were challenged to consider models of immigration. Let denote the arrival or immigration rate. The model becomes   The equilibrium is found from or setting and solving . Hence, the equilibrium is . Now, this only makes sense when , otherwise itself is negative. If the population grows naturally, aided more so by immigration.    Model classification  Given very limited exposure to mathematical models, it is worth pausing to see how this model fits into a broader context. We will pause from work developing and analyzing specific models to look at the features of our model(s) so far, and what other alternatives are available to us: dimension, linearity versus nonlinearity, qualitative versus quantitative analysis, and determinism versus stochasticity.   Dimension  The dimension of a mathematical model refers to the number of variables being tracked. For example, is a one-dimensional (1D) ordinary differential equations model for . Tracking additional populations (e.g., other species) or subpopulations (e.g., groups or strata within a species) requires models of higher dimensions, soon enough we will arrive at these.    Linearity  Mathematical models that ignore interactions between individuals are linear models (for example, on the right hand side of the differential equation). Explicitly modeling interactions between individuals introduces nonlinearities into the model. This happens regardless of the model dimension. We can study 1D nonlinear models (that include interactions between individuals) or higher-dimensional nonlinear models.    Quantitative and qualitative analyses  Trained as mathematicians, we are much more likely to be familiar with exact or quantitative approaches, methods, or solutions. In particular, when we imagine the solution to a particular problem we are likely to expect   a specific formula, or    a specific numerical value     Despite this, there is much room for qualitative or more descriptive approaches, methods, or solutions. In particular, through development and analysis of mathematical models we want to gain an appreciation for qualitative (graphical) solutions. To compare the two, we will outline potential pros and cons, or strengths and drawbacks. But, as one develops experience, what once may have seemed like a drawback might begin to look more and more like a strength of a particular approach.    Drawbacks of qualitative analysis  Perhaps the biggest drawback of qualitative methods is that we are really limited to applying these approaches to models of lower dimension. These methods work well for models of 1 or 2 dimensions (i.e., variables). Occasionally we are lucky enough to have opportunities to view higher dimensional systems in lower dimension by clever analysis techniques, so we can stretch the territory of qualitative methods a bit in some cases. We are able to get only broad information about our solutions or the behaviors of our mode (if you omit the word only, however, this potential drawback looks suspiciously like a strength). We could distinguish between    oscillations or not, or    growth or decay    and identify conditions under which these behaviors occur.    Strengths of qualitative analysis  Qualitative analysis requires minimal assumptions about the numerical values for rates (parameters), which in many cases are hard to find, especially at the beginning of a project. This analysis can also help give information about interesting relationships between parameters. In particular, based on the discussion above, understanding under which parameters oscillations occur or not, or under which parameters solutions grow or decay, is powerful information.    Drawbacks of quantitative analysis  Counter to our intuition, closed form solutions to interesting models are often impossible to find or are uselessly complex when found. If we seek numerical solutions or graphs of analytical solutions, we need precise numerical values for initial conditions and parameters. For example, when applying our qualitative methods to our emigration model, we found that . This analysis require little, if any, assumptions on and other than that they were some positive values.     Strengths of quantitative analysis  Sometimes we get lucky and models are solvable and solutions provide intuition. In other cases, even good guesses of parameter values can help generate intuition building ’ numerical results about the model and its dynamics.    Deterministic models  In general we are unable to investigate certain questions about extinction with models like because the solution only approaches zero in the limit as (given ), but never reaches 0. In contrast to this, stochastic models, whose realizations are illustrated in   and  certainly demonstrate extinction. Moreover, the stochastic results allow a variety of new questions about phenomenon related to extinction. We could investigate things such as the variability (i.e., variance) in population size as time goes on or the average time to extinction for small populations where stochasticity might be important.     Harvesting and logistic growth   Key concepts in continuous-time models  In dynamical systems and mathematical modeling we are often interested in the long-term behavior of solutions to our models. To lay out a few definitions and concepts we will consider a generic dynamical system, where is some nice function and is a known initial value.    Equilibrium point  An equilibrium point is a value of the solution that is unchanging in time. For a differential equation  is an equilibrium point if . Stability of equilibria helps us characterize the long term behavior of a model using information from equilibria. While there are mathematical varieties of stability we will consider local asymptotic stability.    Stable equilibrium point  A stable equilibrium point attracts solutions that start nearby, alternatively, it is stable if small perturbations from the equilibrium decay to zero. An equilibrium of a dynamical system is a stable equilibrium point if solutions starting ‘near‘ approach in time.    Unstable equilibrium point  An unstable equilibrium point repels solutions that start nearby, alternatively, it is unstable if small perturbations from the equilibrium grow. An equilibrium of a dynamical system is an unstable equilibrium point if solutions starting ‘near‘ diverge from in time.   For the remainder of this section, we will study the logistic growth equation, its relationship to the discrete logistic model, its relationship to disease transmission in a closed population, and a few extensions. The logistic growth equation is given by, Let be an equilibrium point, so that we can write We will derive a stability condition for an arbitrary equilibrium point, starting by identifying the dynamics of , Now, substituting the formula for and expanding, In the last step we can see that the terms that remain are equivalent to the derivative of , with respect to evaluated at . Here we linearize by substituting our formula for the solution and dropping al higher order terms in . You could do this, more formally or generally, by Taylor series.  Solutions to decay to zero if and grow if . Hence, an equilibrium point (trivial or not) is stable if and unstable if .  Evaluating derivatives should work in general, but it is not our only tool. Today we will use graphical methods to develop a qualitative understanding of the dynamics of a harvested population. If we think about what our model means, we can make progress without tackling sometimes frustrating, other times uninspiring, algebra.   "
},
{
  "id": "definition-equilibrium-point",
  "level": "2",
  "url": "single-species-population-models.html#definition-equilibrium-point",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Equilibrium point.",
  "body": " Equilibrium point  An equilibrium point is a value of the solution that is unchanging in time. For a differential equation  is an equilibrium point if . Stability of equilibria helps us characterize the long term behavior of a model using information from equilibria. While there are mathematical varieties of stability we will consider local asymptotic stability.  "
},
{
  "id": "definition-stable-equilibrium-point",
  "level": "2",
  "url": "single-species-population-models.html#definition-stable-equilibrium-point",
  "type": "Definition",
  "number": "2.1.2",
  "title": "Stable equilibrium point.",
  "body": " Stable equilibrium point  A stable equilibrium point attracts solutions that start nearby, alternatively, it is stable if small perturbations from the equilibrium decay to zero. An equilibrium of a dynamical system is a stable equilibrium point if solutions starting ‘near‘ approach in time.  "
},
{
  "id": "definition-unstable-equilibrium-point",
  "level": "2",
  "url": "single-species-population-models.html#definition-unstable-equilibrium-point",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Unstable equilibrium point.",
  "body": " Unstable equilibrium point  An unstable equilibrium point repels solutions that start nearby, alternatively, it is unstable if small perturbations from the equilibrium grow. An equilibrium of a dynamical system is an unstable equilibrium point if solutions starting ‘near‘ diverge from in time.  "
},
{
  "id": "continuous-time-models-derivations",
  "level": "1",
  "url": "continuous-time-models-derivations.html",
  "type": "Section",
  "number": "2.2",
  "title": "Continuous-time models",
  "body": "> Continuous-time models   Continuous-time models  The fundamental difference between what we will do and what we have done so far is our treatment of time. We will now consider continuous processes, as the difference between and becomes small. We will use derivatives and talk about change in population sizes. We will write models using derivatives because we tell our story about how things change. We cannot tell a story about population size at time , we can tell a story about how population size at time changes.  Let be the concentration of brain-eating amebae ( http: \/\/www.cdc.gov\/parasites\/naegleria\/ ) at time living in a warm lake. Naegleria reproduce at rate and die at rate per time. We take two closely spaced water samples to determine whether naegleria is on the rise or it is otherwise safe to swim. The future concentration is equal to the following: Today we really started with the last line in the derivation which assumed that only one event was possible (i.e., we can think that we immediately ignored that individuals that died in a short interval gave birth at the same time.). We can think of as the per time probability of mortality, so that is the fraction of naegleria that die in an interval of length . Finally, is the fraction of survivors from a previous time step. Those that survive, , are allowed to reproduce, and contribute themselves (the 1 ) plus their offspring (the ) to the future generation.  Previously (when thinking in discrete-time) we worked with fractions of survivors and now we are suddenly transitioning to working with rates. When we took unit of time it may have been easy enough to convince ourselves that the fraction of individuals that survive an interval of length unit was some number where is the fraction that die per unit time step. If we put the back into the equation we see the intermediate, We need this per unit time survival probability, which hopefully suggests that we need, A bit of entertaining algebra shows that we need, So, when , as with our discrete-time models, we needed . What we really need is the product , so that as , itself can become large and still preserve this inequality. In fact, as we allow !  We often label as the intrinsic growth rate, with units , so that, Rearranging, and dividing by , Now, taking the limit as , since the last term still contains a factor of .  We can read this differential equation as Unlike before this change can just as easily be positive or negative. When the change (derivative of a function) is positive, we know from calculus that the function is increasing. When the change is negative, we know that the function is decreasing.  Looking at our definition of , if the mortality rate outweighs the birth rate the net, or intrinsic, growth rate is negative (in these cases it is sometimes useful to explicitly write a negative sign in the differential equation). Otherwise, if births outweigh mortality, it is positive. Like before, we will plot the right hand side of our model as a function of the population size. Rather than calling it a ’cobwebbing diagram’ we will call this a phase-line diagram . Unlike before this is a graph of change vs. size not next vs. now.   If we plot the change in as a function of , we can determine whether or not will increase or decrease in size from a given initial condition, , by reading the derivative.    Phase-line diagram. The dotted line, for all requires . The change in the ’blue’ population is non-negative at all population size (and only zero at ), thus if it starts at it will always grow. The change in the ’red’ population is non-positive at all population size (and only zero at ), thus if it starts at it will always shrink.   Looking at  , the blue population starts at and grows. It grows at a faster and faster rate as it grows. In contrast the red population shrinks rapidly at first, but when it reaches smaller population sizes the rate it which it shrinks decreases.  Before developing our method for solving all future problems, we will actually solve this one analytically. This is one of the few times we can solve our model analytically. As we do this, we will not pay much attention to whether or not is positive or negative. In general, we expect parameters to be non-negative, but here is a sort of compound parameter and can be negative when (a positive parameter) is larger than (a positive parameter). To allow for growth or decay, without having to worry about negative parameters, we will specify .  Recall,  Replacing by , and we can see that when , . Otherwise, when , . If , then and never changes from . We might be interested in using the formula for to compute the half-life (commonly ) or doubling time (commonly ).  Before moving on to nonlinear models, guided by our prior modeling experiences we should recognize that we could write models of the form or Biologically, what do these models say? Mathematically, how might you solve them?   "
},
{
  "id": "fig-phase",
  "level": "2",
  "url": "continuous-time-models-derivations.html#fig-phase",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "  Phase-line diagram. The dotted line, for all requires . The change in the ’blue’ population is non-negative at all population size (and only zero at ), thus if it starts at it will always grow. The change in the ’red’ population is non-positive at all population size (and only zero at ), thus if it starts at it will always shrink.  "
},
{
  "id": "two-dimensional-systems",
  "level": "1",
  "url": "two-dimensional-systems.html",
  "type": "Section",
  "number": "3.1",
  "title": "Two-dimensional systems of differential equations as ecological models",
  "body": " Two-dimensional systems of differential equations as ecological models  As we transition towards new topics, it is worth mentioning our goals.   Read and interpret models A term by term understanding of the assumptions of a model.    Analyze, solve, or simulate (compute) solutions. Equilibria and stability, or transient dynamics.    Write models.    Evaluate results and draw biological or mathematical conclusions. Dynamics (of NB) were unstable, might be missing biological ingredients.      A disease model  Consider a mild infection circulating among members of a population, where the healthy individuals are susceptible to the infection ( ) and the infectious individuals are capable of transmitting the infection to others ( ).   An model for transmission of a mild infection in a closed population.      Much like in class we will build a word model as we go. and replace the terms with symbols. Our first term is loss to recovery in the equation. We can think of as the leaving rate from the compartment, much like was the leaving rate from the living (i.e., dying) compartment of a population model. Everything, in this model, that leaves one compartment enters another (i.e., there are no leaks ). We can also argue for the infection rate as follows, since infection is only transmitted directly and by infectious hosts, we might expect that the rate that individuals gain infection is proportional to the density (individuals per hectare) of infectious individuals, . In fact here, we assume that the infection rate is a linearly increasing function of . There are plenty of other models of transmission, some we will study in the homework, others later in the semester, still more in our projects.     Since the total number* of individuals is preserved, we can replace the equation for by an algebraic constraint . We can substitute this into the equation for and derive a 1-dimensional, nonlinear model, If we define our model we can plot the more interesting version of our phase line as in . Ignoring graphs for the moment, we can also compute equilibria of continuous time models, defined as solutions to . This gives and It might prove useful to notice that our nontrivial solution exists when this suggests a limitation on the recovery rate that depends on the contact parameter and the total population size .    Analysis    Equilibrium    Phase line and stability    Solutions and observations    Bifurcation diagram   "
},
{
  "id": "fig-epi",
  "level": "2",
  "url": "two-dimensional-systems.html#fig-epi",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " An model for transmission of a mild infection in a closed population.     "
},
{
  "id": "p-91",
  "level": "2",
  "url": "two-dimensional-systems.html#p-91",
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
  "number": "3.2",
  "title": "Harvesting and predator-prey",
  "body": " Harvesting and predator-prey   Key concepts in continuous-time models  Consider the model that describes the dynamics of a logistically-growing population subjected to harvesting. Equilibria of this model are and . The removal rate due to harvesting is per . One short derivation of this functional form is given here, we will see another derivation in a few lectures.    Derivation of a functional response  A harvester spends its time, of which it has , searching ( ) or handling ( ), thus, The handling time depends on the number of prey captured ( ) and the handling time per prey ( ), so that, In turn, the number captured depends on the searching or finding rate ( ), the number of prey available ( ), and the time spend searching by predators or harvesters ( ), Solving for the search time, so that Solving for ,   The per predator feeding rate is, since the definition of was per predator . Redefining constants and , we can finally write the per predator harvesting rate as so that the harvesting term is If predators instantaneously consume their prey, which returns the Type I response, because saturation vanishes.   "
},
{
  "id": "two-dim-ecology",
  "level": "1",
  "url": "two-dim-ecology.html",
  "type": "Section",
  "number": "3.3",
  "title": "Two dimensional models in ecology",
  "body": " Two dimensional models in ecology  Consider now, a two dimensional extension where is no longer a parameter, but instead a dynamic variable. Whose growth is proportional to the consumption of prey, up to a scaling factor . Such a model is, We can give ourselves a slightly simpler situation if we assume that the predator is a Type I predator, A common approach to studying such a model is to first nondimensionalize the variables by scaling by some relevant value. Here we have a carrying capacity for , so if we scale by we can define and study the dynamics of which describes the proportion of carrying capacity that is filled. The goal of this is to combine parameters and reduce the dimension of parameter space. We also rescale time by setting and replacing the derivative by . The definition involving is less clear from the start, but as we step through the process we find that using works pretty well. Ultimately, after some failed attempts, we find something like,   Just as we used phase lines in one dimension, we will use phase planes in two dimensions. To introduce this process we will use an even simpler model describing the densities of prey ( ) and predator ( ),   First, we hope to compute equilibria. We can start by solving when each of the equations is equal to zero (i.e., when individual quantities are unchanging). Setting This equation implies that is unchanging along the lines and in the -plane. Additionally, setting This equation implies that is unchanging along the lines and in the -plane. Equilibria require both equations be satisfied simultaneously, thus opposite nullclines must intersect so that both of and are unchanging. We will jump ahead and plot everything in  , this includes trajectories in the phase plane and direction arrows.     On lines , motion is in the vertical direction. On lines , motion is in the horizontal direction.   Direction arrows in  , are obtained by treating the individual differential equations as inequalities. The motivation is that we know that when Since is of interest, the to ensure the derivative is positive, we need Thus, is increasing below the (nonzero) -nullcline. Similarly, is decreasing above this nullcline. Lastly, we can show that is decreasing to the left of the (again, nonzero) vertical -nullcline, and decreasing to the right. This shows that motion is counterclockwise. Numerical solutions show that we have closed orbits around the equilibrium point . We call this point neutrally stable .  If we hadn’t computed solutions, we wouldn’t necessarily know from the phase portrait that these solutions do not spiral in towards or out from the equilibrium. To know for certain, we would need to study the linearized dynamics near each equilibrium point, including the point , as well. Since we have solutions, we might as well plot them in time (see ).    Numbers (or ) of prey ( ) and predators ( ).   "
},
{
  "id": "fig-pred-prey-pp",
  "level": "2",
  "url": "two-dim-ecology.html#fig-pred-prey-pp",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": "  On lines , motion is in the vertical direction. On lines , motion is in the horizontal direction.  "
},
{
  "id": "fig-pred-prey",
  "level": "2",
  "url": "two-dim-ecology.html#fig-pred-prey",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": "  Numbers (or ) of prey ( ) and predators ( ).  "
},
{
  "id": "ecological-competition",
  "level": "1",
  "url": "ecological-competition.html",
  "type": "Section",
  "number": "3.4",
  "title": "Ecological competition",
  "body": " Ecological competition   Method  To review, we apply the following method to study 2D nonlinear dynamical systems.     Write a model.    Read and interpret the model (dimensional analysis of parameters.    Compute nullclines and equilibria.    Plot phase portraits with direction arrows and trajectories.    Refine knowledge of stability with linearization via Jacobian.     Consider two species and for ants and beetles, respectively. Assume that each grows (in the absence of the other) according to logistic growth, Here, each species grows independently of the other. Beetles have no effect on ants; ants have no effect on beetles. Our mechanism for interaction will be interference competition, which leads in increased mortality.   To understand interspecific competition, we need to understand the units and magnitude of and . Roughly, translates from units of beetle density to an effective ant density. According to the ratio , beetles fill some of the carrying capacity allotted to ants. Just how much of the capacity that they fill is given by the parameter , which when multiplied by gives the ant equivalency of beetles. We will look more closely at the equation for , but note that we could make similar observations about the equation for .  The dynamics of are given by, which slightly more directly illustrates that both and fill the carrying capacity allotted to . In one dimension, equilibria depend on the zeros of the right hand side of an equation like this. In two dimensions, equilibria depend on the values of both quantities and . The first step, as before, is to compute the nullclines for . Setting implies that either or With a single species, this equation looks like We can solve this equation for the density of animals at equilibrium to find, But we know that we have a particular composition of animals, such that Combining these equations, gives as a function of , the abundance of and that guarantee that is unchanging,   Finally, we have that , if either or . By their definition, on -nullclines, the motion in the direction is zero, and dynamics are strictly increasing (or decreasing) in .  Similarly, we can compute that , if either or . By their definition, on -nullclines, the motion in the direction is zero, and dynamics are strictly increasing (or decreasing) in . We have to consider a variety of parameter combinations and relative magnitudes. This lets us plot four distinct phase portraits, shown in   -      When and , only exists at equilibrium. This is equivalent to and , which suggests that has a weak effect on , but has a strong effect on .     When and , only exists at equilibrium. This is equivalent to and , which suggests that has a strong effect on , but has a weak effect on .     When and , nullclines intersect, and the coexistence equilibrium is stable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on .     When and , but the coexistence equilibrium is unstable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on . The winner depends on the initial conditions.    "
},
{
  "id": "fig-compet-A-only",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-A-only",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "  When and , only exists at equilibrium. This is equivalent to and , which suggests that has a weak effect on , but has a strong effect on .  "
},
{
  "id": "fig-compet-B-only",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-B-only",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": "  When and , only exists at equilibrium. This is equivalent to and , which suggests that has a strong effect on , but has a weak effect on .  "
},
{
  "id": "fig-compet-AB",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-AB",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": "  When and , nullclines intersect, and the coexistence equilibrium is stable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on .  "
},
{
  "id": "fig-compet-saddle",
  "level": "2",
  "url": "ecological-competition.html#fig-compet-saddle",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": "  When and , but the coexistence equilibrium is unstable. This is equivalent to and , which suggests that has a weak effect on , and has a weak effect on . The winner depends on the initial conditions.  "
},
{
  "id": "the-trace-determinant-method",
  "level": "1",
  "url": "the-trace-determinant-method.html",
  "type": "Section",
  "number": "3.5",
  "title": "The ‘Trace-Determinant Method’",
  "body": " The Trace-Determinant Method   Diagnostics for eigenvalues and stability  In many cases, the calculation of eigenvalues from the Jacobian matrix at equilibria is unnecessary. Instead, we prefer a simpler approach that we refer to as the trace-determinant method. Combined with a cautious sketch of the phase plane, the inspection of and    In some situations, the phase plan suggests that trajectories might oscillate about a fixed point. Yet, without the aid of computers we are often unable to distinguish between equilibria that attract, repel, or do neither. We call these attracting (repelling) equilibria stable (unstable) foci, the plural of focus, or neutrally stable centers, in the third case. Since we expect solutions to oscillate given the phase plane, all that remains is to determine whether or not the real part of the eigenvalue is positive, negative, or zero. This is obvious from the sign of . The eigenvalues corresponding to the characteristic polynomial are given by We can see that implies , which means perturbations from equilibria decay and a particular equilibrium is a stable focus. We can repeat the argument for , which suggests an unstable focus, characterized by growing oscillations. Eigenvalues are purely imaginary, giving rise to neutrally stable centers, if . Thus, if we expect oscillations, tells us whether oscillations grow ( ), decay ( ), or are sustained ( ), all without ever calculating the actual eigenvalue.  Another interesting case, that gives us yet another obvious conclusion, is . If we consider a matrix, , then is the sum of its eigenvalues while is the product. Thus, for a matrix , If , then eigenvalues must be of opposite sign. This gives rise the the dynamics of a saddle point, stable in one direction, unstable in the other.  The only other nondegenerate cases occur when we have distinct, real eigenvalues of the same sign. The corresponding equilibria are termed nodes, with stability governed by the sign of , since .  We have our degenerate cases on the axis and along the curve . The case gives us a line of fixed points, where one quantity remains fixed (since one eigenvalue is zero) while the other grows from ( ) or decays towards ( ) zero. Along the curve equilibria are called degenerate nodes, characterized by a repeated eigenvalue.  Stable points, which attract trajectories, are often called sinks. Unstable points, which repel trajectories, are often called sources, since solutions emanate from such a source.  "
},
{
  "id": "parameters-rates-and-units-prelude-to-chemical-kinetics",
  "level": "1",
  "url": "parameters-rates-and-units-prelude-to-chemical-kinetics.html",
  "type": "Section",
  "number": "3.6",
  "title": "Parameters, rates, and units: Prelude to chemical kinetics",
  "body": " Parameters, rates, and units: Prelude to chemical kinetics   Parameters, rates, and units  We always need to keep in mind the fact that our parameters and rates have important units. We will review a few familiar examples to motivate this concept before moving on to biochemical kinetics of enzymatic reactions.    SIR models  Recall the SIR model (illustrated in ), where , , and are the host population densities of susceptible, infect ious , and recovered (or removed) hosts. Susceptible hosts are infected at a rate and infectious hosts recover (or are removed by death) at a rate .   Flow diagram for SIR model.     The prevailing models in the literature are called mass action and constant contact , which refers specifically to the choice of the function within our transmission function.   constant contact (frequency dependent) assumes that   mass action (density dependent) assumes that    Notice that we have to assign different units to the transmission parameter  depending on its form.    Predator - Prey equations  Consider the densities of prey ( ) and its predator ( ), given by the following (slightly incorrect, or at least misleading equations), The interaction term, , is the term that we focus on. This term represents predation in the -equation, but growth in the -equation .   Indeed, describes the rate of predation on , but it cannot describe, as it is now, the growth rate of . The unit’s in the second equation are inconsistent, thus, the model must be wrong! In fact, we have where is some (probably small) number describing the conversion efficiency of producing new predators from consumed prey.   "
},
{
  "id": "example1-sir-models",
  "level": "2",
  "url": "parameters-rates-and-units-prelude-to-chemical-kinetics.html#example1-sir-models",
  "type": "Example",
  "number": "3.6.1",
  "title": "SIR models.",
  "body": " SIR models  Recall the SIR model (illustrated in ), where , , and are the host population densities of susceptible, infect ious , and recovered (or removed) hosts. Susceptible hosts are infected at a rate and infectious hosts recover (or are removed by death) at a rate .   Flow diagram for SIR model.     The prevailing models in the literature are called mass action and constant contact , which refers specifically to the choice of the function within our transmission function.   constant contact (frequency dependent) assumes that   mass action (density dependent) assumes that    Notice that we have to assign different units to the transmission parameter  depending on its form.  "
},
{
  "id": "example-predator-prey",
  "level": "2",
  "url": "parameters-rates-and-units-prelude-to-chemical-kinetics.html#example-predator-prey",
  "type": "Example",
  "number": "3.6.3",
  "title": "Predator - Prey equations.",
  "body": " Predator - Prey equations  Consider the densities of prey ( ) and its predator ( ), given by the following (slightly incorrect, or at least misleading equations), The interaction term, , is the term that we focus on. This term represents predation in the -equation, but growth in the -equation .   Indeed, describes the rate of predation on , but it cannot describe, as it is now, the growth rate of . The unit’s in the second equation are inconsistent, thus, the model must be wrong! In fact, we have where is some (probably small) number describing the conversion efficiency of producing new predators from consumed prey.  "
},
{
  "id": "michaelis-menten-kinetics",
  "level": "1",
  "url": "michaelis-menten-kinetics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Michaelis-Menten kinetics",
  "body": " Michaelis-Menten kinetics   The introduction to units will highlight the fact that units in reaction kinetics are somewhat less tangible and slightly more difficult to interpret. We will study the dynamics of cell receptors ( ) as they shuttle extracellular nutrients ( ) into the cell. We denote the concentration of cellular nutrient by .   We wish to apply the law of mass action which simply states,   in a bimolecular reaction, the reaction rate is proportional to the product of the concentrations of reactants .  Assuming that and are the concentrations of reactants, where the constant of proportionality, , is called the rate constant.   Since the law of mass action relies on concentrations of reactants, we must reconsider our receptors and nutrients in terms of concentrations . For a given cellular component , the volumetric concentration of is, Treating , , , and as volumetric concentrations we can use the reaction diagram ( ) to build differential equations to describe the changes in concentrations.   INSERT REACTION   As an example, there are two ways that the extracellular nutrient concentration changes giving two terms to the equation.   Similarly, we can add the remaining equations, Given this model, our first goal is to make some simplifications through astute observations. Both and are receptor states, and if we add the two differential equations, we see that the total receptor concentration is conserved, . With this we can write  Reshuffling a bit,   We can study these equations in the phase plane. Assuming all parameters are positive, both nullclines saturate to a value at large . Knowing very little about parameters, we know that the half saturation constant of the nullcline is larger than that of the nullcline. The nullclines, direction arrows on the nullclines, and a sample trajectory are illustrated in .    Nutrient-receptor reaction.    Equilibrium assumption vs. the Quasi-steady state assumption  The notes of the following section have not been typeset. A rough, handwritten copy is included. If you have a better copy, I’d be happy to see it.   Equilibrium assumption    Quasi-steady state assumption    "
},
{
  "id": "fig-nutrient-recept",
  "level": "2",
  "url": "michaelis-menten-kinetics.html#fig-nutrient-recept",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": " INSERT REACTION  "
},
{
  "id": "fig-mm-kinetics",
  "level": "2",
  "url": "michaelis-menten-kinetics.html#fig-mm-kinetics",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": "  Nutrient-receptor reaction.  "
},
{
  "id": "nullclines-and-neuroscience",
  "level": "1",
  "url": "nullclines-and-neuroscience.html",
  "type": "Section",
  "number": "4.2",
  "title": "Nullclines and Neuroscience",
  "body": " Nullclines and Neuroscience  Following on the heels of the quasi-steady state assumption, we will close with an application of fast and slow dynamics that arises in mathematical models of neurons.  This example, called the FitzHugh-Nagumo model allows us to synthesize much of the material from continuous time dynamical systems: phase plane, equilibria, analysis, and approximation.  "
},
{
  "id": "higher-dimensional-systems",
  "level": "1",
  "url": "higher-dimensional-systems.html",
  "type": "Section",
  "number": "4.3",
  "title": "Higher-dimensional systems of differential equations as models",
  "body": " Higher-dimensional systems of differential equations as models    "
},
{
  "id": "stochastic-model",
  "level": "1",
  "url": "stochastic-model.html",
  "type": "Section",
  "number": "5.1",
  "title": "What is a stochastic process?",
  "body": " What is a stochastic process?     Deterministic or stochastic models    Coin-flipping simulations of a death process.   Models presented so far have been deterministic, meaning that the structure of the model, combine with its initial conditions and parameter values completely determine the behavior of the solutions. In contrast, to this are stochastic models in which each application or investigation of the model gives a unique realization of the dynamics. In other words, the same model and conditions can give rise to very different dynamics. These are connected in that we understand the deterministic analog of a stochastic model to capture the mean behavior (see ).    Results of 1000 stochastic simulations (colored) and exponential solution to the deterministic model with white dots indicating the mean of simulations at each generation.   Keep in mind that both deterministic models and stochastic models have their place in mathematical modeling, but that more importantly each allows us to apply different methods and to ask different questions.   "
},
{
  "id": "fig-coin-flips",
  "level": "2",
  "url": "stochastic-model.html#fig-coin-flips",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": "  Coin-flipping simulations of a death process.  "
},
{
  "id": "p-140",
  "level": "2",
  "url": "stochastic-model.html#p-140",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "very "
},
{
  "id": "fig-coin-flips-100",
  "level": "2",
  "url": "stochastic-model.html#fig-coin-flips-100",
  "type": "Figure",
  "number": "5.1.2",
  "title": "",
  "body": "  Results of 1000 stochastic simulations (colored) and exponential solution to the deterministic model with white dots indicating the mean of simulations at each generation.  "
},
{
  "id": "introduction-to-stochastic-models",
  "level": "1",
  "url": "introduction-to-stochastic-models.html",
  "type": "Section",
  "number": "5.2",
  "title": "Introduction to stochastic models",
  "body": " Introduction to stochastic models   Motivation  So far we have worked with deterministic models, most recently in continuous time. An example of a deterministic model is where is the growth rate of species . The solution to such a model is where is the initial population size. As , we have either if ( ), or if ( ). In decaying populations ), solutions decay exponentially towards zero, rather than actually reaching zero. Thus, we reach extinction asymptotically, rather than in finite time.  But, at low numbers chance events become important. A single cell could divide or die. If it dies, we have extinction. If we expect extinction, but what about when ? If , a single cell could die rather than divide, by chance, even if it should divide and grow in number.  Since we are focusing on the fates of individual cells, it is perhaps important to think in terms of integer-valued states. Let be the initial number of cells present, perhaps in come cell culture of a fascinating biological experiment. We should note that, while the process is discrete (in the number of cells), time is continuous. The number of animals changes by a single individual through births (to the right) and deaths (to the left) as illustrated in  .   Transitions and transition probabilities in Markov Process        To make use of the diagram in we should let and consider how these probabilities evolve in time for all . One important fact is that since we know that we start from animals with absolute certainty. We can derive the differential equation by conservation, First we will apply the definition of and the others (i.e., ). Notice that the equation is presented in two columns, on the left is the format in words and on the right introduces the corresponding notation, Below we could also consider as , where is given by the probability of events resulting in exit from size . The event probabilities are, Finally, we can begin rearranging to derive the differential equation for , Now, taking the limit , We have to assume that for any , and accept a system of coupled equations for . We will study this particular model with a suite of techniques, including naive calculation, inspection, and somewhat elegant probability theory.    Naive calculation  Looking at the first equation for , we simplify to If we were to look at the equilibrium of , assuming , we would need . Since appears in the next equation, we require all for . Since are probabilities, we require , which means that . This suggests that extinction is unavoidable, but a bit more work provides additional insight. Specifically populations with can escape extinction, with the probability of extinction of which for decays geometrically as a function of the initial population size. With quite a bit of effort, this result is very nicely illustrated in classic texts.   "
},
{
  "id": "fig-bdp",
  "level": "2",
  "url": "introduction-to-stochastic-models.html#fig-bdp",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": " Transitions and transition probabilities in Markov Process     "
},
{
  "id": "birth-death-processes-and-the-gillespie-algorithm",
  "level": "1",
  "url": "birth-death-processes-and-the-gillespie-algorithm.html",
  "type": "Section",
  "number": "5.3",
  "title": "Birth-death processes and the Gillespie algorithm",
  "body": " Birth-death processes and the Gillespie algorithm   A coin-flipping exercise  We will simulate a pure-death process with events chosen by random coin flips.    Start with a room full of participants.   At the start of each discrete round, everyone should flip a coin:   a head means death, so sit down and remain seated.    a tail means survival, so keep standing.       Repeat until all participants have vanished, recording the number alive at the start of each round.     A sample result for two populations is plotted in .    Numbers of survivors in independent simulations with probability of death equal to one half. Red curve illustrates the expected number of survivors.    Transitions and transition rates in Markov Process. In particular, the rates for leaving the state .        Bold claim revisited  Previously, we claimed that all populations go to extinction (in the absence of immigration). If we wish to simulate the process described in , we need to track a few pieces of information: the event that occurs (a birth or a death), and the time that the event occurs. =[draw, fill=white, minimum size=3em, circle] =[ fill=white, minimum size=3em, circle]  Using Fig.  , the probability that a birth occurs as the next event is and similarly for a death, To determine what happens we consider the interval which we divide, here, into two subintervals whose widths reflect the event probabilities above. For example, if ( ), the probability of a birth is zero and probability of a death is one. In contrast, if ( ), then the probability of a death is zero and the probability of a birth is one.  More interesting cases occur if, for example, and , then the probability of a birth is and the probability of a death is . To illustrate this last case, we divide the unit interval into subintervals , representing the probabilities of birth, and , representing the probabilities of death. Then we choose a uniform random number (a dart) and throw it at the divided number line (a target). The interval in which it lands identifies our next event. In this example, since , the probability that a birth occurs is much larger than the probability that a death occurs. Thus, the birth interval in the target is much larger than the death interval, and we are more likely to have a birth.    A uniform random random number has an 80% chance of landing in the blue (birth) interval, making this event the more likely outcome. That said, here we have the less likely outcome of a death.   Given that we can identify the event that occurs, our next task is to identify the time until the event occurs. Here we assume that he events occur at a constant rate and that the time until the next event, , is exponentially distributed with parameter . Thus, We can easily sample numbers from certain distributions. To sample exponentially distributed random numbers, we take advantage of its cumulative distribution function, . We pick a uniform random number and solve for using to find our even time. Importantly, since is a random number so is . In slight abuse of notation, we relabel the argument of , which is , by , Since , the logarithm is negative, so the negative in front ensures a positive event time .  Now that we have identified both our event and the event eating time, , we simply update our state and repeat the process for until we reach either a fixed number of events, a fixed final time, or a population that becomes extinct (or reaches some other pre-specified condition). An example solution to the birth-death process is plotted in , where unlike in  the rate of birth is non-zero.    Sample solutions to the stochastic process with the deterministic result (or expectation) in red. One population (black) rather quickly goes extinct, while the other (blue) does better than expected. Only the first 500 events are shown.   While the details of evaluating our claim are beyond our needs, we can and should temper our everything vanishes statement. In the absence of immigration, populations that remain finite are bound to reach extinction. They tend to do so rather quickly, after a string of bad luck. Otherwise populations can grow to infinity, avoiding and escaping the threat of extinction.  More sophisticated approaches, using generating functions (special power series) let us calculate the mean extinction time for a given problem.   "
},
{
  "id": "fig-in-class-sim",
  "level": "2",
  "url": "birth-death-processes-and-the-gillespie-algorithm.html#fig-in-class-sim",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": "  Numbers of survivors in independent simulations with probability of death equal to one half. Red curve illustrates the expected number of survivors.  "
},
{
  "id": "fig-bdp2",
  "level": "2",
  "url": "birth-death-processes-and-the-gillespie-algorithm.html#fig-bdp2",
  "type": "Figure",
  "number": "5.3.2",
  "title": "",
  "body": " Transitions and transition rates in Markov Process. In particular, the rates for leaving the state .     "
},
{
  "id": "fig-prob-diag",
  "level": "2",
  "url": "birth-death-processes-and-the-gillespie-algorithm.html#fig-prob-diag",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": "  A uniform random random number has an 80% chance of landing in the blue (birth) interval, making this event the more likely outcome. That said, here we have the less likely outcome of a death.  "
},
{
  "id": "fig-stoch-sample",
  "level": "2",
  "url": "birth-death-processes-and-the-gillespie-algorithm.html#fig-stoch-sample",
  "type": "Figure",
  "number": "5.3.4",
  "title": "",
  "body": "  Sample solutions to the stochastic process with the deterministic result (or expectation) in red. One population (black) rather quickly goes extinct, while the other (blue) does better than expected. Only the first 500 events are shown.  "
},
{
  "id": "what-is-dtds",
  "level": "1",
  "url": "what-is-dtds.html",
  "type": "Section",
  "number": "6.1",
  "title": "What is a discrete-time dynamical system?",
  "body": " What is a discrete-time dynamical system?     One-dimensional, Linear, discrete-time dynamical systems   Example  Consider a population of dandelions living in your front yard over the course of one summer. Let,       be the number of flowers at the start of week     be the number of flowers at the start of week     be the per capita production of flowers     Our model for the growth of dandelions over the summer is, where is the state variable and is a parameter that characterizes our population. At the beginning of summer we are lucky enough to have only dandelions in the front yard.  This is one of the few models we can actually solve. In general, As we have safely assumed, , is a positive number (of flowers). When do the dandelions take over our yard?   increases each generation if and decreases each generation if . Since we defined as the per capita production of new flowers, this should be comforting. If each flower does better than replacing itself we will always have an increasing number of flowers. If each flower fails to replace itself, our population will shrink. Solutions are tabulated in Tab.  .   Weekly dandelion growth over the summer. Note: this figure was NOT generated in R.     Weekly dandelion growth over the summer, for growing (left) and shrinking (right) populations. Think about what a plot of these solutions would look like.    Week  Population (with )    0  2    1  3    2  4.5    3  6.75    4  10.125    5  15.188    6  22.781    7  34.172    8  51.258    9  76.887    10  115.33      Weekly dandelion growth over the summer, for growing (left) and shrinking (right) populations. Think about what a plot of these solutions would look like.    Week  Population (with )    0  115    1  57.5    2  28.75    3  14.375    4  7.188    5  3.594    6  1.797    7  0.898    8  0.449    9  0.225    10  0.112     We can extract more biological information by considering the factors contributing to the per capita production rate, . Population growth depends on seedling recruitment and survival. Let,       be the number of seedlings generated per plant     be the fraction of seedlings that survive and grow to adulthood     be the fraction of adults that survive     We can re-write our model   This suggests a few ways that a population can grow,    highly productive adult plants that generate lots of seedlings (large )    highly viable seedlings that are likely to survive to adulthood     tough adult plants that are likely to survive    In all, we need for the plants to grow.  Thinking about equilibria is key to understanding dynamics of dandelions. Equilibria (or steady-states, or fixed-points) are values at which the solution is unchanging. With our notation this means . By inspection of  , the only equilibrium point is , this is the only place that either of our labeled lines intersect the diagonal.    Growth with import  It might be the case, however, that our neighbors secretly transplant dandelions in our yards at night. To mimic this unkind reality, assume that flowers are arriving each week. Our new model is,   How does flower immigration affect dynamics? If we replace both and by the equilibrium value, we have This gives us a value for the flower population, which tells us that if and if . It is important to notice early on that only non-negative equilibria make sense on most biological situations, especially with regard to population dynamics. With immigration (importation of plants), solutions can be traced on the diagrams in .    Computational trick.  One way to solve this problem is to study deviations from the equilibrium, . We’re going to assume that , since it is only then that we have a sensible equilibrium.  Let be the deviation from equilibrium at time so that,   And finally,   So, it looks like evolves according to Which gives, Thus, the solution is a weighted average of and , and depends on the weight . For weight moves from to as increases (the abundance of the initial flowers is reduced). Since we have a formula for , we can also plug it into the final equation above ...formula... We can see what generations form our population at any given week using the last of the above formulas. Of course, we could have started here by applying our model recursively. But, this approach gives some nice information about our solution in terms of equilibria ( ), initial values ( ), and perturbations ( ).    "
},
{
  "id": "example-plants",
  "level": "2",
  "url": "what-is-dtds.html#example-plants",
  "type": "Example",
  "number": "6.1.1",
  "title": "Example.",
  "body": " Example  Consider a population of dandelions living in your front yard over the course of one summer. Let,       be the number of flowers at the start of week     be the number of flowers at the start of week     be the per capita production of flowers     Our model for the growth of dandelions over the summer is, where is the state variable and is a parameter that characterizes our population. At the beginning of summer we are lucky enough to have only dandelions in the front yard.  This is one of the few models we can actually solve. In general, As we have safely assumed, , is a positive number (of flowers). When do the dandelions take over our yard?   increases each generation if and decreases each generation if . Since we defined as the per capita production of new flowers, this should be comforting. If each flower does better than replacing itself we will always have an increasing number of flowers. If each flower fails to replace itself, our population will shrink. Solutions are tabulated in Tab.  .   Weekly dandelion growth over the summer. Note: this figure was NOT generated in R.     Weekly dandelion growth over the summer, for growing (left) and shrinking (right) populations. Think about what a plot of these solutions would look like.    Week  Population (with )    0  2    1  3    2  4.5    3  6.75    4  10.125    5  15.188    6  22.781    7  34.172    8  51.258    9  76.887    10  115.33      Weekly dandelion growth over the summer, for growing (left) and shrinking (right) populations. Think about what a plot of these solutions would look like.    Week  Population (with )    0  115    1  57.5    2  28.75    3  14.375    4  7.188    5  3.594    6  1.797    7  0.898    8  0.449    9  0.225    10  0.112     We can extract more biological information by considering the factors contributing to the per capita production rate, . Population growth depends on seedling recruitment and survival. Let,       be the number of seedlings generated per plant     be the fraction of seedlings that survive and grow to adulthood     be the fraction of adults that survive     We can re-write our model   This suggests a few ways that a population can grow,    highly productive adult plants that generate lots of seedlings (large )    highly viable seedlings that are likely to survive to adulthood     tough adult plants that are likely to survive    In all, we need for the plants to grow.  Thinking about equilibria is key to understanding dynamics of dandelions. Equilibria (or steady-states, or fixed-points) are values at which the solution is unchanging. With our notation this means . By inspection of  , the only equilibrium point is , this is the only place that either of our labeled lines intersect the diagonal.  "
},
{
  "id": "example-immigration",
  "level": "2",
  "url": "what-is-dtds.html#example-immigration",
  "type": "Example",
  "number": "6.1.7",
  "title": "Growth with import.",
  "body": " Growth with import  It might be the case, however, that our neighbors secretly transplant dandelions in our yards at night. To mimic this unkind reality, assume that flowers are arriving each week. Our new model is,   How does flower immigration affect dynamics? If we replace both and by the equilibrium value, we have This gives us a value for the flower population, which tells us that if and if . It is important to notice early on that only non-negative equilibria make sense on most biological situations, especially with regard to population dynamics. With immigration (importation of plants), solutions can be traced on the diagrams in .  "
},
{
  "id": "nonlinear-discrete-time-models-1d",
  "level": "1",
  "url": "nonlinear-discrete-time-models-1d.html",
  "type": "Section",
  "number": "6.2",
  "title": "Nonlinear discrete-time models (1D)",
  "body": " Nonlinear discrete-time models (1D)   Review: Linear models  We want to outline our options for solving linear, discrete-time, matrix models. We’ll take a model for now we will think of as a matrix and as a vector.    per capita production and nonlinear effects  So far our model has roughly been, or where and are scalars, or is a vector and is a matrix.  As an example of a 1D model, our linear model assumes that or the ratio of current population to previous population is , no matter the size of the previous generation. Instead, we might expect that, for a variety of reasons (like space, food, aggression, or lack of resources) this ratio decreases as the current population size increases. Mathematically, this requires .  In words, small populations are capable of large increases from one generation to the next. But, large populations might only increase by slight amounts over generations. In fact, really large populations might actually shrink. The comparison of linear and nonlinear models is given in .    Per capita production plots. Left) Generation to generation change independent of population size, Right) change dependent on population size for three famous models of density dependence .   Notice the peculiarity of the black line (or curve) in the right panel of  (or ). It quite happily goes negative , which means for an initially large enough population, the subsequent generation is multiplied by a negative number. Simply stated, that is weird. Fortunately, our other models circumvent this problem by requiring at all population sizes.  Multiplying by population size gives our updating function, . Then, our model is Some sample updating functions are plotted in . Notice that there are some major qualitative changes when we compare the line in the left panel to any of the curves in the right panel. Most importantly, the updating function intersects the resetting line more than once. Again, these intersections suggest that Recalling our previous notation and definitions, these nonlinear models possess multiple equilibria!    Cobwebbing diagrams. Left) Updating functions of linear model, Right) change dependent on population size for three famous models of density dependence .     Ricker Model  We now consider a population , which is the number of guppies living in a bowl on our desk. For simplicity, we will assume that we start with a female guppy who is gravid. Guppies are fascinating creatures that can spawn indefinitely after mating once. We’ll ignore the fact that she gives birth to males and females, so that number of guppies above actually means ‘number of female guppies.  Guppies are fascinating, but cruel - they are quite happy to eat each other. It’s hard to track, but we know that as the guppy tank fills we see fewer baby guppies (i.e., per capita production drops as in  ). For a model of guppy dynamics, we will assume This model has been sketched above in the green curves of and  .  For a particular choice of parameters we find the following diagram and iterated solution.    Cobwebbing diagram and iterated solution for , . Left) Updating function and cobwebbing, Right) Iterated solution.   It appears that these solutions converge to a value guppies. Can we do better than this guess? We know that our equilibrium satisfies, Immediately, we should see a few things. First is always a solution to the first equation. Ignoring that, for , we have a positive equilibrium only when so that the logarithm is positive. We now know that for , .  Depending on the intrinsic growth rate ( rmax in the code) of our guppies, we might see oscillatory or non-oscillatory approaches to equilibria. The solution generated by the black updating function (with ) approaches (i.e., it has no nontrivial equilibrium point). Looking again at , try to uncover a relationship between the tendency of the trajectory to oscillate (right panel) and the crossing point of the updating function and resetting line (left panel).    Cobwebbing diagrams and iterated solutions as they depend on the maximal per capita production. Left) A collection of nice updating functions. Right) The corresponding iterated solutions.     A note on stability  As before (perturbations of linear non-homogeneous models), let and recall . We have, Now, perturbations are governed by the linear equation where describes its growth. The slope of the updating function governs stability. When,     is too steep at perturbations near grow, so solutions diverge from  .     is shallow enough at perturbations near decay, so solutions converge to  .      "
},
{
  "id": "fig-pcp",
  "level": "2",
  "url": "nonlinear-discrete-time-models-1d.html#fig-pcp",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": "  Per capita production plots. Left) Generation to generation change independent of population size, Right) change dependent on population size for three famous models of density dependence .  "
},
{
  "id": "fig-upd",
  "level": "2",
  "url": "nonlinear-discrete-time-models-1d.html#fig-upd",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": "  Cobwebbing diagrams. Left) Updating functions of linear model, Right) change dependent on population size for three famous models of density dependence .  "
},
{
  "id": "example-ricker",
  "level": "2",
  "url": "nonlinear-discrete-time-models-1d.html#example-ricker",
  "type": "Example",
  "number": "6.2.3",
  "title": "Ricker Model.",
  "body": " Ricker Model  We now consider a population , which is the number of guppies living in a bowl on our desk. For simplicity, we will assume that we start with a female guppy who is gravid. Guppies are fascinating creatures that can spawn indefinitely after mating once. We’ll ignore the fact that she gives birth to males and females, so that number of guppies above actually means ‘number of female guppies.  Guppies are fascinating, but cruel - they are quite happy to eat each other. It’s hard to track, but we know that as the guppy tank fills we see fewer baby guppies (i.e., per capita production drops as in  ). For a model of guppy dynamics, we will assume This model has been sketched above in the green curves of and  .  For a particular choice of parameters we find the following diagram and iterated solution.    Cobwebbing diagram and iterated solution for , . Left) Updating function and cobwebbing, Right) Iterated solution.   It appears that these solutions converge to a value guppies. Can we do better than this guess? We know that our equilibrium satisfies, Immediately, we should see a few things. First is always a solution to the first equation. Ignoring that, for , we have a positive equilibrium only when so that the logarithm is positive. We now know that for , .  Depending on the intrinsic growth rate ( rmax in the code) of our guppies, we might see oscillatory or non-oscillatory approaches to equilibria. The solution generated by the black updating function (with ) approaches (i.e., it has no nontrivial equilibrium point). Looking again at , try to uncover a relationship between the tendency of the trajectory to oscillate (right panel) and the crossing point of the updating function and resetting line (left panel).    Cobwebbing diagrams and iterated solutions as they depend on the maximal per capita production. Left) A collection of nice updating functions. Right) The corresponding iterated solutions.   "
},
{
  "id": "nonlinear-discrete-time-models-1-2d",
  "level": "1",
  "url": "nonlinear-discrete-time-models-1-2d.html",
  "type": "Section",
  "number": "6.3",
  "title": "Nonlinear discrete-time models (1, 2D)",
  "body": " Nonlinear discrete-time models (1, 2D)   Review: p.c.p. vs. the updating function  Multiplying , which is a function of , by population size gives our updating function, . Then, our model is Some sample per capita production curves and the corresponding updating functions are plotted in  . Notice that we explicitly ignore immigration here.          Notice that there are some major qualitative changes when we compare the lines in the left panel to any of the curves in the right panel. Most importantly, the nonlinear updating function intersects the resetting line more than once. Again, at these intersections This suggests an alternative method to identify equilibria, which might sometimes be pictured more simply:  Equilibria satisfy and we denote them by . Given a model , we can see that equilibria occur at points where . At values of where our per capita production takes a value of one, we have equilibria.      is too steep at perturbations near grow, so solutions diverge from  .     is shallow enough at perturbations near decay, so solutions converge to   .    From our linear theory, we know that when .    Continued analysis of the Ricker Model  Recall, , and Evaluated at the equilibrium point, , We need , see  . Also, is stable when .    Left). is stable for . Right). is stable for . is stable for . Beyond , oscillations emerge around the nontrivial equilibrium.     Left). is stable for . Right). is stable for . is stable for . Beyond , oscillations emerge around the nontrivial equilibrium.         Catalog of models      Discrete logistic or Ricker model Compare to our parameterization     Hassell model    Beverton-Holt model        Summary of 1D nonlinear difference models    Multiple equilibriaConsequence of regulation    Bifurcations Existence of equilibria depends on parameters, stability depends on parameters    Oscillations      "
},
{
  "id": "fig-nonlin-pcp",
  "level": "2",
  "url": "nonlinear-discrete-time-models-1-2d.html#fig-nonlin-pcp",
  "type": "Figure",
  "number": "6.3.1",
  "title": "",
  "body": "   "
},
{
  "id": "fig-nonlin-upd",
  "level": "2",
  "url": "nonlinear-discrete-time-models-1-2d.html#fig-nonlin-upd",
  "type": "Figure",
  "number": "6.3.2",
  "title": "",
  "body": "   "
},
{
  "id": "example-cont",
  "level": "2",
  "url": "nonlinear-discrete-time-models-1-2d.html#example-cont",
  "type": "Example",
  "number": "6.3.3",
  "title": "Continued analysis of the Ricker Model.",
  "body": " Continued analysis of the Ricker Model  Recall, , and Evaluated at the equilibrium point, , We need , see  . Also, is stable when .    Left). is stable for . Right). is stable for . is stable for . Beyond , oscillations emerge around the nontrivial equilibrium.     Left). is stable for . Right). is stable for . is stable for . Beyond , oscillations emerge around the nontrivial equilibrium.       "
},
{
  "id": "discrete-time-with-linear-algebra",
  "level": "1",
  "url": "discrete-time-with-linear-algebra.html",
  "type": "Section",
  "number": "7.1",
  "title": "Discrete-time dynamical systems with linear algebra",
  "body": " Discrete-time dynamical systems with linear algebra  We spent some time on the Nicholson-Bailey model for a few important reasons: largely because it is a great example of the modeling process. The results it generates may be bothersome. But the idea that we told a rough story, then iteratively refined it is the art of mathematical modeling.  Recall our example concerning weekly dandelion dynamics. Previously, we counted only the number of flowering plants present in our yard each week. We can count a bit more carefully, and take advantage of more biological information if we think about the ’structure’ of the population. Ignoring seeds, in reality we have at least a few ways to break down the plant community:     juveniles vs. adults    seedlings vs. vegetative vs. flowering vs. seed-setting    non-reproductive vs. reproductive     We will lump together the seedlings and vegetative plans as non-reproductive and the flowering and seed-setting plants as reproductive . Let be the number of non-reproductive (vegetative) plants in the yard and be the number of reproductive plants in the yard, both at week .  We will use familiar notation for parameters. Since it is challenging to count seeds after they have left the plant, and nobody vacuums seeds from the yard, we’ll focus on the life stages above.       be the number of seedlings generated per plant     be the fraction of seedlings that survive to adulthood     be the fraction of adults that survive     This means we can write This looks like a matrix equation, With a single equation, it was easy enough to determine growth. This is less obvious with a higher dimensional model. Additionally, we might be interested in the following questions:     Will the population grow?    If it grows, how fast is it going to grow?    What is the balance between reproductive and non-reproductive dandelions in the population?     For a plant starting in the non-reproductive state (a one week old plant), we track its lifetime reproduction in the following table:   Starting with a single female, she must survive to adulthood ( ), then every time after survive another week as an adult (a).    Age (Weeks)  Population  Fecundity    1  1  0    2      3       …  …  …    n      …  …  …     Next we append a column for the reproductive value of each age (remembering that our model only tracks two age classes, but once plants flower they could survive indefinitely):   Starting with a single female, she must survive to adulthood ( ), then every time after survive another week as an adult (a).    Age (Weeks)  Population  Fecundity  Value    1  1  0  0    2       3    a    …  …  …  …    n       …  …  …  …     Starting from seedling, the expected lifetime reproduction of a plant is By definition is a weekly survival probability for adult plants, so . Keep this in mind as we press on: Knowing what we do about geometric series, So, when . This is identical to our adult plant -only model result,    Questions    What’s so special about ELR as a measure of growth?   How does ELR relate to eigenvalues?       Answers  For a matrix , like our transition matrix above, a number is an eigenvalue with eigenvector if The eigenvalue reduces the dimension in multidimensional problems. It turns matrix multiplication into scalar multiplication. How do we find eigenvalues?    Linear algebra review  We first want to write our eigenvalue problem as: Then, since is a number, where is the appropriate identity matrix .  Let’s take so that   Eigenvalues solve    Solutions are From here it helps to consider specific examples so we do not have to solve equations containing obtuse algebraic expressions.    Linear discrete-time models (2D)   Question  How do structured and unstructured populations differ? From a one dimensional model ignoring plant developmental stage, where , we wrote a two-dimensional model, where and   Keeping with our example, eigenvalues of are found using This gives Using the quadratic formula,   Suppose we know the initial plant distribution, the solution to our model is First write, , where are constants and are eigenvectors. We are assuming that are linearly independent, thus they form a basis in two-dimensions, such that any other vector can be written as a linear combination. We can compute , And similarly, If we assume that , then We will see how this approximation works at the end of the following example. But, perhaps motivated by this approximation, we see that the magnitude of is important to the growth of the population, both and . The population changes by a factor each generation. It grows if and shrinks if .  Let be the positive eigenvalue, , The positive eigenvalue if , but in general, ! But, if so is , and vice versa. Again, our characteristic polynomial, that governs the eigenvalues is Since , we have and we know that is concave up. If , we know that the leading eigenvalue . Lastly, let’s study the relationships between , and . We’ve already looked at some of the relationships involving . Now, when This is satisfied when , thus . For the reverse, when . We will also look at the relationships between , , and in the example, so that we can actually compute eigenpair.    A matrix model  Recall was the per generation growth rate from the one-equation model. In that model, we made no distinction between plant growth stages, an assumed that all plants were capable of reproducing. When we considered the reproductive schedule of our plants, we derived as a measure of the replacement rate of each individual plant. Let , , , so that, . Also, . When vegetative plants are less likely to mature (small ,  ) weekly adult survivorship, , must increase in order for population growth to occur ( ).    Relationships between , , and , for fixed and (left) or (right) , over a range of adult weekly survival probabilities, .     Relationships between , , and , for fixed and (left) or (right) , over a range of adult weekly survival probabilities, .     Question  What is the effect of population structure (tracking flower types), in growing and shrinking flower populations (see  )?    Answer  Imposing structure reduces the growth rate (relative to ) in growing populations. Imposing structure slows the decay rate (relative to ) in shrinking populations. In this parameterization,  Notice that , so that the population grows.    Left) Weekly temporal dynamics of vegetative and reproductive plants. Right) Stable age distribution and iterated solutions starting from . Initial condition is black dot.   The eigenvector associated with is of the form The eigenvector associated with is of the form     Question  How do the eigenvectors help explain long term population growth (see  )?    Answer  Long-term proportions approach the distribution described by the leading eigenvector. Numbers increase geometrically. Start with a typical initial condition . We first want to express as a linear combination of eigenvectors. Skipping a few calculations, and . Finally we can write, as before. Iterating this solution we wind up with, Since the second term contains a value which is raised to a larger and larger power, its contribution decreases. If we ignore it (at large ),   The population will grow 33% larger each generation, but the proportion of young (non-reproductive) and old (reproductive) plants will remain fixed. This suggests that juvenile (tasty young plants) will outnumber the older flowering plants, specifically, the flowering plants will be 75% the abundance of young plants. Alternatively, young plants will be 33% more abundant than old plants. It might also be useful to use our leading eigenvector approximation, rather than our exact matrix solution. We plot the approximate dynamics of each plant type, as well as the comparison of the exact and approximate solutions in     Left) Approximate dynamics using first eigenpair. Right) Iterated solutions starting from for matrix solutions (open circles) and approximate solutions (closed circles).     "
},
{
  "id": "table-5",
  "level": "2",
  "url": "discrete-time-with-linear-algebra.html#table-5",
  "type": "Table",
  "number": "7.1.1",
  "title": "",
  "body": "     be the number of seedlings generated per plant     be the fraction of seedlings that survive to adulthood     be the fraction of adults that survive    "
},
{
  "id": "table-6",
  "level": "2",
  "url": "discrete-time-with-linear-algebra.html#table-6",
  "type": "Table",
  "number": "7.1.2",
  "title": "Starting with a single female, she must survive to adulthood (<span class=\"process-math\">\\(\\sigma\\)<\/span>), then every time after survive another week as an adult (a).",
  "body": " Starting with a single female, she must survive to adulthood ( ), then every time after survive another week as an adult (a).    Age (Weeks)  Population  Fecundity    1  1  0    2      3       …  …  …    n      …  …  …    "
},
{
  "id": "table-7",
  "level": "2",
  "url": "discrete-time-with-linear-algebra.html#table-7",
  "type": "Table",
  "number": "7.1.3",
  "title": "Starting with a single female, she must survive to adulthood (<span class=\"process-math\">\\(\\sigma\\)<\/span>), then every time after survive another week as an adult (a).",
  "body": " Starting with a single female, she must survive to adulthood ( ), then every time after survive another week as an adult (a).    Age (Weeks)  Population  Fecundity  Value    1  1  0  0    2       3    a    …  …  …  …    n       …  …  …  …    "
},
{
  "id": "example-matrix-model",
  "level": "2",
  "url": "discrete-time-with-linear-algebra.html#example-matrix-model",
  "type": "Example",
  "number": "7.1.4",
  "title": "A matrix model.",
  "body": " A matrix model  Recall was the per generation growth rate from the one-equation model. In that model, we made no distinction between plant growth stages, an assumed that all plants were capable of reproducing. When we considered the reproductive schedule of our plants, we derived as a measure of the replacement rate of each individual plant. Let , , , so that, . Also, . When vegetative plants are less likely to mature (small ,  ) weekly adult survivorship, , must increase in order for population growth to occur ( ).    Relationships between , , and , for fixed and (left) or (right) , over a range of adult weekly survival probabilities, .     Relationships between , , and , for fixed and (left) or (right) , over a range of adult weekly survival probabilities, .   "
},
{
  "id": "fig-SAD",
  "level": "2",
  "url": "discrete-time-with-linear-algebra.html#fig-SAD",
  "type": "Figure",
  "number": "7.1.7",
  "title": "",
  "body": "  Left) Weekly temporal dynamics of vegetative and reproductive plants. Right) Stable age distribution and iterated solutions starting from . Initial condition is black dot.  "
},
{
  "id": "fig-exac-app",
  "level": "2",
  "url": "discrete-time-with-linear-algebra.html#fig-exac-app",
  "type": "Figure",
  "number": "7.1.8",
  "title": "",
  "body": "  Left) Approximate dynamics using first eigenpair. Right) Iterated solutions starting from for matrix solutions (open circles) and approximate solutions (closed circles).  "
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
