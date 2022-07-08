from poste import Poste

import csv

file = open('data.csv')

csvreader = csv.reader(file)

postes = []

for row in csvreader:

    p = row[0].split(";")

    if p[1] == "lat":
        continue

    for i in range(0, len(p)):
        p[i] = float(p[i])


 
    poste = Poste(p[0], p[1], p[2])
 
    postes.append(poste)


for i in postes:
    print(f"id: {i.id} x: {i.x_cord} y: {i.y_cord}")