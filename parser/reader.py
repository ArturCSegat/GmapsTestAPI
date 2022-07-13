import json
import utm
import pandas as pd


def readCSV(f):
    data = pd.read_csv(f, sep="\t")[['FISICO_FONTE', 'FONTEX', 'FONTEY']]
    data = data.dropna()

    postes = []

    for i, row in data.iterrows():

        try:
            fonte = int(row['FISICO_FONTE'])
        except:
            continue

    

        poste = {}

        x = float(row['FONTEX'].replace(',', '.'))
        y = float(row['FONTEY'].replace(',', '.'))

        cord = utm.to_latlon(x, y, 22, 'C')

        poste['id'] = fonte
        poste['cord'] = cord


        print(poste)

        postes.append(poste)

    return postes

def createJSON(data):

    jsonFile = open("data.json", "w")
    jsonString = json.dumps(data, indent=4)
    jsonFile.write(jsonString)
    jsonFile.close()
    print("done")

p = readCSV("a.csv")
createJSON(p)









