import json
import utm
import pandas as pd


def readCSV(f):


    # Abre o csv usando apenas as colunas definidas
    data = pd.read_csv(f, sep="\t")[['FISICO_FONTE', 'FONTEX', 'FONTEY', 'NOX', 'NOY']]
    data = data.dropna() #limpa os valores vazios

    postes = []

    for i, row in data.iterrows(): #itera pelas linhas

        try:
            fonte = int(row['FISICO_FONTE']) #essa conversão elimina os postes com plaquetas não int
        except:
            continue

    

        poste = {}

        x = float(row['FONTEX'].replace(',', '.')) # os postes tem seus numeros decimais separados por virgula =(
        y = float(row['FONTEY'].replace(',', '.'))

        nx = float(row['NOX'].replace(',', '.')) # os postes tem seus numeros decimais separados por virgula =(
        ny = float(row['NOY'].replace(',', '.'))

        cord = utm.to_latlon(x, y, 22, 'C')
        ncord = utm.to_latlon(nx, ny, 22, 'C')

        poste['id'] = fonte
        poste['cord'] = cord
        poste['ncord'] = ncord


        print(poste)

        postes.append(poste)

    return postes

def createJSON(data):

    jsonFile = open("data.json", "w")
    jsonString = json.dumps(data, indent=4)
    jsonFile.write(jsonString)
    jsonFile.close()
    print("done")

p = readCSV("data.csv")
createJSON(p)









