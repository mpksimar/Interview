def fib(x): # Brute Force method Time Complexity == 2^n
    if x==0:
        return 0
    if x==1:
        return 1
    else:
        return fib(x-1) + fib(x-2)
    
    
print(fib(8))








def fib_dp(x): #Dynamic programming approach for fib series and O(n)== O(n)
    
    a= [0,1]
    num = 2
    if x<=1:
        return a[x]
    while(num<=x):
        a.append(a[num-1] + a[num-2])
        num += 1
        
    return a[num-1]

print(fib_dp(6))

