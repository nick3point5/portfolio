def score(dice):
    # You need to write this method
    score = 0
    count = [0,0,0,0,0,0]
    if dice == []:
        return score
    for i in range(len(dice)):
        if dice[i] == 1:
            score += 100
            count[0] += 1
            if not count[0]%3:
                score += 700
        elif dice[i] == 2:
            count[1] += 1
            if not count[1]%3:
                score += 200            
        elif dice[i] == 3:
            count[2] += 1
            if not count[2]%3:
                score += 300
        elif dice[i] == 4:
            count[3] += 1
            if not count[3]%3:
                score += 400
        elif dice[i] == 5:
            score += 50
            count[4] += 1
            if not count[4]%3:
                score += 350
        elif dice[i] == 6:
            count[5] += 1
            if not count[5]%3:
                score += 600        
    return score

print(score([1,1,1]))