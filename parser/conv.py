import csv
import json

def getData(path):
    file = open(path, mode='r', encoding='UTF-8-sig')

    csvreader = csv.DictReader(file)

    postes = []

    for row in csvreader:
        print(row)
        val = row["id;x;y"].split(";")
        n_row = {}

        n_row['id'] = val[0]
        n_row['x'] = val[1]
        n_row['y'] = val[2]

        print(n_row)

        postes.append(n_row)  
        
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
    jsonString = json.dumps(data, indent=4)
    jsonFile.write(jsonString)
    jsonFile.close()
    print("done")


createJSON(getData("./data.csv"))