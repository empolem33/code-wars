# Given a set of numbers, return the additive inverse of each. 
# Each positive becomes negatives,
#  and the negatives become positives.

def invert(lst):
    box=[]
    for i in lst:
        print(i)
        if i> 0:
            box.append(i*-1)
        else:
            box.append(abs(i))
    return box