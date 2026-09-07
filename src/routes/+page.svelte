<script lang="ts">
    import image from "$lib/assets/selfie.jpg"
  import Card from "$lib/components/Card.svelte";
</script>

<Card class="flex preset-filled-surface-200-800">
   <div class="m-auto">
        <h1 class="h1">Sivert</h1>
        <h1 class="h1">Lysnes</h1>
    </div>
    <img src={image} alt="Selfie av meg" class="w-32 rounded-full">
</Card>

<Card>
    <h2 class="h2 pb-6">Om meg</h2>
    <p class="pb-4">Jeg er utdannet dataelektroniker som nå studerer applikasjonsutvikling på NTNU. Jeg er vant til å jobbe med varierte oppgaver, og har blitt omtalt som "kontorets potet". Utover dette jobber jeg også mye med mennesker, og har vært alt fra støttekontakt til mentor til assistent i hjemmetjenesten.</p>
    <p class="pb-4">Jeg har en lidenskap i å utvikle sikre og åpne systemer som hele samfunnet kan dra nytte av. For ofte har jeg sett sikkerhet bli omtalt som noe man gjør i etterkant.</p>
    <p class="pb-4">Jeg har jobbet mest i embedded og behersker de tekniske detaljene godt. Jeg har alltid vært veldig interresert i å utvikle IoT systemer som er lett for forbrukere å utvikle egne integrasjoner for, samtidig som de er trygge for eksterne angrep.</p>
</Card>

<Card>
    <h2 class="h2 pb-6">Hva du finner her</h2>

    <div class="flex flex-col">
        <span class=""> > <a href="/projects" class="anchor" tabindex="0"> En oversikt over tidligere og nåværende prosjekter.</a> </span>
         <span class=""> > <a href="/skills" class="anchor" tabindex="0"> En oversikt over hvilke kompetanse jeg har i forskjellige felt innenfor teknologi.</a></span>
         <span class=""> > <a href="/blog" class="anchor" tabindex="0" > Refleksjoner og kommentarer på kodeparadigmer og teknologi.</a></span>
    </div>
</Card>


<Card>
    <h2 class="h2 pb-6">Mine mål</h2>

    <p class="pb-4">Mitt mål med utdanningen er å ende opp i en rolle der jeg kan undervise, instruere og samtidig utvikle programvare. Jeg ønsker å fremme teknologi som fagfelt, og sørke for et sikkerhetsfokusert yrkesmiljø for fremtiden. I førsteomgang skal jeg senere ta en utdanning innen pedagogikk, men jeg har tenkt å jobbe med programvare- og applikasjonsutvikling i tillegg.</p>
</Card>

<Card>
    <h2 class="h2 pb-6">Min ideelle arbeidsplass</h2>

    <p class="pb-4">Min ideelle arbeidsplass er en arbeidsplass som bygger på en sterk sikkerhetskultur, samtidig som jeg får muligheten til å innovere og lære. En arbeidsplass der oppgaver blir tildelt ikke bare for det du kan, men også det du kan lære.</p>
</Card>