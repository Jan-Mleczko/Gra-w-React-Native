# Gra w kości jako aplikacja mobilna React Native

Jan Mleczko, listopad 2025 r. **Zadanie rekrutacyjne na praktyki zawodowe w Software Mansion.**

Aplikacja realizuje wariant klasycznej gry w kości zwanej czasami kościanym pokerem. W tę grę zwykle gra kilku graczy, ale każdy z nich niezależnie od pozostałych zdobywa punkty, a zwycięzcą zostaje gracz, który ostatecznie będzie miał ich najwięcej. Wobec tego gra mogła zostać łatwo zamieniona w jednoosobową grę mobilną, gdzie celem jedynego gracza jest osiągnięcie jak największej liczby punktów.

Gra była testowana na fizycznym smartfonie Huawei Y5 2018 z systemem Android za pomocą aplikacji Expo Go.

## Zdjęcia

![ekran powitalny gry](https://github.com/Jan-Mleczko/Gra-w-React-Native/blob/main/zdjecia/zdj1.jpg?raw=true)

![tura w grze](https://github.com/Jan-Mleczko/Gra-w-React-Native/blob/main/zdjecia/zdj3.jpg?raw=true)

![końcowe podsumowanie rozgrywki](https://github.com/Jan-Mleczko/Gra-w-React-Native/blob/main/zdjecia/zdj4.jpg?raw=true)

## Zasady gry

Cała rozgrywka składa się z 14 tur. Na początku gracz ma 0 punktów, za każdą turę może dostać punkty lub czasami je stracić, a celem gracza jest zakończenie gry z jak najwiekszą liczbą punktów.

Tura rozpoczyna się (wirtualnym) rzutem pięcioma sześciennymi kośćmi do gry. Każdy rzut pięcioma koścmi można rozpatrywać jako jeden z 14 istniejących w grze układów:

- **Jedynki** - za ten układ gracz otrzymuje tyle punktów, ile wynosi suma oczek na kościach, na których wyrzucono 1 odjąć 3, czyli aby nie stracić punktów na tym układzie, trzeba wyrzucić 1 na conajmniej 3 kościach.
- **Dwójki** - za ten układ gracz otrzymuje tyle punktów, ile wynosi suma oczek na kościach, na których wyrzucono 2 odjąć 6, czyli aby nie stracić punktów na tym układzie, trzeba wyrzucić 2 na conajmniej 3 kościach.
- Analogicznie do jedynek i dwójek **trójki**, **czwórki**, **piątki** i **szóstki**.
- **Para** - jeśli na dwóch z kości wypadła taka sama liczba oczek, gracz otrzymuje tyle punktów, ile wynosi suma oczek na tych kościach. Jeśli na wszystkich kościach wypadły różne liczby oczek, gracz otrzymuje zero punktów.
- **Dwie pary** - tak jak para, ale wymagane są dwie pary kości z takimi samymi wyrzuconymi liczbami oczek, a do punktacji doliczana jest suma oczek z wszystkich czterech kości tworzących dwie pary. Jeśli nie ma dwóch par, liczba punktów za ten układ jest równa 0.
- **Trójka** - tak jak para, ale brane są pod uwagę trzy, a nie dwie, kości z takimi samymi liczbami wyrzuconych oczek.
- **Ful** - gracz otrzymuje tyle punktów, ile wynosi suma oczek na wszystkich kościach, ale tylko, jeśli dwie z nich tworzą parę, a pozostałe trójkę.
- **Mały strit** - gracz otrzymuje tyle punktów, ile wynosi suma oczek na wszystkich kościach, ale tylko, jeśli występują wyniki rzutów na pojedynczych kościach równe 1, 2, 3, 4, 5.
- **Duży strit** - gracz otrzymuje tyle punktów, ile wynosi suma oczek na wszystkich kościach, ale tylko, jeśli występują wyniki rzutów na pojedynczych kościach 2, 3, 4, 5, 6.
- **Kareta** - jak para lub trójka, ale brane są pod uwagę cztery, a nie dwie ani trzy, kości z takimi samymi liczbami wyrzuconych oczek.
- **Generał** - jeśli na wszystkich pięciu kościach wypadła taka sama liczba oczek, gracz otrzymuje tyle punktów, ile wynosi suma wyrzuconych oczek na wszystkich kościach dodać 50 punktów. Jeśli ten warunek nie jest spełniony, gracz nie otrzymuje żadnych punktów za turę.

To gracz decyduje, jako który z układów chce rozpatrywać rzut, przy czym wyboru trzeba dokonać po pierwszym rzucie w ramach tury. Potem, w tej samej turze, gracz ma możliwość wykonania jeszcze dwóch rzutów, przed którymi może on zatrzymać wybrane kości, czyli sprawić, żeby pozostały na nich wyniki wcześniejszych rzutów. Ocenie pod względem wybranego układu podlega wynik po wszystkich, co najwyżej trzech, rzutach wykonanych w określonej turze.

Układy oceniane są na korzyść gracza, tzn. np. jeśli gracz chce grać na parę, a na kościach wypadną wyniki 2, 2, 3, 3, 1, liczona jest para trójek, a nie para dwójek, ponieważ da ona graczowi więczej punktów.

Jeśli gracz przyjmie punkty za wybrany układ już po pierwszym rzucie, tzw. układ wyzrucony _z ręki_, rezygnując z kolejnych rzutów, to punkty uzyskane za taką turę są podwajane, o ile są dodatnie.

Przycisk _Rzuć_ służy do rzucenia kośćmi, z wyjatkiem zatrzymanych.

Przycisk _Dalej_ służy do przejścia do następnej tury (bądź zakończenia gry) bez wykonywania żadnego kolejnego rzutu w ramach obecnej tury.

## Instalacja i uruchomienie

W celu uruchomienia gry należy:

1. Mieć zainstalowane Node.js i NPM. Podczas testów stosowana była wersja Node.js 24.11.0 oraz NPM w wersji 11.6.1.
2. Pobrać katalog `GraJM` z tego repozytorium, a następnie wejść do niego w wierszu polecenia.
3. Wydać polecenie `npm install` będąc połączonym z Internetem.
4. Zainstalować na smartfonie z systemem Android aplikację Expo Go.
5. Połączyć ów smartfon razem z naszym komputerem w sieć lokalną.
6. Wydać polecenie `npx expo start`. Po chwili wyświetli się adres URL zaczynający się od `exp://` oraz kod QR.
7. Otworzyć na smartfonie aplikację Expo Go oraz połączyć się z serwerem Expo wybierając w aplikacji Expo Go opcję _Enter URL manually_ i wpisując adres URL o którym była mowa powyżej albo wybierając opcję _Scan QR code_ i skanując kod QR z monitora.

### Rozwiązywanie problemów

Jeśli wyświetli się ekran powitalny aplikacji (taki jak na pierwszym ze zdjęć), ale przyciemni się on i aplikacja nie będzie reagowała na dotknięcia, powinno pomóc wciśnięcie klawisza R w oknie wiersza polecenia z serwerem Expo i poczekanie na ponowne uruchomienie gry. Czynność ta pozwoli także upewnić się, że smartfon ma odpowiednie połączenie z naszym komputerem, ponieważ wciśnięcie R przy braku połączonych smartfonów powoduje wypisanie przez program serwerowy Expo komunikatu informującego o tym.
