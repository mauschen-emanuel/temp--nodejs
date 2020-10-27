# Node.js

- https://nodejs.org/en/


- 2009
- Ryan Dahl


- V8 von Google
- JavaScript-Compiler, aus Chrome
- Open-Source, C++


- Node.js = V8 + APIs (Async I/O bzw. Non-Blocking I/O)


- Joyent "kauft" Ryan Dahl
  - 0.10 => "0.12 kommt bald"
  - Node.js => io.js 1.0, io.js 2.0, io.js 3.0
  - Node.js 4.0 = io.js 4.0 mit anderem Namen
  - Ryan Dahl hat Node.js im Jahr 2012 verlassen


- Node.js Foundation (Teil der Linux Foundation)
  - April: 8, 10, 12, 14
  - Oktober: 9, 11, 13, 15
  - 12 Monate für Sicherheitsupdates & Co.
  - LTS = Long Term Support => +18 Monate extra
  - Immer im Oktober: Die aktuell gerade Version wird zur LTS
  - Stand Oktober 2020
    - Node.js 15 ist die Current-Version
    - Node.js 14 wird zur LTS-Version


## Installation

- Bloß nicht über den großen, grünen Download-Button!
  - Nur eine Version, die zentral und global im System verankert wird


- nvm
  - https://github.com/nvm-sh/nvm
  - https://github.com/coreybutler/nvm-windows (nvm für Windows)
  - Installiert mehrere Node.js-Versionen side-by-side


- `nvm ls`: Listet Node.js-Versionen auf, die installiert sind
- `nvm use <version>`: Wechselt zwischen installierten Node.js-Versionen
- `nvm install <version>`: Installiert eine angegenene Node.js-Version
- `nvm alias default <version>`: Legt die angegebene Version als Standard fest


## Erste Befehle

- `node --version` zeigt die Versionsnummer von Node.js an
- `node` startet die REPL (Read Evaluation Print Loop)


## Über JavaScript

- LISP, 1958
  - LISt Processing
  - Sehr einfach, aber mächtig

```
; Leere Liste
()

; Datenliste
'(2 3 5 7 11)

; Codeliste
(+ 2 3)

; Listen verschachteln
(* (+ 2 3) 5)

; Code wie Daten als Parameter verwenden
(defvar primes '(2 3 5 7 11))
(apply #'+ primes)
```


## Tools

- `nvm`: Node Version Manager, verwaltet installierte Versionen von Node.js
- `npm`: Node Package Manager, verwaltet Code aus der Community


## npm

- `npm install <module>`: Installiert ein Modul
- `npm install`: Installiert alle Module, die in der `package.json` registriert sind

- `~/.npmrc` => `saveExact=true`


## Semantic Versioning (SemVer)

- x.y.z
  - x: Major
  - y: Minor
  - z: Patch


- 3.14.15
  - Bugfix: Patch wird erhöht (=> 3.14.16)
  - Feature: Minor wird erhöht (=> 3.15.0)
  - Breaking: Major wird erhöht (=> 4.0.0)


## Anwendung

- Setup
  - Node.js-Anwendung mit HTTP-Server
  - Express verwenden (package.json, npm install, ...)

- JSON-Datei, zB `urls.json`
  ```json
  [
    { "source": "s", "target": "https://www.spiegel.de" },
    { "source": "g", "target": "https://www.google.de" }
  ]
  ```

- Route für die `source`-Kürzel
  - `/:source`
    - `req.params.source`
  - Falls Source bekannt
    - HTTP-Statuscode `307`
    - HTTP-Header, `Location: <...>`
  - Falls Source nicht bekannt
    - HTTP-Statuscode `404`


## TypeScript

- JavaScript hat ein dynamisches Typsystem

```javascript
let x = 23;

console.log(typeof x);
// => 'number'

x = 'Hallo';
console.log(typeof x);
// => 'string'
```

- JavaScript muss häufig auf uralt-Browsern laufen
  - `const`, `let`, `() => {}`, …
  - Laufen nicht im IE 11


- Transpiler (übersetzen modernes JavaScript in altes JavaScript)
  - CoffeeScript (Ruby-artiges JavaScript)
  - Babel (von Facebook)


- 2012: Microsoft
  - Neue Sprache
    - Transpiler => 100% kompatibel zu modernem JavaScript
    - Statisches Typsystem
  - TypeScript


- Installation

```shell
$ npm install typescript --save-dev
$ npm install ts-node --save-dev
```

- `npx tsc` führt den TypeScript-Compiler aus
- `npx ts-node` führt Node.js mit TypeScript-Support aus


- `@types`-Module
  - Enthalten Typdefinitionen, damit TypeScript auch mit JavaScript-Modulen interagieren kann
  - zB `@types/express`
  - Nur erforderlich, wenn das Modul selbst keine Typunterstüzung mitbringt
  - Immer so installieren, wie auch das eigentliche Modul installiert wird (`dependencies` vs `devDependencies`)


## Exports

- Named Exports (mit `{}`)
  - mehrfach
  - Wert + Name werden exportiert
  - Import muss den Namen aufgreifen
- Default Exports (mit `default`-Schlüsselwort)
  - einmal
  - Wert exportiert
  - Import kann einen beliebigen Namen frei wählen
- Empfehlung
  - Immer mit Named Exports
  - Gründe
    - Einheitlicher Stil
    - Besseres Refactoring
    - Konsistente Namensverwendung im ganzen Projekt


## Linter

- [JSLint](https://jslint.com/)
  - Von Douglas Crockford
  - Erster Linter, sehr beschränkt, unfreundlich
- [JSHint](https://jshint.com/)
  - Von der Community
  - Umfangreicher, aber monolithisch
- [ESLint](https://eslint.org/)
  - Von Nicholas C. Zakas
  - De-Facto-Standard, Plugin-basiert
- [TSLint](https://palantir.github.io/tslint/)
  - Von Palantir
  - TypeScript-Linter, ähnlich wie ESLint
  - Deprecated => Erweiterung für ESLint

- Kurzfassung: Nehmt ESLint!



## Testen

```
/
  src/
    add.js
    subtract.js
  test/
    unit/
      addTests.js
      subtractTests.js
    integration/
      calculatorTests.js

/
  src/
    calculator/
      add.js
      addTests.js
      subtract.js
      subtractTests.js
    database/
      calculatorDatabase.js
  test/
    calculatorTests.js
```

- Erster Ansatz
  - Implementierung und Tests strikt getrennt
  - Einfach zu packagen, weil man Tests einfach ignorieren kann
  - Logisch zusammengehörige Dateien werden nicht im Dateisystem gemeinsam abgelegt
- Zweiter Ansatz
  - Verbindet Implementierung und Tests
  - Logisch zusammengehörige Dateien gemeinsam im Dateisystem
  - Implementierung und Tests sind durchmischt


- Frameworks
  - Jasmine (kommt ursprünglich aus dem Frontend, war ursprünglich nicht für Node gedacht)
  - Mocha (speziell für Node entwickelt, war lange Jahre der De-Facto-Standard)
  - Jest (würfelt Tests durcheinander, parallelisiert Tests)
  - Ava, …
