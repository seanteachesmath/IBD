setwd("~/Github/IBD/assets/")
pdf("logistic.pdf", height = 5, width = 5)
par(mar=c(4.1, 4.1, 1.1, 1.1), yaxs = 'i')
parms <- c(r = 0.1, K=100)
f <- with(as.list(parms),function(x) r*x*(1-x/K))
eq <- with(as.list(parms), c(0, K))
fmax <- with(as.list(parms), f(K/2))
fmin <- with(as.list(parms), f(K+20))
plot(f, xlim = c(0, parms['K']+20), ylim = c(fmin, 1.1*fmax), axes=F, xlab = "", ylab="", lwd = 2)
abline(h=0)
points(eq, eq*0, pch = 21, bg = c("white", "black"), cex=1.5)
for(i in seq(0, 120, by = 10)){
	arrows(i+2.5, 0, i+7.5, 0, length = abs(f(i+5))/(2.5*fmax), code = 1.5+0.5*sign(f(i+5)))
}
axis(1, c(0, parms['K']), c(expression(0), expression(K)), font = 2, cex.axis = 1.5)
axis(2, c(0), c(expression(0)), font = 2, cex.axis = 1.5, las = 1)
box()
mtext(expression(N), 1, line=2, font=2, cex=2)
mtext(expression(frac(dN,dt)), 2, line=1, font=2, cex=2, las=1, at = fmax/2)
dev.off()

parms <- c(r = 0.1, K=100, h = 1)

for(hi in c(0, 2, 3, 4, 2*parms['r']*parms['K']/4)){
png(paste("logistic-constant-",hi,".png", sep=''), height = 680, width = 680)
par(mar=c(4.1, 4.1, 1.1, 1.1), yaxs = 'i')
parms['h'] <- hi/2
f <- with(as.list(parms),function(x) r*x*(1-x/K) - h)
eq <- with(as.list(parms), K/2 + c(-sqrt(K^2/4-h*K/r), sqrt(K^2/4-h*K/r)))
fmax <- with(as.list(parms), f(K/2)+h)
fmin <- with(as.list(parms), f(K+20)+h)
plot(f, xlim = c(0, parms['K']+20), ylim = c(fmin, 1.2*fmax), axes=F, xlab = "", ylab="", lwd = 2)
abline(h=0)

for(i in seq(0, 120, by = 10)){
	if(fmax>0)	arrows(i+2.5, 0, i+7.5, 0, length = abs(f(i+5))/(2.5*fmax), code = 1.5+0.5*sign(f(i+5)))
}
points(eq, eq*0, pch = 21, bg = c("white", "black"), cex=1.5)
axis(1, c(0, parms['K']), c(expression(0), expression(K)), font = 2, cex.axis = 1.5)
axis(2, c(0), c(expression(0)), font = 2, cex.axis = 1.5, las = 1)
box()
mtext(expression(N), 1, line=2, font=2, cex=2)
mtext(expression(frac(dN,dt)), 2, line=1, font=2, cex=2, las=1, at = abs(fmax)/2)
dev.off()
}



parms <- c(r = 0.1, K=100, h = 0.01)

for(hi in c(10, 6, 4, 2)){
png(paste("logistic-prop-",hi,".png", sep=''), height = 680, width = 680)
par(mar=c(4.1, 4.1, 1.1, 1.1), yaxs = 'i')
parms['h'] <- parms['r']/hi
f <- with(as.list(parms),function(x) r*x*(1-x/K) - h*x)
eq <- with(as.list(parms), c(0, K*(1-h/r)))
fmax <- 4.5#with(as.list(parms), f(K*(1-h/r)/2) + K*(h-r)^2/(4*r))
fmin <- -3#with(as.list(parms), f(K+20) + h*(K+20))
plot(f, xlim = c(0, parms['K']+20), ylim = c(fmin, 1.2*fmax), axes=F, xlab = "", ylab="", lwd = 2)
abline(h=0)
print(parms['h'])
for(i in seq(0, 120, by = 10)){
	if(fmax>0)	arrows(i+2.5, 0, i+7.5, 0, length = abs(f(i+5))/(2.5*fmax), code = 1.5+0.5*sign(f(i+5)))
	#print(c(fmin, fmax))
}
points(eq, eq*0, pch = 21, bg = c("white", "black"), cex=1.5)
axis(1, c(0, parms['K']), c(expression(0), expression(K)), font = 2, cex.axis = 1.5)
axis(2, c(0), c(expression(0)), font = 2, cex.axis = 1.5, las = 1)
box()
mtext(expression(N), 1, line=2, font=2, cex=2)
mtext(expression(frac(dN,dt)), 2, line=1, font=2, cex=2, las=1, at = abs(fmax)/2)
dev.off()
}

