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
  "body": " Single differential equation models  We begin with a few traditional (and a few not so traditional) population models in the form of single differential equations. This provides an opportunity to introduce some modeling ideas and to practice some techniques from calculus and differential equations.  We will often use three related graphs: the phase line diagram (a plot of the derivative against the function value), the solutions (a plot of the value against time), and a bifurcation diagram (a plot of the equilibrium against a parameter of interest).    Logistic growth      Logistic growth with constant harvesting  With a slight modification to the logistic growth equation we can study the impact of a single, relatively simple term on the analysis and the outcome. We use with harvesting rate . We will imagine the parameters and as being out of our control, but as being something we might hope to control.  A common approach is to draw and analyze phase lines, compute equilibria, sketch sample solutions, assess stability analytically, verify that everything makes sense, and summarize what we learned with a bifirucation diagram. It sometimes helps with one step to do another in parallel, for example, the equilibria are relevant to the phase plane.   Phase line analysis of the constant harvesting model  The right-hand side of the differential equation is a quadratic function of . This is similar to the phase line for the regular logistic growth model, but as grows, the parabola is shifted down.    Equilibrium analysis of the constant harvesting model  The right-hand side of the differential equation is a quadratic function of . We cannot factor, and instead can only rely on the quadratic formula - it could be worse, but it's not great. To get anywhere in the next step, it's helpful to expand the quadratic to . From there we apply the quadratic formula,   For real-valued solutions we need or , in words, must be small. When , the equilibria are and (consistent with the basic logistic growth model). When , the equilibria collide at . In between, equilibria are described by the upper and lower halves of a sideways parabola that shares these three points in common.     Logistic growth with proportional harvesting   Admittedly, that last section was kind of a nightmare, and the change we are about to make might convince you things are only going to get worse. Stick with me.  You may have noticed some potential drawbacks of constant harvesting. Chiefly, driving small populations to extinction. Instead of a constant harvesting rate, we will now take the term to be porportional to population density, that is . Again, that is a more complicated term than before, but the analysis will go much more smoothly.   Phase line analysis of the proportional harvesting model  The right-hand side of the differential equation is a quadratic function of . This is similar to the phase line for the regular logistic growth model, but as grows, the parabola is again altered. Despite the model looking more complicated than in the previous section, the analysis proceeds more smoothly.    Equilibrium analysis of the proportional harvesting model  The right-hand side of the differential equation is a quadratic function of . This is similar to the equation for the regular logistic growth model, but as grows, the parabola is again altered. Despite the model looking more complicated than in the previous section, the analysis proceeds more smoothly.  First, we can factor the right-hand side as .    Stability analysis of the proportional harvesting model  The stability of an equilibrium is determined by the sign of the derivative of right-hand side of the differential equation when evaluated at the equilibrium. Here the right-hand side is a quadratic function of , so the derivative, with respect to is . At , . At , .  When , and the nontrivial equilibrium is stable, while and the trivial population is stable. The population equilibrates to some positive number when harvesting is week. In the extreme, when , there is no harvesting and the model is equivalent to the logistic model in terms of equilibria and stability. Otherwise, for , signs and stability are reversed and all positive initial conditions lead to extinction.     "
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
