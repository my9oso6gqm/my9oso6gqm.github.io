from scipy import optimize

var("x")

def fun(x):
    z = 6000-1000*(1+x)*((1+x)**5-1)/x
    return z
y = optimize.newton(fun,0.1)

print (y)
