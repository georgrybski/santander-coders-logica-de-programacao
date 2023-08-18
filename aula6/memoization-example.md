### Antes da memoização / cashing:

```typescript
    consultarMunicipiosPorEstado(estado: Estado): Observable<Municipio[]> {
        const queryParams = `siglaEstado=${estado.sigla}`;
        return this.http.get<Municipio[]>(`${environment.URL_BASE}/municipio?${queryParams}`).pipe(
            map(municipios => municipios.sort((a, b) => a.nome.localeCompare(b.nome)))
        );
    }
```

### Depois da memoização / cashing:

```typescript

    consultarListaOrdenadaMunicipiosPorEstado(estado: Estado): Observable<Municipio[]> {
        const queryParams = `siglaEstado=${estado.sigla}`;
    
        // Verifica se os dados para esta consulta já estão no cache
        if (this.cache.has(queryParams)) {
            return of(this.cache.get(queryParams)); // Retorna os dados em cache envoltos em um Observable
        }
    
        // Se não estiver no cache, busca na API
        return this.http.get<Municipio[]>(`${environment.URL_BASE}/municipio?${queryParams}`).pipe(
            map(municipios => municipios.sort((a, b) => a.nome.localeCompare(b.nome))),
            tap(municipiosOrdenados => {
                // Guarda o resultado ordenado no cache para uso futuro
                this.cache.set(queryParams, municipiosOrdenados);
            })
        );
    }

```