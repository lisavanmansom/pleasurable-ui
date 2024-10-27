> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

Voor deze opdracht heb ik een webstie voor Tumi Mundo gebouwd. Ik ben verder gegaan met de eerste "lessons" pagina mobile first gebouwd met daarbij een werkend menu. Vanuit dit menu kan je op de verschillende pagina's komen van dit project. Op de "lessons" pagina staan playlist en verhalen die je vanuit deze pagina verder kan bekijken.


<img width="1000" alt="Scherm­afbeelding 2024-10-27 om 09 09 22" src="https://github.com/user-attachments/assets/c58d4668-1577-4226-a7f4-4a001cdba299">



https://pleasurable-ui-1.onrender.com

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

Voor deze website is gebruik gemaakt van van Node, Express en EJS. Node maakt het mogelijk om server-side gebruik te maken van Javascript. Express is een webapplicatieframework voor Node.js. Het wordt vaak gebruikt in combinatie met Node voor het bouwen van webapplicaties en API's. Door het gebruiken van Express in combinatie met Node kun je makkelijker routes definiëren en HTTP verzoeken afhandelen. EJS, ook wel Embedded Javascript, is een template-engine voor Node.js en JavaScript. EJS laat toe om direct in de HTML-bestanden stukjes Javascript te gebruiken zoals een loop om gegevens uit een database te tonen. EJS neemt deze code en maakt er uiteindelijk HTML van dat naar de browser wordt gestuurd, zodat gebruikers de webpagina kunnen zien zoals bedoeld. Daarnaast maak ik gebruik van client side Javascript voor (micro)interacties en CSS.

## Userstory

Als gebruiker wil ik een playlist kunnen markeren als favoriet. Dit kan de gebruiker doen door op het hartje te klikken in een playlist. De playlist verschijnt vervolgens dan in de 'Liked playlists'.

## Kenmerken

Bij deze leertaak heb ik gebruik gemaakt van het principe Progressive Enhancement. Dit houdt in dat je werkt in verschillende lagen. De 3 lagen:

1. Core functionality: de content laag (bijv. HTML)
2. Layout as an enhancement: de presentatie laag (bijv. basic CSS)
3. Enhance!: de laatste laag (bijv. extra client-side Javascript)

Bij deze leertaak heb ik gebruik gemaakt van progressive enhancement. Door progressive enhancement te gebruiken zorg je ervoor dat de 1e laag altijd voor iedereen werkt, ook als de andere lagen niet meer werken.

Ik ben beggonen met het maken van de HTML, ik heb een aantal toevoegingen gedaan deze sprint, zoals een allstories pagina. Voordat ik begin met CSS of Javascript zorg ik ervoor dat alle HTML en EJS correct gerenderd is. Vanuit daar begin ik met het toevoegen van de CSS. Ik heb in CSS gebruik gemaakt van scrollbar-width: none en heb ik ook ::-webkit-scrollbar display: none; gezet zodat het in alle browser hetzelfde eruit ziet. Voor de POST functie ben ik begonnen met het schrijven van de HTML, vervolgens heb ik gezorgd dat de interactie goed werkend is via de server. Toen dat correct was ging ik verder met de CSS en overige enhancements zoals succes states en empty states. Verder heb ik ook buttons die werkend zijn met Java, als java uitstaat dan zien deze buttons niet zichtbaar omdat ze dan geen functie hebben. Tot slot heb ik @supports met oklch in de achtergronden toegepast. Als het niet wordt gesupport door de browser dan komt er een standaard gradient te zien die door de browsers wordt geaccepteerd.


<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
* Fork deze repository;
* Clone de repository op uw eigen apparaat;
* Gebruik een editor naar keuze.
* Installeer NodeJs
* Run de command npm install
* Run de command npm start
* Klik op de localhost link en begin met coden!

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
