import pandas as pd
from sqlalchemy import create_engine
import pymysql

database_url = "mysql+pymysql://root:admin@localhost:3306/estudantes"

engine = create_engine(database_url)

df = pd.read_sql("SELECT * FROM notas_estudantes;", engine)

print(df.head())
