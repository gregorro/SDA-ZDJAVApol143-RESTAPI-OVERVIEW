# 1 Instalacja Angulara:
- Zainstalowanie Node.js
- Instalacja Angular CLI - npm i @angular/cli -g
  * W przypadku nie powodzenia instalacji globalnej i braku dostepu do polecenia globalnego ng, możemy uzyc polecenia npx -p @angular/cli ng

# 2 Tworzenie projektu:
- Wywołanie metody ng new [nazwa-projektu]
- Odpowiedz na pytania o konfiguracje projektu - np o preprocesory CSS

# 3 Tworzenie elementów
- Elementy tworzymy za pomocą polecenia ng generate, np:
  a) ng generate component [przykładowy-folder/nazwa-komponentu] - generowanie komponentu
  b) ng generate service [przykładowy-folder/nazwa-serwisu] - generowanie serwisu (dostarczanie mechanik)
  c) ng generate pipe [przykładowy-folder/nazwa-pipu] - generowanie modyfikatorów wyświetlania danych 
  d) ng generate directive [przykładowy-folder/nazwa-dyrektywy] - generowanie komponentu modyfikujacego mechanikę komponentu
  e) pozostałe elementy - informacja o nich za pomoca polecenia ng g --help

# 4 Skład komponetu
- Plik z mechanika - [nazwa-komponentu].component.ts
- Plik z templatka html - [nazwa-komponentu].component.html
- Plik ze stylami - [nazwa-komponentu].component.[css | scss ..itd]

# 5 Podstawowe mechaniki
- Bindowanie danych od Usera do komponentu -> eventy. Pobieramy je za pomoca składni (nazwa-eventu)="metodaDoObsługiEventu($event)"
- Bindowanie danych od komponentu do Usera:
  a) renderowanie wartości -> {{wartosc_do_wyrenderowania}}
  b) ustawianie atrybutów -> [nazwa-atrybutu]="wartosc-atrybutu"
- Bindowanie dwustrone - [(ng-model)]="nazwa-zmiennej-w-której-synchronizujemy-wartosci"
- przekazywanie wartosci od rodzica do dziecka:
  a) w dziecku ustawnie zmiennej z dekoratorem @Input() np @Input() book!: BookDetails
  b) w html rodzica przekazanie wartosci  -> [nazwa-klucza-u dziecka]="nazwa-klucza-u-rodzica"
- przekazywanie wartosci od dziecka do rodzica:
  a) w dziecku ustawnie zmiennej z dekoratorem @Output() i obiektem typu EventEmiter np @Output() newBookEvent: EventEmiter<Book> = new EventEmiter<Book>()
  b) w html rodzica przekazanie obsługa eventu -> (nazwa-eventu)="metodaObsługujacaEvent($event)" np (newBookEvent)="addNewBook($event)"
  c) w dziecku w odpowiednim momencie wywołanie metody emit na evencie np this.newBookEvent.emit(book)

# 6 Ważne informacje do sprawdzenia jesli coś nie działa
- Wiele mechanik w tym Router, Dyrektywy itd wymagaja zaciągniecia w komponencie który uzywa tych mechanik lub w jego module nadrzędnym Modułów danego typu np RouterModule, commonModule itd
- Wiele elementów globalnych powinno być wstrzykiwane do configuracji aplikacji jako tablica elementów provider, np HTTPClient
