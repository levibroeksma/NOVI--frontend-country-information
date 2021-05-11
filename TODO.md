# Stappenplan

## Vraag 1: Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt. Tip: Als de de documentatie bekijkt en op async zoekt, vindt je een voorbeeld van een GET-request.

1. Maak een knop in de HTML
2. Sla de referentie naar de HTML knop op in de JS
3. Zet een event-listener (click) op de knop en verwijs naar de functie (`searchCountry`)
4. Declareer de functie `searchCountry`
5. Volg de stappen van het maken van een request om de data over België op te halen

## Vraag 2: Maak op basis van de response de volgende string en log dit in de console: [country-naam] is situated in [subarea-name]. It has a population of [amount] people.

1. Check in de console hoe jouw data eruit ziet (is het een array? Is het een object?)
2. Probeer eerst even alle data die je nodig hebt apart in de console te loggen.
3. Voeg alle data samen tot één string en sla die op in een variabele

## Vraag 4: Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:

1. valuta: and you can pay with: [currency]'s
2. valuta's: and you can pay with [currency]'s and [currency]'s

1. Declareer een aparte functie die een array van currencies verwacht
2. Loop over de array heen en maak op basis van de lengte een string
3. Return het resultaat
4. Test of dit werkt door vanuit `searchCountry` functie deze functie aan te roepen en hieraan de currencies van België mee te geven

## Vraag 5: Check of alles nog steeds werkt als je de gegevens over Aruba of Duitsland ophaalt!

## Vraag 6: Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
- 1 taal: They speak [language]
- 2 talen: They speak [language] and [language]
- 3 talen: They speak [language], [language] and [language]
- etc.

1. Declareer een functie die een array van talen verwacht (string)
2. Loop over de array heen en maak op basis van de lengte van de array een string

## Vraag 7: Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM:

1. Maak een container element in de HTML
2. Sla de referentie (getElementByID) op in de JS
3. Maak een image-element in JS
4. Maak een h1-element in JS
5. Maak nog drie p-elementen voor de beschrijvende tekst in JS
6. Stop de strings die je met bovenstaande functies hebt gegenereerd als `textContent` op de tekst-elementen
7. Zet een `src`-attribute op het image-element, met de waarde van de link van het vlaggetje (en een `alt`!)
8. Voeg de container-elementen één voor één toe met `appendChild`

### Om een request te kunnen maken hebben we nodig: 
- Kijk naar welk endpoint/uri wij een request willen maken en wat voor een soort request we nodig hebben
- Axios installeren
- Importeer axios
- maak een asynchrone functie
- Maak een variabele waarin, met het `await` keyword, een `axios.get()` request wordt gemaakt naar het juiste endpoint
- Check yourself before you wreck yourself! Wat krijgen we terug? Log het in de console!
- Doe iets met de data (opslaan in een variabele o.i.d.)
- Kijk hoe je de juiste data uit de response krijgt
- Maak een try / catch blok met alle voorgaande code in de try.
