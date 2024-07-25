<script setup>
const info1 = [
  {
    title: '1. Caracteristici ale competiției',
    content:
      'Turnu Roșu Challenge este o competiție de alergare cu caracter submontan. Traseul se desfășoară pe poteci marcate în Turnu Roșu și pe dealurile de la poalele munților Făgăraș fiind poarta de intrare spre Munții Făgăraș. Suprafața de alergare a traseelor este formată din: drum forestier, în marea majoritate poteci naturale și pășuni, adică iarbă și pământ. Vârsta minimă pentru înscriere este 18 ani la cursele de Cros și Semimaraton. Toți participanții sunt obligați să completeze formularul de înscriere online și declarația pe proprie răspundere, care atestă luarea la cunoștință a condițiilor și regulilor competiției. Formatul Power Hiking este unul nou, se încurajează participarea oamenilor care vor să parcurgă un traseu într-un ritm mai susținut sau mai lejer,competiția fiind necronometrată'
  },
  {
    title: '3. Înscrierea concurenților',
    content:
      'Înscrierile se vor face doar online completând formularul de înscriere pus la  dispoziție de organizator. Nu se fac înscrieri în ziua concursului și cu o săptămână înaintea evenimentului. Măsura este luată pentru a putea optimiza utilizarea resurselor logistice, pentru a evita risipa sau lipsa unor produse sau servicii pentru concurenții înscriși. ( De exemplu, estimarea produselor alimentare pentru punctele de alimentare, brunch, medalii, tricouri șamd.). Pentru a încuraja participarea locuitorilor din comuna Turnu Roșu de a participa la competiții de alergare montana, înscrierea va fi gratuita la oricare din probe in limita a 30 de locuri.'
  }
];
const info2 = [
  {
    title: '7.1. Ședința tehnică',
    content:
      'O ședință tehnică va fi ținută pentru toți participanții, în ziua concursului. În cursul ședinței tehnice participanții vor fi informați asupra traseului, porțiunilor periculoase, eventualelor modificări, precum și a regulilor de comportament pe care participanții sunt obligați să le respecte. Ședința tehnică va fi ținută la linia de start, recomandând prezența tuturor participanților. Ședința tehnică va avea loc în data concursului cu 30 de minute înainte de start.'
  },
  {
    title: '7.2. Cronometrarea',
    content:
      'Cronometrarea se face la punctul de start, punct intermediar și la punctul de finish, prin notarea timpului. Totodată la finish o să fie o cameră video care o să înregistreze sosirea fiecărui participant. Fiecare participant va purta un număr, acesta nefiind transmisibil. Este responsabilitatea participanților de a purta corect numărul de concurs (pe partea din față).'
  },
  {
    title: '7.3. Timp limită',
    content:
      'Timpul limită pentru parcurgerea traseului de Power Hiking este de 4:00 ore, de la start care va fi la ora 11:10, respectiv ora 15:10. Timp limită parcurgere al traseului de CROS este de 4:00 ore, de la start care va fi la ora 11:00, respectiv ora 15:00.'
  },
  {
    title: '7.4. Timp limită intermediar',
    content:
      'Scopul acestor timpi este de a menaja pe cât posibil voluntarii care sunt în situația de a aștepta în punctele de control și de alimentare, câte-o dată chiar în condiții meteo dificile. Pentru a-i proteja atât pe ei cât și pe participanții la cursele de alergare am stabilit câteva bariere de timp care să elimine posibilitatea prelungirii inutile a duratei expunerii în mediul montan. În cazul în care un alergător nu se încadrează la o barieră de timp, va fi direcționat spre traseul inferior* ca și distanță și va primi timpul de parcurgere al acestuia. Nu va fi eligibil pentru o clasare pe podium la noua cursă chiar dacă timpul îl va poziționa în primii 3. Dacă un concurent refuză să renunțe la traseul ales cu toate că este în afara timpului, îi se va permite finalizarea traseului în afara concursului oficial și pe propria răspundere. Va trebui să predea numărul respectiv să îl îndepărteze și nu va mai beneficia de suportul alergătorului închizător respectiv a serviciilor de asistență din punctele de control și de alimentare.'
  }
];
</script>
<template>
  <div class="sm:w-3/4 lg:w-6/12 mx-auto px-3 container mt-16 font-Poppins mb-10">
    <h1 class="text-4xl md:text-5xl text-center text-gray-800 font-Lucky">Regulament</h1>
    <p class="text-center text-gray-700 mt-6 mb-4">
      Acest regulament se aplică participanților la concursul “Turnu Roșu
      Challenge”. Evenimentul va avea loc în Comuna Turnu Roșu, jud. Sibiu, locul de desfășurare al
      evenimentului fiind spațiul din apropierea Mănăstirii Turnu Roșu.
    </p>
    <section class="p-1" v-for="(item, index) in info1" :key="index">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">{{ item.title }}</h2>
      <p class="text-gray-700 p-1 mt-3 mb-3">{{ item.content }}</p>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold"> 2. Obligațiile participanților </h2>
      <div
        class="text-gray-700 p-1 mt-5 mb-3">
        Participarea la “ Turnu Roșu Challenge” se face pe proprie răspundere, în deplină cunoștință a aptitudinii de a participa la eveniment, a stării de sănătate fizică și mentală. Fiecare participant este responsabil pentru propria securitate și siguranță. Organizatorul, partenerii, sponsorii, voluntarii şi personalul care participă la realizarea evenimentului nu sunt responsabili pentru orice fel de rănire sau pagube de orice natură care pot surveni în timpul sau ca urmare a desfășurării evenimentului. Fiecare participant trebuie să semneze la preluarea numărului de concurs o declarație de proprie răspundere prin care își asumă riscurile ce pot rezulta din participarea la “ Turnu Roșu Challenge” .  Participanții au obligația de a asculta și de a respecta indicațiile/instrucțiunile organizatorului și ale personalului de concurs. Pachetul de înscriere nu poate fi expediat prin poștă în avans. Organizatorul poate interzice luarea startului sau continuarea cursei pentru orice participant, dacă acesta se prezintă în stare de ebrietate, este sub efectul substanțelor dopante sau este în stare de slăbiciune evidentă, boală, epuizare fizică sau psihică.
        <strong>Parcurgerea traseului necesită experiență și unele cunoștințe, cum ar fi:</strong>
      <ul class="list-disc py-2">
        <li>fiecare participant să aibă cel puțin o experiență generală despre concursurile de alergare, fiind pregătit din punct de vedere al condiției fizice;</li>
        <li>fiecare participant să aibă cunoștințe tehnice despre abordarea unui traseu neamenajat prin pădure;</li>
        <li>fiecare participant să fie capabil să urce și să coboare în siguranță o pantă înclinată în condiții dificile;</li>
        <li>fiecare participant ar trebui să dea dovadă de fair-play și să acționeze în consecință atunci când situația o cere;</li>
        <li>fiecare participant ar trebui să știe și să aibă o atitudine care să țină cont de faptul că oricât de multe măsuri de siguranță ar lua organizatorii, nu sunt și nu vor putea fi acoperite toate riscurile rezultate din natura competițiilor, mediul și condițiile în care se desfășoară acestea;</li>
        <li>fiecare participant trebuie să știe că niciun premiu nu este mai presus de sănătatea și viața lui și/sau a altor participanți și să acționeze în consecință pentru a se proteja atunci când simte sau observă un pericol.</li>
      </ul>
      <ul class="list-disc py-2"> <strong>Pericole posibile:</strong>
        <li>accidentări prin alunecare datorate terenului;</li>
        <li>atac animal, câini sau urși;</li>
        <li>accidente cu automobile pe porțiunile asfaltate;</li>
        <li>degerături , hipotermie, insolație, deshidratare; </li>
        <li>orice incident trebuie anunțat la numărul de telefon 0742996598 sau după caz direct la 112 sau la serviciul salvamont;</li>
      </ul>
      </div>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">4. Taxa de participare</h2>
      <div
        class="grid grid-rows-3 grid-cols-3 justify-items-center text-white bg-gray-800 font-bold rounded-xl text-normal lg:text-lg m-4 ml-2"
      >
        <p class="p-2">Semimaraton</p>
        <p class="p-2">Cros</p>
        <p class="p-2">Power Hiking</p>
        <p class="p-2">140 RON</p>
        <p class="p-2">110 RON</p>
        <p class="p-2">90 RON</p>
      </div>
      <p class="text-gray-700 p-1 mt-5 mb-3">
        Taxa de participare se poate achita cu cardul la înscrierea pe racehub.ro
      </p>
      <p class="text-gray-700 p-1 mt-3 mb-3">
        În caz de neprezentare la start, abandon sau retragere din orice motiv, taxa de participare
        nu se returnează și nu este valabilă la un concurs ulterior, precum nici kitul de înscriere
        nu va putea fi ridicat ulterior. În cazul anulării competiției în caz de forță majoră sau
        din motive care nu depind de organizator, taxa de participare nu se returnează.
        Organizatorul nu va suporta în niciun fel eventualele costuri adiacente ale participanților
        (transport, cazare, masă, etc.).
      </p>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold"> 5. Categorii de participare </h2>
      <table
        class="bg-gray-800 text-white border-none font-normal sm:font-semibold md:font-bold rounded-xl text-xs md:text-lg m-4 ml-2"
      >
        <thead>
          <tr>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">Cursă/Vârstă</th>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">18-35</th>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">36-49</th>
            <th class="py-2 px-2 sm:px-4 border-b border-gray-700">50+</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-2 sm:px-4">Cros</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td class="py-2 px-2 sm:px-4">Semimaraton</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
            <td class="py-2 px-2 sm:px-4">M/F</td>
          </tr>
        </tbody>
      </table>
      <p class="text-gray-700 p-1 mt-5 mb-3">
        Se premiază fiecare categorie de vârstă indiferent de numărul de participanți înscriși.
      </p>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">6. Premii</h2>

      <p class="text-gray-700 p-1 mt-5 mb-3">
        <ul><strong>Semimaraton</strong>
          <li>– se premiază primele 3 locuri la OPEN M/F ;</li>
          <li>– se premiază primele 3 locuri la fiecare categorie M/F ;</li>
          <li>– dacă unul din concurenți a fost premiat la categoria OPEN, acesta nu mai poate fi premiat și la categorie;</li>   
        </ul>
      </p>
      <p class="text-gray-700 p-1 mt-5 mb-3">
        <ul><strong>Cros</strong>
          <li>– se premiază primele 3 locuri la OPEN M/F ;</li>
          <li>– primele 5 locuri la OPEN vor fi trecute pe LEADERBOARD</li>
          <li>– se premiază primele 3 locuri la fiecare categorie M/F ;</li>
          <li>– dacă unul din concurenți a fost premiat la categoria OPEN, acesta nu mai poate fi premiat și la categorie;</li>
        </ul>
      </p>
      <p class="text-gray-700 p-1 mt-5 mb-3"> Premile vor consta în bunătăți din cămara noastră și trofee</p>
    </section>
    <section class="p-1">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">7. Proceduri de concurs</h2>
    </section>
    <section class="p-1" v-for="(item, index) in info2" :key="index">
      <h2 class="text-xl md:text-2xl mt-10 text-gray-700 font-semibold">{{ item.title }}</h2>
      <p class="text-gray-700 p-1 mt-3 mb-3">{{ item.content }}</p>
    </section>
  </div>
</template>
