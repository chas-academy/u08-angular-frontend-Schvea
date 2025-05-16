# U08

Detta projekt är en frontendapplikation skapad med Angular (version 19.2.10) som kommunicerar med ett egetutvecklat REST-API från uppgift U05. Applikationen erbjuder fullständig CRUD-funktionalitet (Create, Read, Update, Delete) och har utvecklats med skalbarhet, tillgänglighet och responsivitet i fokus.

Projektet är strukturerat med komponenter, services för API-kommunikation, routing för navigering och använder RxJS för reaktiv datahantering. Syftet är att bygga en modern, underhållbar och lättförståelig applikation som går att vidareutveckla av andra utvecklare i framtiden.


## Local server

För att starta din localhost kör:

```bash
ng serve
```

När servern körs öppna http://localhost:4200/ i din webbläsare.

## Skapa nya komponenter

```bash
ng generate component komponent-namn
```

## Bygg applikationen

```bash
ng build
```

Byggfilerna sparas i dist/-katalogen.

## Tester

För att köra testerna:

```bash
ng test
```

## End-to-end testing 

För end-to-end testing kör:

```bash
ng e2e
```

## Mappar och filer

Components = Innehåller alla vy komponenter

Models = Interface för datatyper

Services = Innehåller services för API anrop

Routes = Routing konfiguration

index.html = Startpunkt för appen

Styles.css = Stilmallar

Tester ligger i filerna med spec.ts i slutet av namnen. Tex detail.component.spec.ts