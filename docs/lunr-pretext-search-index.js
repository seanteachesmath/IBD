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
