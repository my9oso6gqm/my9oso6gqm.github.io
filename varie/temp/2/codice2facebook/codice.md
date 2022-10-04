```python
import statistics
from binance.spot import Spot as Client
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import time

def dati(valuta, limite):
    client = Client(base_url = 'https://api.binance.com')
    data = client.klines(valuta, '1m', limit = limite)
    df = pd.DataFrame(data)
    df[0] = (pd.to_datetime(df[0], unit = 'ms'))
    df = df.drop(columns = [6, 7, 8, 9, 10, 11])
    df.columns = ['data', 'apertura', 'massimo', 'minimo', 'chiusura', 'volume']
    df['chiusura'] = df['chiusura'].astype(float)
    return df

dati = dati('BTCUSDT', 60)

def doppia_media_mobile(dati,window_short,window_long):
    segnali = pd.DataFrame(index = dati.index)
    segnali['segnali'] = 0.0
    segnali['chiusura'] = dati['chiusura']
    segnali['media mobile corta'] = dati['chiusura'].rolling(window = window_short,min_periods = 1,center = False).mean()
    segnali['media mobile lunga'] = dati['chiusura'].rolling(window = window_long,min_periods = 1,center = False).mean()
    segnali['segnali'][window_short:] = np.where(segnali['media mobile corta'][window_short:] > segnali['media mobile lunga'][window_short:],1.0,0.0)
    segnali['ordini'] = segnali['segnali'].diff()
    return segnali

dati_doppia_media_mobile = doppia_media_mobile(dati, 3, 9)

def grafico(dati):
    fig = plt.figure(figsize = (15, 15), dpi = 80)
    ax1 = fig.add_subplot(111, ylabel = 'Valuta in $')
    dati['chiusura'].plot(ax = ax1, color = 'g', lw = 2., legend = True)
    dati['media mobile corta'].plot(ax = ax1, color = 'r', lw = 2., legend = True)
    dati['media mobile lunga'].plot(ax = ax1, color = 'b', lw = 2., legend = True)
    ax1.plot(dati.loc[dati.ordini == 1.0].index, dati['chiusura'][dati.ordini ==  1.0], '^', markersize = 7, color = 'k')
    ax1.plot(dati.loc[dati.ordini == -1.0].index, dati['chiusura'][dati.ordini ==  -1.0], 'v', markersize = 7, color = 'k')
    plt.legend(['Chiusura', 'Media mobile corta', 'Media mobile lunga', 'Compra', 'Vende'])
    plt.title('Doppia SMA')
    plt.show()

grafico(dati_doppia_media_mobile)

key = ''
secret = ''

compra = {
    'symbol': 'BTCUSDT', 
    'side': 'BUY', 
    'type': 'MARKET', 
    'quantity': 0.002, 
}

vendi = {
    'symbol': 'BTCUSDT', 
    'side': 'SELL', 
    'type': 'MARKET', 
    'quantity': 0.002, 
}

def compra_vendi(dati):
    client = Client(key, secret, base_url = 'https://testnet.binance.vision')
    if dati['ordini'].iat[-1] == 1:
        client.new_order(**compra)
    elif dati['ordini'].iat[-1] == -1:
        client.new_order(**vendi)

for x in range(0, 60):
  dati = recupero_dati('BTCUSDT', 60)
  dati_doppia_media_mobile = doppia_media_mobile(dati, 3, 9)
  compra_vendi(dati_doppia_media_mobile)
  time.sleep(60)

def rapporto():
  dati_rapporto = client.my_trades('BTCUSDT')
  df_rapporto = pd.json_normalize(dati_rapporto)
  return df_rapporto

rapporto()
```
