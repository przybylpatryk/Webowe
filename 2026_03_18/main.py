#zad 4.1
# it = 1
#
# with open("sygnaly.txt") as f:
#     for x in f:
#         if(it%40 == 0):
#             print(x[9])
#         it += 1
#
# f.close()

# #zad 4.2
# uniqueLetters = []
# max = 0
# word = ""
# with open("sygnaly.txt") as f:
#     for x in f:
#         uniqueLetters.clear()
#         for i in range (len(x)):
#             if x[i] not in uniqueLetters:
#                 uniqueLetters.append(x[i])
#             if i > max:
#                 max = i - 1
#                 word = x
#
# print(word, max)
# f.close()

#zad 4.3
alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'Y', 'Z']
dist = 0

with open("przyklad.txt") as f:
    for x in f:
        for i in range (len(x)):
            for j in range (len(alphabet)):
                if x[i] == alphabet[j]:
                    dist = abs(i-j)
        if dist < 10:
            print(x)

f.close()