png("bif-const.png", height = 680, width = 680)
par(mar=c(4.1, 4.1, 1.1, 1.1), xaxs = 'i')
plot(NULL, xlim = c(0, 4), ylim = c(0, parms['K']), xlab="", ylab="", axes=F)
plot(with(as.list(parms[c("r", "K")]), function(h)K/2 + sqrt(K^2/4-h*K/r)), xlim = c(0, parms['r']*parms['K']/4), add=T, lwd=3, col = "blue")

plot(with(as.list(parms[c("r", "K")]), function(h)K/2 - sqrt(K^2/4-h*K/r)), xlim = c(0, parms['r']*parms['K']/4), add=T, lwd=3, lty = 3, col = "red")


legend("topright", c("Stable", "Unstable"), lwd=3, lty = c(1, 3), col = c("blue", "red"), cex = 1.5)

axis(2, c(0, parms['K']), c(expression(0), expression(K)), font = 2, cex.axis = 1.5, las = 1)
axis(1, c(0, parms['r']*parms['K']/4), c(expression(0), expression(h[crit])), font = 2, cex.axis = 1.5, las = 1)
box()
mtext(expression(N^'*'), 2, line=2, font=2, cex=2, las = 1)
mtext(expression(h), 1, line=1, font=2, cex=2, las=1, at = 4)
dev.off()

png("bif-prop.png", height = 680, width = 680)
par(mar=c(4.1, 4.1, 1.1, 1.1), xaxs = 'i')
plot(NULL, xlim = c(0, 2*parms['r']), ylim = c(-10, parms['K']), xlab="", ylab="", axes=F)
plot(with(as.list(parms[c("r", "K")]), function(h)K*(1-h/r)), xlim = c(0, parms['r']), add=T, lwd=3, col = 'blue')
plot(with(as.list(parms[c("r", "K")]), function(h)0*h), xlim = c(0, parms['r']), add=T, lwd=3, lty = 3, col = "red")
plot(with(as.list(parms[c("r", "K")]), function(h)K*(1-h/r)), xlim = c(parms['r'], 2*parms['r']), add=T, lwd=3, lty = 3, col = "red")
plot(with(as.list(parms[c("r", "K")]), function(h)0*h), xlim = c(parms['r'], 2*parms['r']), add=T, lwd=3, col = "blue")

legend("topright", c("Stable", "Unstable"), lwd=3, lty = c(1, 3), col = c("blue", "red"), cex = 1.5)
axis(2, c(0, parms['K']), c(expression(0), expression(K)), font = 2, cex.axis = 1.5, las = 1)
axis(1, c(0, parms['r']), c(expression(0), expression(h[crit])), font = 2, cex.axis = 1.5, las = 1)
box()
mtext(expression(N^'*'), 2, line=2, font=2, cex=2, las = 1)
mtext(expression(h), 1, line=1, font=2, cex=2, las=1, at = 2*parms['r'])
dev.off()

library(deSolve)
harvestMod <- function(t, x, parms)  {
  with(as.list(c(parms, x)), {
    dN <- r*N*(1 - N/K) - h*N
    res <- list(c(dN))})}

parms <- c(r = 0.1, K = 100, h = 0.00)
times <- seq(0, 100, by = 0.1)
xstart <- c(N = 10)
out <- as.data.frame(lsoda(y = xstart, times = times, func = harvestMod, parms = parms))


png("logistic-sol.png", heigh = 680, width = 680)
par(mar=c(4.1, 5.1, 1.1, 1.1), xaxs = 'i')
plot(out, type = 'l', ylim = c(0, 120), lwd = 3, las = 1, xlab="", ylab="", cex.axis=1.1)
mtext(expression(t), 1, line = 2, cex=2)
mtext(expression(N(t)), 2, line = 2, cex=2)

xstart <- c(N = 120)
out <- as.data.frame(lsoda(y = xstart, times = times, func = harvestMod, parms = parms))
lines(out, col = "gray", lwd=3)
xstart <- c(N = as.numeric(parms['K']/2))
out <- as.data.frame(lsoda(y = xstart, times = times, func = harvestMod, parms = parms))
lines(out, col = "gray", lwd = 3)
abline(h= parms['K'], col = "blue", lwd = 3)
abline(h= 0, col = "red", lwd = 3)

dev.off()