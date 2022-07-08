import csv
import json

def getData(path):
    file = open(path)

    csvreader = csv.reader(file)

    postes = []

    for row in csvreader:

        p = row[0].split(";")

        if p[1] == "lat":
            continue

        poste = {int(p[0]) : (float(p[1]), float(p[2]))}

        postes.append(poste)



        
    return postes

"""         p = row[0].split(";")

        if p[1] == "lat":
            continue

        for i in range(0, len(p)):
            p[i] = float(p[i])


    
        poste = Poste(p[0], p[1], p[2])
    
        postes.append(poste) """




def createJSON(data):

    jsonFile = open("data.json", "w")

    for i in data:
        jsonString = json.dumps(i, indent=1)
        jsonFile.write(jsonString)
        
    jsonFile.close()
    print("done")


createJSON(getData("./data.csv"))