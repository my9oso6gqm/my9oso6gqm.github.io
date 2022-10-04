### Api di Binance

Un paio di commenti al codice Python che sto scrivendo per operare su Binance.

```python
def recupero_dati(valuta, limite):
    spot_client = Client(base_url="https://api.binance.com")
    data = spot_client.klines(valuta, "1m", limit=limite)
    df = pd.DataFrame(data)
    df[0] = (pd.to_datetime(df[0],unit='ms'))
    df = df.drop(columns=[6, 7, 8, 9, 10, 11])
    df.columns = ['data', 'apertura', 'massimo', 'minimo', \
    'chiusura', 'volume']
    df["chiusura"] = df["chiusura"].astype(float)
    return df
```

Questa è una funzione che dato in entrata un asset (Binance le definisce così, non picchiatemi) e un numero di minuti restituisce una tabella, in gergo Pandas un Dataframe, popolato dai n dati per un grafico a candele giapponesi.

Nel dettaglio, le righe 2 e 3 scaricano da Binance i dati in formato se non ricordo male Json ma potrei sbagliarmi, e li mettono in una variabile che ho chiamato data e adesso che lo rivedo dovrei italianizzarla. Comunque, dati con una risoluzione a 1 minuti scaricati e messi in una variabile, per esempio 100 dati e poi nella quarta riga la conversione in un Dataframe. E questo è comodo, perchè per convertire il timestamp, togliere delle colonne della tabella che non mi interessano, rinominare alcune colonne e fare pure una convesione di tipi con un Dataframe i comandi necessari sono solo le righe 5, 6, 7, e 8.

```python
def doppia_media_mobile(dati, window_short, window_long):
    segnali = pd.DataFrame(index=dati.index)
    segnali['segnali'] = 0.0
    segnali['chiusura'] = dati['chiusura']
    segnali['media mobile corta'] = dati['chiusura'].rolling \
    (window=window_short,min_periods=1, center=False).mean()
    segnali['media mobile lunga'] = dati['chiusura'].rolling \
    (window=window_long,min_periods=1, center=False).mean()
    segnali['segnali'][window_short:] = np.where(segnali \
    ['media mobile corta'][window_short:] > segnali \
    ['media mobile lunga'][window_short:], 1.0, 0.0)
    segnali['ordini'] = segnali['segnali'].diff()
    return segnali
```

Sempre una funzione, dopo vedrete perchè è comodo strutturare il programma così, sta volta per fare un'analisi dei dati. Nello specifico due medie mobili.
Allora, nelle prime 4 righe preparo un Dataframe dove registrarci i calcoli e i relativi risultati, lo so potrei usare le variabili ma io preferisco sti Dataframe bom. Dunque tutto pronto per i calcoli $\frac{1}{k}\sum_{i=n-k+1}^{n}p_i$ sulle chiusure, riga 5 e 6, due medie una su un periodo corto e una più lunga. In pratica con l'attributo mean sull'attributo rolling otteniamo una media di n chiusure. Riga 7 e 8 rendo machine readble i segnali che si generano dalle due medie.

Il resto è un'iterazione di queste nozioni in sostanza, nel senso, una volta che capiamo come ottenere i dati ed elaborarli abbiamo la possibilità di lavorarci in modo più raffinato. Ma la sostanza è tutta qui. 