import csv
import os
filepath = os.path.dirname(__file__)
openfile = open(filepath+'/game_list.csv','r')
reader = csv.reader(openfile)
for n in reader:
    print(n)